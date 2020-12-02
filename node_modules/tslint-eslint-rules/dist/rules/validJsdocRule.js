"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var doctrine = require("doctrine");
var RULE_NAME = 'valid-jsdoc';
var OPTIONS;
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var opts = this.getOptions().ruleArguments;
        OPTIONS = {
            prefer: {},
            requireReturn: true,
            requireParamType: true,
            requireReturnType: true,
            requireParamDescription: true,
            requireReturnDescription: true,
            matchDescription: ''
        };
        if (opts && opts.length > 0) {
            if (opts[0].prefer) {
                OPTIONS.prefer = opts[0].prefer;
            }
            OPTIONS.requireReturn = opts[0].requireReturn !== false;
            OPTIONS.requireParamType = opts[0].requireParamType !== false;
            OPTIONS.requireReturnType = opts[0].requireReturnType !== false;
            OPTIONS.requireParamDescription = opts[0].requireParamDescription !== false;
            OPTIONS.requireReturnDescription = opts[0].requireReturnDescription !== false;
            OPTIONS.matchDescription = opts[0].matchDescription;
        }
        var walker = new ValidJsdocWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        missingBrace: 'JSDoc type missing brace',
        syntaxError: 'JSDoc syntax error',
        missingParameterType: function (name) { return "missing JSDoc parameter type for '" + name + "'"; },
        missingParameterDescription: function (name) { return "missing JSDoc parameter description for '" + name + "'"; },
        duplicateParameter: function (name) { return "duplicate JSDoc parameter '" + name + "'"; },
        unexpectedTag: function (title) { return "unexpected @" + title + " tag; function has no return statement"; },
        missingReturnType: 'missing JSDoc return type',
        missingReturnDescription: 'missing JSDoc return description',
        prefer: function (name) { return "use @" + name + " instead"; },
        missingReturn: function (param) { return "missing JSDoc @" + (param || 'returns') + " for function"; },
        wrongParam: function (expected, actual) { return "expected JSDoc for '" + expected + "' but found '" + actual + "'"; },
        missingParam: function (name) { return "missing JSDoc for parameter '" + name + "'"; },
        wrongDescription: 'JSDoc description does not satisfy the regex pattern',
        invalidRegexDescription: function (error) { return "configured matchDescription is an invalid RegExp. Error: " + error; }
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: false,
        description: 'enforce valid JSDoc comments',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      [JSDoc](http://usejsdoc.org/) generates application programming interface (API) documentation\n      from specially-formatted comments in JavaScript code. So does [typedoc](http://typedoc.org/).\n\n      If comments are invalid because of typing mistakes, then documentation will be incomplete.\n\n      If comments are inconsistent because they are not updated when function definitions are\n      modified, then readers might become confused.\n      "], ["\n      [JSDoc](http://usejsdoc.org/) generates application programming interface (API) documentation\n      from specially-formatted comments in JavaScript code. So does [typedoc](http://typedoc.org/).\n\n      If comments are invalid because of typing mistakes, then documentation will be incomplete.\n\n      If comments are inconsistent because they are not updated when function definitions are\n      modified, then readers might become confused.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      This rule has an object option:\n\n      * `\"prefer\"` enforces consistent documentation tags specified by an object whose properties\n                     mean instead of key use value (for example, `\"return\": \"returns\"` means\n                     instead of `@return` use `@returns`)\n      * `\"preferType\"` enforces consistent type strings specified by an object whose properties\n                         mean instead of key use value (for example, `\"object\": \"Object\"` means\n                         instead of `object` use `Object`)\n      * `\"requireReturn\"` requires a return tag:\n        * `true` (default) *even if* the function or method does not have a return statement\n                   (this option value does not apply to constructors)\n        * `false` *if and only if* the function or method has a return statement (this option\n                    value does apply to constructors)\n      * `\"requireParamType\"`: `false` allows missing type in param tags\n      * `\"requireReturnType\"`: `false` allows missing type in return tags\n      * `\"matchDescription\"` specifies (as a string) a regular expression to match the description\n                               in each JSDoc comment (for example, `\".+\"` requires a description;\n                               this option does not apply to descriptions in parameter or return\n                               tags)\n      * `\"requireParamDescription\"`: `false` allows missing description in parameter tags\n      * `\"requireReturnDescription\"`: `false` allows missing description in return tags\n      "], ["\n      This rule has an object option:\n\n      * \\`\"prefer\"\\` enforces consistent documentation tags specified by an object whose properties\n                     mean instead of key use value (for example, \\`\"return\": \"returns\"\\` means\n                     instead of \\`@return\\` use \\`@returns\\`)\n      * \\`\"preferType\"\\` enforces consistent type strings specified by an object whose properties\n                         mean instead of key use value (for example, \\`\"object\": \"Object\"\\` means\n                         instead of \\`object\\` use \\`Object\\`)\n      * \\`\"requireReturn\"\\` requires a return tag:\n        * \\`true\\` (default) *even if* the function or method does not have a return statement\n                   (this option value does not apply to constructors)\n        * \\`false\\` *if and only if* the function or method has a return statement (this option\n                    value does apply to constructors)\n      * \\`\"requireParamType\"\\`: \\`false\\` allows missing type in param tags\n      * \\`\"requireReturnType\"\\`: \\`false\\` allows missing type in return tags\n      * \\`\"matchDescription\"\\` specifies (as a string) a regular expression to match the description\n                               in each JSDoc comment (for example, \\`\".+\"\\` requires a description;\n                               this option does not apply to descriptions in parameter or return\n                               tags)\n      * \\`\"requireParamDescription\"\\`: \\`false\\` allows missing description in parameter tags\n      * \\`\"requireReturnDescription\"\\`: \\`false\\` allows missing description in return tags\n      "]))),
        options: {
            type: 'object',
            properties: {
                prefer: {
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                },
                preferType: {
                    type: 'object',
                    additionalProperties: {
                        type: 'string'
                    }
                },
                requireReturn: {
                    type: 'boolean'
                },
                requireParamDescription: {
                    type: 'boolean'
                },
                requireReturnDescription: {
                    type: 'boolean'
                },
                matchDescription: {
                    type: 'string'
                },
                requireParamType: {
                    type: 'boolean'
                },
                requireReturnType: {
                    type: 'boolean'
                }
            },
            additionalProperties: false
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true]\n        "], ["\n        \"", "\": [true]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, {\n          \"prefer\": {\n            \"return\": \"returns\"\n          },\n          \"requireReturn\": false,\n          \"requireParamDescription\": true,\n          \"requireReturnDescription\": true,\n          \"matchDescription\": \"^[A-Z][A-Za-z0-9\\\\s]*[.]$\"\n        }]\n        "], ["\n        \"", "\": [true, {\n          \"prefer\": {\n            \"return\": \"returns\"\n          },\n          \"requireReturn\": false,\n          \"requireParamDescription\": true,\n          \"requireReturnDescription\": true,\n          \"matchDescription\": \"^[A-Z][A-Za-z0-9\\\\\\\\s]*[.]$\"\n        }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'maintainability'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ValidJsdocWalker = (function (_super) {
    tslib_1.__extends(ValidJsdocWalker, _super);
    function ValidJsdocWalker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fns = [];
        return _this;
    }
    ValidJsdocWalker.prototype.visitSourceFile = function (node) {
        _super.prototype.visitSourceFile.call(this, node);
    };
    ValidJsdocWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.ClassExpression) {
            this.visitClassExpression(node);
        }
        else {
            _super.prototype.visitNode.call(this, node);
        }
    };
    ValidJsdocWalker.prototype.visitArrowFunction = function (node) {
        this.startFunction(node);
        _super.prototype.visitArrowFunction.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitFunctionExpression = function (node) {
        this.startFunction(node);
        _super.prototype.visitFunctionExpression.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitFunctionDeclaration = function (node) {
        this.startFunction(node);
        _super.prototype.visitFunctionDeclaration.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitClassExpression = function (node) {
        this.startFunction(node);
        _super.prototype.visitClassExpression.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitClassDeclaration = function (node) {
        this.startFunction(node);
        _super.prototype.visitClassDeclaration.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitMethodDeclaration = function (node) {
        this.startFunction(node);
        _super.prototype.visitMethodDeclaration.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitConstructorDeclaration = function (node) {
        this.startFunction(node);
        _super.prototype.visitConstructorDeclaration.call(this, node);
        this.checkJSDoc(node);
    };
    ValidJsdocWalker.prototype.visitReturnStatement = function (node) {
        this.addReturn(node);
        _super.prototype.visitReturnStatement.call(this, node);
    };
    ValidJsdocWalker.prototype.startFunction = function (node) {
        var returnPresent = false;
        var isVoidOrNever = false;
        var returnType;
        if (node.kind === ts.SyntaxKind.ArrowFunction && node.body.kind !== ts.SyntaxKind.Block)
            returnPresent = true;
        if (this.isTypeClass(node))
            returnPresent = true;
        returnType = node.type;
        if (returnType !== undefined) {
            switch (returnType.kind) {
                case ts.SyntaxKind.VoidKeyword:
                case ts.SyntaxKind.NeverKeyword:
                    isVoidOrNever = true;
                    break;
            }
        }
        this.fns.push({ node: node, returnPresent: returnPresent, isVoidOrNever: isVoidOrNever });
    };
    ValidJsdocWalker.prototype.addReturn = function (node) {
        var parent = node;
        var nodes = this.fns.map(function (fn) { return fn.node; });
        while (parent && nodes.indexOf(parent) === -1)
            parent = parent.parent;
        if (parent && node.expression) {
            this.fns[nodes.indexOf(parent)].returnPresent = true;
        }
    };
    ValidJsdocWalker.prototype.isTypeClass = function (node) {
        return node.kind === ts.SyntaxKind.ClassExpression || node.kind === ts.SyntaxKind.ClassDeclaration;
    };
    ValidJsdocWalker.prototype.isValidReturnType = function (tag) {
        return tag.type && (tag.type.name === 'void' || tag.type.type === 'UndefinedLiteral');
    };
    ValidJsdocWalker.prototype.getJSDocComment = function (node) {
        var ALLOWED_PARENTS = [
            ts.SyntaxKind.BinaryExpression,
            ts.SyntaxKind.VariableDeclaration,
            ts.SyntaxKind.VariableDeclarationList,
            ts.SyntaxKind.VariableStatement
        ];
        if (!/^\/\*\*/.test(node.getFullText().trim())) {
            if (node.parent && ALLOWED_PARENTS.indexOf(node.parent.kind) !== -1) {
                return this.getJSDocComment(node.parent);
            }
            return {};
        }
        var comments = node.getFullText();
        var offset = comments.indexOf('/**');
        comments = comments.substring(offset);
        comments = comments.substring(0, comments.indexOf('*/') + 2);
        var start = node.pos + offset;
        var width = comments.length;
        if (!/^\/\*\*/.test(comments) || !/\*\/$/.test(comments)) {
            return {};
        }
        return { comments: comments, start: start, width: width };
    };
    ValidJsdocWalker.prototype.checkJSDoc = function (node) {
        var _this = this;
        var _a = this.getJSDocComment(node), comments = _a.comments, start = _a.start, width = _a.width;
        if (!comments || start === undefined || width === undefined)
            return;
        var jsdoc;
        try {
            jsdoc = doctrine.parse(comments, {
                strict: true,
                unwrap: true,
                sloppy: true
            });
        }
        catch (e) {
            if (/braces/i.test(e.message)) {
                this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingBrace));
            }
            else {
                this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.syntaxError));
            }
            return;
        }
        var fn = this.fns.filter(function (f) { return node === f.node; })[0];
        var params = {};
        var hasReturns = false;
        var hasConstructor = false;
        var isOverride = false;
        var isAbstract = false;
        for (var _i = 0, _b = jsdoc.tags; _i < _b.length; _i++) {
            var tag = _b[_i];
            switch (tag.title) {
                case 'param':
                case 'arg':
                case 'argument':
                    if (!tag.type && OPTIONS.requireParamType) {
                        this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingParameterType(tag.name)));
                    }
                    if (!tag.description && OPTIONS.requireParamDescription) {
                        this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingParameterDescription(tag.name)));
                    }
                    if (params[tag.name]) {
                        this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.duplicateParameter(tag.name)));
                    }
                    else if (tag.name.indexOf('.') === -1) {
                        params[tag.name] = true;
                    }
                    break;
                case 'return':
                case 'returns':
                    hasReturns = true;
                    isAbstract = Lint.hasModifier(fn.node.modifiers, ts.SyntaxKind.AbstractKeyword);
                    if (!isAbstract && !OPTIONS.requireReturn && !fn.returnPresent && tag.type && tag.type.name !== 'void' && tag.type.name !== 'undefined') {
                        this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.unexpectedTag(tag.title)));
                    }
                    else {
                        if (!tag.type && OPTIONS.requireReturnType) {
                            this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingReturnType));
                        }
                        if (!this.isValidReturnType(tag) && !tag.description && OPTIONS.requireReturnDescription) {
                            this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingReturnDescription));
                        }
                    }
                    break;
                case 'constructor':
                case 'class':
                    hasConstructor = true;
                    break;
                case 'override':
                case 'inheritdoc':
                case 'inheritDoc':
                    isOverride = true;
                    break;
            }
            var title = OPTIONS.prefer[tag.title];
            if (OPTIONS.prefer.hasOwnProperty(tag.title) && tag.title !== title) {
                this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.prefer(title)));
            }
        }
        if (!isOverride && !hasReturns && !hasConstructor && node.parent && node.parent.kind !== ts.SyntaxKind.GetKeyword && !this.isTypeClass(node)) {
            if (OPTIONS.requireReturn || (fn.returnPresent && !fn.isVoidOrNever)) {
                this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.missingReturn(OPTIONS.prefer['returns'])));
            }
        }
        var jsdocParams = Object.keys(params);
        var parameters = node.parameters;
        if (parameters) {
            parameters.forEach(function (param, i) {
                if (param.name.kind === ts.SyntaxKind.Identifier) {
                    var name = param.name.text;
                    if (jsdocParams[i] && name !== jsdocParams[i]) {
                        _this.addFailure(_this.createFailure(start, width, Rule.FAILURE_STRING.wrongParam(name, jsdocParams[i])));
                    }
                    else if (!params[name] && !isOverride) {
                        _this.addFailure(_this.createFailure(start, width, Rule.FAILURE_STRING.missingParam(name)));
                    }
                }
            });
        }
        if (OPTIONS.matchDescription) {
            try {
                var regex = new RegExp(OPTIONS.matchDescription);
                if (!regex.test(jsdoc.description)) {
                    this.addFailure(this.createFailure(start, width, Rule.FAILURE_STRING.wrongDescription));
                }
            }
            catch (e) {
                this.addFailure(this.createFailure(start, width, e.message));
            }
        }
    };
    return ValidJsdocWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3ZhbGlkSnNkb2NSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFDL0IsbUNBQXFDO0FBRXJDLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNoQyxJQUFJLE9BQVksQ0FBQztBQUVqQjtJQUEwQixnQ0FBdUI7SUFBakQ7O0lBMElBLENBQUM7SUE1QlEsb0JBQUssR0FBWixVQUFhLFVBQXlCO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDM0MsT0FBTyxHQUFHO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsSUFBSTtZQUNuQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsdUJBQXVCLEVBQUUsSUFBSTtZQUM3Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGdCQUFnQixFQUFFLEVBQUU7U0FDckIsQ0FBQztRQUVGLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1lBRUQsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQztZQUN4RCxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixLQUFLLEtBQUssQ0FBQztZQUM5RCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQztZQUNoRSxPQUFPLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FB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QUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtvQkFDaEQsSUFBSSxJQUFJLEdBQUksS0FBSyxDQUFDLElBQXNCLENBQUMsSUFBSSxDQUFDO29CQUM5QyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUM3QyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN6Rzt5QkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNyQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQzVCLElBQUk7Z0JBQ0YsSUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUJBQ3pGO2FBQ0Y7WUFDRCxPQUFPLENBQUMsRUFBRTtnQkFDUixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM5RDtTQUNGO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0F4UUEsQUF3UUMsQ0F4UThCLElBQUksQ0FBQyxVQUFVLEdBd1E3QyIsImZpbGUiOiJydWxlcy92YWxpZEpzZG9jUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam1sb3Blei90c2xpbnQtZXNsaW50LXJ1bGVzL3NyYyJ9
