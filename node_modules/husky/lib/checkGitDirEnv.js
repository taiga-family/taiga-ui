"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("./debug"));
function checkGitDirEnv() {
    if (process.env.GIT_DIR) {
        debug_1.default(`GIT_DIR environment variable is set to '${process.env.GIT_DIR}'`);
        debug_1.default(`If you're getting "fatal: not a git repository" errors, you may want to unset GIT_DIR`);
    }
}
exports.checkGitDirEnv = checkGitDirEnv;
