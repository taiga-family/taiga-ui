"use strict";
/**
 * This serves as the main function for starting a test run that has been
 * requested by the launcher.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const configParser_1 = require("./configParser");
const logger_1 = require("./logger");
const runner_1 = require("./runner");
let logger = new logger_1.Logger('runnerCli');
process.on('message', (m) => {
    switch (m.command) {
        case 'run':
            if (!m.capabilities) {
                throw new Error('Run message missing capabilities');
            }
            // Merge in config file options.
            let configParser = new configParser_1.ConfigParser();
            if (m.configFile) {
                configParser.addFileConfig(m.configFile);
            }
            if (m.additionalConfig) {
                configParser.addConfig(m.additionalConfig);
            }
            let config = configParser.getConfig();
            logger_1.Logger.set(config);
            // Grab capabilities to run from launcher.
            config.capabilities = m.capabilities;
            // Get specs to be executed by this runner
            config.specs = m.specs;
            // Launch test run.
            let runner = new runner_1.Runner(config);
            // Pipe events back to the launcher.
            runner.on('testPass', () => {
                process.send({ event: 'testPass' });
            });
            runner.on('testFail', () => {
                process.send({ event: 'testFail' });
            });
            runner.on('testsDone', (results) => {
                process.send({ event: 'testsDone', results: results });
            });
            runner.run()
                .then((exitCode) => {
                process.exit(exitCode);
            })
                .catch((err) => {
                logger.info(err.message);
                process.exit(1);
            });
            break;
        default:
            throw new Error('command ' + m.command + ' is invalid');
    }
});
//# sourceMappingURL=runnerCli.js.map