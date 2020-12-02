"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const action_executor_1 = require("./action-executor");
const copy_assets_1 = require("./copy-assets");
function emittedFilesToInlineOptions(emittedFiles, scriptsEntryPointName, emittedPath, outputPath, es5, missingTranslation) {
    const options = [];
    const originalFiles = [];
    for (const emittedFile of emittedFiles) {
        if (emittedFile.asset ||
            emittedFile.extension !== '.js' ||
            (emittedFile.name && scriptsEntryPointName.includes(emittedFile.name))) {
            continue;
        }
        const originalPath = path.join(emittedPath, emittedFile.file);
        const action = {
            filename: emittedFile.file,
            code: fs.readFileSync(originalPath, 'utf8'),
            es5,
            outputPath,
            missingTranslation,
            setLocale: emittedFile.name === 'main' || emittedFile.name === 'vendor',
        };
        originalFiles.push(originalPath);
        try {
            const originalMapPath = originalPath + '.map';
            action.map = fs.readFileSync(originalMapPath, 'utf8');
            originalFiles.push(originalMapPath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
        options.push(action);
    }
    return { options, originalFiles };
}
async function i18nInlineEmittedFiles(context, emittedFiles, i18n, baseOutputPath, outputPaths, scriptsEntryPointName, emittedPath, es5, missingTranslation) {
    const executor = new action_executor_1.BundleActionExecutor({ i18n });
    let hasErrors = false;
    try {
        const { options, originalFiles: processedFiles } = emittedFilesToInlineOptions(emittedFiles, scriptsEntryPointName, emittedPath, baseOutputPath, es5, missingTranslation);
        for await (const result of executor.inlineAll(options)) {
            for (const diagnostic of result.diagnostics) {
                if (diagnostic.type === 'error') {
                    hasErrors = true;
                    context.logger.error(diagnostic.message);
                }
                else {
                    context.logger.warn(diagnostic.message);
                }
            }
        }
        // Copy any non-processed files into the output locations
        await copy_assets_1.copyAssets([
            {
                glob: '**/*',
                input: emittedPath,
                output: '',
                ignore: [...processedFiles].map(f => path.relative(emittedPath, f)),
            },
        ], outputPaths, '');
    }
    catch (err) {
        context.logger.error('Localized bundle generation failed: ' + err.message);
        return false;
    }
    finally {
        await executor.stop();
    }
    if (hasErrors) {
        context.logger.error('Localized bundle generation failed.');
    }
    else {
        context.logger.info('Localized bundle generation complete.');
    }
    return !hasErrors;
}
exports.i18nInlineEmittedFiles = i18nInlineEmittedFiles;
