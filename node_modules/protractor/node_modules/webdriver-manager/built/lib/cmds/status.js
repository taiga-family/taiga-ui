"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const minimist = require("minimist");
const path = require("path");
const semver = require("semver");
const binaries_1 = require("../binaries");
const chrome_xml_1 = require("../binaries/chrome_xml");
const cli_1 = require("../cli");
const config_1 = require("../config");
const files_1 = require("../files");
const Opt = require("./");
const opts_1 = require("./opts");
let logger = new cli_1.Logger('status');
let prog = new cli_1.Program()
    .command('status', 'list the current available drivers')
    .addOption(opts_1.Opts[Opt.OUT_DIR])
    .action(status);
exports.program = prog;
// stand alone runner
let argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'status-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
else if (argv._[0] === 'status-help') {
    prog.printHelp();
}
/**
 * Parses the options and logs the status of the binaries downloaded.
 * @param options
 */
function status(options) {
    let binaries = files_1.FileManager.setupBinaries();
    let outputDir = config_1.Config.getSeleniumDir();
    if (options[Opt.OUT_DIR].value) {
        if (path.isAbsolute(options[Opt.OUT_DIR].getString())) {
            outputDir = options[Opt.OUT_DIR].getString();
        }
        else {
            outputDir = path.resolve(config_1.Config.getBaseDir(), options[Opt.OUT_DIR].getString());
        }
    }
    try {
        // check if folder exists
        fs.statSync(outputDir).isDirectory();
    }
    catch (e) {
        // if the folder does not exist, quit early.
        logger.warn('the out_dir path ' + outputDir + ' does not exist');
        return;
    }
    // Try to get the update-config.json. This will be used for showing the last binary downloaded.
    let updateConfig = {};
    try {
        updateConfig =
            JSON.parse(fs.readFileSync(path.resolve(outputDir, 'update-config.json')).toString()) || {};
    }
    catch (err) {
        updateConfig = {};
    }
    let downloadedBinaries = files_1.FileManager.downloadedBinaries(outputDir);
    // Log which binaries have been downloaded.
    for (let bin in downloadedBinaries) {
        let downloaded = downloadedBinaries[bin];
        let log = downloaded.name + ' ';
        log += downloaded.versions.length == 1 ? 'version available: ' : 'versions available: ';
        // Get the "last" downloaded binary from the updateConfig.
        let last = null;
        if (downloaded.binary instanceof binaries_1.Appium && updateConfig[binaries_1.Appium.id]) {
            last = updateConfig[binaries_1.Appium.id]['last'];
        }
        else if (downloaded.binary instanceof binaries_1.AndroidSDK && updateConfig[binaries_1.AndroidSDK.id]) {
            last = updateConfig[binaries_1.AndroidSDK.id]['last'];
        }
        else if (downloaded.binary instanceof binaries_1.ChromeDriver && updateConfig[binaries_1.ChromeDriver.id]) {
            last = updateConfig[binaries_1.ChromeDriver.id]['last'];
        }
        else if (downloaded.binary instanceof binaries_1.GeckoDriver && updateConfig[binaries_1.GeckoDriver.id]) {
            last = updateConfig[binaries_1.GeckoDriver.id]['last'];
        }
        else if (downloaded.binary instanceof binaries_1.IEDriver && updateConfig[binaries_1.IEDriver.id]) {
            last = updateConfig[binaries_1.IEDriver.id]['last'];
        }
        else if (downloaded.binary instanceof binaries_1.Standalone && updateConfig[binaries_1.Standalone.id]) {
            last = updateConfig[binaries_1.Standalone.id]['last'];
        }
        // Sort the versions then log them:
        // - last: the last binary downloaded by webdriver-manager per the update-config.json
        downloaded.versions = downloaded.versions.sort((a, b) => {
            if (!semver.valid(a)) {
                a = chrome_xml_1.getValidSemver(a);
                b = chrome_xml_1.getValidSemver(b);
            }
            if (semver.gt(a, b)) {
                return 1;
            }
            else {
                return 0;
            }
        });
        for (let ver in downloaded.versions) {
            let version = downloaded.versions[ver];
            log += version;
            if (last && last.indexOf(version) >= 0) {
                log += ' [last]';
            }
            if (+ver != downloaded.versions.length - 1) {
                log += ', ';
            }
        }
        logger.info(log);
    }
    // for binaries that are available for the operating system, show them here
    for (let bin in binaries) {
        if (downloadedBinaries[bin] == null) {
            logger.info(binaries[bin].name + ' is not present');
        }
    }
}
//# sourceMappingURL=status.js.map