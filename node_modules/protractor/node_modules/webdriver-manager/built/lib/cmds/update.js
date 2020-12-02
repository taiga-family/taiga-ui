"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdmZip = require("adm-zip");
const child_process = require("child_process");
const fs = require("fs");
const minimist = require("minimist");
const path = require("path");
const q = require("q");
const rimraf = require("rimraf");
const binaries_1 = require("../binaries");
const cli_1 = require("../cli");
const config_1 = require("../config");
const files_1 = require("../files");
const http_utils_1 = require("../http_utils");
const utils_1 = require("../utils");
const Opt = require("./");
const initialize_1 = require("./initialize");
const opts_1 = require("./opts");
config_1.Config.runCommand = 'update';
let logger = new cli_1.Logger('update');
let prog = new cli_1.Program()
    .command('update', 'install or update selected binaries')
    .action(update)
    .addOption(opts_1.Opts[Opt.OUT_DIR])
    .addOption(opts_1.Opts[Opt.VERBOSE])
    .addOption(opts_1.Opts[Opt.IGNORE_SSL])
    .addOption(opts_1.Opts[Opt.PROXY])
    .addOption(opts_1.Opts[Opt.ALTERNATE_CDN])
    .addOption(opts_1.Opts[Opt.STANDALONE])
    .addOption(opts_1.Opts[Opt.CHROME])
    .addOption(opts_1.Opts[Opt.GECKO])
    .addOption(opts_1.Opts[Opt.ANDROID])
    .addOption(opts_1.Opts[Opt.ANDROID_API_LEVELS])
    .addOption(opts_1.Opts[Opt.ANDROID_ARCHITECTURES])
    .addOption(opts_1.Opts[Opt.ANDROID_PLATFORMS])
    .addOption(opts_1.Opts[Opt.ANDROID_ACCEPT_LICENSES]);
if (config_1.Config.osType() === 'Darwin') {
    prog.addOption(opts_1.Opts[Opt.IOS]);
}
if (config_1.Config.osType() === 'Windows_NT') {
    prog.addOption(opts_1.Opts[Opt.IE]).addOption(opts_1.Opts[Opt.IE32]).addOption(opts_1.Opts[Opt.IE64]);
}
prog.addOption(opts_1.Opts[Opt.VERSIONS_STANDALONE])
    .addOption(opts_1.Opts[Opt.VERSIONS_CHROME])
    .addOption(opts_1.Opts[Opt.VERSIONS_APPIUM])
    .addOption(opts_1.Opts[Opt.VERSIONS_ANDROID])
    .addOption(opts_1.Opts[Opt.VERSIONS_GECKO]);
if (config_1.Config.osType() === 'Windows_NT') {
    prog.addOption(opts_1.Opts[Opt.VERSIONS_IE]);
}
exports.program = prog;
// stand alone runner
let argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'update-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
else if (argv._[0] === 'update-help') {
    prog.printHelp();
}
let browserFile;
/**
 * Parses the options and downloads binaries if they do not exist.
 * @param options
 */
function update(options) {
    let promises = [];
    let standalone = options[Opt.STANDALONE].getBoolean();
    let chrome = options[Opt.CHROME].getBoolean();
    let gecko = options[Opt.GECKO].getBoolean();
    let ie32 = false;
    let ie64 = false;
    if (options[Opt.IE]) {
        ie32 = ie32 || options[Opt.IE].getBoolean();
    }
    if (options[Opt.IE32]) {
        ie32 = ie32 || options[Opt.IE32].getBoolean();
    }
    if (options[Opt.IE64]) {
        ie64 = options[Opt.IE64].getBoolean();
    }
    let android = options[Opt.ANDROID].getBoolean();
    let ios = false;
    if (options[Opt.IOS]) {
        ios = options[Opt.IOS].getBoolean();
    }
    let outputDir = options[Opt.OUT_DIR].getString();
    try {
        browserFile =
            JSON.parse(fs.readFileSync(path.resolve(outputDir, 'update-config.json')).toString());
    }
    catch (err) {
        browserFile = {};
    }
    let android_api_levels = options[Opt.ANDROID_API_LEVELS].getString().split(',');
    let android_architectures = options[Opt.ANDROID_ARCHITECTURES].getString().split(',');
    let android_platforms = options[Opt.ANDROID_PLATFORMS].getString().split(',');
    let android_accept_licenses = options[Opt.ANDROID_ACCEPT_LICENSES].getBoolean();
    if (options[Opt.OUT_DIR].getString()) {
        if (path.isAbsolute(options[Opt.OUT_DIR].getString())) {
            outputDir = options[Opt.OUT_DIR].getString();
        }
        else {
            outputDir = path.resolve(config_1.Config.getBaseDir(), options[Opt.OUT_DIR].getString());
        }
        files_1.FileManager.makeOutputDirectory(outputDir);
    }
    let ignoreSSL = options[Opt.IGNORE_SSL].getBoolean();
    let proxy = options[Opt.PROXY].getString();
    http_utils_1.HttpUtils.assignOptions({ ignoreSSL, proxy });
    let verbose = options[Opt.VERBOSE].getBoolean();
    // setup versions for binaries
    let binaries = files_1.FileManager.setupBinaries(options[Opt.ALTERNATE_CDN].getString());
    binaries[binaries_1.Standalone.id].versionCustom = options[Opt.VERSIONS_STANDALONE].getString();
    binaries[binaries_1.ChromeDriver.id].versionCustom = options[Opt.VERSIONS_CHROME].getString();
    if (options[Opt.VERSIONS_IE]) {
        binaries[binaries_1.IEDriver.id].versionCustom = options[Opt.VERSIONS_IE].getString();
    }
    if (options[Opt.VERSIONS_GECKO]) {
        binaries[binaries_1.GeckoDriver.id].versionCustom = options[Opt.VERSIONS_GECKO].getString();
    }
    binaries[binaries_1.AndroidSDK.id].versionCustom = options[Opt.VERSIONS_ANDROID].getString();
    binaries[binaries_1.Appium.id].versionCustom = options[Opt.VERSIONS_APPIUM].getString();
    // if the file has not been completely downloaded, download it
    // else if the file has already been downloaded, unzip the file, rename it, and give it
    // permissions
    if (standalone) {
        let binary = binaries[binaries_1.Standalone.id];
        promises.push(files_1.FileManager.downloadFile(binary, outputDir)
            .then((downloaded) => {
            if (!downloaded) {
                logger.info(binary.name + ': file exists ' +
                    path.resolve(outputDir, binary.filename()));
                logger.info(binary.name + ': ' + binary.filename() + ' up to date');
            }
        })
            .then(() => {
            updateBrowserFile(binary, outputDir);
        }));
    }
    if (chrome) {
        let binary = binaries[binaries_1.ChromeDriver.id];
        promises.push(updateBinary(binary, outputDir, proxy, ignoreSSL).then(() => {
            return Promise.resolve(updateBrowserFile(binary, outputDir));
        }));
    }
    if (gecko) {
        let binary = binaries[binaries_1.GeckoDriver.id];
        promises.push(updateBinary(binary, outputDir, proxy, ignoreSSL).then(() => {
            return Promise.resolve(updateBrowserFile(binary, outputDir));
        }));
    }
    if (ie64) {
        let binary = binaries[binaries_1.IEDriver.id];
        binary.osarch = config_1.Config.osArch(); // Win32 or x64
        promises.push(updateBinary(binary, outputDir, proxy, ignoreSSL).then(() => {
            return Promise.resolve(updateBrowserFile(binary, outputDir));
        }));
    }
    if (ie32) {
        let binary = binaries[binaries_1.IEDriver.id];
        binary.osarch = 'Win32';
        promises.push(updateBinary(binary, outputDir, proxy, ignoreSSL).then(() => {
            return Promise.resolve(updateBrowserFile(binary, outputDir));
        }));
    }
    if (android) {
        let binary = binaries[binaries_1.AndroidSDK.id];
        let sdk_path = path.resolve(outputDir, binary.executableFilename());
        let oldAVDList;
        updateBrowserFile(binary, outputDir);
        promises.push(q.nfcall(fs.readFile, path.resolve(sdk_path, 'available_avds.json'))
            .then((oldAVDs) => {
            oldAVDList = oldAVDs;
        }, () => {
            oldAVDList = '[]';
        })
            .then(() => {
            return updateBinary(binary, outputDir, proxy, ignoreSSL);
        })
            .then(() => {
            initialize_1.android(path.resolve(outputDir, binary.executableFilename()), android_api_levels, android_architectures, android_platforms, android_accept_licenses, binaries[binaries_1.AndroidSDK.id].versionCustom, JSON.parse(oldAVDList), logger, verbose);
        }));
    }
    if (ios) {
        initialize_1.iOS(logger);
    }
    if (android || ios) {
        installAppium(binaries[binaries_1.Appium.id], outputDir);
        updateBrowserFile(binaries[binaries_1.Appium.id], outputDir);
    }
    return Promise.all(promises).then(() => {
        writeBrowserFile(outputDir);
    });
}
function updateBinary(binary, outputDir, proxy, ignoreSSL) {
    return files_1.FileManager
        .downloadFile(binary, outputDir, (binary, outputDir, fileName) => {
        unzip(binary, outputDir, fileName);
    })
        .then(downloaded => {
        if (!downloaded) {
            // The file did not have to download, we should unzip it.
            logger.info(binary.name + ': file exists ' + path.resolve(outputDir, binary.filename()));
            let fileName = binary.filename();
            unzip(binary, outputDir, fileName);
            logger.info(binary.name + ': ' + binary.executableFilename() + ' up to date');
        }
    });
}
function unzip(binary, outputDir, fileName) {
    // remove the previously saved file and unzip it
    let osType = config_1.Config.osType();
    let mv = path.resolve(outputDir, binary.executableFilename());
    try {
        fs.unlinkSync(mv);
    }
    catch (err) {
        try {
            rimraf.sync(mv);
        }
        catch (err2) {
        }
    }
    // unzip the file
    logger.info(binary.name + ': unzipping ' + fileName);
    if (fileName.slice(-4) == '.zip') {
        try {
            let zip = new AdmZip(path.resolve(outputDir, fileName));
            zip.extractAllTo(outputDir, true);
        }
        catch (e) {
            throw new Error(`Invalid filename: ${path.resolve(outputDir, fileName)}`);
        }
    }
    else {
        // We will only ever get .tar files on linux
        child_process.spawnSync('tar', ['zxvf', path.resolve(outputDir, fileName), '-C', outputDir]);
    }
    // rename
    fs.renameSync(path.resolve(outputDir, binary.zipContentName()), mv);
    // set permissions
    if (osType !== 'Windows_NT') {
        logger.info(binary.name + ': setting permissions to 0755 for ' + mv);
        if (binary.id() !== binaries_1.AndroidSDK.id) {
            fs.chmodSync(mv, '0755');
        }
        else {
            fs.chmodSync(path.resolve(mv, 'tools', 'android'), '0755');
            fs.chmodSync(path.resolve(mv, 'tools', 'emulator'), '0755');
            // TODO(sjelin): get 64 bit versions working
        }
    }
}
function installAppium(binary, outputDir) {
    logger.info('appium: installing appium');
    let folder = path.resolve(outputDir, binary.filename());
    try {
        rimraf.sync(folder);
    }
    catch (err) {
    }
    fs.mkdirSync(folder);
    fs.writeFileSync(path.resolve(folder, 'package.json'), JSON.stringify({ scripts: { appium: 'appium' } }));
    utils_1.spawn('npm', ['install', 'appium@' + binary.version()], null, { cwd: folder });
}
function updateBrowserFile(binary, outputDir) {
    let currentDownload = path.resolve(outputDir, binary.executableFilename());
    // if browserFile[id] exists, we should update it
    if (browserFile[binary.id()]) {
        let binaryPath = browserFile[binary.id()];
        if (binaryPath.last === currentDownload) {
            return;
        }
        else {
            binaryPath.last = currentDownload;
            for (let bin of binaryPath.all) {
                if (bin === currentDownload) {
                    return;
                }
            }
            binaryPath.all.push(currentDownload);
        }
    }
    else {
        // The browserFile[id] does not exist / has not been downloaded previously.
        // We should create the entry.
        let binaryPath = { last: currentDownload, all: [currentDownload] };
        browserFile[binary.id()] = binaryPath;
    }
}
function writeBrowserFile(outputDir) {
    let filePath = path.resolve(outputDir, 'update-config.json');
    fs.writeFileSync(filePath, JSON.stringify(browserFile));
}
// for testing
function clearBrowserFile() {
    browserFile = {};
}
exports.clearBrowserFile = clearBrowserFile;
//# sourceMappingURL=update.js.map