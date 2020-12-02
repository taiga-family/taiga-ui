"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slash_1 = __importDefault(require("slash"));
const execa_1 = __importDefault(require("execa"));
function default_1() {
    // https://github.com/typicode/husky/issues/580
    // https://github.com/typicode/husky/issues/587
    const result = execa_1.default.sync('git', [
        'rev-parse',
        '--show-toplevel',
        '--git-common-dir'
    ]);
    const [topLevel, gitCommonDir] = result.stdout
        .trim()
        .split('\n')
        // Normalize for Windows
        .map(slash_1.default);
    // Git rev-parse returns unknown options as is.
    // If we get --absolute-git-dir in the output,
    // it probably means that an older version of Git has been used.
    if (gitCommonDir === '--git-common-dir') {
        throw new Error('Husky requires Git >= 2.13.0, please upgrade Git');
    }
    return { topLevel, gitCommonDir };
}
exports.default = default_1;
