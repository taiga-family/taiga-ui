"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const util = require("util");
const browser_1 = require("./browser");
const driverProviders_1 = require("./driverProviders");
const logger_1 = require("./logger");
const plugins_1 = require("./plugins");
const ptor_1 = require("./ptor");
const helper = require("./util");
let logger = new logger_1.Logger('runner');
/*
 * Runner is responsible for starting the execution of a test run and triggering
 * setup, teardown, managing config, etc through its various dependencies.
 *
 * The Protractor Runner is a node EventEmitter with the following events:
 * - testPass
 * - testFail
 * - testsDone
 *
 * @param {Object} config
 * @constructor
 */
class Runner extends events_1.EventEmitter {
    constructor(config) {
        super();
        /**
         * Responsible for cleaning up test run and exiting the process.
         * @private
         * @param {int} Standard unix exit code
         */
        this.exit_ = function (exitCode) {
            return helper.runFilenameOrFn_(this.config_.configDir, this.config_.onCleanUp, [exitCode])
                .then((returned) => {
                if (typeof returned === 'number') {
                    return returned;
                }
                else {
                    return exitCode;
                }
            });
        };
        this.config_ = config;
        if (config.v8Debug) {
            // Call this private function instead of sending SIGUSR1 because Windows.
            process['_debugProcess'](process.pid);
        }
        if (config.nodeDebug) {
            process['_debugProcess'](process.pid);
            let flow = selenium_webdriver_1.promise.controlFlow();
            this.ready_ = flow.execute(() => {
                let nodedebug = require('child_process').fork('debug', ['localhost:5858']);
                process.on('exit', function () {
                    nodedebug.kill('SIGTERM');
                });
                nodedebug.on('exit', function () {
                    process.exit(1);
                });
            }, 'start the node debugger').then(() => {
                return flow.timeout(1000, 'waiting for debugger to attach');
            });
        }
        if (config.capabilities && config.capabilities.seleniumAddress) {
            config.seleniumAddress = config.capabilities.seleniumAddress;
        }
        this.loadDriverProvider_(config);
        this.setTestPreparer(config.onPrepare);
    }
    /**
     * Registrar for testPreparers - executed right before tests run.
     * @public
     * @param {string/Fn} filenameOrFn
     */
    setTestPreparer(filenameOrFn) {
        this.preparer_ = filenameOrFn;
    }
    /**
     * Executor of testPreparer
     * @public
     * @param {string[]=} An optional list of command line arguments the framework will accept.
     * @return {q.Promise} A promise that will resolve when the test preparers
     *     are finished.
     */
    runTestPreparer(extraFlags) {
        let unknownFlags = this.config_.unknownFlags_ || [];
        if (extraFlags) {
            unknownFlags = unknownFlags.filter((f) => extraFlags.indexOf(f) === -1);
        }
        if (unknownFlags.length > 0 && !this.config_.disableChecks) {
            // TODO: Make this throw a ConfigError in Protractor 6.
            logger.warn('Ignoring unknown extra flags: ' + unknownFlags.join(', ') + '. This will be' +
                ' an error in future versions, please use --disableChecks flag to disable the ' +
                ' Protractor CLI flag checks. ');
        }
        return this.plugins_.onPrepare().then(() => {
            return helper.runFilenameOrFn_(this.config_.configDir, this.preparer_);
        });
    }
    /**
     * Called after each test finishes.
     *
     * Responsible for `restartBrowserBetweenTests`
     *
     * @public
     * @return {q.Promise} A promise that will resolve when the work here is done
     */
    afterEach() {
        let ret;
        this.frameworkUsesAfterEach = true;
        if (this.config_.restartBrowserBetweenTests) {
            this.restartPromise = this.restartPromise || q(ptor_1.protractor.browser.restart());
            ret = this.restartPromise;
            this.restartPromise = undefined;
        }
        return ret || q();
    }
    /**
     * Grab driver provider based on type
     * @private
     *
     * Priority
     * 1) if directConnect is true, use that
     * 2) if seleniumAddress is given, use that
     * 3) if a Sauce Labs account is given, use that
     * 4) if a seleniumServerJar is specified, use that
     * 5) try to find the seleniumServerJar in protractor/selenium
     */
    loadDriverProvider_(config) {
        this.config_ = config;
        this.driverprovider_ = driverProviders_1.buildDriverProvider(this.config_);
    }
    /**
     * Getter for the Runner config object
     * @public
     * @return {Object} config
     */
    getConfig() {
        return this.config_;
    }
    /**
     * Get the control flow used by this runner.
     * @return {Object} WebDriver control flow.
     */
    controlFlow() {
        return selenium_webdriver_1.promise.controlFlow();
    }
    /**
     * Sets up convenience globals for test specs
     * @private
     */
    setupGlobals_(browser_) {
        // Keep $, $$, element, and by/By under the global protractor namespace
        ptor_1.protractor.browser = browser_;
        ptor_1.protractor.$ = browser_.$;
        ptor_1.protractor.$$ = browser_.$$;
        ptor_1.protractor.element = browser_.element;
        ptor_1.protractor.by = ptor_1.protractor.By = browser_1.ProtractorBrowser.By;
        ptor_1.protractor.ExpectedConditions = browser_.ExpectedConditions;
        if (!this.config_.noGlobals) {
            // Export protractor to the global namespace to be used in tests.
            global.browser = browser_;
            global.$ = browser_.$;
            global.$$ = browser_.$$;
            global.element = browser_.element;
            global.by = global.By = ptor_1.protractor.By;
            global.ExpectedConditions = ptor_1.protractor.ExpectedConditions;
        }
        global.protractor = ptor_1.protractor;
        if (!this.config_.skipSourceMapSupport) {
            // Enable sourcemap support for stack traces.
            require('source-map-support').install();
        }
        // Required by dart2js machinery.
        // https://code.google.com/p/dart/source/browse/branches/bleeding_edge/dart/sdk/lib/js/dart2js/js_dart2js.dart?spec=svn32943&r=32943#487
        global.DartObject = function (o) {
            this.o = o;
        };
    }
    /**
     * Create a new driver from a driverProvider. Then set up a
     * new protractor instance using this driver.
     * This is used to set up the initial protractor instances and any
     * future ones.
     *
     * @param {Plugin} plugins The plugin functions
     * @param {ProtractorBrowser=} parentBrowser The browser which spawned this one
     *
     * @return {Protractor} a protractor instance.
     * @public
     */
    createBrowser(plugins, parentBrowser) {
        let config = this.config_;
        let driver = this.driverprovider_.getNewDriver();
        let blockingProxyUrl;
        if (config.useBlockingProxy) {
            blockingProxyUrl = this.driverprovider_.getBPUrl();
        }
        let initProperties = {
            baseUrl: config.baseUrl,
            rootElement: config.rootElement,
            untrackOutstandingTimeouts: config.untrackOutstandingTimeouts,
            params: config.params,
            getPageTimeout: config.getPageTimeout,
            allScriptsTimeout: config.allScriptsTimeout,
            debuggerServerPort: config.debuggerServerPort,
            ng12Hybrid: config.ng12Hybrid,
            waitForAngularEnabled: true
        };
        if (parentBrowser) {
            initProperties.baseUrl = parentBrowser.baseUrl;
            initProperties.rootElement = parentBrowser.angularAppRoot();
            initProperties.untrackOutstandingTimeouts = !parentBrowser.trackOutstandingTimeouts_;
            initProperties.params = parentBrowser.params;
            initProperties.getPageTimeout = parentBrowser.getPageTimeout;
            initProperties.allScriptsTimeout = parentBrowser.allScriptsTimeout;
            initProperties.debuggerServerPort = parentBrowser.debuggerServerPort;
            initProperties.ng12Hybrid = parentBrowser.ng12Hybrid;
            initProperties.waitForAngularEnabled = parentBrowser.waitForAngularEnabled();
        }
        let browser_ = new browser_1.ProtractorBrowser(driver, initProperties.baseUrl, initProperties.rootElement, initProperties.untrackOutstandingTimeouts, blockingProxyUrl);
        browser_.params = initProperties.params;
        browser_.plugins_ = plugins || new plugins_1.Plugins({});
        if (initProperties.getPageTimeout) {
            browser_.getPageTimeout = initProperties.getPageTimeout;
        }
        if (initProperties.allScriptsTimeout) {
            browser_.allScriptsTimeout = initProperties.allScriptsTimeout;
        }
        if (initProperties.debuggerServerPort) {
            browser_.debuggerServerPort = initProperties.debuggerServerPort;
        }
        if (initProperties.ng12Hybrid) {
            browser_.ng12Hybrid = initProperties.ng12Hybrid;
        }
        browser_.ready =
            browser_.ready
                .then(() => {
                return browser_.waitForAngularEnabled(initProperties.waitForAngularEnabled);
            })
                .then(() => {
                return driver.manage().timeouts().setScriptTimeout(initProperties.allScriptsTimeout || 0);
            })
                .then(() => {
                return browser_;
            });
        browser_.getProcessedConfig = () => {
            return selenium_webdriver_1.promise.when(config);
        };
        browser_.forkNewDriverInstance =
            (useSameUrl, copyMockModules, copyConfigUpdates = true) => {
                let newBrowser = this.createBrowser(plugins);
                if (copyMockModules) {
                    newBrowser.mockModules_ = browser_.mockModules_;
                }
                if (useSameUrl) {
                    newBrowser.ready = newBrowser.ready
                        .then(() => {
                        return browser_.driver.getCurrentUrl();
                    })
                        .then((url) => {
                        return newBrowser.get(url);
                    })
                        .then(() => {
                        return newBrowser;
                    });
                }
                return newBrowser;
            };
        let replaceBrowser = () => {
            let newBrowser = browser_.forkNewDriverInstance(false, true);
            if (browser_ === ptor_1.protractor.browser) {
                this.setupGlobals_(newBrowser);
            }
            return newBrowser;
        };
        browser_.restart = () => {
            // Note: because tests are not paused at this point, any async
            // calls here are not guaranteed to complete before the tests resume.
            // Seperate solutions depending on if the control flow is enabled (see lib/browser.ts)
            if (browser_.controlFlowIsEnabled()) {
                return browser_.restartSync().ready;
            }
            else {
                return this.driverprovider_.quitDriver(browser_.driver)
                    .then(replaceBrowser)
                    .then(newBrowser => newBrowser.ready);
            }
        };
        browser_.restartSync = () => {
            if (!browser_.controlFlowIsEnabled()) {
                throw TypeError('Unable to use `browser.restartSync()` when the control flow is disabled');
            }
            this.driverprovider_.quitDriver(browser_.driver);
            return replaceBrowser();
        };
        return browser_;
    }
    /**
     * Final cleanup on exiting the runner.
     *
     * @return {q.Promise} A promise which resolves on finish.
     * @private
     */
    shutdown_() {
        return driverProviders_1.DriverProvider.quitDrivers(this.driverprovider_, this.driverprovider_.getExistingDrivers());
    }
    /**
     * The primary workhorse interface. Kicks off the test running process.
     *
     * @return {q.Promise} A promise which resolves to the exit code of the tests.
     * @public
     */
    run() {
        let testPassed;
        let plugins = this.plugins_ = new plugins_1.Plugins(this.config_);
        let pluginPostTestPromises;
        let browser_;
        let results;
        if (this.config_.framework !== 'explorer' && !this.config_.specs.length) {
            throw new Error('Spec patterns did not match any files.');
        }
        if (this.config_.SELENIUM_PROMISE_MANAGER != null) {
            selenium_webdriver_1.promise.USE_PROMISE_MANAGER = this.config_.SELENIUM_PROMISE_MANAGER;
        }
        if (this.config_.webDriverLogDir || this.config_.highlightDelay) {
            this.config_.useBlockingProxy = true;
        }
        // 0) Wait for debugger
        return q(this.ready_)
            .then(() => {
            // 1) Setup environment
            // noinspection JSValidateTypes
            return this.driverprovider_.setupEnv();
        })
            .then(() => {
            // 2) Create a browser and setup globals
            browser_ = this.createBrowser(plugins);
            this.setupGlobals_(browser_);
            return browser_.ready.then(browser_.getSession)
                .then((session) => {
                logger.debug('WebDriver session successfully started with capabilities ' +
                    util.inspect(session.getCapabilities()));
            }, (err) => {
                logger.error('Unable to start a WebDriver session.');
                throw err;
            });
            // 3) Setup plugins
        })
            .then(() => {
            return plugins.setup();
            // 4) Execute test cases
        })
            .then(() => {
            // Do the framework setup here so that jasmine and mocha globals are
            // available to the onPrepare function.
            let frameworkPath = '';
            if (this.config_.framework === 'jasmine' || this.config_.framework === 'jasmine2') {
                frameworkPath = './frameworks/jasmine.js';
            }
            else if (this.config_.framework === 'mocha') {
                frameworkPath = './frameworks/mocha.js';
            }
            else if (this.config_.framework === 'debugprint') {
                // Private framework. Do not use.
                frameworkPath = './frameworks/debugprint.js';
            }
            else if (this.config_.framework === 'explorer') {
                // Private framework. Do not use.
                frameworkPath = './frameworks/explorer.js';
            }
            else if (this.config_.framework === 'custom') {
                if (!this.config_.frameworkPath) {
                    throw new Error('When config.framework is custom, ' +
                        'config.frameworkPath is required.');
                }
                frameworkPath = this.config_.frameworkPath;
            }
            else {
                throw new Error('config.framework (' + this.config_.framework + ') is not a valid framework.');
            }
            if (this.config_.restartBrowserBetweenTests) {
                // TODO(sjelin): replace with warnings once `afterEach` support is required
                let restartDriver = () => {
                    if (!this.frameworkUsesAfterEach) {
                        this.restartPromise = q(browser_.restart());
                    }
                };
                this.on('testPass', restartDriver);
                this.on('testFail', restartDriver);
            }
            // We need to save these promises to make sure they're run, but we
            // don't
            // want to delay starting the next test (because we can't, it's just
            // an event emitter).
            pluginPostTestPromises = [];
            this.on('testPass', (testInfo) => {
                pluginPostTestPromises.push(plugins.postTest(true, testInfo));
            });
            this.on('testFail', (testInfo) => {
                pluginPostTestPromises.push(plugins.postTest(false, testInfo));
            });
            logger.debug('Running with spec files ' + this.config_.specs);
            return require(frameworkPath).run(this, this.config_.specs);
            // 5) Wait for postTest plugins to finish
        })
            .then((testResults) => {
            results = testResults;
            return q.all(pluginPostTestPromises);
            // 6) Teardown plugins
        })
            .then(() => {
            return plugins.teardown();
            // 7) Teardown
        })
            .then(() => {
            results = helper.joinTestLogs(results, plugins.getResults());
            this.emit('testsDone', results);
            testPassed = results.failedCount === 0;
            if (this.driverprovider_.updateJob) {
                return this.driverprovider_.updateJob({ 'passed': testPassed }).then(() => {
                    return this.driverprovider_.teardownEnv();
                });
            }
            else {
                return this.driverprovider_.teardownEnv();
            }
            // 8) Let plugins do final cleanup
        })
            .then(() => {
            return plugins.postResults();
            // 9) Exit process
        })
            .then(() => {
            let exitCode = testPassed ? 0 : 1;
            return this.exit_(exitCode);
        })
            .fin(() => {
            return this.shutdown_();
        });
    }
}
exports.Runner = Runner;
//# sourceMappingURL=runner.js.map