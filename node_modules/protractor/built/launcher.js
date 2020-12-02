"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The launcher is responsible for parsing the capabilities from the
 * input configuration and launching test runners.
 */
const fs = require("fs");
const q = require("q");
const configParser_1 = require("./configParser");
const exitCodes_1 = require("./exitCodes");
const logger_1 = require("./logger");
const runner_1 = require("./runner");
const taskRunner_1 = require("./taskRunner");
const taskScheduler_1 = require("./taskScheduler");
const helper = require("./util");
let logger = new logger_1.Logger('launcher');
let RUNNERS_FAILED_EXIT_CODE = 100;
/**
 * Keeps track of a list of task results. Provides method to add a new
 * result, aggregate the results into a summary, count failures,
 * and save results into a JSON file.
 */
class TaskResults {
    constructor() {
        // TODO: set a type for result
        this.results_ = [];
    }
    add(result) {
        this.results_.push(result);
    }
    totalSpecFailures() {
        return this.results_.reduce((specFailures, result) => {
            return specFailures + result.failedCount;
        }, 0);
    }
    totalProcessFailures() {
        return this.results_.reduce((processFailures, result) => {
            return !result.failedCount && result.exitCode !== 0 ? processFailures + 1 : processFailures;
        }, 0);
    }
    saveResults(filepath) {
        let jsonOutput = this.results_.reduce((jsonOutput, result) => {
            return jsonOutput.concat(result.specResults);
        }, []);
        let json = JSON.stringify(jsonOutput, null, '  ');
        fs.writeFileSync(filepath, json);
    }
    reportSummary() {
        let specFailures = this.totalSpecFailures();
        let processFailures = this.totalProcessFailures();
        this.results_.forEach((result) => {
            let capabilities = result.capabilities;
            let shortName = (capabilities.browserName) ? capabilities.browserName : '';
            shortName = (capabilities.logName) ?
                capabilities.logName :
                (capabilities.browserName) ? capabilities.browserName : '';
            shortName += (capabilities.version) ? capabilities.version : '';
            shortName += (capabilities.logName && capabilities.count < 2) ? '' : ' #' + result.taskId;
            if (result.failedCount) {
                logger.info(shortName + ' failed ' + result.failedCount + ' test(s)');
            }
            else if (result.exitCode !== 0) {
                logger.info(shortName + ' failed with exit code: ' + result.exitCode);
            }
            else {
                logger.info(shortName + ' passed');
            }
        });
        if (specFailures && processFailures) {
            logger.info('overall: ' + specFailures + ' failed spec(s) and ' + processFailures +
                ' process(es) failed to complete');
        }
        else if (specFailures) {
            logger.info('overall: ' + specFailures + ' failed spec(s)');
        }
        else if (processFailures) {
            logger.info('overall: ' + processFailures + ' process(es) failed to complete');
        }
    }
}
let taskResults_ = new TaskResults();
/**
 * Initialize and run the tests.
 * Exits with 1 on test failure, and RUNNERS_FAILED_EXIT_CODE on unexpected
 * failures.
 *
 * @param {string=} configFile
 * @param {Object=} additionalConfig
 */
let initFn = function (configFile, additionalConfig) {
    let configParser = new configParser_1.ConfigParser();
    if (configFile) {
        configParser.addFileConfig(configFile);
    }
    if (additionalConfig) {
        configParser.addConfig(additionalConfig);
    }
    let config = configParser.getConfig();
    logger_1.Logger.set(config);
    logger.debug('Running with --troubleshoot');
    logger.debug('Protractor version: ' + require('../package.json').version);
    logger.debug('Your base url for tests is ' + config.baseUrl);
    // Run beforeLaunch
    helper.runFilenameOrFn_(config.configDir, config.beforeLaunch)
        .then(() => {
        return q
            .Promise((resolve, reject) => {
            // 1) If getMultiCapabilities is set, resolve that as
            // `multiCapabilities`.
            if (config.getMultiCapabilities &&
                typeof config.getMultiCapabilities === 'function') {
                if (config.multiCapabilities.length || config.capabilities) {
                    logger.warn('getMultiCapabilities() will override both capabilities ' +
                        'and multiCapabilities');
                }
                // If getMultiCapabilities is defined and a function, use this.
                q(config.getMultiCapabilities())
                    .then((multiCapabilities) => {
                    config.multiCapabilities = multiCapabilities;
                    config.capabilities = null;
                })
                    .then(() => {
                    resolve();
                })
                    .catch(err => {
                    reject(err);
                });
            }
            else {
                resolve();
            }
        })
            .then(() => {
            // 2) Set `multicapabilities` using `capabilities`,
            // `multicapabilities`,
            // or default
            if (config.capabilities) {
                if (config.multiCapabilities.length) {
                    logger.warn('You have specified both capabilities and ' +
                        'multiCapabilities. This will result in capabilities being ' +
                        'ignored');
                }
                else {
                    // Use capabilities if multiCapabilities is empty.
                    config.multiCapabilities = [config.capabilities];
                }
            }
            else if (!config.multiCapabilities.length) {
                // Default to chrome if no capabilities given
                config.multiCapabilities = [{ browserName: 'chrome' }];
            }
        });
    })
        .then(() => {
        // 3) If we're in `elementExplorer` mode, run only that.
        if (config.elementExplorer || config.framework === 'explorer') {
            if (config.multiCapabilities.length != 1) {
                throw new Error('Must specify only 1 browser while using elementExplorer');
            }
            else {
                config.capabilities = config.multiCapabilities[0];
            }
            config.framework = 'explorer';
            let runner = new runner_1.Runner(config);
            return runner.run().then((exitCode) => {
                process.exit(exitCode);
            }, (err) => {
                logger.error(err);
                process.exit(1);
            });
        }
    })
        .then(() => {
        // 4) Run tests.
        let scheduler = new taskScheduler_1.TaskScheduler(config);
        process.on('uncaughtException', (exc) => {
            let e = (exc instanceof Error) ? exc : new Error(exc);
            if (config.ignoreUncaughtExceptions) {
                // This can be a sign of a bug in the test framework, that it may
                // not be handling WebDriver errors properly. However, we don't
                // want these errors to prevent running the tests.
                logger.warn('Ignoring uncaught error ' + exc);
                return;
            }
            let errorCode = exitCodes_1.ErrorHandler.parseError(e);
            if (errorCode) {
                let protractorError = e;
                exitCodes_1.ProtractorError.log(logger, errorCode, protractorError.message, protractorError.stack);
                process.exit(errorCode);
            }
            else {
                logger.error(e.message);
                logger.error(e.stack);
                process.exit(exitCodes_1.ProtractorError.CODE);
            }
        });
        process.on('exit', (code) => {
            if (code) {
                logger.error('Process exited with error code ' + code);
            }
            else if (scheduler.numTasksOutstanding() > 0) {
                logger.error('BUG: launcher exited with ' + scheduler.numTasksOutstanding() +
                    ' tasks remaining');
                process.exit(RUNNERS_FAILED_EXIT_CODE);
            }
        });
        // Run afterlaunch and exit
        let cleanUpAndExit = (exitCode) => {
            return helper.runFilenameOrFn_(config.configDir, config.afterLaunch, [exitCode])
                .then((returned) => {
                if (typeof returned === 'number') {
                    process.exit(returned);
                }
                else {
                    process.exit(exitCode);
                }
            }, (err) => {
                logger.error('Error:', err);
                process.exit(1);
            });
        };
        let totalTasks = scheduler.numTasksOutstanding();
        let forkProcess = false;
        if (totalTasks > 1) {
            forkProcess = true;
            if (config.debug) {
                throw new exitCodes_1.ConfigError(logger, 'Cannot run in debug mode with multiCapabilities, count > 1, or sharding');
            }
        }
        let deferred = q.defer(); // Resolved when all tasks are completed
        let createNextTaskRunner = () => {
            let task = scheduler.nextTask();
            if (task) {
                let taskRunner = new taskRunner_1.TaskRunner(configFile, additionalConfig, task, forkProcess);
                taskRunner.run()
                    .then((result) => {
                    if (result.exitCode && !result.failedCount) {
                        logger.error('Runner process exited unexpectedly with error code: ' + result.exitCode);
                    }
                    taskResults_.add(result);
                    task.done();
                    createNextTaskRunner();
                    // If all tasks are finished
                    if (scheduler.numTasksOutstanding() === 0) {
                        deferred.resolve();
                    }
                    logger.info(scheduler.countActiveTasks() + ' instance(s) of WebDriver still running');
                })
                    .catch((err) => {
                    logger.error('Error:', err.stack || err.message || err);
                    cleanUpAndExit(RUNNERS_FAILED_EXIT_CODE);
                });
            }
        };
        // Start `scheduler.maxConcurrentTasks()` workers for handling tasks in
        // the beginning. As a worker finishes a task, it will pick up the next
        // task
        // from the scheduler's queue until all tasks are gone.
        for (let i = 0; i < scheduler.maxConcurrentTasks(); ++i) {
            createNextTaskRunner();
        }
        logger.info('Running ' + scheduler.countActiveTasks() + ' instances of WebDriver');
        // By now all runners have completed.
        deferred.promise
            .then(function () {
            // Save results if desired
            if (config.resultJsonOutputFile) {
                taskResults_.saveResults(config.resultJsonOutputFile);
            }
            taskResults_.reportSummary();
            let exitCode = 0;
            if (taskResults_.totalProcessFailures() > 0) {
                exitCode = RUNNERS_FAILED_EXIT_CODE;
            }
            else if (taskResults_.totalSpecFailures() > 0) {
                exitCode = 1;
            }
            return cleanUpAndExit(exitCode);
        })
            .done();
    })
        .done();
};
exports.init = initFn;
//# sourceMappingURL=launcher.js.map