"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var Utils_1 = require("./utils/Utils");
var TypeGuard_1 = require("./utils/TypeGuard");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var _this = this;
        var result = {
            replacements: {},
            ignoredList: [],
            config: {
                ignoreExternalModule: true,
                case: StringCase.camel
            }
        };
        if (options.ruleArguments instanceof Array) {
            options.ruleArguments.forEach(function (opt, index) {
                if (index === 1 && TypeGuard_1.isObject(opt)) {
                    result.replacements = _this.extractReplacements(opt);
                }
                if (index === 2 && Array.isArray(opt)) {
                    result.ignoredList = _this.extractIgnoredList(opt);
                }
                if (index === 3 && TypeGuard_1.isObject(opt)) {
                    result.config = _this.extractConfig(opt);
                }
            });
        }
        return result;
    };
    Rule.prototype.extractReplacements = function (opt) {
        var result = {};
        if (TypeGuard_1.isObject(opt)) {
            Object.keys(opt).forEach(function (key) {
                var value = opt[key];
                if (typeof value === 'string') {
                    result[key] = value;
                }
            });
        }
        return result;
    };
    Rule.prototype.extractIgnoredList = function (opt) {
        return opt.filter(function (moduleName) { return typeof moduleName === 'string'; });
    };
    Rule.prototype.extractConfig = function (opt) {
        var result = { ignoreExternalModule: true, case: StringCase.camel };
        var configKeyList = ['ignoreExternalModule', 'case'];
        if (TypeGuard_1.isObject(opt)) {
            return Object.keys(opt).reduce(function (accum, key) {
                if (configKeyList.filter(function (configKey) { return configKey === key; }).length >= 1) {
                    accum[key] = opt[key];
                    return accum;
                }
                return accum;
            }, { ignoreExternalModule: true, case: StringCase.camel });
        }
        return result;
    };
    Rule.metadata = {
        ruleName: 'import-name',
        type: 'maintainability',
        description: 'The name of the imported module must match the name of the thing being imported',
        hasFix: true,
        options: null,
        optionsDescription: '',
        optionExamples: [
            [true],
            [true, { moduleName: 'importedName' }],
            [true, { moduleName: 'importedName' }, ['moduleName1', 'moduleName2']],
            [true, { moduleName: 'importedName' }, ['moduleName1', 'moduleName2'], { ignoreExternalModule: false }]
        ],
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var StringCase;
(function (StringCase) {
    StringCase["any"] = "any-case";
    StringCase["pascal"] = "PascalCase";
    StringCase["camel"] = "camelCase";
})(StringCase || (StringCase = {}));
function walk(ctx) {
    var option = ctx.options;
    function getNameNodeFromImportNode(node) {
        if (tsutils.isImportEqualsDeclaration(node)) {
            return node.name;
        }
        var importClause = node.importClause;
        return importClause === undefined ? undefined : importClause.name;
    }
    function checkIgnoreExternalModule(moduleName, node, opt) {
        var runtimeNode = node;
        if (opt.ignoreExternalModule === true && runtimeNode.parent !== undefined && runtimeNode.parent.resolvedModules !== undefined) {
            var ignoreThisExternalModule_1 = false;
            runtimeNode.parent.resolvedModules.forEach(function (value, key) {
                if (key === moduleName && value.isExternalLibraryImport === true) {
                    ignoreThisExternalModule_1 = true;
                }
            });
            return ignoreThisExternalModule_1;
        }
        return false;
    }
    function checkIgnoredListExists(moduleName, ignoredList) {
        return ignoredList.filter(function (ignoredModule) { return ignoredModule === moduleName; }).length >= 1;
    }
    function checkReplacementsExist(importedName, expectedImportedName, moduleName, replacements) {
        var allowedReplacementKeys = [
            makeCamelCase(expectedImportedName),
            makePascalCase(expectedImportedName),
            moduleName,
            moduleName.replace(/.*\//, '')
        ];
        return Utils_1.Utils.exists(Object.keys(replacements), function (replacementKey) {
            for (var index = 0; allowedReplacementKeys.length > index; index = index + 1) {
                if (replacementKey === allowedReplacementKeys[index]) {
                    return importedName === replacements[replacementKey];
                }
            }
            return false;
        });
    }
    function isImportNameValid(importedName, expectedImportedName, moduleName, node) {
        if (transformName(expectedImportedName).indexOf(importedName) > -1) {
            return true;
        }
        var isReplacementsExist = checkReplacementsExist(importedName, expectedImportedName, moduleName, option.replacements);
        if (isReplacementsExist) {
            return true;
        }
        var isIgnoredModuleExist = checkIgnoredListExists(moduleName, option.ignoredList);
        if (isIgnoredModuleExist) {
            return true;
        }
        var ignoreThisExternalModule = checkIgnoreExternalModule(moduleName, node, option.config);
        if (ignoreThisExternalModule) {
            return true;
        }
        return false;
    }
    function transformName(input) {
        switch (option.config.case) {
            case StringCase.camel:
                return [makeCamelCase(input)];
            case StringCase.pascal:
                return [makePascalCase(input)];
            case StringCase.any:
                return [makeCamelCase(input), makePascalCase(input)];
            default:
                throw new Error("Unknown case for import-name rule: \"" + option.config.case + "\"");
        }
    }
    function makeCamelCase(input) {
        return input.replace(/[-|\.|_](.)/g, function (_match, group1) {
            return group1.toUpperCase();
        });
    }
    function makePascalCase(input) {
        return input.replace(/(?:^|[-|\.|_|])([a-z])/g, function (_, group1) { return group1.toUpperCase(); });
    }
    function validateImport(node, importedName, moduleName) {
        var expectedImportedName = moduleName.replace(/.*\//, '');
        if (expectedImportedName === '' || expectedImportedName === '.' || expectedImportedName === '..') {
            return;
        }
        if (isImportNameValid(importedName, expectedImportedName, moduleName, node)) {
            return;
        }
        var expectedImportedNames = transformName(expectedImportedName);
        var expectedNames = expectedImportedNames.map(function (name) { return "'" + name + "'"; }).join(' or ');
        var message = "Misnamed import. Import should be named " + expectedNames + " but found '" + importedName + "'";
        var nameNode = getNameNodeFromImportNode(node);
        if (nameNode === undefined) {
            return;
        }
        var nameNodeStartPos = nameNode.getStart();
        var fix = new Lint.Replacement(nameNodeStartPos, nameNode.end - nameNodeStartPos, expectedImportedNames[0]);
        ctx.addFailureAt(node.getStart(), node.getWidth(), message, fix);
    }
    function cb(node) {
        if (tsutils.isImportEqualsDeclaration(node)) {
            var name_1 = node.name.text;
            if (tsutils.isExternalModuleReference(node.moduleReference)) {
                var moduleRef = node.moduleReference;
                if (tsutils.isStringLiteral(moduleRef.expression)) {
                    var moduleName = moduleRef.expression.text;
                    validateImport(node, name_1, moduleName);
                }
            }
            else if (tsutils.isQualifiedName(node.moduleReference)) {
                var moduleName = node.moduleReference.getText();
                moduleName = moduleName.replace(/.*\./, '');
                validateImport(node, name_1, moduleName);
            }
        }
        if (tsutils.isImportDeclaration(node)) {
            if (node.importClause !== undefined && node.importClause.name !== undefined) {
                var name_2 = node.importClause.name.text;
                if (tsutils.isStringLiteral(node.moduleSpecifier)) {
                    var moduleName = node.moduleSpecifier.text;
                    validateImport(node, name_2, moduleName);
                }
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=importNameRule.js.map