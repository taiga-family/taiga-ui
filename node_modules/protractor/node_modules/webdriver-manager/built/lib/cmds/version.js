"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const cli_1 = require("../cli");
const config_1 = require("../config");
let logger = new cli_1.Logger('version');
let prog = new cli_1.Program().command('version', 'get the current version').action(getVersion);
exports.program = prog;
// stand alone runner
let argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'version-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
function getVersion() {
    logger.info('webdriver-manager', config_1.Config.getVersion());
}
//# sourceMappingURL=version.js.map