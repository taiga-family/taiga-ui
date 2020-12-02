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
var PROPS_REGEX = 'props-interface-regex';
var STATE_REGEX = 'state-interface-regex';
var FAILURE_UNUSED_PROP = 'Unused React property defined in interface: ';
var FAILURE_UNUSED_STATE = 'Unused React state defined in interface: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.languageVariant === ts.LanguageVariant.JSX) {
            return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
        }
        return [];
    };
    Rule.prototype.parseOptions = function (options) {
        var _this = this;
        var parsed = {
            propsInterfaceRegex: /^Props$/,
            stateInterfaceRegex: /^State$/
        };
        options.ruleArguments.forEach(function (opt) {
            if (TypeGuard_1.isObject(opt)) {
                parsed.propsInterfaceRegex = _this.getOptionOrDefault(opt, PROPS_REGEX, parsed.propsInterfaceRegex);
                parsed.stateInterfaceRegex = _this.getOptionOrDefault(opt, STATE_REGEX, parsed.stateInterfaceRegex);
            }
        });
        return parsed;
    };
    Rule.prototype.getOptionOrDefault = function (option, key, defaultValue) {
        try {
            var value = option[key];
            if (value !== undefined && typeof value === 'string') {
                return new RegExp(value);
            }
        }
        catch (e) {
            console.error('Could not read ' + key + ' within react-unused-props-and-state-name configuration');
        }
        return defaultValue;
    };
    Rule.metadata = {
        ruleName: 'react-unused-props-and-state',
        type: 'maintainability',
        description: 'Remove unneeded properties defined in React Props and State interfaces',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Correctness',
        commonWeaknessEnumeration: '398'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var propNames = [];
    var propNodes = {};
    var stateNames = [];
    var stateNodes = {};
    var classDeclarations = [];
    var arrowFunctions = [];
    var functionComponents = [];
    var propsAlias;
    var stateAlias;
    function getTypeElementData(node) {
        var result = {};
        node.members.forEach(function (typeElement) {
            if (typeElement.name !== undefined) {
                var text = typeElement.name.getText();
                if (text !== undefined) {
                    result[text] = typeElement;
                }
            }
        });
        return result;
    }
    function getTypeLiteralData(node) {
        var result = {};
        node.members.forEach(function (typeElement) {
            if (typeElement.name !== undefined) {
                var text = typeElement.name.getText();
                if (text !== undefined) {
                    result[text] = typeElement;
                }
            }
        });
        return result;
    }
    function getObjectBindingData(node) {
        var result = {};
        node.elements.forEach(function (element) {
            if (element.name !== undefined) {
                var text = element.name.getText();
                if (text !== undefined) {
                    result[text] = element;
                }
            }
        });
        return result;
    }
    function isParentNodeSuperCall(node) {
        if (node.parent !== undefined && node.parent.kind === ts.SyntaxKind.CallExpression) {
            var call = node.parent;
            return call.expression.getText() === 'super';
        }
        return false;
    }
    function inspectPropUsageInObjectBinding(name) {
        var bindingElements = getObjectBindingData(name);
        var foundPropNames = Object.keys(bindingElements);
        for (var _i = 0, foundPropNames_1 = foundPropNames; _i < foundPropNames_1.length; _i++) {
            var propName = foundPropNames_1[_i];
            propNames = Utils_1.Utils.remove(propNames, propName);
        }
    }
    function lookForReactSpecificArrowFunction(node) {
        var nodeTypeText = node.typeName.getText();
        var isReactFunctionComponentType = nodeTypeText === 'React.SFC' ||
            nodeTypeText === 'SFC' ||
            nodeTypeText === 'React.FC' ||
            nodeTypeText === 'FC' ||
            nodeTypeText === 'React.StatelessComponent' ||
            nodeTypeText === 'StatelessComponent' ||
            nodeTypeText === 'React.FunctionComponent' ||
            nodeTypeText === 'FunctionComponent';
        if (!isReactFunctionComponentType) {
            return;
        }
        if (!node.typeArguments || node.typeArguments.length !== 1) {
            return;
        }
        var typeArgument = node.typeArguments[0];
        if (tsutils.isTypeLiteralNode(typeArgument)) {
            propNodes = getTypeLiteralData(typeArgument);
            propNames = Object.keys(propNodes);
        }
        else {
        }
        var arrowFunction = tsutils.getChildOfKind(node.parent, ts.SyntaxKind.ArrowFunction);
        if (!arrowFunction || !tsutils.isArrowFunction(arrowFunction)) {
            return;
        }
        lookForArrowFunction(arrowFunction);
    }
    function lookForArrowFunction(node) {
        var parameters = node.parameters;
        if (parameters.length !== 1) {
            return;
        }
        var firstParameter = parameters[0];
        var name = firstParameter.name, type = firstParameter.type;
        if (type && tsutils.isTypeReferenceNode(type)) {
            var typeName = type.typeName.getText();
            if (!ctx.options.propsInterfaceRegex.test(typeName)) {
                return;
            }
        }
        if (tsutils.isIdentifier(name)) {
            propsAlias = name.getText();
        }
        else if (tsutils.isObjectBindingPattern(name)) {
            inspectPropUsageInObjectBinding(name);
        }
        arrowFunctions.push(node);
    }
    function lookForFunctionComponent(node) {
        if (!node.body) {
            return;
        }
        var parameters = node.parameters;
        if (parameters.length !== 1) {
            return;
        }
        var firstParameter = parameters[0];
        var name = firstParameter.name, type = firstParameter.type;
        if (type && tsutils.isTypeReferenceNode(type)) {
            var typeName = type.typeName.getText();
            if (!ctx.options.propsInterfaceRegex.test(typeName)) {
                return;
            }
        }
        if (tsutils.isIdentifier(name)) {
            propsAlias = name.getText();
        }
        else if (tsutils.isObjectBindingPattern(name)) {
            inspectPropUsageInObjectBinding(name);
        }
        functionComponents.push(node.body);
    }
    function cb(node) {
        if (tsutils.isClassDeclaration(node)) {
            classDeclarations.push(node);
            return;
        }
        if (tsutils.isConstructorDeclaration(node)) {
            if (node.parameters.length > 0) {
                propsAlias = node.parameters[0].name.text;
            }
            ts.forEachChild(node, cb);
            propsAlias = undefined;
            return;
        }
        if (tsutils.isMethodDeclaration(node)) {
            var methodName = node.name.text;
            if (/componentWillReceiveProps|shouldComponentUpdate|componentWillUpdate|componentDidUpdate/.test(methodName) &&
                node.parameters.length > 0) {
                propsAlias = node.parameters[0].name.text;
            }
            if (/shouldComponentUpdate|componentWillUpdate|componentDidUpdate/.test(methodName) && node.parameters.length > 1) {
                stateAlias = node.parameters[1].name.text;
            }
            ts.forEachChild(node, cb);
            propsAlias = undefined;
            stateAlias = undefined;
            return;
        }
        if (tsutils.isInterfaceDeclaration(node)) {
            if (ctx.options.propsInterfaceRegex.test(node.name.text)) {
                propNodes = getTypeElementData(node);
                propNames = Object.keys(propNodes);
            }
            if (ctx.options.stateInterfaceRegex.test(node.name.text)) {
                stateNodes = getTypeElementData(node);
                stateNames = Object.keys(stateNodes);
            }
        }
        else if (tsutils.isPropertyAccessExpression(node)) {
            var referencedPropertyName = node.getText();
            if (/this\.props\..*/.test(referencedPropertyName)) {
                propNames = Utils_1.Utils.remove(propNames, referencedPropertyName.substring(11));
            }
            else if (/this\.state\..*/.test(referencedPropertyName)) {
                stateNames = Utils_1.Utils.remove(stateNames, referencedPropertyName.substring(11));
            }
            if (propsAlias !== undefined) {
                if (new RegExp(propsAlias + '\\..*').test(referencedPropertyName)) {
                    propNames = Utils_1.Utils.remove(propNames, referencedPropertyName.substring(propsAlias.length + 1));
                }
            }
            if (stateAlias !== undefined) {
                if (new RegExp(stateAlias + '\\..*').test(referencedPropertyName)) {
                    stateNames = Utils_1.Utils.remove(stateNames, referencedPropertyName.substring(stateAlias.length + 1));
                }
            }
            if (node.parent.kind !== ts.SyntaxKind.PropertyAccessExpression) {
                if (referencedPropertyName === 'this.props') {
                    propNames = [];
                }
                else if (referencedPropertyName === 'this.state') {
                    stateNames = [];
                }
            }
        }
        else if (tsutils.isIdentifier(node)) {
            if (propsAlias !== undefined) {
                if (node.text === propsAlias &&
                    node.parent.kind !== ts.SyntaxKind.PropertyAccessExpression &&
                    node.parent.kind !== ts.SyntaxKind.Parameter &&
                    isParentNodeSuperCall(node) === false) {
                    propNames = [];
                }
            }
            if (stateAlias !== undefined) {
                if (node.text === stateAlias &&
                    node.parent.kind !== ts.SyntaxKind.PropertyAccessExpression &&
                    node.parent.kind !== ts.SyntaxKind.Parameter) {
                    stateNames = [];
                }
            }
        }
        else if (tsutils.isTypeReferenceNode(node)) {
            lookForReactSpecificArrowFunction(node);
        }
        else if (tsutils.isArrowFunction(node)) {
            lookForArrowFunction(node);
        }
        else if (tsutils.isFunctionDeclaration(node)) {
            lookForFunctionComponent(node);
        }
        else if (tsutils.isFunctionExpression(node)) {
            lookForFunctionComponent(node);
        }
        return ts.forEachChild(node, cb);
    }
    ts.forEachChild(ctx.sourceFile, cb);
    if (propNames.length > 0 || stateNames.length > 0) {
        classDeclarations.forEach(function (c) { return ts.forEachChild(c, cb); });
        arrowFunctions.forEach(function (c) { return ts.forEachChild(c.body, cb); });
        functionComponents.forEach(function (f) { return ts.forEachChild(f, cb); });
    }
    propNames.forEach(function (propName) {
        var typeElement = propNodes[propName];
        ctx.addFailureAt(typeElement.getStart(), typeElement.getWidth(), FAILURE_UNUSED_PROP + propName);
    });
    stateNames.forEach(function (stateName) {
        var typeElement = stateNodes[stateName];
        ctx.addFailureAt(typeElement.getStart(), typeElement.getWidth(), FAILURE_UNUSED_STATE + stateName);
    });
}
//# sourceMappingURL=reactUnusedPropsAndStateRule.js.map