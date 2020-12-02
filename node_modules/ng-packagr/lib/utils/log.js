"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
exports.error = (err) => {
    if (err instanceof Error) {
        console.error(chalk.red('ERROR: ' + err.message));
        if (process.env.DEBUG) {
            console.error(chalk.red(err.stack) + '\n');
        }
    }
    else {
        console.error(chalk.red(err));
    }
};
exports.warn = (msg) => {
    console.warn(chalk.yellow('WARNING: ' + msg));
};
exports.success = (msg) => {
    console.log(chalk.green(msg));
};
exports.info = (msg) => {
    console.log(chalk.blue(msg));
};
exports.msg = (msg) => {
    console.log(chalk.white(msg));
};
exports.debug = (msg) => {
    if (process.env.DEBUG) {
        console.log(chalk.inverse.cyan(`[debug] ${msg}`));
    }
};
//# sourceMappingURL=log.js.map