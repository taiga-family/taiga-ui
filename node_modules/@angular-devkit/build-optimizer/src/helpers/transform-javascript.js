"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function validateDiagnostics(diagnostics, strict) {
    // Print error diagnostics.
    const hasError = diagnostics.some(diag => diag.category === ts.DiagnosticCategory.Error);
    if (hasError) {
        // Throw only if we're in strict mode, otherwise return original content.
        if (strict) {
            const errorMessages = ts.formatDiagnostics(diagnostics, {
                getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
                getNewLine: () => ts.sys.newLine,
                getCanonicalFileName: (f) => f,
            });
            throw new Error(`
        TS failed with the following error messages:

        ${errorMessages}
      `);
        }
        else {
            return false;
        }
    }
    return true;
}
function transformJavascript(options) {
    const { content, getTransforms, emitSourceMap, inputFilePath, outputFilePath, strict, } = options;
    // Bail if there's no transform to do.
    if (getTransforms.length === 0) {
        return {
            content: null,
            sourceMap: null,
            emitSkipped: true,
        };
    }
    const allowFastPath = options.typeCheck === false && !emitSourceMap;
    const outputs = new Map();
    const tempFilename = 'bo-default-file.js';
    const tempSourceFile = ts.createSourceFile(tempFilename, content, ts.ScriptTarget.Latest, allowFastPath);
    const parseDiagnostics = tempSourceFile.parseDiagnostics;
    const tsOptions = {
        // We target latest so that there is no downleveling.
        target: ts.ScriptTarget.Latest,
        isolatedModules: true,
        suppressOutputPathCheck: true,
        allowNonTsExtensions: true,
        noLib: true,
        noResolve: true,
        sourceMap: emitSourceMap,
        inlineSources: emitSourceMap,
        inlineSourceMap: false,
    };
    if (allowFastPath && parseDiagnostics) {
        if (!validateDiagnostics(parseDiagnostics, strict)) {
            return {
                content: null,
                sourceMap: null,
                emitSkipped: true,
            };
        }
        const transforms = getTransforms.map((getTf) => getTf(undefined));
        const result = ts.transform(tempSourceFile, transforms, tsOptions);
        if (result.transformed.length === 0 || result.transformed[0] === tempSourceFile) {
            return {
                content: null,
                sourceMap: null,
                emitSkipped: true,
            };
        }
        const printer = ts.createPrinter(undefined, {
            onEmitNode: result.emitNodeWithNotification,
            substituteNode: result.substituteNode,
        });
        const output = printer.printFile(result.transformed[0]);
        result.dispose();
        return {
            content: output,
            sourceMap: null,
            emitSkipped: false,
        };
    }
    const host = {
        getSourceFile: (fileName) => {
            if (fileName !== tempFilename) {
                throw new Error(`File ${fileName} does not have a sourceFile.`);
            }
            return tempSourceFile;
        },
        getDefaultLibFileName: () => 'lib.d.ts',
        getCurrentDirectory: () => '',
        getDirectories: () => [],
        getCanonicalFileName: (fileName) => fileName,
        useCaseSensitiveFileNames: () => true,
        getNewLine: () => '\n',
        fileExists: (fileName) => fileName === tempFilename,
        readFile: (_fileName) => '',
        writeFile: (fileName, text) => outputs.set(fileName, text),
    };
    const program = ts.createProgram([tempFilename], tsOptions, host);
    const diagnostics = program.getSyntacticDiagnostics(tempSourceFile);
    if (!validateDiagnostics(diagnostics, strict)) {
        return {
            content: null,
            sourceMap: null,
            emitSkipped: true,
        };
    }
    // We need the checker inside transforms.
    const transforms = getTransforms.map((getTf) => getTf(program));
    program.emit(undefined, undefined, undefined, undefined, { before: transforms, after: [] });
    let transformedContent = outputs.get(tempFilename);
    if (!transformedContent) {
        return {
            content: null,
            sourceMap: null,
            emitSkipped: true,
        };
    }
    let sourceMap = null;
    const tsSourceMap = outputs.get(`${tempFilename}.map`);
    if (emitSourceMap && tsSourceMap) {
        const urlRegExp = /^\/\/# sourceMappingURL=[^\r\n]*/gm;
        sourceMap = JSON.parse(tsSourceMap);
        // Fix sourcemaps file references.
        if (outputFilePath) {
            sourceMap.file = outputFilePath;
            transformedContent = transformedContent.replace(urlRegExp, `//# sourceMappingURL=${sourceMap.file}.map\n`);
            if (inputFilePath) {
                sourceMap.sources = [inputFilePath];
            }
            else {
                sourceMap.sources = [''];
            }
        }
        else {
            // TODO: figure out if we should inline sources here.
            transformedContent = transformedContent.replace(urlRegExp, '');
            sourceMap.file = '';
            sourceMap.sources = [''];
        }
    }
    return {
        content: transformedContent,
        sourceMap,
        emitSkipped: false,
    };
}
exports.transformJavascript = transformJavascript;
