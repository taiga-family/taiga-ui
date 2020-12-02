"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_1 = require("./rollup");
const uglify_1 = require("./uglify");
function flattenToFesm(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        return rollup_1.rollupBundleFile({
            moduleName: opts.esmModuleId,
            entry: opts.entryFile,
            sourceRoot: opts.sourceRoot,
            format: 'es',
            dest: opts.destFile,
            dependencyList: opts.dependencyList,
        });
    });
}
exports.flattenToFesm = flattenToFesm;
function flattenToUmd(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        return rollup_1.rollupBundleFile({
            moduleName: opts.umdModuleId,
            entry: opts.entryFile,
            sourceRoot: opts.sourceRoot,
            format: 'umd',
            dest: opts.destFile,
            amd: { id: opts.amdId },
            umdModuleIds: Object.assign({}, opts.umdModuleIds),
            dependencyList: opts.dependencyList,
        });
    });
}
exports.flattenToUmd = flattenToUmd;
function flattenToUmdMin(entryFile, outputFile) {
    return __awaiter(this, void 0, void 0, function* () {
        return uglify_1.minifyJsFile(entryFile, outputFile);
    });
}
exports.flattenToUmdMin = flattenToUmdMin;
//# sourceMappingURL=flatten.js.map