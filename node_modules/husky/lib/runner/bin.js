"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./"));
const checkGitDirEnv_1 = require("../checkGitDirEnv");
// Check GIT_DIR environment variable
checkGitDirEnv_1.checkGitDirEnv();
// Run hook
_1.default(process.argv)
    .then((status) => process.exit(status))
    .catch((err) => {
    console.log('Husky > unexpected error', err);
    process.exit(1);
});
