/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/metadata/evaluator", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/metadata/schema"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var schema_1 = require("@angular/compiler-cli/src/metadata/schema");
    // In TypeScript 2.1 the spread element kind was renamed.
    var spreadElementSyntaxKind = ts.SyntaxKind.SpreadElement || ts.SyntaxKind.SpreadElementExpression;
    function isMethodCallOf(callExpression, memberName) {
        var expression = callExpression.expression;
        if (expression.kind === ts.SyntaxKind.PropertyAccessExpression) {
            var propertyAccessExpression = expression;
            var name = propertyAccessExpression.name;
            if (name.kind == ts.SyntaxKind.Identifier) {
                return name.text === memberName;
            }
        }
        return false;
    }
    function isCallOf(callExpression, ident) {
        var expression = callExpression.expression;
        if (expression.kind === ts.SyntaxKind.Identifier) {
            var identifier = expression;
            return identifier.text === ident;
        }
        return false;
    }
    /* @internal */
    function recordMapEntry(entry, node, nodeMap, sourceFile) {
        if (!nodeMap.has(entry)) {
            nodeMap.set(entry, node);
            if (node &&
                (schema_1.isMetadataImportedSymbolReferenceExpression(entry) ||
                    schema_1.isMetadataImportDefaultReference(entry)) &&
                entry.line == null) {
                var info = sourceInfo(node, sourceFile);
                if (info.line != null)
                    entry.line = info.line;
                if (info.character != null)
                    entry.character = info.character;
            }
        }
        return entry;
    }
    exports.recordMapEntry = recordMapEntry;
    /**
     * ts.forEachChild stops iterating children when the callback return a truthy value.
     * This method inverts this to implement an `every` style iterator. It will return
     * true if every call to `cb` returns `true`.
     */
    function everyNodeChild(node, cb) {
        return !ts.forEachChild(node, function (node) { return !cb(node); });
    }
    function isPrimitive(value) {
        return Object(value) !== value;
    }
    exports.isPrimitive = isPrimitive;
    function isDefined(obj) {
        return obj !== undefined;
    }
    function getSourceFileOfNode(node) {
        while (node && node.kind != ts.SyntaxKind.SourceFile) {
            node = node.parent;
        }
        return node;
    }
    /* @internal */
    function sourceInfo(node, sourceFile) {
        if (node) {
            sourceFile = sourceFile || getSourceFileOfNode(node);
            if (sourceFile) {
                return ts.getLineAndCharacterOfPosition(sourceFile, node.getStart(sourceFile));
            }
        }
        return {};
    }
    exports.sourceInfo = sourceInfo;
    /* @internal */
    function errorSymbol(message, node, context, sourceFile) {
        var result = tslib_1.__assign({ __symbolic: 'error', message: message }, sourceInfo(node, sourceFile));
        if (context) {
            result.context = context;
        }
        return result;
    }
    exports.errorSymbol = errorSymbol;
    /**
     * Produce a symbolic representation of an expression folding values into their final value when
     * possible.
     */
    var Evaluator = /** @class */ (function () {
        function Evaluator(symbols, nodeMap, options, recordExport) {
            if (options === void 0) { options = {}; }
            this.symbols = symbols;
            this.nodeMap = nodeMap;
            this.options = options;
            this.recordExport = recordExport;
        }
        Evaluator.prototype.nameOf = function (node) {
            if (node && node.kind == ts.SyntaxKind.Identifier) {
                return node.text;
            }
            var result = node && this.evaluateNode(node);
            if (schema_1.isMetadataError(result) || typeof result === 'string') {
                return result;
            }
            else {
                return errorSymbol('Name expected', node, { received: (node && node.getText()) || '<missing>' });
            }
        };
        /**
         * Returns true if the expression represented by `node` can be folded into a literal expression.
         *
         * For example, a literal is always foldable. This means that literal expressions such as `1.2`
         * `"Some value"` `true` `false` are foldable.
         *
         * - An object literal is foldable if all the properties in the literal are foldable.
         * - An array literal is foldable if all the elements are foldable.
         * - A call is foldable if it is a call to a Array.prototype.concat or a call to CONST_EXPR.
         * - A property access is foldable if the object is foldable.
         * - A array index is foldable if index expression is foldable and the array is foldable.
         * - Binary operator expressions are foldable if the left and right expressions are foldable and
         *   it is one of '+', '-', '*', '/', '%', '||', and '&&'.
         * - An identifier is foldable if a value can be found for its symbol in the evaluator symbol
         *   table.
         */
        Evaluator.prototype.isFoldable = function (node) {
            return this.isFoldableWorker(node, new Map());
        };
        Evaluator.prototype.isFoldableWorker = function (node, folding) {
            var _this = this;
            if (node) {
                switch (node.kind) {
                    case ts.SyntaxKind.ObjectLiteralExpression:
                        return everyNodeChild(node, function (child) {
                            if (child.kind === ts.SyntaxKind.PropertyAssignment) {
                                var propertyAssignment = child;
                                return _this.isFoldableWorker(propertyAssignment.initializer, folding);
                            }
                            return false;
                        });
                    case ts.SyntaxKind.ArrayLiteralExpression:
                        return everyNodeChild(node, function (child) { return _this.isFoldableWorker(child, folding); });
                    case ts.SyntaxKind.CallExpression:
                        var callExpression = node;
                        // We can fold a <array>.concat(<v>).
                        if (isMethodCallOf(callExpression, 'concat') &&
                            arrayOrEmpty(callExpression.arguments).length === 1) {
                            var arrayNode = callExpression.expression.expression;
                            if (this.isFoldableWorker(arrayNode, folding) &&
                                this.isFoldableWorker(callExpression.arguments[0], folding)) {
                                // It needs to be an array.
                                var arrayValue = this.evaluateNode(arrayNode);
                                if (arrayValue && Array.isArray(arrayValue)) {
                                    return true;
                                }
                            }
                        }
                        // We can fold a call to CONST_EXPR
                        if (isCallOf(callExpression, 'CONST_EXPR') &&
                            arrayOrEmpty(callExpression.arguments).length === 1)
                            return this.isFoldableWorker(callExpression.arguments[0], folding);
                        return false;
                    case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
                    case ts.SyntaxKind.StringLiteral:
                    case ts.SyntaxKind.NumericLiteral:
                    case ts.SyntaxKind.NullKeyword:
                    case ts.SyntaxKind.TrueKeyword:
                    case ts.SyntaxKind.FalseKeyword:
                    case ts.SyntaxKind.TemplateHead:
                    case ts.SyntaxKind.TemplateMiddle:
                    case ts.SyntaxKind.TemplateTail:
                        return true;
                    case ts.SyntaxKind.ParenthesizedExpression:
                        var parenthesizedExpression = node;
                        return this.isFoldableWorker(parenthesizedExpression.expression, folding);
                    case ts.SyntaxKind.BinaryExpression:
                        var binaryExpression = node;
                        switch (binaryExpression.operatorToken.kind) {
                            case ts.SyntaxKind.PlusToken:
                            case ts.SyntaxKind.MinusToken:
                            case ts.SyntaxKind.AsteriskToken:
                            case ts.SyntaxKind.SlashToken:
                            case ts.SyntaxKind.PercentToken:
                            case ts.SyntaxKind.AmpersandAmpersandToken:
                            case ts.SyntaxKind.BarBarToken:
                                return this.isFoldableWorker(binaryExpression.left, folding) &&
                                    this.isFoldableWorker(binaryExpression.right, folding);
                            default:
                                return false;
                        }
                    case ts.SyntaxKind.PropertyAccessExpression:
                        var propertyAccessExpression = node;
                        return this.isFoldableWorker(propertyAccessExpression.expression, folding);
                    case ts.SyntaxKind.ElementAccessExpression:
                        var elementAccessExpression = node;
                        return this.isFoldableWorker(elementAccessExpression.expression, folding) &&
                            this.isFoldableWorker(elementAccessExpression.argumentExpression, folding);
                    case ts.SyntaxKind.Identifier:
                        var identifier = node;
                        var reference = this.symbols.resolve(identifier.text);
                        if (reference !== undefined && isPrimitive(reference)) {
                            return true;
                        }
                        break;
                    case ts.SyntaxKind.TemplateExpression:
                        var templateExpression = node;
                        return templateExpression.templateSpans.every(function (span) { return _this.isFoldableWorker(span.expression, folding); });
                }
            }
            return false;
        };
        /**
         * Produce a JSON serialiable object representing `node`. The foldable values in the expression
         * tree are folded. For example, a node representing `1 + 2` is folded into `3`.
         */
        Evaluator.prototype.evaluateNode = function (node, preferReference) {
            var _this = this;
            var t = this;
            var error;
            function recordEntry(entry, node) {
                if (t.options.substituteExpression) {
                    var newEntry = t.options.substituteExpression(entry, node);
                    if (t.recordExport && newEntry != entry && schema_1.isMetadataGlobalReferenceExpression(newEntry)) {
                        t.recordExport(newEntry.name, entry);
                    }
                    entry = newEntry;
                }
                return recordMapEntry(entry, node, t.nodeMap);
            }
            function isFoldableError(value) {
                return !t.options.verboseInvalidExpression && schema_1.isMetadataError(value);
            }
            var resolveName = function (name, preferReference) {
                var reference = _this.symbols.resolve(name, preferReference);
                if (reference === undefined) {
                    // Encode as a global reference. StaticReflector will check the reference.
                    return recordEntry({ __symbolic: 'reference', name: name }, node);
                }
                if (reference && schema_1.isMetadataSymbolicReferenceExpression(reference)) {
                    return recordEntry(tslib_1.__assign({}, reference), node);
                }
                return reference;
            };
            switch (node.kind) {
                case ts.SyntaxKind.ObjectLiteralExpression:
                    var obj_1 = {};
                    var quoted_1 = [];
                    ts.forEachChild(node, function (child) {
                        switch (child.kind) {
                            case ts.SyntaxKind.ShorthandPropertyAssignment:
                            case ts.SyntaxKind.PropertyAssignment:
                                var assignment = child;
                                if (assignment.name.kind == ts.SyntaxKind.StringLiteral) {
                                    var name_1 = assignment.name.text;
                                    quoted_1.push(name_1);
                                }
                                var propertyName = _this.nameOf(assignment.name);
                                if (isFoldableError(propertyName)) {
                                    error = propertyName;
                                    return true;
                                }
                                var propertyValue = isPropertyAssignment(assignment) ?
                                    _this.evaluateNode(assignment.initializer, /* preferReference */ true) :
                                    resolveName(propertyName, /* preferReference */ true);
                                if (isFoldableError(propertyValue)) {
                                    error = propertyValue;
                                    return true; // Stop the forEachChild.
                                }
                                else {
                                    obj_1[propertyName] = isPropertyAssignment(assignment) ?
                                        recordEntry(propertyValue, assignment.initializer) :
                                        propertyValue;
                                }
                        }
                    });
                    if (error)
                        return error;
                    if (this.options.quotedNames && quoted_1.length) {
                        obj_1['$quoted$'] = quoted_1;
                    }
                    return recordEntry(obj_1, node);
                case ts.SyntaxKind.ArrayLiteralExpression:
                    var arr_1 = [];
                    ts.forEachChild(node, function (child) {
                        var e_1, _a;
                        var value = _this.evaluateNode(child, /* preferReference */ true);
                        // Check for error
                        if (isFoldableError(value)) {
                            error = value;
                            return true; // Stop the forEachChild.
                        }
                        // Handle spread expressions
                        if (schema_1.isMetadataSymbolicSpreadExpression(value)) {
                            if (Array.isArray(value.expression)) {
                                try {
                                    for (var _b = tslib_1.__values(value.expression), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var spreadValue = _c.value;
                                        arr_1.push(spreadValue);
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                return;
                            }
                        }
                        arr_1.push(value);
                    });
                    if (error)
                        return error;
                    return recordEntry(arr_1, node);
                case spreadElementSyntaxKind:
                    var spreadExpression = this.evaluateNode(node.expression);
                    return recordEntry({ __symbolic: 'spread', expression: spreadExpression }, node);
                case ts.SyntaxKind.CallExpression:
                    var callExpression = node;
                    if (isCallOf(callExpression, 'forwardRef') &&
                        arrayOrEmpty(callExpression.arguments).length === 1) {
                        var firstArgument = callExpression.arguments[0];
                        if (firstArgument.kind == ts.SyntaxKind.ArrowFunction) {
                            var arrowFunction = firstArgument;
                            return recordEntry(this.evaluateNode(arrowFunction.body), node);
                        }
                    }
                    var args = arrayOrEmpty(callExpression.arguments).map(function (arg) { return _this.evaluateNode(arg); });
                    if (this.isFoldable(callExpression)) {
                        if (isMethodCallOf(callExpression, 'concat')) {
                            var arrayValue = this.evaluateNode(callExpression.expression.expression);
                            if (isFoldableError(arrayValue))
                                return arrayValue;
                            return arrayValue.concat(args[0]);
                        }
                    }
                    // Always fold a CONST_EXPR even if the argument is not foldable.
                    if (isCallOf(callExpression, 'CONST_EXPR') &&
                        arrayOrEmpty(callExpression.arguments).length === 1) {
                        return recordEntry(args[0], node);
                    }
                    var expression = this.evaluateNode(callExpression.expression);
                    if (isFoldableError(expression)) {
                        return recordEntry(expression, node);
                    }
                    var result = { __symbolic: 'call', expression: expression };
                    if (args && args.length) {
                        result.arguments = args;
                    }
                    return recordEntry(result, node);
                case ts.SyntaxKind.NewExpression:
                    var newExpression = node;
                    var newArgs = arrayOrEmpty(newExpression.arguments).map(function (arg) { return _this.evaluateNode(arg); });
                    var newTarget = this.evaluateNode(newExpression.expression);
                    if (schema_1.isMetadataError(newTarget)) {
                        return recordEntry(newTarget, node);
                    }
                    var call = { __symbolic: 'new', expression: newTarget };
                    if (newArgs.length) {
                        call.arguments = newArgs;
                    }
                    return recordEntry(call, node);
                case ts.SyntaxKind.PropertyAccessExpression: {
                    var propertyAccessExpression = node;
                    var expression_1 = this.evaluateNode(propertyAccessExpression.expression);
                    if (isFoldableError(expression_1)) {
                        return recordEntry(expression_1, node);
                    }
                    var member = this.nameOf(propertyAccessExpression.name);
                    if (isFoldableError(member)) {
                        return recordEntry(member, node);
                    }
                    if (expression_1 && this.isFoldable(propertyAccessExpression.expression))
                        return expression_1[member];
                    if (schema_1.isMetadataModuleReferenceExpression(expression_1)) {
                        // A select into a module reference and be converted into a reference to the symbol
                        // in the module
                        return recordEntry({ __symbolic: 'reference', module: expression_1.module, name: member }, node);
                    }
                    return recordEntry({ __symbolic: 'select', expression: expression_1, member: member }, node);
                }
                case ts.SyntaxKind.ElementAccessExpression: {
                    var elementAccessExpression = node;
                    var expression_2 = this.evaluateNode(elementAccessExpression.expression);
                    if (isFoldableError(expression_2)) {
                        return recordEntry(expression_2, node);
                    }
                    if (!elementAccessExpression.argumentExpression) {
                        return recordEntry(errorSymbol('Expression form not supported', node), node);
                    }
                    var index = this.evaluateNode(elementAccessExpression.argumentExpression);
                    if (isFoldableError(expression_2)) {
                        return recordEntry(expression_2, node);
                    }
                    if (this.isFoldable(elementAccessExpression.expression) &&
                        this.isFoldable(elementAccessExpression.argumentExpression))
                        return expression_2[index];
                    return recordEntry({ __symbolic: 'index', expression: expression_2, index: index }, node);
                }
                case ts.SyntaxKind.Identifier:
                    var identifier = node;
                    var name = identifier.text;
                    return resolveName(name, preferReference);
                case ts.SyntaxKind.TypeReference:
                    var typeReferenceNode = node;
                    var typeNameNode_1 = typeReferenceNode.typeName;
                    var getReference = function (node) {
                        if (typeNameNode_1.kind === ts.SyntaxKind.QualifiedName) {
                            var qualifiedName = node;
                            var left_1 = _this.evaluateNode(qualifiedName.left);
                            if (schema_1.isMetadataModuleReferenceExpression(left_1)) {
                                return recordEntry({
                                    __symbolic: 'reference',
                                    module: left_1.module,
                                    name: qualifiedName.right.text
                                }, node);
                            }
                            // Record a type reference to a declared type as a select.
                            return { __symbolic: 'select', expression: left_1, member: qualifiedName.right.text };
                        }
                        else {
                            var identifier_1 = typeNameNode_1;
                            var symbol = _this.symbols.resolve(identifier_1.text);
                            if (isFoldableError(symbol) || schema_1.isMetadataSymbolicReferenceExpression(symbol)) {
                                return recordEntry(symbol, node);
                            }
                            return recordEntry(errorSymbol('Could not resolve type', node, { typeName: identifier_1.text }), node);
                        }
                    };
                    var typeReference = getReference(typeNameNode_1);
                    if (isFoldableError(typeReference)) {
                        return recordEntry(typeReference, node);
                    }
                    if (!schema_1.isMetadataModuleReferenceExpression(typeReference) &&
                        typeReferenceNode.typeArguments && typeReferenceNode.typeArguments.length) {
                        var args_1 = typeReferenceNode.typeArguments.map(function (element) { return _this.evaluateNode(element); });
                        // TODO: Remove typecast when upgraded to 2.0 as it will be correctly inferred.
                        // Some versions of 1.9 do not infer this correctly.
                        typeReference.arguments = args_1;
                    }
                    return recordEntry(typeReference, node);
                case ts.SyntaxKind.UnionType:
                    var unionType = node;
                    // Remove null and undefined from the list of unions.
                    var references = unionType.types
                        .filter(function (n) { return n.kind != ts.SyntaxKind.NullKeyword &&
                        n.kind != ts.SyntaxKind.UndefinedKeyword; })
                        .map(function (n) { return _this.evaluateNode(n); });
                    // The remmaining reference must be the same. If two have type arguments consider them
                    // different even if the type arguments are the same.
                    var candidate = null;
                    for (var i = 0; i < references.length; i++) {
                        var reference = references[i];
                        if (schema_1.isMetadataSymbolicReferenceExpression(reference)) {
                            if (candidate) {
                                if (reference.name == candidate.name &&
                                    reference.module == candidate.module && !reference.arguments) {
                                    candidate = reference;
                                }
                            }
                            else {
                                candidate = reference;
                            }
                        }
                        else {
                            return reference;
                        }
                    }
                    if (candidate)
                        return candidate;
                    break;
                case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
                case ts.SyntaxKind.StringLiteral:
                case ts.SyntaxKind.TemplateHead:
                case ts.SyntaxKind.TemplateTail:
                case ts.SyntaxKind.TemplateMiddle:
                    return node.text;
                case ts.SyntaxKind.NumericLiteral:
                    return parseFloat(node.text);
                case ts.SyntaxKind.AnyKeyword:
                    return recordEntry({ __symbolic: 'reference', name: 'any' }, node);
                case ts.SyntaxKind.StringKeyword:
                    return recordEntry({ __symbolic: 'reference', name: 'string' }, node);
                case ts.SyntaxKind.NumberKeyword:
                    return recordEntry({ __symbolic: 'reference', name: 'number' }, node);
                case ts.SyntaxKind.BooleanKeyword:
                    return recordEntry({ __symbolic: 'reference', name: 'boolean' }, node);
                case ts.SyntaxKind.ArrayType:
                    var arrayTypeNode = node;
                    return recordEntry({
                        __symbolic: 'reference',
                        name: 'Array',
                        arguments: [this.evaluateNode(arrayTypeNode.elementType)]
                    }, node);
                case ts.SyntaxKind.NullKeyword:
                    return null;
                case ts.SyntaxKind.TrueKeyword:
                    return true;
                case ts.SyntaxKind.FalseKeyword:
                    return false;
                case ts.SyntaxKind.ParenthesizedExpression:
                    var parenthesizedExpression = node;
                    return this.evaluateNode(parenthesizedExpression.expression);
                case ts.SyntaxKind.TypeAssertionExpression:
                    var typeAssertion = node;
                    return this.evaluateNode(typeAssertion.expression);
                case ts.SyntaxKind.PrefixUnaryExpression:
                    var prefixUnaryExpression = node;
                    var operand = this.evaluateNode(prefixUnaryExpression.operand);
                    if (isDefined(operand) && isPrimitive(operand)) {
                        switch (prefixUnaryExpression.operator) {
                            case ts.SyntaxKind.PlusToken:
                                return +operand;
                            case ts.SyntaxKind.MinusToken:
                                return -operand;
                            case ts.SyntaxKind.TildeToken:
                                return ~operand;
                            case ts.SyntaxKind.ExclamationToken:
                                return !operand;
                        }
                    }
                    var operatorText = void 0;
                    switch (prefixUnaryExpression.operator) {
                        case ts.SyntaxKind.PlusToken:
                            operatorText = '+';
                            break;
                        case ts.SyntaxKind.MinusToken:
                            operatorText = '-';
                            break;
                        case ts.SyntaxKind.TildeToken:
                            operatorText = '~';
                            break;
                        case ts.SyntaxKind.ExclamationToken:
                            operatorText = '!';
                            break;
                        default:
                            return undefined;
                    }
                    return recordEntry({ __symbolic: 'pre', operator: operatorText, operand: operand }, node);
                case ts.SyntaxKind.BinaryExpression:
                    var binaryExpression = node;
                    var left = this.evaluateNode(binaryExpression.left);
                    var right = this.evaluateNode(binaryExpression.right);
                    if (isDefined(left) && isDefined(right)) {
                        if (isPrimitive(left) && isPrimitive(right))
                            switch (binaryExpression.operatorToken.kind) {
                                case ts.SyntaxKind.BarBarToken:
                                    return left || right;
                                case ts.SyntaxKind.AmpersandAmpersandToken:
                                    return left && right;
                                case ts.SyntaxKind.AmpersandToken:
                                    return left & right;
                                case ts.SyntaxKind.BarToken:
                                    return left | right;
                                case ts.SyntaxKind.CaretToken:
                                    return left ^ right;
                                case ts.SyntaxKind.EqualsEqualsToken:
                                    return left == right;
                                case ts.SyntaxKind.ExclamationEqualsToken:
                                    return left != right;
                                case ts.SyntaxKind.EqualsEqualsEqualsToken:
                                    return left === right;
                                case ts.SyntaxKind.ExclamationEqualsEqualsToken:
                                    return left !== right;
                                case ts.SyntaxKind.LessThanToken:
                                    return left < right;
                                case ts.SyntaxKind.GreaterThanToken:
                                    return left > right;
                                case ts.SyntaxKind.LessThanEqualsToken:
                                    return left <= right;
                                case ts.SyntaxKind.GreaterThanEqualsToken:
                                    return left >= right;
                                case ts.SyntaxKind.LessThanLessThanToken:
                                    return left << right;
                                case ts.SyntaxKind.GreaterThanGreaterThanToken:
                                    return left >> right;
                                case ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
                                    return left >>> right;
                                case ts.SyntaxKind.PlusToken:
                                    return left + right;
                                case ts.SyntaxKind.MinusToken:
                                    return left - right;
                                case ts.SyntaxKind.AsteriskToken:
                                    return left * right;
                                case ts.SyntaxKind.SlashToken:
                                    return left / right;
                                case ts.SyntaxKind.PercentToken:
                                    return left % right;
                            }
                        return recordEntry({
                            __symbolic: 'binop',
                            operator: binaryExpression.operatorToken.getText(),
                            left: left,
                            right: right
                        }, node);
                    }
                    break;
                case ts.SyntaxKind.ConditionalExpression:
                    var conditionalExpression = node;
                    var condition = this.evaluateNode(conditionalExpression.condition);
                    var thenExpression = this.evaluateNode(conditionalExpression.whenTrue);
                    var elseExpression = this.evaluateNode(conditionalExpression.whenFalse);
                    if (isPrimitive(condition)) {
                        return condition ? thenExpression : elseExpression;
                    }
                    return recordEntry({ __symbolic: 'if', condition: condition, thenExpression: thenExpression, elseExpression: elseExpression }, node);
                case ts.SyntaxKind.FunctionExpression:
                case ts.SyntaxKind.ArrowFunction:
                    return recordEntry(errorSymbol('Lambda not supported', node), node);
                case ts.SyntaxKind.TaggedTemplateExpression:
                    return recordEntry(errorSymbol('Tagged template expressions are not supported in metadata', node), node);
                case ts.SyntaxKind.TemplateExpression:
                    var templateExpression = node;
                    if (this.isFoldable(node)) {
                        return templateExpression.templateSpans.reduce(function (previous, current) { return previous + _this.evaluateNode(current.expression) +
                            _this.evaluateNode(current.literal); }, this.evaluateNode(templateExpression.head));
                    }
                    else {
                        return templateExpression.templateSpans.reduce(function (previous, current) {
                            var expr = _this.evaluateNode(current.expression);
                            var literal = _this.evaluateNode(current.literal);
                            if (isFoldableError(expr))
                                return expr;
                            if (isFoldableError(literal))
                                return literal;
                            if (typeof previous === 'string' && typeof expr === 'string' &&
                                typeof literal === 'string') {
                                return previous + expr + literal;
                            }
                            var result = expr;
                            if (previous !== '') {
                                result = { __symbolic: 'binop', operator: '+', left: previous, right: expr };
                            }
                            if (literal != '') {
                                result = { __symbolic: 'binop', operator: '+', left: result, right: literal };
                            }
                            return result;
                        }, this.evaluateNode(templateExpression.head));
                    }
                case ts.SyntaxKind.AsExpression:
                    var asExpression = node;
                    return this.evaluateNode(asExpression.expression);
                case ts.SyntaxKind.ClassExpression:
                    return { __symbolic: 'class' };
            }
            return recordEntry(errorSymbol('Expression form not supported', node), node);
        };
        return Evaluator;
    }());
    exports.Evaluator = Evaluator;
    function isPropertyAssignment(node) {
        return node.kind == ts.SyntaxKind.PropertyAssignment;
    }
    var empty = ts.createNodeArray();
    function arrayOrEmpty(v) {
        return v || empty;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9tZXRhZGF0YS9ldmFsdWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBR2pDLG9FQUFxZDtJQUtyZCx5REFBeUQ7SUFDekQsSUFBTSx1QkFBdUIsR0FDeEIsRUFBRSxDQUFDLFVBQWtCLENBQUMsYUFBYSxJQUFLLEVBQUUsQ0FBQyxVQUFrQixDQUFDLHVCQUF1QixDQUFDO0lBRTNGLFNBQVMsY0FBYyxDQUFDLGNBQWlDLEVBQUUsVUFBa0I7UUFDM0UsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRTtZQUM5RCxJQUFNLHdCQUF3QixHQUFnQyxVQUFVLENBQUM7WUFDekUsSUFBTSxJQUFJLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQzthQUNqQztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsY0FBaUMsRUFBRSxLQUFhO1FBQ2hFLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQU0sVUFBVSxHQUFrQixVQUFVLENBQUM7WUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztTQUNsQztRQUNELE9BQU8s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Q0FBQyxVQUFVLENBQUMsWUFBWTtvQkFDN0IsSUFBTSxZQUFZLEdBQW9CLElBQUksQ0FBQztvQkFDM0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWU7b0JBQ2hDLE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FBQyxBQWpqQkQsSUFpakJDO0lBampCWSw4QkFBUztJQW1qQnRCLFNBQVMsb0JBQW9CLENBQUMsSUFBYTtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBTyxDQUFDO0lBRXhDLFNBQVMsWUFBWSxDQUFvQixDQUE0QjtRQUNuRSxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7Q29sbGVjdG9yT3B0aW9uc30gZnJvbSAnLi9jb2xsZWN0b3InO1xuaW1wb3J0IHtDbGFzc01ldGFkYXRhLCBGdW5jdGlvbk1ldGFkYXRhLCBJbnRlcmZhY2VNZXRhZGF0YSwgaXNNZXRhZGF0YUVycm9yLCBpc01ldGFkYXRhR2xvYmFsUmVmZXJlbmNlRXhwcmVzc2lvbiwgaXNNZXRhZGF0YUltcG9ydERlZmF1bHRSZWZlcmVuY2UsIGlzTWV0YWRhdGFJbXBvcnRlZFN5bWJvbFJlZmVyZW5jZUV4cHJlc3Npb24sIGlzTWV0YWRhdGFNb2R1bGVSZWZlcmVuY2VFeHByZXNzaW9uLCBpc01ldGFkYXRhU3ltYm9saWNSZWZlcmVuY2VFeHByZXNzaW9uLCBpc01ldGFkYXRhU3ltYm9saWNTcHJlYWRFeHByZXNzaW9uLCBNZXRhZGF0YUVudHJ5LCBNZXRhZGF0YUVycm9yLCBNZXRhZGF0YUltcG9ydGVkU3ltYm9sUmVmZXJlbmNlRXhwcmVzc2lvbiwgTWV0YWRhdGFTb3VyY2VMb2NhdGlvbkluZm8sIE1ldGFkYXRhU3ltYm9saWNDYWxsRXhwcmVzc2lvbiwgTWV0YWRhdGFWYWx1ZX0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHtTeW1ib2xzfSBmcm9tICcuL3N5bWJvbHMnO1xuXG5cblxuLy8gSW4gVHlwZVNjcmlwdCAyLjEgdGhlIHNwcmVhZCBlbGVtZW50IGtpbmQgd2FzIHJlbmFtZWQuXG5jb25zdCBzcHJlYWRFbGVtZW50U3ludGF4S2luZDogdHMuU3ludGF4S2luZCA9XG4gICAgKHRzLlN5bnRheEtpbmQgYXMgYW55KS5TcHJlYWRFbGVtZW50IHx8ICh0cy5TeW50YXhLaW5kIGFzIGFueSkuU3ByZWFkRWxlbWVudEV4cHJlc3Npb247XG5cbmZ1bmN0aW9uIGlzTWV0aG9kQ2FsbE9mKGNhbGxFeHByZXNzaW9uOiB0cy5DYWxsRXhwcmVzc2lvbiwgbWVtYmVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBjYWxsRXhwcmVzc2lvbi5leHByZXNzaW9uO1xuICBpZiAoZXhwcmVzc2lvbi5raW5kID09PSB0cy5TeW50YXhLaW5kLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbiA9IDx0cy5Qcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+ZXhwcmVzc2lvbjtcbiAgICBjb25zdCBuYW1lID0gcHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLm5hbWU7XG4gICAgaWYgKG5hbWUua2luZCA9PSB0cy5TeW50YXhLaW5kLklkZW50aWZpZXIpIHtcbiAgICAgIHJldHVybiBuYW1lLnRleHQgPT09IG1lbWJlck5hbWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNDYWxsT2YoY2FsbEV4cHJlc3Npb246IHRzLkNhbGxFeHByZXNzaW9uLCBpZGVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBjYWxsRXhwcmVzc2lvbi5leHByZXNzaW9uO1xuICBpZiAoZXhwcmVzc2lvbi5raW5kID09PSB0cy5TeW50YXhLaW5kLklkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gPHRzLklkZW50aWZpZXI+ZXhwcmVzc2lvbjtcbiAgICByZXR1cm4gaWRlbnRpZmllci50ZXh0ID09PSBpZGVudDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZE1hcEVudHJ5PFQgZXh0ZW5kcyBNZXRhZGF0YUVudHJ5PihcbiAgICBlbnRyeTogVCwgbm9kZTogdHMuTm9kZSxcbiAgICBub2RlTWFwOiBNYXA8TWV0YWRhdGFWYWx1ZXxDbGFzc01ldGFkYXRhfEludGVyZmFjZU1ldGFkYXRhfEZ1bmN0aW9uTWV0YWRhdGEsIHRzLk5vZGU+LFxuICAgIHNvdXJjZUZpbGU/OiB0cy5Tb3VyY2VGaWxlKSB7XG4gIGlmICghbm9kZU1hcC5oYXMoZW50cnkpKSB7XG4gICAgbm9kZU1hcC5zZXQoZW50cnksIG5vZGUpO1xuICAgIGlmIChub2RlICYmXG4gICAgICAgIChpc01ldGFkYXRhSW1wb3J0ZWRTeW1ib2xSZWZlcmVuY2VFeHByZXNzaW9uKGVudHJ5KSB8fFxuICAgICAgICAgaXNNZXRhZGF0YUltcG9ydERlZmF1bHRSZWZlcmVuY2UoZW50cnkpKSAmJlxuICAgICAgICBlbnRyeS5saW5lID09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZm8gPSBzb3VyY2VJbmZvKG5vZGUsIHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGluZm8ubGluZSAhPSBudWxsKSBlbnRyeS5saW5lID0gaW5mby5saW5lO1xuICAgICAgaWYgKGluZm8uY2hhcmFjdGVyICE9IG51bGwpIGVudHJ5LmNoYXJhY3RlciA9IGluZm8uY2hhcmFjdGVyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW50cnk7XG59XG5cbi8qKlxuICogdHMuZm9yRWFjaENoaWxkIHN0b3BzIGl0ZXJhdGluZyBjaGlsZHJlbiB3aGVuIHRoZSBjYWxsYmFjayByZXR1cm4gYSB0cnV0aHkgdmFsdWUuXG4gKiBUaGlzIG1ldGhvZCBpbnZlcnRzIHRoaXMgdG8gaW1wbGVtZW50IGFuIGBldmVyeWAgc3R5bGUgaXRlcmF0b3IuIEl0IHdpbGwgcmV0dXJuXG4gKiB0cnVlIGlmIGV2ZXJ5IGNhbGwgdG8gYGNiYCByZXR1cm5zIGB0cnVlYC5cbiAqL1xuZnVuY3Rpb24gZXZlcnlOb2RlQ2hpbGQobm9kZTogdHMuTm9kZSwgY2I6IChub2RlOiB0cy5Ob2RlKSA9PiBib29sZWFuKSB7XG4gIHJldHVybiAhdHMuZm9yRWFjaENoaWxkKG5vZGUsIG5vZGUgPT4gIWNiKG5vZGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdCh2YWx1ZSkgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkO1xufVxuXG4vLyBpbXBvcnQge3Byb3BlcnR5TmFtZSBhcyBuYW1lfSBmcm9tICdwbGFjZSdcbi8vIGltcG9ydCB7bmFtZX0gZnJvbSAncGxhY2UnXG5leHBvcnQgaW50ZXJmYWNlIEltcG9ydFNwZWNpZmllck1ldGFkYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9wZXJ0eU5hbWU/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltcG9ydE1ldGFkYXRhIHtcbiAgZGVmYXVsdE5hbWU/OiBzdHJpbmc7ICAgICAgICAgICAgICAgICAgICAgIC8vIGltcG9ydCBkIGZyb20gJ3BsYWNlJ1xuICBuYW1lc3BhY2U/OiBzdHJpbmc7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1wb3J0ICogYXMgZCBmcm9tICdwbGFjZSdcbiAgbmFtZWRJbXBvcnRzPzogSW1wb3J0U3BlY2lmaWVyTWV0YWRhdGFbXTsgIC8vIGltcG9ydCB7YX0gZnJvbSAncGxhY2UnXG4gIGZyb206IHN0cmluZzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tICdwbGFjZSdcbn1cblxuXG5mdW5jdGlvbiBnZXRTb3VyY2VGaWxlT2ZOb2RlKG5vZGU6IHRzLk5vZGV8dW5kZWZpbmVkKTogdHMuU291cmNlRmlsZSB7XG4gIHdoaWxlIChub2RlICYmIG5vZGUua2luZCAhPSB0cy5TeW50YXhLaW5kLlNvdXJjZUZpbGUpIHtcbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIDx0cy5Tb3VyY2VGaWxlPm5vZGU7XG59XG5cbi8qIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvdXJjZUluZm8oXG4gICAgbm9kZTogdHMuTm9kZXx1bmRlZmluZWQsIHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGV8dW5kZWZpbmVkKTogTWV0YWRhdGFTb3VyY2VMb2NhdGlvbkluZm8ge1xuICBpZiAobm9kZSkge1xuICAgIHNvdXJjZUZpbGUgPSBzb3VyY2VGaWxlIHx8IGdldFNvdXJjZUZpbGVPZk5vZGUobm9kZSk7XG4gICAgaWYgKHNvdXJjZUZpbGUpIHtcbiAgICAgIHJldHVybiB0cy5nZXRMaW5lQW5kQ2hhcmFjdGVyT2ZQb3NpdGlvbihzb3VyY2VGaWxlLCBub2RlLmdldFN0YXJ0KHNvdXJjZUZpbGUpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG4vKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclN5bWJvbChcbiAgICBtZXNzYWdlOiBzdHJpbmcsIG5vZGU/OiB0cy5Ob2RlLCBjb250ZXh0Pzoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHNvdXJjZUZpbGU/OiB0cy5Tb3VyY2VGaWxlKTogTWV0YWRhdGFFcnJvciB7XG4gIGNvbnN0IHJlc3VsdDogTWV0YWRhdGFFcnJvciA9IHtfX3N5bWJvbGljOiAnZXJyb3InLCBtZXNzYWdlLCAuLi5zb3VyY2VJbmZvKG5vZGUsIHNvdXJjZUZpbGUpfTtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICByZXN1bHQuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQcm9kdWNlIGEgc3ltYm9saWMgcmVwcmVzZW50YXRpb24gb2YgYW4gZXhwcmVzc2lvbiBmb2xkaW5nIHZhbHVlcyBpbnRvIHRoZWlyIGZpbmFsIHZhbHVlIHdoZW5cbiAqIHBvc3NpYmxlLlxuICovXG5leHBvcnQgY2xhc3MgRXZhbHVhdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN5bWJvbHM6IFN5bWJvbHMsIHByaXZhdGUgbm9kZU1hcDogTWFwPE1ldGFkYXRhRW50cnksIHRzLk5vZGU+LFxuICAgICAgcHJpdmF0ZSBvcHRpb25zOiBDb2xsZWN0b3JPcHRpb25zID0ge30sXG4gICAgICBwcml2YXRlIHJlY29yZEV4cG9ydD86IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBNZXRhZGF0YVZhbHVlKSA9PiB2b2lkKSB7fVxuXG4gIG5hbWVPZihub2RlOiB0cy5Ob2RlfHVuZGVmaW5lZCk6IHN0cmluZ3xNZXRhZGF0YUVycm9yIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmtpbmQgPT0gdHMuU3ludGF4S2luZC5JZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gKDx0cy5JZGVudGlmaWVyPm5vZGUpLnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5vZGUgJiYgdGhpcy5ldmFsdWF0ZU5vZGUobm9kZSk7XG4gICAgaWYgKGlzTWV0YWRhdGFFcnJvcihyZXN1bHQpIHx8IHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJyb3JTeW1ib2woXG4gICAgICAgICAgJ05hbWUgZXhwZWN0ZWQnLCBub2RlLCB7cmVjZWl2ZWQ6IChub2RlICYmIG5vZGUuZ2V0VGV4dCgpKSB8fCAnPG1pc3Npbmc+J30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGV4cHJlc3Npb24gcmVwcmVzZW50ZWQgYnkgYG5vZGVgIGNhbiBiZSBmb2xkZWQgaW50byBhIGxpdGVyYWwgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGEgbGl0ZXJhbCBpcyBhbHdheXMgZm9sZGFibGUuIFRoaXMgbWVhbnMgdGhhdCBsaXRlcmFsIGV4cHJlc3Npb25zIHN1Y2ggYXMgYDEuMmBcbiAgICogYFwiU29tZSB2YWx1ZVwiYCBgdHJ1ZWAgYGZhbHNlYCBhcmUgZm9sZGFibGUuXG4gICAqXG4gICAqIC0gQW4gb2JqZWN0IGxpdGVyYWwgaXMgZm9sZGFibGUgaWYgYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBsaXRlcmFsIGFyZSBmb2xkYWJsZS5cbiAgICogLSBBbiBhcnJheSBsaXRlcmFsIGlzIGZvbGRhYmxlIGlmIGFsbCB0aGUgZWxlbWVudHMgYXJlIGZvbGRhYmxlLlxuICAgKiAtIEEgY2FsbCBpcyBmb2xkYWJsZSBpZiBpdCBpcyBhIGNhbGwgdG8gYSBBcnJheS5wcm90b3R5cGUuY29uY2F0IG9yIGEgY2FsbCB0byBDT05TVF9FWFBSLlxuICAgKiAtIEEgcHJvcGVydHkgYWNjZXNzIGlzIGZvbGRhYmxlIGlmIHRoZSBvYmplY3QgaXMgZm9sZGFibGUuXG4gICAqIC0gQSBhcnJheSBpbmRleCBpcyBmb2xkYWJsZSBpZiBpbmRleCBleHByZXNzaW9uIGlzIGZvbGRhYmxlIGFuZCB0aGUgYXJyYXkgaXMgZm9sZGFibGUuXG4gICAqIC0gQmluYXJ5IG9wZXJhdG9yIGV4cHJlc3Npb25zIGFyZSBmb2xkYWJsZSBpZiB0aGUgbGVmdCBhbmQgcmlnaHQgZXhwcmVzc2lvbnMgYXJlIGZvbGRhYmxlIGFuZFxuICAgKiAgIGl0IGlzIG9uZSBvZiAnKycsICctJywgJyonLCAnLycsICclJywgJ3x8JywgYW5kICcmJicuXG4gICAqIC0gQW4gaWRlbnRpZmllciBpcyBmb2xkYWJsZSBpZiBhIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgaXRzIHN5bWJvbCBpbiB0aGUgZXZhbHVhdG9yIHN5bWJvbFxuICAgKiAgIHRhYmxlLlxuICAgKi9cbiAgcHVibGljIGlzRm9sZGFibGUobm9kZTogdHMuTm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRm9sZGFibGVXb3JrZXIobm9kZSwgbmV3IE1hcDx0cy5Ob2RlLCBib29sZWFuPigpKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNGb2xkYWJsZVdvcmtlcihub2RlOiB0cy5Ob2RlfHVuZGVmaW5lZCwgZm9sZGluZzogTWFwPHRzLk5vZGUsIGJvb2xlYW4+KTogYm9vbGVhbiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICByZXR1cm4gZXZlcnlOb2RlQ2hpbGQobm9kZSwgY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmtpbmQgPT09IHRzLlN5bnRheEtpbmQuUHJvcGVydHlBc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5QXNzaWdubWVudCA9IDx0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQ+Y2hpbGQ7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRm9sZGFibGVXb3JrZXIocHJvcGVydHlBc3NpZ25tZW50LmluaXRpYWxpemVyLCBmb2xkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkFycmF5TGl0ZXJhbEV4cHJlc3Npb246XG4gICAgICAgICAgcmV0dXJuIGV2ZXJ5Tm9kZUNoaWxkKG5vZGUsIGNoaWxkID0+IHRoaXMuaXNGb2xkYWJsZVdvcmtlcihjaGlsZCwgZm9sZGluZykpO1xuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgY29uc3QgY2FsbEV4cHJlc3Npb24gPSA8dHMuQ2FsbEV4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgICAvLyBXZSBjYW4gZm9sZCBhIDxhcnJheT4uY29uY2F0KDx2PikuXG4gICAgICAgICAgaWYgKGlzTWV0aG9kQ2FsbE9mKGNhbGxFeHByZXNzaW9uLCAnY29uY2F0JykgJiZcbiAgICAgICAgICAgICAgYXJyYXlPckVtcHR5KGNhbGxFeHByZXNzaW9uLmFyZ3VtZW50cykubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheU5vZGUgPSAoPHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5jYWxsRXhwcmVzc2lvbi5leHByZXNzaW9uKS5leHByZXNzaW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGb2xkYWJsZVdvcmtlcihhcnJheU5vZGUsIGZvbGRpbmcpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZvbGRhYmxlV29ya2VyKGNhbGxFeHByZXNzaW9uLmFyZ3VtZW50c1swXSwgZm9sZGluZykpIHtcbiAgICAgICAgICAgICAgLy8gSXQgbmVlZHMgdG8gYmUgYW4gYXJyYXkuXG4gICAgICAgICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhcnJheU5vZGUpO1xuICAgICAgICAgICAgICBpZiAoYXJyYXlWYWx1ZSAmJiBBcnJheS5pc0FycmF5KGFycmF5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXZSBjYW4gZm9sZCBhIGNhbGwgdG8gQ09OU1RfRVhQUlxuICAgICAgICAgIGlmIChpc0NhbGxPZihjYWxsRXhwcmVzc2lvbiwgJ0NPTlNUX0VYUFInKSAmJlxuICAgICAgICAgICAgICBhcnJheU9yRW1wdHkoY2FsbEV4cHJlc3Npb24uYXJndW1lbnRzKS5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZvbGRhYmxlV29ya2VyKGNhbGxFeHByZXNzaW9uLmFyZ3VtZW50c1swXSwgZm9sZGluZyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTm9TdWJzdGl0dXRpb25UZW1wbGF0ZUxpdGVyYWw6XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5TdHJpbmdMaXRlcmFsOlxuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTnVtZXJpY0xpdGVyYWw6XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5OdWxsS2V5d29yZDpcbiAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRydWVLZXl3b3JkOlxuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRmFsc2VLZXl3b3JkOlxuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVGVtcGxhdGVIZWFkOlxuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVGVtcGxhdGVNaWRkbGU6XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5UZW1wbGF0ZVRhaWw6XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5QYXJlbnRoZXNpemVkRXhwcmVzc2lvbjpcbiAgICAgICAgICBjb25zdCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiA9IDx0cy5QYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlO1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzRm9sZGFibGVXb3JrZXIocGFyZW50aGVzaXplZEV4cHJlc3Npb24uZXhwcmVzc2lvbiwgZm9sZGluZyk7XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgIGNvbnN0IGJpbmFyeUV4cHJlc3Npb24gPSA8dHMuQmluYXJ5RXhwcmVzc2lvbj5ub2RlO1xuICAgICAgICAgIHN3aXRjaCAoYmluYXJ5RXhwcmVzc2lvbi5vcGVyYXRvclRva2VuLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5QbHVzVG9rZW46XG4gICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTWludXNUb2tlbjpcbiAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Bc3Rlcmlza1Rva2VuOlxuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlNsYXNoVG9rZW46XG4gICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuUGVyY2VudFRva2VuOlxuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkFtcGVyc2FuZEFtcGVyc2FuZFRva2VuOlxuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkJhckJhclRva2VuOlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZvbGRhYmxlV29ya2VyKGJpbmFyeUV4cHJlc3Npb24ubGVmdCwgZm9sZGluZykgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNGb2xkYWJsZVdvcmtlcihiaW5hcnlFeHByZXNzaW9uLnJpZ2h0LCBmb2xkaW5nKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Qcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb246XG4gICAgICAgICAgY29uc3QgcHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uID0gPHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5ub2RlO1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzRm9sZGFibGVXb3JrZXIocHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLmV4cHJlc3Npb24sIGZvbGRpbmcpO1xuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRWxlbWVudEFjY2Vzc0V4cHJlc3Npb246XG4gICAgICAgICAgY29uc3QgZWxlbWVudEFjY2Vzc0V4cHJlc3Npb24gPSA8dHMuRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZvbGRhYmxlV29ya2VyKGVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLmV4cHJlc3Npb24sIGZvbGRpbmcpICYmXG4gICAgICAgICAgICAgIHRoaXMuaXNGb2xkYWJsZVdvcmtlcihlbGVtZW50QWNjZXNzRXhwcmVzc2lvbi5hcmd1bWVudEV4cHJlc3Npb24sIGZvbGRpbmcpO1xuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuSWRlbnRpZmllcjpcbiAgICAgICAgICBsZXQgaWRlbnRpZmllciA9IDx0cy5JZGVudGlmaWVyPm5vZGU7XG4gICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IHRoaXMuc3ltYm9scy5yZXNvbHZlKGlkZW50aWZpZXIudGV4dCk7XG4gICAgICAgICAgaWYgKHJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkICYmIGlzUHJpbWl0aXZlKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRlbXBsYXRlRXhwcmVzc2lvbjpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUV4cHJlc3Npb24gPSA8dHMuVGVtcGxhdGVFeHByZXNzaW9uPm5vZGU7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRXhwcmVzc2lvbi50ZW1wbGF0ZVNwYW5zLmV2ZXJ5KFxuICAgICAgICAgICAgICBzcGFuID0+IHRoaXMuaXNGb2xkYWJsZVdvcmtlcihzcGFuLmV4cHJlc3Npb24sIGZvbGRpbmcpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgYSBKU09OIHNlcmlhbGlhYmxlIG9iamVjdCByZXByZXNlbnRpbmcgYG5vZGVgLiBUaGUgZm9sZGFibGUgdmFsdWVzIGluIHRoZSBleHByZXNzaW9uXG4gICAqIHRyZWUgYXJlIGZvbGRlZC4gRm9yIGV4YW1wbGUsIGEgbm9kZSByZXByZXNlbnRpbmcgYDEgKyAyYCBpcyBmb2xkZWQgaW50byBgM2AuXG4gICAqL1xuICBwdWJsaWMgZXZhbHVhdGVOb2RlKG5vZGU6IHRzLk5vZGUsIHByZWZlclJlZmVyZW5jZT86IGJvb2xlYW4pOiBNZXRhZGF0YVZhbHVlIHtcbiAgICBjb25zdCB0ID0gdGhpcztcbiAgICBsZXQgZXJyb3I6IE1ldGFkYXRhRXJyb3J8dW5kZWZpbmVkO1xuXG4gICAgZnVuY3Rpb24gcmVjb3JkRW50cnkoZW50cnk6IE1ldGFkYXRhVmFsdWUsIG5vZGU6IHRzLk5vZGUpOiBNZXRhZGF0YVZhbHVlIHtcbiAgICAgIGlmICh0Lm9wdGlvbnMuc3Vic3RpdHV0ZUV4cHJlc3Npb24pIHtcbiAgICAgICAgY29uc3QgbmV3RW50cnkgPSB0Lm9wdGlvbnMuc3Vic3RpdHV0ZUV4cHJlc3Npb24oZW50cnksIG5vZGUpO1xuICAgICAgICBpZiAodC5yZWNvcmRFeHBvcnQgJiYgbmV3RW50cnkgIT0gZW50cnkgJiYgaXNNZXRhZGF0YUdsb2JhbFJlZmVyZW5jZUV4cHJlc3Npb24obmV3RW50cnkpKSB7XG4gICAgICAgICAgdC5yZWNvcmRFeHBvcnQobmV3RW50cnkubmFtZSwgZW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIGVudHJ5ID0gbmV3RW50cnk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVjb3JkTWFwRW50cnkoZW50cnksIG5vZGUsIHQubm9kZU1hcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNGb2xkYWJsZUVycm9yKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBNZXRhZGF0YUVycm9yIHtcbiAgICAgIHJldHVybiAhdC5vcHRpb25zLnZlcmJvc2VJbnZhbGlkRXhwcmVzc2lvbiAmJiBpc01ldGFkYXRhRXJyb3IodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc29sdmVOYW1lID0gKG5hbWU6IHN0cmluZywgcHJlZmVyUmVmZXJlbmNlPzogYm9vbGVhbik6IE1ldGFkYXRhVmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5zeW1ib2xzLnJlc29sdmUobmFtZSwgcHJlZmVyUmVmZXJlbmNlKTtcbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBFbmNvZGUgYXMgYSBnbG9iYWwgcmVmZXJlbmNlLiBTdGF0aWNSZWZsZWN0b3Igd2lsbCBjaGVjayB0aGUgcmVmZXJlbmNlLlxuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoe19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBuYW1lfSwgbm9kZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVmZXJlbmNlICYmIGlzTWV0YWRhdGFTeW1ib2xpY1JlZmVyZW5jZUV4cHJlc3Npb24ocmVmZXJlbmNlKSkge1xuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoey4uLnJlZmVyZW5jZX0sIG5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICB9O1xuXG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbjpcbiAgICAgICAgbGV0IG9iajoge1tuYW1lOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgICAgIGxldCBxdW90ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIHRzLmZvckVhY2hDaGlsZChub2RlLCBjaGlsZCA9PiB7XG4gICAgICAgICAgc3dpdGNoIChjaGlsZC5raW5kKSB7XG4gICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuU2hvcnRoYW5kUHJvcGVydHlBc3NpZ25tZW50OlxuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlByb3BlcnR5QXNzaWdubWVudDpcbiAgICAgICAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IDx0cy5Qcm9wZXJ0eUFzc2lnbm1lbnR8dHMuU2hvcnRoYW5kUHJvcGVydHlBc3NpZ25tZW50PmNoaWxkO1xuICAgICAgICAgICAgICBpZiAoYXNzaWdubWVudC5uYW1lLmtpbmQgPT0gdHMuU3ludGF4S2luZC5TdHJpbmdMaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChhc3NpZ25tZW50Lm5hbWUgYXMgdHMuU3RyaW5nTGl0ZXJhbCkudGV4dDtcbiAgICAgICAgICAgICAgICBxdW90ZWQucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWVPZihhc3NpZ25tZW50Lm5hbWUpO1xuICAgICAgICAgICAgICBpZiAoaXNGb2xkYWJsZUVycm9yKHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gaXNQcm9wZXJ0eUFzc2lnbm1lbnQoYXNzaWdubWVudCkgP1xuICAgICAgICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5pbml0aWFsaXplciwgLyogcHJlZmVyUmVmZXJlbmNlICovIHRydWUpIDpcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVOYW1lKHByb3BlcnR5TmFtZSwgLyogcHJlZmVyUmVmZXJlbmNlICovIHRydWUpO1xuICAgICAgICAgICAgICBpZiAoaXNGb2xkYWJsZUVycm9yKHByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAgLy8gU3RvcCB0aGUgZm9yRWFjaENoaWxkLlxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtwcm9wZXJ0eU5hbWVdID0gaXNQcm9wZXJ0eUFzc2lnbm1lbnQoYXNzaWdubWVudCkgP1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRFbnRyeShwcm9wZXJ0eVZhbHVlLCBhc3NpZ25tZW50LmluaXRpYWxpemVyKSA6XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5xdW90ZWROYW1lcyAmJiBxdW90ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgb2JqWyckcXVvdGVkJCddID0gcXVvdGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeShvYmosIG5vZGUpO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkFycmF5TGl0ZXJhbEV4cHJlc3Npb246XG4gICAgICAgIGxldCBhcnI6IE1ldGFkYXRhVmFsdWVbXSA9IFtdO1xuICAgICAgICB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgY2hpbGQgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQsIC8qIHByZWZlclJlZmVyZW5jZSAqLyB0cnVlKTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciBlcnJvclxuICAgICAgICAgIGlmIChpc0ZvbGRhYmxlRXJyb3IodmFsdWUpKSB7XG4gICAgICAgICAgICBlcnJvciA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBTdG9wIHRoZSBmb3JFYWNoQ2hpbGQuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwcmVhZCBleHByZXNzaW9uc1xuICAgICAgICAgIGlmIChpc01ldGFkYXRhU3ltYm9saWNTcHJlYWRFeHByZXNzaW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUuZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBzcHJlYWRWYWx1ZSBvZiB2YWx1ZS5leHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3ByZWFkVmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KGFyciwgbm9kZSk7XG4gICAgICBjYXNlIHNwcmVhZEVsZW1lbnRTeW50YXhLaW5kOlxuICAgICAgICBsZXQgc3ByZWFkRXhwcmVzc2lvbiA9IHRoaXMuZXZhbHVhdGVOb2RlKChub2RlIGFzIGFueSkuZXhwcmVzc2lvbik7XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh7X19zeW1ib2xpYzogJ3NwcmVhZCcsIGV4cHJlc3Npb246IHNwcmVhZEV4cHJlc3Npb259LCBub2RlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgY29uc3QgY2FsbEV4cHJlc3Npb24gPSA8dHMuQ2FsbEV4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgaWYgKGlzQ2FsbE9mKGNhbGxFeHByZXNzaW9uLCAnZm9yd2FyZFJlZicpICYmXG4gICAgICAgICAgICBhcnJheU9yRW1wdHkoY2FsbEV4cHJlc3Npb24uYXJndW1lbnRzKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gY2FsbEV4cHJlc3Npb24uYXJndW1lbnRzWzBdO1xuICAgICAgICAgIGlmIChmaXJzdEFyZ3VtZW50LmtpbmQgPT0gdHMuU3ludGF4S2luZC5BcnJvd0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJvd0Z1bmN0aW9uID0gPHRzLkFycm93RnVuY3Rpb24+Zmlyc3RBcmd1bWVudDtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh0aGlzLmV2YWx1YXRlTm9kZShhcnJvd0Z1bmN0aW9uLmJvZHkpLCBub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJncyA9IGFycmF5T3JFbXB0eShjYWxsRXhwcmVzc2lvbi5hcmd1bWVudHMpLm1hcChhcmcgPT4gdGhpcy5ldmFsdWF0ZU5vZGUoYXJnKSk7XG4gICAgICAgIGlmICh0aGlzLmlzRm9sZGFibGUoY2FsbEV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgaWYgKGlzTWV0aG9kQ2FsbE9mKGNhbGxFeHByZXNzaW9uLCAnY29uY2F0JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSA8TWV0YWRhdGFWYWx1ZVtdPnRoaXMuZXZhbHVhdGVOb2RlKFxuICAgICAgICAgICAgICAgICg8dHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPmNhbGxFeHByZXNzaW9uLmV4cHJlc3Npb24pLmV4cHJlc3Npb24pO1xuICAgICAgICAgICAgaWYgKGlzRm9sZGFibGVFcnJvcihhcnJheVZhbHVlKSkgcmV0dXJuIGFycmF5VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlWYWx1ZS5jb25jYXQoYXJnc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFsd2F5cyBmb2xkIGEgQ09OU1RfRVhQUiBldmVuIGlmIHRoZSBhcmd1bWVudCBpcyBub3QgZm9sZGFibGUuXG4gICAgICAgIGlmIChpc0NhbGxPZihjYWxsRXhwcmVzc2lvbiwgJ0NPTlNUX0VYUFInKSAmJlxuICAgICAgICAgICAgYXJyYXlPckVtcHR5KGNhbGxFeHByZXNzaW9uLmFyZ3VtZW50cykubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KGFyZ3NbMF0sIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlTm9kZShjYWxsRXhwcmVzc2lvbi5leHByZXNzaW9uKTtcbiAgICAgICAgaWYgKGlzRm9sZGFibGVFcnJvcihleHByZXNzaW9uKSkge1xuICAgICAgICAgIHJldHVybiByZWNvcmRFbnRyeShleHByZXNzaW9uLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0OiBNZXRhZGF0YVN5bWJvbGljQ2FsbEV4cHJlc3Npb24gPSB7X19zeW1ib2xpYzogJ2NhbGwnLCBleHByZXNzaW9uOiBleHByZXNzaW9ufTtcbiAgICAgICAgaWYgKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHQuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkocmVzdWx0LCBub2RlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5OZXdFeHByZXNzaW9uOlxuICAgICAgICBjb25zdCBuZXdFeHByZXNzaW9uID0gPHRzLk5ld0V4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IGFycmF5T3JFbXB0eShuZXdFeHByZXNzaW9uLmFyZ3VtZW50cykubWFwKGFyZyA9PiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpKTtcbiAgICAgICAgY29uc3QgbmV3VGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUobmV3RXhwcmVzc2lvbi5leHByZXNzaW9uKTtcbiAgICAgICAgaWYgKGlzTWV0YWRhdGFFcnJvcihuZXdUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KG5ld1RhcmdldCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbDogTWV0YWRhdGFTeW1ib2xpY0NhbGxFeHByZXNzaW9uID0ge19fc3ltYm9saWM6ICduZXcnLCBleHByZXNzaW9uOiBuZXdUYXJnZXR9O1xuICAgICAgICBpZiAobmV3QXJncy5sZW5ndGgpIHtcbiAgICAgICAgICBjYWxsLmFyZ3VtZW50cyA9IG5ld0FyZ3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KGNhbGwsIG5vZGUpO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbjoge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24gPSA8dHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGU7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24uZXhwcmVzc2lvbik7XG4gICAgICAgIGlmIChpc0ZvbGRhYmxlRXJyb3IoZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoZXhwcmVzc2lvbiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy5uYW1lT2YocHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLm5hbWUpO1xuICAgICAgICBpZiAoaXNGb2xkYWJsZUVycm9yKG1lbWJlcikpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkobWVtYmVyLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwcmVzc2lvbiAmJiB0aGlzLmlzRm9sZGFibGUocHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLmV4cHJlc3Npb24pKVxuICAgICAgICAgIHJldHVybiAoPGFueT5leHByZXNzaW9uKVttZW1iZXJdO1xuICAgICAgICBpZiAoaXNNZXRhZGF0YU1vZHVsZVJlZmVyZW5jZUV4cHJlc3Npb24oZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICAvLyBBIHNlbGVjdCBpbnRvIGEgbW9kdWxlIHJlZmVyZW5jZSBhbmQgYmUgY29udmVydGVkIGludG8gYSByZWZlcmVuY2UgdG8gdGhlIHN5bWJvbFxuICAgICAgICAgIC8vIGluIHRoZSBtb2R1bGVcbiAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoXG4gICAgICAgICAgICAgIHtfX3N5bWJvbGljOiAncmVmZXJlbmNlJywgbW9kdWxlOiBleHByZXNzaW9uLm1vZHVsZSwgbmFtZTogbWVtYmVyfSwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KHtfX3N5bWJvbGljOiAnc2VsZWN0JywgZXhwcmVzc2lvbiwgbWVtYmVyfSwgbm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRWxlbWVudEFjY2Vzc0V4cHJlc3Npb246IHtcbiAgICAgICAgY29uc3QgZWxlbWVudEFjY2Vzc0V4cHJlc3Npb24gPSA8dHMuRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZXZhbHVhdGVOb2RlKGVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLmV4cHJlc3Npb24pO1xuICAgICAgICBpZiAoaXNGb2xkYWJsZUVycm9yKGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KGV4cHJlc3Npb24sIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxlbWVudEFjY2Vzc0V4cHJlc3Npb24uYXJndW1lbnRFeHByZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KGVycm9yU3ltYm9sKCdFeHByZXNzaW9uIGZvcm0gbm90IHN1cHBvcnRlZCcsIG5vZGUpLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZhbHVhdGVOb2RlKGVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLmFyZ3VtZW50RXhwcmVzc2lvbik7XG4gICAgICAgIGlmIChpc0ZvbGRhYmxlRXJyb3IoZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoZXhwcmVzc2lvbiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNGb2xkYWJsZShlbGVtZW50QWNjZXNzRXhwcmVzc2lvbi5leHByZXNzaW9uKSAmJlxuICAgICAgICAgICAgdGhpcy5pc0ZvbGRhYmxlKGVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLmFyZ3VtZW50RXhwcmVzc2lvbikpXG4gICAgICAgICAgcmV0dXJuICg8YW55PmV4cHJlc3Npb24pWzxzdHJpbmd8bnVtYmVyPmluZGV4XTtcbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KHtfX3N5bWJvbGljOiAnaW5kZXgnLCBleHByZXNzaW9uLCBpbmRleH0sIG5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLklkZW50aWZpZXI6XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSA8dHMuSWRlbnRpZmllcj5ub2RlO1xuICAgICAgICBjb25zdCBuYW1lID0gaWRlbnRpZmllci50ZXh0O1xuICAgICAgICByZXR1cm4gcmVzb2x2ZU5hbWUobmFtZSwgcHJlZmVyUmVmZXJlbmNlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5UeXBlUmVmZXJlbmNlOlxuICAgICAgICBjb25zdCB0eXBlUmVmZXJlbmNlTm9kZSA9IDx0cy5UeXBlUmVmZXJlbmNlTm9kZT5ub2RlO1xuICAgICAgICBjb25zdCB0eXBlTmFtZU5vZGUgPSB0eXBlUmVmZXJlbmNlTm9kZS50eXBlTmFtZTtcbiAgICAgICAgY29uc3QgZ2V0UmVmZXJlbmNlOiAodHlwZU5hbWVOb2RlOiB0cy5JZGVudGlmaWVyfHRzLlF1YWxpZmllZE5hbWUpID0+IE1ldGFkYXRhVmFsdWUgPVxuICAgICAgICAgICAgbm9kZSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlTmFtZU5vZGUua2luZCA9PT0gdHMuU3ludGF4S2luZC5RdWFsaWZpZWROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVhbGlmaWVkTmFtZSA9IDx0cy5RdWFsaWZpZWROYW1lPm5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGVOb2RlKHF1YWxpZmllZE5hbWUubGVmdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWV0YWRhdGFNb2R1bGVSZWZlcmVuY2VFeHByZXNzaW9uKGxlZnQpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoXG4gICAgICAgICAgICAgICAgICAgICAgPE1ldGFkYXRhSW1wb3J0ZWRTeW1ib2xSZWZlcmVuY2VFeHByZXNzaW9uPntcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc3ltYm9saWM6ICdyZWZlcmVuY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBsZWZ0Lm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHF1YWxpZmllZE5hbWUucmlnaHQudGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlY29yZCBhIHR5cGUgcmVmZXJlbmNlIHRvIGEgZGVjbGFyZWQgdHlwZSBhcyBhIHNlbGVjdC5cbiAgICAgICAgICAgICAgICByZXR1cm4ge19fc3ltYm9saWM6ICdzZWxlY3QnLCBleHByZXNzaW9uOiBsZWZ0LCBtZW1iZXI6IHF1YWxpZmllZE5hbWUucmlnaHQudGV4dH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IDx0cy5JZGVudGlmaWVyPnR5cGVOYW1lTm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbHMucmVzb2x2ZShpZGVudGlmaWVyLnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0ZvbGRhYmxlRXJyb3Ioc3ltYm9sKSB8fCBpc01ldGFkYXRhU3ltYm9saWNSZWZlcmVuY2VFeHByZXNzaW9uKHN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRFbnRyeShzeW1ib2wsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoXG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3ltYm9sKCdDb3VsZCBub3QgcmVzb2x2ZSB0eXBlJywgbm9kZSwge3R5cGVOYW1lOiBpZGVudGlmaWVyLnRleHR9KSwgbm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNvbnN0IHR5cGVSZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWVOb2RlKTtcbiAgICAgICAgaWYgKGlzRm9sZGFibGVFcnJvcih0eXBlUmVmZXJlbmNlKSkge1xuICAgICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh0eXBlUmVmZXJlbmNlLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTWV0YWRhdGFNb2R1bGVSZWZlcmVuY2VFeHByZXNzaW9uKHR5cGVSZWZlcmVuY2UpICYmXG4gICAgICAgICAgICB0eXBlUmVmZXJlbmNlTm9kZS50eXBlQXJndW1lbnRzICYmIHR5cGVSZWZlcmVuY2VOb2RlLnR5cGVBcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgYXJncyA9IHR5cGVSZWZlcmVuY2VOb2RlLnR5cGVBcmd1bWVudHMubWFwKGVsZW1lbnQgPT4gdGhpcy5ldmFsdWF0ZU5vZGUoZWxlbWVudCkpO1xuICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0eXBlY2FzdCB3aGVuIHVwZ3JhZGVkIHRvIDIuMCBhcyBpdCB3aWxsIGJlIGNvcnJlY3RseSBpbmZlcnJlZC5cbiAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIDEuOSBkbyBub3QgaW5mZXIgdGhpcyBjb3JyZWN0bHkuXG4gICAgICAgICAgKDxNZXRhZGF0YUltcG9ydGVkU3ltYm9sUmVmZXJlbmNlRXhwcmVzc2lvbj50eXBlUmVmZXJlbmNlKS5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh0eXBlUmVmZXJlbmNlLCBub2RlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5VbmlvblR5cGU6XG4gICAgICAgIGNvbnN0IHVuaW9uVHlwZSA9IDx0cy5VbmlvblR5cGVOb2RlPm5vZGU7XG5cbiAgICAgICAgLy8gUmVtb3ZlIG51bGwgYW5kIHVuZGVmaW5lZCBmcm9tIHRoZSBsaXN0IG9mIHVuaW9ucy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHVuaW9uVHlwZS50eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPT4gbi5raW5kICE9IHRzLlN5bnRheEtpbmQuTnVsbEtleXdvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ua2luZCAhPSB0cy5TeW50YXhLaW5kLlVuZGVmaW5lZEtleXdvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChuID0+IHRoaXMuZXZhbHVhdGVOb2RlKG4pKTtcblxuICAgICAgICAvLyBUaGUgcmVtbWFpbmluZyByZWZlcmVuY2UgbXVzdCBiZSB0aGUgc2FtZS4gSWYgdHdvIGhhdmUgdHlwZSBhcmd1bWVudHMgY29uc2lkZXIgdGhlbVxuICAgICAgICAvLyBkaWZmZXJlbnQgZXZlbiBpZiB0aGUgdHlwZSBhcmd1bWVudHMgYXJlIHRoZSBzYW1lLlxuICAgICAgICBsZXQgY2FuZGlkYXRlOiBhbnkgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VzW2ldO1xuICAgICAgICAgIGlmIChpc01ldGFkYXRhU3ltYm9saWNSZWZlcmVuY2VFeHByZXNzaW9uKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgaWYgKChyZWZlcmVuY2UgYXMgYW55KS5uYW1lID09IGNhbmRpZGF0ZS5uYW1lICYmXG4gICAgICAgICAgICAgICAgICAocmVmZXJlbmNlIGFzIGFueSkubW9kdWxlID09IGNhbmRpZGF0ZS5tb2R1bGUgJiYgIShyZWZlcmVuY2UgYXMgYW55KS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSByZWZlcmVuY2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbmRpZGF0ZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmRpZGF0ZSkgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTm9TdWJzdGl0dXRpb25UZW1wbGF0ZUxpdGVyYWw6XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuU3RyaW5nTGl0ZXJhbDpcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5UZW1wbGF0ZUhlYWQ6XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVGVtcGxhdGVUYWlsOlxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRlbXBsYXRlTWlkZGxlOlxuICAgICAgICByZXR1cm4gKDx0cy5MaXRlcmFsTGlrZU5vZGU+bm9kZSkudGV4dDtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5OdW1lcmljTGl0ZXJhbDpcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoKDx0cy5MaXRlcmFsRXhwcmVzc2lvbj5ub2RlKS50ZXh0KTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5BbnlLZXl3b3JkOlxuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoe19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBuYW1lOiAnYW55J30sIG5vZGUpO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlN0cmluZ0tleXdvcmQ6XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh7X19zeW1ib2xpYzogJ3JlZmVyZW5jZScsIG5hbWU6ICdzdHJpbmcnfSwgbm9kZSk7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTnVtYmVyS2V5d29yZDpcbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KHtfX3N5bWJvbGljOiAncmVmZXJlbmNlJywgbmFtZTogJ251bWJlcid9LCBub2RlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Cb29sZWFuS2V5d29yZDpcbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KHtfX3N5bWJvbGljOiAncmVmZXJlbmNlJywgbmFtZTogJ2Jvb2xlYW4nfSwgbm9kZSk7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQXJyYXlUeXBlOlxuICAgICAgICBjb25zdCBhcnJheVR5cGVOb2RlID0gPHRzLkFycmF5VHlwZU5vZGU+bm9kZTtcbiAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3N5bWJvbGljOiAncmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgbmFtZTogJ0FycmF5JyxcbiAgICAgICAgICAgICAgYXJndW1lbnRzOiBbdGhpcy5ldmFsdWF0ZU5vZGUoYXJyYXlUeXBlTm9kZS5lbGVtZW50VHlwZSldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZSk7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTnVsbEtleXdvcmQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRydWVLZXl3b3JkOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5GYWxzZUtleXdvcmQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5QYXJlbnRoZXNpemVkRXhwcmVzc2lvbjpcbiAgICAgICAgY29uc3QgcGFyZW50aGVzaXplZEV4cHJlc3Npb24gPSA8dHMuUGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLmV4cHJlc3Npb24pO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlR5cGVBc3NlcnRpb25FeHByZXNzaW9uOlxuICAgICAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gPHRzLlR5cGVBc3NlcnRpb24+bm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKHR5cGVBc3NlcnRpb24uZXhwcmVzc2lvbik7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuUHJlZml4VW5hcnlFeHByZXNzaW9uOlxuICAgICAgICBjb25zdCBwcmVmaXhVbmFyeUV4cHJlc3Npb24gPSA8dHMuUHJlZml4VW5hcnlFeHByZXNzaW9uPm5vZGU7XG4gICAgICAgIGNvbnN0IG9wZXJhbmQgPSB0aGlzLmV2YWx1YXRlTm9kZShwcmVmaXhVbmFyeUV4cHJlc3Npb24ub3BlcmFuZCk7XG4gICAgICAgIGlmIChpc0RlZmluZWQob3BlcmFuZCkgJiYgaXNQcmltaXRpdmUob3BlcmFuZCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKHByZWZpeFVuYXJ5RXhwcmVzc2lvbi5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlBsdXNUb2tlbjpcbiAgICAgICAgICAgICAgcmV0dXJuICsob3BlcmFuZCBhcyBhbnkpO1xuICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLk1pbnVzVG9rZW46XG4gICAgICAgICAgICAgIHJldHVybiAtKG9wZXJhbmQgYXMgYW55KTtcbiAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5UaWxkZVRva2VuOlxuICAgICAgICAgICAgICByZXR1cm4gfihvcGVyYW5kIGFzIGFueSk7XG4gICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRXhjbGFtYXRpb25Ub2tlbjpcbiAgICAgICAgICAgICAgcmV0dXJuICFvcGVyYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb3BlcmF0b3JUZXh0OiAnKyd8Jy0nfCd+J3wnISc7XG4gICAgICAgIHN3aXRjaCAocHJlZml4VW5hcnlFeHByZXNzaW9uLm9wZXJhdG9yKSB7XG4gICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlBsdXNUb2tlbjpcbiAgICAgICAgICAgIG9wZXJhdG9yVGV4dCA9ICcrJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5NaW51c1Rva2VuOlxuICAgICAgICAgICAgb3BlcmF0b3JUZXh0ID0gJy0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRpbGRlVG9rZW46XG4gICAgICAgICAgICBvcGVyYXRvclRleHQgPSAnfic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRXhjbGFtYXRpb25Ub2tlbjpcbiAgICAgICAgICAgIG9wZXJhdG9yVGV4dCA9ICchJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeSh7X19zeW1ib2xpYzogJ3ByZScsIG9wZXJhdG9yOiBvcGVyYXRvclRleHQsIG9wZXJhbmQ6IG9wZXJhbmR9LCBub2RlKTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICBjb25zdCBiaW5hcnlFeHByZXNzaW9uID0gPHRzLkJpbmFyeUV4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeUV4cHJlc3Npb24ubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5RXhwcmVzc2lvbi5yaWdodCk7XG4gICAgICAgIGlmIChpc0RlZmluZWQobGVmdCkgJiYgaXNEZWZpbmVkKHJpZ2h0KSkge1xuICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZShsZWZ0KSAmJiBpc1ByaW1pdGl2ZShyaWdodCkpXG4gICAgICAgICAgICBzd2l0Y2ggKGJpbmFyeUV4cHJlc3Npb24ub3BlcmF0b3JUb2tlbi5raW5kKSB7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5CYXJCYXJUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0IHx8IDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5BbXBlcnNhbmRBbXBlcnNhbmRUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0ICYmIDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5BbXBlcnNhbmRUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0ICYgPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkJhclRva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgfCA8YW55PnJpZ2h0O1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2FyZXRUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0IF4gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkVxdWFsc0VxdWFsc1Rva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgPT0gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkV4Y2xhbWF0aW9uRXF1YWxzVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCAhPSA8YW55PnJpZ2h0O1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRXF1YWxzRXF1YWxzRXF1YWxzVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCA9PT0gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkV4Y2xhbWF0aW9uRXF1YWxzRXF1YWxzVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCAhPT0gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkxlc3NUaGFuVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCA8IDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5HcmVhdGVyVGhhblRva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgPiA8YW55PnJpZ2h0O1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTGVzc1RoYW5FcXVhbHNUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0IDw9IDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5HcmVhdGVyVGhhbkVxdWFsc1Rva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgPj0gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkxlc3NUaGFuTGVzc1RoYW5Ub2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxhbnk+bGVmdCkgPDwgKDxhbnk+cmlnaHQpO1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuR3JlYXRlclRoYW5HcmVhdGVyVGhhblRva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgPj4gPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkdyZWF0ZXJUaGFuR3JlYXRlclRoYW5HcmVhdGVyVGhhblRva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgPj4+IDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5QbHVzVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCArIDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5NaW51c1Rva2VuOlxuICAgICAgICAgICAgICAgIHJldHVybiA8YW55PmxlZnQgLSA8YW55PnJpZ2h0O1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQXN0ZXJpc2tUb2tlbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPGFueT5sZWZ0ICogPGFueT5yaWdodDtcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlNsYXNoVG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCAvIDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5QZXJjZW50VG9rZW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxhbnk+bGVmdCAlIDxhbnk+cmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlY29yZEVudHJ5KFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zeW1ib2xpYzogJ2Jpbm9wJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogYmluYXJ5RXhwcmVzc2lvbi5vcGVyYXRvclRva2VuLmdldFRleHQoKSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9IDx0cy5Db25kaXRpb25hbEV4cHJlc3Npb24+bm9kZTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uYWxFeHByZXNzaW9uLmNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHRoZW5FeHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uYWxFeHByZXNzaW9uLndoZW5UcnVlKTtcbiAgICAgICAgY29uc3QgZWxzZUV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb25hbEV4cHJlc3Npb24ud2hlbkZhbHNlKTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gY29uZGl0aW9uID8gdGhlbkV4cHJlc3Npb24gOiBlbHNlRXhwcmVzc2lvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoe19fc3ltYm9saWM6ICdpZicsIGNvbmRpdGlvbiwgdGhlbkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9ufSwgbm9kZSk7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuRnVuY3Rpb25FeHByZXNzaW9uOlxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkFycm93RnVuY3Rpb246XG4gICAgICAgIHJldHVybiByZWNvcmRFbnRyeShlcnJvclN5bWJvbCgnTGFtYmRhIG5vdCBzdXBwb3J0ZWQnLCBub2RlKSwgbm9kZSk7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uOlxuICAgICAgICByZXR1cm4gcmVjb3JkRW50cnkoXG4gICAgICAgICAgICBlcnJvclN5bWJvbCgnVGFnZ2VkIHRlbXBsYXRlIGV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1ldGFkYXRhJywgbm9kZSksIG5vZGUpO1xuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLlRlbXBsYXRlRXhwcmVzc2lvbjpcbiAgICAgICAgY29uc3QgdGVtcGxhdGVFeHByZXNzaW9uID0gPHRzLlRlbXBsYXRlRXhwcmVzc2lvbj5ub2RlO1xuICAgICAgICBpZiAodGhpcy5pc0ZvbGRhYmxlKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRXhwcmVzc2lvbi50ZW1wbGF0ZVNwYW5zLnJlZHVjZShcbiAgICAgICAgICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIDxzdHJpbmc+dGhpcy5ldmFsdWF0ZU5vZGUoY3VycmVudC5leHByZXNzaW9uKSArXG4gICAgICAgICAgICAgICAgICA8c3RyaW5nPnRoaXMuZXZhbHVhdGVOb2RlKGN1cnJlbnQubGl0ZXJhbCksXG4gICAgICAgICAgICAgIHRoaXMuZXZhbHVhdGVOb2RlKHRlbXBsYXRlRXhwcmVzc2lvbi5oZWFkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRXhwcmVzc2lvbi50ZW1wbGF0ZVNwYW5zLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV2YWx1YXRlTm9kZShjdXJyZW50LmV4cHJlc3Npb24pO1xuICAgICAgICAgICAgY29uc3QgbGl0ZXJhbCA9IHRoaXMuZXZhbHVhdGVOb2RlKGN1cnJlbnQubGl0ZXJhbCk7XG4gICAgICAgICAgICBpZiAoaXNGb2xkYWJsZUVycm9yKGV4cHIpKSByZXR1cm4gZXhwcjtcbiAgICAgICAgICAgIGlmIChpc0ZvbGRhYmxlRXJyb3IobGl0ZXJhbCkpIHJldHVybiBsaXRlcmFsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91cyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGV4cHIgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGxpdGVyYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGV4cHIgKyBsaXRlcmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGV4cHI7XG4gICAgICAgICAgICBpZiAocHJldmlvdXMgIT09ICcnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHtfX3N5bWJvbGljOiAnYmlub3AnLCBvcGVyYXRvcjogJysnLCBsZWZ0OiBwcmV2aW91cywgcmlnaHQ6IGV4cHJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpdGVyYWwgIT0gJycpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0ge19fc3ltYm9saWM6ICdiaW5vcCcsIG9wZXJhdG9yOiAnKycsIGxlZnQ6IHJlc3VsdCwgcmlnaHQ6IGxpdGVyYWx9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9LCB0aGlzLmV2YWx1YXRlTm9kZSh0ZW1wbGF0ZUV4cHJlc3Npb24uaGVhZCkpO1xuICAgICAgICB9XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQXNFeHByZXNzaW9uOlxuICAgICAgICBjb25zdCBhc0V4cHJlc3Npb24gPSA8dHMuQXNFeHByZXNzaW9uPm5vZGU7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhc0V4cHJlc3Npb24uZXhwcmVzc2lvbik7XG4gICAgICBjYXNlIHRzLlN5bnRheEtpbmQuQ2xhc3NFeHByZXNzaW9uOlxuICAgICAgICByZXR1cm4ge19fc3ltYm9saWM6ICdjbGFzcyd9O1xuICAgIH1cbiAgICByZXR1cm4gcmVjb3JkRW50cnkoZXJyb3JTeW1ib2woJ0V4cHJlc3Npb24gZm9ybSBub3Qgc3VwcG9ydGVkJywgbm9kZSksIG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUHJvcGVydHlBc3NpZ25tZW50KG5vZGU6IHRzLk5vZGUpOiBub2RlIGlzIHRzLlByb3BlcnR5QXNzaWdubWVudCB7XG4gIHJldHVybiBub2RlLmtpbmQgPT0gdHMuU3ludGF4S2luZC5Qcm9wZXJ0eUFzc2lnbm1lbnQ7XG59XG5cbmNvbnN0IGVtcHR5ID0gdHMuY3JlYXRlTm9kZUFycmF5PGFueT4oKTtcblxuZnVuY3Rpb24gYXJyYXlPckVtcHR5PFQgZXh0ZW5kcyB0cy5Ob2RlPih2OiB0cy5Ob2RlQXJyYXk8VD58dW5kZWZpbmVkKTogdHMuTm9kZUFycmF5PFQ+IHtcbiAgcmV0dXJuIHYgfHwgZW1wdHk7XG59Il19