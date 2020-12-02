"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * Returns a TypeScript compiler host that redirects `writeFile` output to the given `declarationDir`.
 *
 * @param compilerHost Original compiler host
 * @param baseDir Project base directory
 * @param declarationDir Declarations target directory
 */
function redirectWriteFileCompilerHost(compilerHost, baseDir, declarationDir) {
    return Object.assign(Object.assign({}, compilerHost), { writeFile: (fileName, data, writeByteOrderMark, onError, sourceFiles) => {
            let filePath = fileName;
            if (/(\.d\.ts|\.metadata\.json)$/.test(fileName)) {
                const projectRelativePath = path.relative(baseDir, fileName);
                filePath = path.resolve(declarationDir, projectRelativePath);
            }
            compilerHost.writeFile.call(this, filePath, data, writeByteOrderMark, onError, sourceFiles);
        } });
}
exports.redirectWriteFileCompilerHost = redirectWriteFileCompilerHost;
//# sourceMappingURL=redirect-write-file-compiler-host.js.map