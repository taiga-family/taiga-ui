"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const path = require("path");
const cli_1 = require("../cli");
const config_1 = require("../config");
const files_1 = require("../files");
const Opt = require("./");
const opts_1 = require("./opts");
let prog = new cli_1.Program()
    .command('clean', 'removes all downloaded driver files from the out_dir')
    .action(clean)
    .addOption(opts_1.Opts[Opt.OUT_DIR]);
exports.program = prog;
// stand alone runner
let argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'clean-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
else if (argv._[0] === 'clean-help') {
    prog.printHelp();
}
/**
 * Parses the options and cleans the output directory of binaries.
 * @param: options
 */
function clean(options) {
    let outputDir = config_1.Config.getSeleniumDir();
    if (options[Opt.OUT_DIR].getString()) {
        if (path.isAbsolute(options[Opt.OUT_DIR].getString())) {
            outputDir = options[Opt.OUT_DIR].getString();
        }
        else {
            outputDir = path.resolve(config_1.Config.getBaseDir(), options[Opt.OUT_DIR].getString());
        }
    }
    files_1.FileManager.removeExistingFiles(outputDir);
}
//# sourceMappingURL=clean.js.map