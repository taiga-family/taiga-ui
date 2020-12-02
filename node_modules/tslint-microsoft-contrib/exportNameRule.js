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
var AstUtils_1 = require("./utils/AstUtils");
exports.OPTION_IGNORE_CASE = 'ignore-case';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        return {
            allExceptions: this.getExceptions(options),
            ignoreCase: this.getIgnoreCase(options)
        };
    };
    Rule.prototype.getExceptions = function (options) {
        if (options.ruleArguments instanceof Array) {
            var ruleArg = options.ruleArguments[0];
            return typeof ruleArg === 'object' ? ruleArg.allow : options.ruleArguments;
        }
        if (options instanceof Array) {
            return typeof options[0] === 'object' ? options[0].allow : options;
        }
        return undefined;
    };
    Rule.prototype.getIgnoreCase = function (options) {
        if (options instanceof Array) {
            return typeof options[0] === 'object' ? options[0]['ignore-case'] : true;
        }
        return true;
    };
    Rule.metadata = {
        ruleName: 'export-name',
        type: 'maintainability',
        description: 'The name of the exported module must match the filename of the source file',
        options: {
            type: 'list',
            listType: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'object',
                        properties: {
                            'ignore-case': {
                                type: 'boolean'
                            },
                            allow: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                ]
            }
        },
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '710'
    };
    Rule.FAILURE_STRING = 'The exported module or identifier name must match the file name. Found: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function isExportedDeclaration(element) {
    return element.modifiers !== undefined && AstUtils_1.AstUtils.hasModifier(element.modifiers, ts.SyntaxKind.ExportKeyword);
}
function isExportStatement(node) {
    return ts.isExportAssignment(node) || ts.isExportDeclaration(node);
}
function getExportsFromStatement(node) {
    if (ts.isExportAssignment(node)) {
        return [[node.expression.getText(), node.expression]];
    }
    if (node.exportClause) {
        var symbolAndNodes_1 = [];
        node.exportClause.elements.forEach(function (e) {
            symbolAndNodes_1.push([e.name.getText(), node]);
        });
        return symbolAndNodes_1;
    }
    return [];
}
function walk(ctx) {
    var _a = ctx.options, allExceptions = _a.allExceptions, ignoreCase = _a.ignoreCase;
    function getExportStatementsWithinModules(moduleDeclaration) {
        if (moduleDeclaration.body === undefined) {
            return undefined;
        }
        if (moduleDeclaration.body.kind === ts.SyntaxKind.ModuleDeclaration) {
            return getExportStatementsWithinModules(moduleDeclaration.body);
        }
        if (moduleDeclaration.body.kind === ts.SyntaxKind.ModuleBlock) {
            var moduleBlock = moduleDeclaration.body;
            return moduleBlock.statements.filter(isExportedDeclaration);
        }
        return undefined;
    }
    function validateExportedElements(exportedElements) {
        if (exportedElements.length === 1) {
            var element = exportedElements[0];
            if (ts.isModuleDeclaration(element) || ts.isClassDeclaration(element) || ts.isFunctionDeclaration(element)) {
                if (element.name !== undefined) {
                    validateExport(element.name.text, exportedElements[0]);
                }
            }
            else if (exportedElements[0].kind === ts.SyntaxKind.VariableStatement) {
                var variableStatement = exportedElements[0];
                if (variableStatement.declarationList.declarations.length === 1) {
                    var variableDeclaration = variableStatement.declarationList.declarations[0];
                    validateExport(variableDeclaration.name.getText(), variableDeclaration);
                }
            }
        }
    }
    function validateExport(exportedName, tsNode) {
        var flags = ignoreCase ? 'i' : '';
        var regex = new RegExp("^" + exportedName + "\\..+", flags);
        var fileName = Utils_1.Utils.fileBasename(ctx.sourceFile.fileName);
        var fileNameAsCamelCase = convertSnakeOrKebabCaseName(fileName);
        if (!regex.test(fileNameAsCamelCase)) {
            if (!isSuppressed(exportedName)) {
                var failureString = Rule.FAILURE_STRING + fileName + ' and ' + exportedName;
                ctx.addFailureAt(tsNode.getStart(), tsNode.getWidth(), failureString);
            }
        }
    }
    function convertSnakeOrKebabCaseName(rawName) {
        var snakeOrKebabRegex = /((\-|\_)\w)/g;
        return rawName.replace(snakeOrKebabRegex, function (match) { return match[1].toUpperCase(); });
    }
    function isSuppressed(exportedName) {
        return Utils_1.Utils.exists(allExceptions, function (exception) {
            return new RegExp(exception).test(exportedName);
        });
    }
    var node = ctx.sourceFile;
    var singleExport = node.statements.filter(isExportStatement);
    if (singleExport.length === 1) {
        var symbolsAndNodes = getExportsFromStatement(singleExport[0]);
        if (symbolsAndNodes.length === 1) {
            validateExport(symbolsAndNodes[0][0], symbolsAndNodes[0][1]);
        }
        return;
    }
    var exportedTopLevelElements = node.statements.filter(isExportedDeclaration);
    if (exportedTopLevelElements.length === 0) {
        node.statements.forEach(function (element) {
            if (tsutils.isModuleDeclaration(element)) {
                var exportStatements = getExportStatementsWithinModules(element) || [];
                exportedTopLevelElements = exportedTopLevelElements.concat(exportStatements);
            }
        });
    }
    validateExportedElements(exportedTopLevelElements);
}
//# sourceMappingURL=exportNameRule.js.map