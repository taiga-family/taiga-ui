"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaries_1 = require("../binaries");
const cli_1 = require("../cli");
const config_1 = require("../config");
exports.OUT_DIR = 'out_dir';
exports.SELENIUM_PORT = 'seleniumPort';
exports.APPIUM_PORT = 'appium-port';
exports.AVD_PORT = 'avd-port';
exports.IGNORE_SSL = 'ignore_ssl';
exports.PROXY = 'proxy';
exports.ALTERNATE_CDN = 'alternate_cdn';
exports.STANDALONE = 'standalone';
exports.CHROME = 'chrome';
exports.IE = 'ie';
exports.IE32 = 'ie32';
exports.IE64 = 'ie64';
exports.EDGE = 'edge';
exports.GECKO = 'gecko';
exports.ANDROID = 'android';
exports.IOS = 'ios';
exports.VERSIONS_CHROME = 'versions.chrome';
exports.VERSIONS_GECKO = 'versions.gecko';
exports.VERSIONS_STANDALONE = 'versions.standalone';
exports.VERSIONS_IE = 'versions.ie';
exports.VERSIONS_ANDROID = 'versions.android';
exports.VERSIONS_APPIUM = 'versions.appium';
exports.CHROME_LOGS = 'chrome_logs';
exports.LOGGING = 'logging';
exports.ANDROID_API_LEVELS = 'android-api-levels';
exports.ANDROID_ARCHITECTURES = 'android-archs';
exports.ANDROID_PLATFORMS = 'android-platorms';
exports.ANDROID_ACCEPT_LICENSES = 'android-accept-licenses';
exports.AVDS = 'avds';
exports.AVD_USE_SNAPSHOTS = 'avd-use-snapshots';
exports.STARTED_SIGNIFIER = 'started-signifier';
exports.SIGNAL_VIA_IPC = 'signal-via-ipc';
exports.DETACH = 'detach';
exports.QUIET = 'quiet';
exports.VERBOSE = 'verbose';
exports.ALREADY_OFF_ERROR = 'already-off-error';
/**
 * The options used by the commands.
 */
var opts = {};
opts[exports.OUT_DIR] = new cli_1.Option(exports.OUT_DIR, 'Location to output/expect', 'string', config_1.Config.getSeleniumDir());
opts[exports.SELENIUM_PORT] =
    new cli_1.Option(exports.SELENIUM_PORT, 'Optional port for the selenium standalone server', 'string', '4444');
opts[exports.APPIUM_PORT] =
    new cli_1.Option(exports.APPIUM_PORT, 'Optional port for the appium server', 'string', '4723');
opts[exports.AVD_PORT] = new cli_1.Option(exports.AVD_PORT, 'Optional port for android virtual devices.  See mobile.md for details', 'number', 5554);
opts[exports.IGNORE_SSL] = new cli_1.Option(exports.IGNORE_SSL, 'Ignore SSL certificates', 'boolean', false);
opts[exports.PROXY] = new cli_1.Option(exports.PROXY, 'Proxy to use for the install or update command', 'string');
opts[exports.ALTERNATE_CDN] = new cli_1.Option(exports.ALTERNATE_CDN, 'Alternate CDN to binaries', 'string');
opts[exports.STANDALONE] = new cli_1.Option(exports.STANDALONE, 'Install or update selenium standalone', 'boolean', binaries_1.Standalone.isDefault);
opts[exports.CHROME] =
    new cli_1.Option(exports.CHROME, 'Install or update chromedriver', 'boolean', binaries_1.ChromeDriver.isDefault);
opts[exports.GECKO] = new cli_1.Option(exports.GECKO, 'Install or update geckodriver', 'boolean', binaries_1.GeckoDriver.isDefault);
opts[exports.IE] = new cli_1.Option(exports.IE, 'Install or update 32-bit ie driver', 'boolean', binaries_1.IEDriver.isDefault32);
opts[exports.IE32] =
    new cli_1.Option(exports.IE32, 'Install or update 32-bit ie driver', 'boolean', binaries_1.IEDriver.isDefault32);
opts[exports.IE64] = new cli_1.Option(exports.IE64, 'Update: install or update 64-bit IE driver. Start: use installed x64 IE driver.', 'boolean', binaries_1.IEDriver.isDefault64);
opts[exports.EDGE] = new cli_1.Option(exports.EDGE, 'Use installed Microsoft Edge driver', 'string', 'C:\\Program Files (x86)\\Microsoft Web Driver\\MicrosoftWebDriver.exe');
opts[exports.ANDROID] = new cli_1.Option(exports.ANDROID, 'Update/use the android sdk', 'boolean', binaries_1.AndroidSDK.isDefault);
opts[exports.IOS] = new cli_1.Option(exports.IOS, 'Update the iOS sdk', 'boolean', false);
opts[exports.VERSIONS_CHROME] = new cli_1.Option(exports.VERSIONS_CHROME, 'Optional chrome driver version (use \'latest\' to get the most recent version)', 'string', 'latest');
opts[exports.VERSIONS_GECKO] =
    new cli_1.Option(exports.VERSIONS_GECKO, 'Optional gecko driver version', 'string', 'latest');
opts[exports.VERSIONS_ANDROID] = new cli_1.Option(exports.VERSIONS_ANDROID, 'Optional android sdk version', 'string', binaries_1.AndroidSDK.versionDefault);
opts[exports.VERSIONS_STANDALONE] = new cli_1.Option(exports.VERSIONS_STANDALONE, 'Optional seleniuim standalone server version (use \'latest\' to get the most recent version)', 'string', 'latest');
opts[exports.VERSIONS_APPIUM] =
    new cli_1.Option(exports.VERSIONS_APPIUM, 'Optional appium version', 'string', binaries_1.Appium.versionDefault);
opts[exports.VERSIONS_IE] = new cli_1.Option(exports.VERSIONS_IE, 'Optional internet explorer driver version (use \'latest\' to get the most recent version)', 'string', 'latest');
opts[exports.CHROME_LOGS] = new cli_1.Option(exports.CHROME_LOGS, 'File path to chrome logs', 'string', undefined);
opts[exports.LOGGING] = new cli_1.Option(exports.LOGGING, 'File path to logging properties file', 'string', undefined);
opts[exports.ANDROID_API_LEVELS] = new cli_1.Option(exports.ANDROID_API_LEVELS, 'Which versions of the android API you want to emulate', 'string', binaries_1.AndroidSDK.DEFAULT_API_LEVELS);
opts[exports.ANDROID_ARCHITECTURES] = new cli_1.Option(exports.ANDROID_ARCHITECTURES, 'Which architectures you want to use in android emulation.  By default it will try to match os.arch()', 'string', binaries_1.AndroidSDK.DEFAULT_ARCHITECTURES);
opts[exports.ANDROID_PLATFORMS] = new cli_1.Option(exports.ANDROID_PLATFORMS, 'Which platforms you want to use in android emulation', 'string', binaries_1.AndroidSDK.DEFAULT_PLATFORMS);
opts[exports.ANDROID_ACCEPT_LICENSES] =
    new cli_1.Option(exports.ANDROID_ACCEPT_LICENSES, 'Automatically accept android licenses', 'boolean', false);
opts[exports.AVDS] = new cli_1.Option(exports.AVDS, 'Android virtual devices to emulate.  Use "all" for emulating all possible devices, and "none" for no devices', 'string', 'all');
opts[exports.AVD_USE_SNAPSHOTS] = new cli_1.Option(exports.AVD_USE_SNAPSHOTS, 'Rather than booting a new AVD every time, save/load snapshots of the last time it was used', 'boolean', true);
opts[exports.STARTED_SIGNIFIER] = new cli_1.Option(exports.STARTED_SIGNIFIER, 'A string to be outputted once the selenium server is up and running.  Useful if you are writing a script which uses webdriver-manager.', 'string');
opts[exports.SIGNAL_VIA_IPC] = new cli_1.Option(exports.SIGNAL_VIA_IPC, 'If you are using --' + exports.STARTED_SIGNIFIER +
    ', this flag will emit the signal string using process.send(), rather than writing it to stdout', 'boolean', false);
opts[exports.DETACH] = new cli_1.Option(exports.DETACH, 'Once the selenium server is up and running, return control to the parent process and continue running the server in the background.', 'boolean', false);
opts[exports.VERBOSE] = new cli_1.Option(exports.VERBOSE, 'Extra console output', 'boolean', false);
opts[exports.QUIET] = new cli_1.Option(exports.QUIET, 'Minimal console output', 'boolean', false);
opts[exports.ALREADY_OFF_ERROR] = new cli_1.Option(exports.ALREADY_OFF_ERROR, 'Normally if you try to shut down a selenium which is not running, you will get a warning.  This turns it into an error', 'boolean', false);
exports.Opts = opts;
//# sourceMappingURL=opts.js.map