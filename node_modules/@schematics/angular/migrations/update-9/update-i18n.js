"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const config_1 = require("../../utility/config");
const dependencies_1 = require("../../utility/dependencies");
const json_utils_1 = require("../../utility/json-utils");
const latest_versions_1 = require("../../utility/latest-versions");
const workspace_models_1 = require("../../utility/workspace-models");
const utils_1 = require("./utils");
function updateI18nConfig() {
    return (tree, context) => {
        // this is whole process of partial change writing and repeat loading/looping is only necessary
        // to workaround underlying issues with the recorder and ast helper functions
        const workspacePath = config_1.getWorkspacePath(tree);
        let workspaceAst = utils_1.getWorkspace(tree);
        // Update extract targets
        const extractTargets = utils_1.getTargets(workspaceAst, 'extract-i18n', workspace_models_1.Builders.ExtractI18n);
        if (extractTargets.length > 0) {
            const recorder = tree.beginUpdate(workspacePath);
            for (const { target, project } of extractTargets) {
                addProjectI18NOptions(recorder, tree, target, project);
                removeExtracti18nDeprecatedOptions(recorder, target);
            }
            tree.commitUpdate(recorder);
            // workspace was changed so need to reload
            workspaceAst = utils_1.getWorkspace(tree);
        }
        // Update base HREF values for existing configurations
        let recorder = tree.beginUpdate(workspacePath);
        for (const { target } of utils_1.getTargets(workspaceAst, 'build', workspace_models_1.Builders.Browser)) {
            updateBaseHrefs(recorder, target);
        }
        for (const { target } of utils_1.getTargets(workspaceAst, 'test', workspace_models_1.Builders.Karma)) {
            updateBaseHrefs(recorder, target);
        }
        tree.commitUpdate(recorder);
        // Remove i18n format option
        workspaceAst = utils_1.getWorkspace(tree);
        recorder = tree.beginUpdate(workspacePath);
        for (const { target } of utils_1.getTargets(workspaceAst, 'build', workspace_models_1.Builders.Browser)) {
            removeFormatOption(recorder, target);
        }
        for (const { target } of utils_1.getTargets(workspaceAst, 'test', workspace_models_1.Builders.Karma)) {
            removeFormatOption(recorder, target);
        }
        tree.commitUpdate(recorder);
        // Add new i18n options to build target configurations
        workspaceAst = utils_1.getWorkspace(tree);
        recorder = tree.beginUpdate(workspacePath);
        for (const { target } of utils_1.getTargets(workspaceAst, 'build', workspace_models_1.Builders.Browser)) {
            addBuilderI18NOptions(recorder, target, context.logger);
        }
        tree.commitUpdate(recorder);
        // Add new i18n options to test target configurations
        workspaceAst = utils_1.getWorkspace(tree);
        recorder = tree.beginUpdate(workspacePath);
        for (const { target } of utils_1.getTargets(workspaceAst, 'test', workspace_models_1.Builders.Karma)) {
            addBuilderI18NOptions(recorder, target, context.logger);
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}
exports.updateI18nConfig = updateI18nConfig;
function addProjectI18NOptions(recorder, tree, builderConfig, projectConfig) {
    const browserConfig = utils_1.getProjectTarget(projectConfig, 'build', workspace_models_1.Builders.Browser);
    if (!browserConfig || browserConfig.kind !== 'object') {
        return;
    }
    // browser builder options
    let locales;
    const options = utils_1.getAllOptions(browserConfig);
    for (const option of options) {
        const localeId = json_utils_1.findPropertyInAstObject(option, 'i18nLocale');
        if (!localeId || localeId.kind !== 'string') {
            continue;
        }
        const localeFile = json_utils_1.findPropertyInAstObject(option, 'i18nFile');
        if (!localeFile || localeFile.kind !== 'string') {
            continue;
        }
        const localIdValue = localeId.value;
        const localeFileValue = localeFile.value;
        const baseHref = json_utils_1.findPropertyInAstObject(option, 'baseHref');
        let baseHrefValue;
        if (baseHref) {
            if (baseHref.kind === 'string' && baseHref.value !== `/${localIdValue}/`) {
                baseHrefValue = baseHref.value;
            }
        }
        else {
            // If the configuration does not contain a baseHref, ensure the main option value is used.
            baseHrefValue = '';
        }
        if (!locales) {
            locales = {
                [localIdValue]: baseHrefValue === undefined
                    ? localeFileValue
                    : {
                        translation: localeFileValue,
                        baseHref: baseHrefValue,
                    },
            };
        }
        else {
            locales[localIdValue] =
                baseHrefValue === undefined
                    ? localeFileValue
                    : {
                        translation: localeFileValue,
                        baseHref: baseHrefValue,
                    };
        }
    }
    if (locales) {
        // Get sourceLocale from extract-i18n builder
        const i18nOptions = utils_1.getAllOptions(builderConfig);
        const sourceLocale = i18nOptions
            .map(o => {
            const sourceLocale = json_utils_1.findPropertyInAstObject(o, 'i18nLocale');
            return sourceLocale && sourceLocale.value;
        })
            .find(x => !!x);
        // Add i18n project configuration
        json_utils_1.insertPropertyInAstObjectInOrder(recorder, projectConfig, 'i18n', {
            locales,
            // tslint:disable-next-line: no-any
            sourceLocale: sourceLocale,
        }, 6);
        // Add @angular/localize if not already a dependency
        if (!dependencies_1.getPackageJsonDependency(tree, '@angular/localize')) {
            dependencies_1.addPackageJsonDependency(tree, {
                name: '@angular/localize',
                version: latest_versions_1.latestVersions.Angular,
                type: dependencies_1.NodeDependencyType.Default,
            });
        }
    }
}
function addBuilderI18NOptions(recorder, builderConfig, logger) {
    const options = utils_1.getAllOptions(builderConfig);
    for (const option of options) {
        const localeId = json_utils_1.findPropertyInAstObject(option, 'i18nLocale');
        const i18nFile = json_utils_1.findPropertyInAstObject(option, 'i18nFile');
        const outputPath = json_utils_1.findPropertyInAstObject(option, 'outputPath');
        if (localeId &&
            localeId.kind === 'string' &&
            i18nFile &&
            outputPath &&
            outputPath.kind === 'string') {
            if (outputPath.value.match(new RegExp(`[/\\\\]${localeId.value}[/\\\\]?$`))) {
                const newOutputPath = outputPath.value.replace(new RegExp(`[/\\\\]${localeId.value}[/\\\\]?$`), '');
                const { start, end } = outputPath;
                recorder.remove(start.offset, end.offset - start.offset);
                recorder.insertLeft(start.offset, `"${newOutputPath}"`);
            }
            else {
                logger.warn(`Output path value "${outputPath.value}" for locale "${localeId.value}" is not supported with the new localization system. ` +
                    `With the current value, the localized output would be written to "${path_1.posix.join(outputPath.value, localeId.value)}". ` +
                    `Keeping existing options for the target configuration of locale "${localeId.value}".`);
                continue;
            }
        }
        if (localeId && localeId.kind === 'string') {
            // add new localize option
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, option, 'localize', [localeId.value], 12);
            json_utils_1.removePropertyInAstObject(recorder, option, 'i18nLocale');
        }
        if (i18nFile) {
            json_utils_1.removePropertyInAstObject(recorder, option, 'i18nFile');
        }
    }
}
function removeFormatOption(recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig);
    for (const option of options) {
        // The format is always auto-detected now
        const i18nFormat = json_utils_1.findPropertyInAstObject(option, 'i18nFormat');
        if (i18nFormat) {
            json_utils_1.removePropertyInAstObject(recorder, option, 'i18nFormat');
        }
    }
}
function updateBaseHrefs(recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig);
    const mainOptions = json_utils_1.findPropertyInAstObject(builderConfig, 'options');
    const mainBaseHref = mainOptions &&
        mainOptions.kind === 'object' &&
        json_utils_1.findPropertyInAstObject(mainOptions, 'baseHref');
    const hasMainBaseHref = !!mainBaseHref && mainBaseHref.kind === 'string' && mainBaseHref.value !== '/';
    for (const option of options) {
        const localeId = json_utils_1.findPropertyInAstObject(option, 'i18nLocale');
        const i18nFile = json_utils_1.findPropertyInAstObject(option, 'i18nFile');
        // localize base HREF values are controlled by the i18n configuration
        const baseHref = json_utils_1.findPropertyInAstObject(option, 'baseHref');
        if (localeId && i18nFile && baseHref) {
            // if the main option set has a non-default base href,
            // ensure that the augmented base href has the correct base value
            if (hasMainBaseHref) {
                const { start, end } = baseHref;
                recorder.remove(start.offset, end.offset - start.offset);
                recorder.insertLeft(start.offset, `"/"`);
            }
            else {
                json_utils_1.removePropertyInAstObject(recorder, option, 'baseHref');
            }
        }
    }
}
function removeExtracti18nDeprecatedOptions(recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig);
    for (const option of options) {
        // deprecated options
        json_utils_1.removePropertyInAstObject(recorder, option, 'i18nLocale');
        const i18nFormat = option.properties.find(({ key }) => key.value === 'i18nFormat');
        if (i18nFormat) {
            // i18nFormat has been changed to format
            const key = i18nFormat.key;
            const offset = key.start.offset + 1;
            recorder.remove(offset, key.value.length);
            recorder.insertLeft(offset, 'format');
        }
    }
}
