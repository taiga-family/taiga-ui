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
const glob = require("glob");
const promisify_1 = require("./promisify");
const array_1 = require("./array");
function globFiles(pattern, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const globPromise = pattern => promisify_1.promisify(resolveOrReject => glob(pattern, options, resolveOrReject));
        const files = yield Promise.all(array_1.toArray(pattern).map(globPromise));
        return array_1.flatten(files);
    });
}
exports.globFiles = globFiles;
//# sourceMappingURL=glob.js.map