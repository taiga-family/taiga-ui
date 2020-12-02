"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ci_info_1 = require("ci-info");
const path_1 = __importDefault(require("path"));
const debug_1 = __importDefault(require("../debug"));
const _1 = require("./");
const gitRevParse_1 = __importDefault(require("./gitRevParse"));
const checkGitDirEnv_1 = require("../checkGitDirEnv");
// Debug
debug_1.default(`Current working directory is '${process.cwd()}'`);
debug_1.default(`INIT_CWD environment variable is set to '${process.env.INIT_CWD}'`);
// Action can be "install" or "uninstall"
// huskyDir is ONLY used in dev, don't use this arguments
const [, , action, huskyDir = path_1.default.join(__dirname, '../..')] = process.argv;
// Find Git dir
try {
    // Show un/install message
    console.log('husky > %s git hooks', action === 'install' ? 'Setting up' : 'Uninstalling');
    // Skip install if HUSKY_SKIP_INSTALL=1
    if (action === 'install' &&
        ['1', 'true'].includes(process.env.HUSKY_SKIP_INSTALL || '')) {
        console.log("HUSKY_SKIP_INSTALL environment variable is set to 'true',", 'skipping Git hooks installation.');
        process.exit(0);
    }
    // Check GIT_DIR environment variable
    checkGitDirEnv_1.checkGitDirEnv();
    // Get top level and git dir
    const { topLevel, gitCommonDir } = gitRevParse_1.default();
    debug_1.default('Git rev-parse command returned:');
    debug_1.default(`  --show-top-level: ${topLevel}`);
    debug_1.default(`  --git-common-dir: ${gitCommonDir}`);
    // Install or uninstall
    if (action === 'install') {
        _1.install(topLevel, gitCommonDir, huskyDir, ci_info_1.isCI);
    }
    else {
        _1.uninstall(gitCommonDir, huskyDir);
    }
    console.log(`husky > Done`);
}
catch (error) {
    console.log(chalk_1.default.red(error.message.trim()));
    console.log(chalk_1.default.red(`husky > Failed to ${action}`));
}
