"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const minimist = require("minimist");
const cli_1 = require("../cli");
const Opt = require("./");
const opts_1 = require("./opts");
let logger = new cli_1.Logger('shutdown');
let prog = new cli_1.Program()
    .command('shutdown', 'shut down the selenium server')
    .action(shutdown)
    .addOption(opts_1.Opts[Opt.SELENIUM_PORT])
    .addOption(opts_1.Opts[Opt.ALREADY_OFF_ERROR]);
exports.program = prog;
// stand alone runner
let argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'shutdown-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
else if (argv._[0] === 'shutdown-help') {
    prog.printHelp();
}
/**
 * Parses the options and starts the selenium standalone server.
 * @param options
 */
function shutdown(options) {
    logger.info('Attempting to shut down selenium nicely');
    http.get('http://localhost:' + options[Opt.SELENIUM_PORT].getString() +
        '/selenium-server/driver/?cmd=shutDownSeleniumServer')
        .on('error', (e) => {
        if ((e.code == 'ECONNREFUSED') && (e.syscall == 'connect')) {
            if (!options[Opt.ALREADY_OFF_ERROR].getBoolean()) {
                logger.warn('Server does not appear to be on');
            }
            else {
                logger.error('Server unreachable, probably not running');
                throw e;
            }
        }
        else {
            throw e;
        }
    });
}
//# sourceMappingURL=shutdown.js.map