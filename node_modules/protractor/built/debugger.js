"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const selenium_webdriver_1 = require("selenium-webdriver");
const util = require("util");
const logger_1 = require("./logger");
let breakpointHook = require('./breakpointhook.js');
let logger = new logger_1.Logger('protractor');
class DebugHelper {
    constructor(browserUnderDebug_) {
        this.browserUnderDebug_ = browserUnderDebug_;
    }
    initBlocking(debuggerClientPath, onStartFn, opt_debugPort) {
        this.init_(debuggerClientPath, true, onStartFn, opt_debugPort);
    }
    init(debuggerClientPath, onStartFn, opt_debugPort) {
        this.init_(debuggerClientPath, false, onStartFn, opt_debugPort);
    }
    /**
     *  1) Set up helper functions for debugger clients to call on (e.g.
     *     execute code, get autocompletion).
     *  2) Enter process into debugger mode. (i.e. process._debugProcess).
     *  3) Invoke the debugger client specified by debuggerClientPath.
     *
     * @param {string} debuggerClientPath Absolute path of debugger client to use.
     * @param {boolean} blockUntilExit Whether to block the flow until process exit or resume
     *     immediately.
     * @param {Function} onStartFn Function to call when the debugger starts. The
     *     function takes a single parameter, which represents whether this is the
     *     first time that the debugger is called.
     * @param {number=} opt_debugPort Optional port to use for the debugging
     *     process.
     *
     * @return {Promise} If blockUntilExit, a promise resolved when the debugger process
     *     exits. Otherwise, resolved when the debugger process is ready to begin.
     */
    init_(debuggerClientPath, blockUntilExit, onStartFn, opt_debugPort) {
        const vm_ = require('vm');
        let flow = selenium_webdriver_1.promise.controlFlow();
        let context = { require: require };
        global.list = (locator) => {
            return global.protractor.browser.findElements(locator).then((arr) => {
                let found = [];
                for (let i = 0; i < arr.length; ++i) {
                    arr[i].getText().then((text) => {
                        found.push(text);
                    });
                }
                return found;
            });
        };
        for (let key in global) {
            context[key] = global[key];
        }
        let sandbox = vm_.createContext(context);
        let debuggingDone = selenium_webdriver_1.promise.defer();
        // We run one flow.execute block for the debugging session. All
        // subcommands should be scheduled under this task.
        let executePromise = flow.execute(() => {
            process['debugPort'] = opt_debugPort || process['debugPort'];
            this.validatePortAvailability_(process['debugPort']).then((firstTime) => {
                onStartFn(firstTime);
                let args = [process.pid, process['debugPort']];
                if (this.browserUnderDebug_.debuggerServerPort) {
                    args.push(this.browserUnderDebug_.debuggerServerPort);
                }
                let nodedebug = require('child_process').fork(debuggerClientPath, args);
                process.on('exit', function () {
                    nodedebug.kill('SIGTERM');
                });
                nodedebug
                    .on('message', (m) => {
                    if (m === 'ready') {
                        breakpointHook();
                        if (!blockUntilExit) {
                            debuggingDone.fulfill();
                        }
                    }
                })
                    .on('exit', () => {
                    // Clear this so that we know it's ok to attach a debugger
                    // again.
                    this.dbgCodeExecutor = null;
                    debuggingDone.fulfill();
                });
            });
            return debuggingDone.promise;
        }, 'debugging tasks');
        // Helper used only by debuggers at './debugger/modes/*.js' to insert code
        // into the control flow, via debugger 'evaluate' protocol.
        // In order to achieve this, we maintain a task at the top of the control
        // flow, so that we can insert frames into it.
        // To be able to simulate callback/asynchronous code, we poll this object
        // whenever `breakpointHook` is called.
        this.dbgCodeExecutor = {
            execPromise_: undefined,
            execPromiseResult_: undefined,
            execPromiseError_: undefined,
            // A dummy repl server to make use of its completion function.
            replServer_: require('repl').start({
                input: { on: function () { }, resume: function () { } },
                // dummy readable stream
                output: { write: function () { } },
                useGlobal: true
            }),
            // Execute a function, which could yield a value or a promise,
            // and allow its result to be accessed synchronously
            execute_: function (execFn_) {
                this.execPromiseResult_ = this.execPromiseError_ = undefined;
                this.execPromise_ = execFn_();
                // Note: This needs to be added after setting execPromise to execFn,
                // or else we cause this.execPromise_ to get stuck in pending mode
                // at our next breakpoint.
                this.execPromise_.then((result) => {
                    this.execPromiseResult_ = result;
                    breakpointHook();
                }, (err) => {
                    this.execPromiseError_ = err;
                    breakpointHook();
                });
            },
            // Execute a piece of code.
            // Result is a string representation of the evaluation.
            execute: function (code) {
                let execFn_ = () => {
                    // Run code through vm so that we can maintain a local scope which is
                    // isolated from the rest of the execution.
                    let res;
                    try {
                        res = vm_.runInContext(code, sandbox);
                    }
                    catch (e) {
                        res = selenium_webdriver_1.promise.when('Error while evaluating command: ' + e);
                    }
                    if (!selenium_webdriver_1.promise.isPromise(res)) {
                        res = selenium_webdriver_1.promise.when(res);
                    }
                    return res.then((res) => {
                        if (res === undefined) {
                            return undefined;
                        }
                        else {
                            // The '' forces res to be expanded into a string instead of just
                            // '[Object]'. Then we remove the extra space caused by the ''
                            // using substring.
                            return util.format.apply(this, ['', res]).substring(1);
                        }
                    });
                };
                this.execute_(execFn_);
            },
            // Autocomplete for a line.
            // Result is a JSON representation of the autocomplete response.
            complete: function (line) {
                let execFn_ = () => {
                    let deferred = selenium_webdriver_1.promise.defer();
                    this.replServer_.complete(line, (err, res) => {
                        if (err) {
                            deferred.reject(err);
                        }
                        else {
                            deferred.fulfill(JSON.stringify(res));
                        }
                    });
                    return deferred.promise;
                };
                this.execute_(execFn_);
            },
            // Code finished executing.
            resultReady: function () {
                return !(this.execPromise_.state_ === 'pending');
            },
            // Get asynchronous results synchronously.
            // This will throw if result is not ready.
            getResult: function () {
                if (!this.resultReady()) {
                    throw new Error('Result not ready');
                }
                if (this.execPromiseError_) {
                    throw this.execPromiseError_;
                }
                return this.execPromiseResult_;
            }
        };
        return executePromise;
    }
    /**
     * Validates that the port is free to use. This will only validate the first
     * time it is called. The reason is that on subsequent calls, the port will
     * already be bound to the debugger, so it will not be available, but that is
     * okay.
     *
     * @returns {Promise<boolean>} A promise that becomes ready when the
     * validation
     *     is done. The promise will resolve to a boolean which represents whether
     *     this is the first time that the debugger is called.
     */
    validatePortAvailability_(port) {
        if (this.debuggerValidated_) {
            return selenium_webdriver_1.promise.when(false);
        }
        let doneDeferred = selenium_webdriver_1.promise.defer();
        // Resolve doneDeferred if port is available.
        let tester = net.connect({ port: port }, () => {
            doneDeferred.reject('Port ' + port + ' is already in use. Please specify ' +
                'another port to debug.');
        });
        tester.once('error', (err) => {
            if (err.code === 'ECONNREFUSED') {
                tester
                    .once('close', () => {
                    doneDeferred.fulfill(true);
                })
                    .end();
            }
            else {
                doneDeferred.reject('Unexpected failure testing for port ' + port + ': ' + JSON.stringify(err));
            }
        });
        return doneDeferred.promise.then((firstTime) => {
            this.debuggerValidated_ = true;
            return firstTime;
        }, (err) => {
            console.error(err);
            return process.exit(1);
        });
    }
    isAttached() {
        return !!this.dbgCodeExecutor;
    }
}
exports.DebugHelper = DebugHelper;
//# sourceMappingURL=debugger.js.map