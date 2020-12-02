/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread, __values } from "tslib";
import { StaticSymbol } from '../aot/static_symbol';
import { BindingForm, convertActionBinding, convertPropertyBinding, convertPropertyBindingBuiltins, EventHandlerVars } from '../compiler_util/expression_converter';
import * as o from '../output/output_ast';
import { templateVisitAll } from '../template_parser/template_ast';
/**
 * Generates code that is used to type check templates.
 */
var TypeCheckCompiler = /** @class */ (function () {
    function TypeCheckCompiler(options, reflector) {
        this.options = options;
        this.reflector = reflector;
    }
    /**
     * Important notes:
     * - This must not produce new `import` statements, but only refer to types outside
     *   of the file via the variables provided via externalReferenceVars.
     *   This allows Typescript to reuse the old program's structure as no imports have changed.
     * - This must not produce any exports, as this would pollute the .d.ts file
     *   and also violate the point above.
     */
    TypeCheckCompiler.prototype.compileComponent = function (componentId, component, template, usedPipes, externalReferenceVars, ctx) {
        var _this = this;
        var pipes = new Map();
        usedPipes.forEach(function (p) { return pipes.set(p.name, p.type.reference); });
        var embeddedViewCount = 0;
        var viewBuilderFactory = function (parent, guards) {
            var embeddedViewIndex = embeddedViewCount++;
            return new ViewBuilder(_this.options, _this.reflector, externalReferenceVars, parent, component.type.reference, component.isHost, embeddedViewIndex, pipes, guards, ctx, viewBuilderFactory);
        };
        var visitor = viewBuilderFactory(null, []);
        visitor.visitAll([], template);
        return visitor.build(componentId);
    };
    return TypeCheckCompiler;
}());
export { TypeCheckCompiler };
var DYNAMIC_VAR_NAME = '_any';
var TypeCheckLocalResolver = /** @class */ (function () {
    function TypeCheckLocalResolver() {
    }
    TypeCheckLocalResolver.prototype.notifyImplicitReceiverUse = function () { };
    TypeCheckLocalResolver.prototype.getLocal = function (name) {
        if (name === EventHandlerVars.event.name) {
            // References to the event should not be type-checked.
            // TODO(chuckj): determine a better type for the event.
            return o.variable(DYNAMIC_VAR_NAME);
        }
        return null;
    };
    return TypeCheckLocalResolver;
}());
var defaultResolver = new TypeCheckLocalResolver();
var ViewBuilder = /** @class */ (function () {
    function ViewBuilder(options, reflector, externalReferenceVars, parent, component, isHostComponent, embeddedViewIndex, pipes, guards, ctx, viewBuilderFactory) {
        this.options = options;
        this.reflector = reflector;
        this.externalReferenceVars = externalReferenceVars;
        this.parent = parent;
        this.component = component;
        this.isHostComponent = isHostComponent;
        this.embeddedViewIndex = embeddedViewIndex;
        this.pipes = pipes;
        this.guards = guards;
        this.ctx = ctx;
        this.viewBuilderFactory = viewBuilderFactory;
        this.refOutputVars = new Map();
        this.variables = [];
        this.children = [];
        this.updates = [];
        this.actions = [];
    }
    ViewBuilder.prototype.getOutputVar = function (type) {
        var varName;
        if (type === this.component && this.isHostComponent) {
            varName = DYNAMIC_VAR_NAME;
        }
        else if (type instanceof StaticSymbol) {
            varName = this.externalReferenceVars.get(type);
        }
        else {
            varName = DYNAMIC_VAR_NAME;
        }
        if (!varName) {
            throw new Error("Illegal State: referring to a type without a variable " + JSON.stringify(type));
        }
        return varName;
    };
    ViewBuilder.prototype.getTypeGuardExpressions = function (ast) {
        var e_1, _a, e_2, _b;
        var result = __spread(this.guards);
        try {
            for (var _c = __values(ast.directives), _d = _c.next(); !_d.done; _d = _c.next()) {
                var directive = _d.value;
                try {
                    for (var _e = (e_2 = void 0, __values(directive.inputs)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var input = _f.value;
                        var guard = directive.directive.guards[input.directiveName];
                        if (guard) {
                            var useIf = guard === 'UseIf';
                            result.push({
                                guard: guard,
                                useIf: useIf,
                                expression: {
                                    context: this.component,
                                    value: input.value,
                                    sourceSpan: input.sourceSpan,
                                },
                            });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    ViewBuilder.prototype.visitAll = function (variables, astNodes) {
        this.variables = variables;
        templateVisitAll(this, astNodes);
    };
    ViewBuilder.prototype.build = function (componentId, targetStatements) {
        var e_3, _a;
        var _this = this;
        if (targetStatements === void 0) { targetStatements = []; }
        this.children.forEach(function (child) { return child.build(componentId, targetStatements); });
        var viewStmts = [o.variable(DYNAMIC_VAR_NAME).set(o.NULL_EXPR).toDeclStmt(o.DYNAMIC_TYPE)];
        var bindingCount = 0;
        this.updates.forEach(function (expression) {
            var _a = _this.preprocessUpdateExpression(expression), sourceSpan = _a.sourceSpan, context = _a.context, value = _a.value;
            var bindingId = "" + bindingCount++;
            var nameResolver = context === _this.component ? _this : defaultResolver;
            var _b = convertPropertyBinding(nameResolver, o.variable(_this.getOutputVar(context)), value, bindingId, BindingForm.General), stmts = _b.stmts, currValExpr = _b.currValExpr;
            stmts.push(new o.ExpressionStatement(currValExpr));
            viewStmts.push.apply(viewStmts, __spread(stmts.map(function (stmt) { return o.applySourceSpanToStatementIfNeeded(stmt, sourceSpan); })));
        });
        this.actions.forEach(function (_a) {
            var sourceSpan = _a.sourceSpan, context = _a.context, value = _a.value;
            var bindingId = "" + bindingCount++;
            var nameResolver = context === _this.component ? _this : defaultResolver;
            var stmts = convertActionBinding(nameResolver, o.variable(_this.getOutputVar(context)), value, bindingId).stmts;
            viewStmts.push.apply(viewStmts, __spread(stmts.map(function (stmt) { return o.applySourceSpanToStatementIfNeeded(stmt, sourceSpan); })));
        });
        if (this.guards.length) {
            var guardExpression = undefined;
            try {
                for (var _b = __values(this.guards), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var guard = _c.value;
                    var _d = this.preprocessUpdateExpression(guard.expression), context = _d.context, value = _d.value;
                    var bindingId = "" + bindingCount++;
                    var nameResolver = context === this.component ? this : defaultResolver;
                    // We only support support simple expressions and ignore others as they
                    // are unlikely to affect type narrowing.
                    var _e = convertPropertyBinding(nameResolver, o.variable(this.getOutputVar(context)), value, bindingId, BindingForm.TrySimple), stmts = _e.stmts, currValExpr = _e.currValExpr;
                    if (stmts.length == 0) {
                        var guardClause = guard.useIf ? currValExpr : this.ctx.importExpr(guard.guard).callFn([currValExpr]);
                        guardExpression = guardExpression ? guardExpression.and(guardClause) : guardClause;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (guardExpression) {
                viewStmts = [new o.IfStmt(guardExpression, viewStmts)];
            }
        }
        var viewName = "_View_" + componentId + "_" + this.embeddedViewIndex;
        var viewFactory = new o.DeclareFunctionStmt(viewName, [], viewStmts);
        targetStatements.push(viewFactory);
        return targetStatements;
    };
    ViewBuilder.prototype.visitBoundText = function (ast, context) {
        var _this = this;
        var astWithSource = ast.value;
        var inter = astWithSource.ast;
        inter.expressions.forEach(function (expr) {
            return _this.updates.push({ context: _this.component, value: expr, sourceSpan: ast.sourceSpan });
        });
    };
    ViewBuilder.prototype.visitEmbeddedTemplate = function (ast, context) {
        this.visitElementOrTemplate(ast);
        // Note: The old view compiler used to use an `any` type
        // for the context in any embedded view.
        // We keep this behaivor behind a flag for now.
        if (this.options.fullTemplateTypeCheck) {
            // Find any applicable type guards. For example, NgIf has a type guard on ngIf
            // (see NgIf.ngIfTypeGuard) that can be used to indicate that a template is only
            // stamped out if ngIf is truthy so any bindings in the template can assume that,
            // if a nullable type is used for ngIf, that expression is not null or undefined.
            var guards = this.getTypeGuardExpressions(ast);
            var childVisitor = this.viewBuilderFactory(this, guards);
            this.children.push(childVisitor);
            childVisitor.visitAll(ast.variables, ast.children);
        }
    };
    ViewBuilder.prototype.visitElement = function (ast, context) {
        var _this = this;
        this.visitElementOrTemplate(ast);
        var inputDefs = [];
        var updateRendererExpressions = [];
        var outputDefs = [];
        ast.inputs.forEach(function (inputAst) {
            _this.updates.push({ context: _this.component, value: inputAst.value, sourceSpan: inputAst.sourceSpan });
        });
        templateVisitAll(this, ast.children);
    };
    ViewBuilder.prototype.visitElementOrTemplate = function (ast) {
        var _this = this;
        ast.directives.forEach(function (dirAst) {
            _this.visitDirective(dirAst);
        });
        ast.references.forEach(function (ref) {
            var outputVarType = null;
            // Note: The old view compiler used to use an `any` type
            // for directives exposed via `exportAs`.
            // We keep this behaivor behind a flag for now.
            if (ref.value && ref.value.identifier && _this.options.fullTemplateTypeCheck) {
                outputVarType = ref.value.identifier.reference;
            }
            else {
                outputVarType = o.BuiltinTypeName.Dynamic;
            }
            _this.refOutputVars.set(ref.name, outputVarType);
        });
        ast.outputs.forEach(function (outputAst) {
            _this.actions.push({ context: _this.component, value: outputAst.handler, sourceSpan: outputAst.sourceSpan });
        });
    };
    ViewBuilder.prototype.visitDirective = function (dirAst) {
        var _this = this;
        var dirType = dirAst.directive.type.reference;
        dirAst.inputs.forEach(function (input) { return _this.updates.push({ context: _this.component, value: input.value, sourceSpan: input.sourceSpan }); });
        // Note: The old view compiler used to use an `any` type
        // for expressions in host properties / events.
        // We keep this behaivor behind a flag for now.
        if (this.options.fullTemplateTypeCheck) {
            dirAst.hostProperties.forEach(function (inputAst) { return _this.updates.push({ context: dirType, value: inputAst.value, sourceSpan: inputAst.sourceSpan }); });
            dirAst.hostEvents.forEach(function (hostEventAst) { return _this.actions.push({
                context: dirType,
                value: hostEventAst.handler,
                sourceSpan: hostEventAst.sourceSpan
            }); });
        }
    };
    ViewBuilder.prototype.notifyImplicitReceiverUse = function () { };
    ViewBuilder.prototype.getLocal = function (name) {
        if (name == EventHandlerVars.event.name) {
            return o.variable(this.getOutputVar(o.BuiltinTypeName.Dynamic));
        }
        for (var currBuilder = this; currBuilder; currBuilder = currBuilder.parent) {
            var outputVarType = void 0;
            // check references
            outputVarType = currBuilder.refOutputVars.get(name);
            if (outputVarType == null) {
                // check variables
                var varAst = currBuilder.variables.find(function (varAst) { return varAst.name === name; });
                if (varAst) {
                    outputVarType = o.BuiltinTypeName.Dynamic;
                }
            }
            if (outputVarType != null) {
                return o.variable(this.getOutputVar(outputVarType));
            }
        }
        return null;
    };
    ViewBuilder.prototype.pipeOutputVar = function (name) {
        var pipe = this.pipes.get(name);
        if (!pipe) {
            throw new Error("Illegal State: Could not find pipe " + name + " in template of " + this.component);
        }
        return this.getOutputVar(pipe);
    };
    ViewBuilder.prototype.preprocessUpdateExpression = function (expression) {
        var _this = this;
        return {
            sourceSpan: expression.sourceSpan,
            context: expression.context,
            value: convertPropertyBindingBuiltins({
                createLiteralArrayConverter: function (argCount) { return function (args) {
                    var arr = o.literalArr(args);
                    // Note: The old view compiler used to use an `any` type
                    // for arrays.
                    return _this.options.fullTemplateTypeCheck ? arr : arr.cast(o.DYNAMIC_TYPE);
                }; },
                createLiteralMapConverter: function (keys) {
                    return function (values) {
                        var entries = keys.map(function (k, i) { return ({
                            key: k.key,
                            value: values[i],
                            quoted: k.quoted,
                        }); });
                        var map = o.literalMap(entries);
                        // Note: The old view compiler used to use an `any` type
                        // for maps.
                        return _this.options.fullTemplateTypeCheck ? map : map.cast(o.DYNAMIC_TYPE);
                    };
                },
                createPipeConverter: function (name, argCount) { return function (args) {
                    // Note: The old view compiler used to use an `any` type
                    // for pipes.
                    var pipeExpr = _this.options.fullTemplateTypeCheck ?
                        o.variable(_this.pipeOutputVar(name)) :
                        o.variable(_this.getOutputVar(o.BuiltinTypeName.Dynamic));
                    return pipeExpr.callMethod('transform', args);
                }; },
            }, expression.value)
        };
    };
    ViewBuilder.prototype.visitNgContent = function (ast, context) { };
    ViewBuilder.prototype.visitText = function (ast, context) { };
    ViewBuilder.prototype.visitDirectiveProperty = function (ast, context) { };
    ViewBuilder.prototype.visitReference = function (ast, context) { };
    ViewBuilder.prototype.visitVariable = function (ast, context) { };
    ViewBuilder.prototype.visitEvent = function (ast, context) { };
    ViewBuilder.prototype.visitElementProperty = function (ast, context) { };
    ViewBuilder.prototype.visitAttr = function (ast, context) { };
    return ViewBuilder;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9jaGVja19jb21waWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy92aWV3X2NvbXBpbGVyL3R5cGVfY2hlY2tfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUMsV0FBVyxFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLGdCQUFnQixFQUFnQixNQUFNLHVDQUF1QyxDQUFDO0FBRWpMLE9BQU8sS0FBSyxDQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFMUMsT0FBTyxFQUF1TSxnQkFBZ0IsRUFBdUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUk3Ujs7R0FFRztBQUNIO0lBQ0UsMkJBQW9CLE9BQTJCLEVBQVUsU0FBMEI7UUFBL0QsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUFHLENBQUM7SUFFdkY7Ozs7Ozs7T0FPRztJQUNILDRDQUFnQixHQUFoQixVQUNJLFdBQW1CLEVBQUUsU0FBbUMsRUFBRSxRQUF1QixFQUNqRixTQUErQixFQUFFLHFCQUFnRCxFQUNqRixHQUFrQjtRQUh0QixpQkFtQkM7UUFmQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztRQUM1RCxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFNLGtCQUFrQixHQUNwQixVQUFDLE1BQXdCLEVBQUUs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QUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLEVBUHdELENBT3hEO2FBQ0YsRUFDRCxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEdBQWlCLEVBQUUsT0FBWSxJQUFRLENBQUM7SUFDdkQsK0JBQVMsR0FBVCxVQUFVLEdBQVksRUFBRSxPQUFZLElBQVEsQ0FBQztJQUM3Qyw0Q0FBc0IsR0FBdEIsVUFBdUIsR0FBOEIsRUFBRSxPQUFZLElBQVEsQ0FBQztJQUM1RSxvQ0FBYyxHQUFkLFVBQWUsR0FBaUIsRUFBRSxPQUFZLElBQVEsQ0FBQztJQUN2RCxtQ0FBYSxHQUFiLFVBQWMsR0FBZ0IsRUFBRSxPQUFZLElBQVEsQ0FBQztJQUNyRCxnQ0FBVSxHQUFWLFVBQVcsR0FBa0IsRUFBRSxPQUFZLElBQVEsQ0FBQztJQUNwRCwwQ0FBb0IsR0FBcEIsVUFBcUIsR0FBNEIsRUFBRSxPQUFZLElBQVEsQ0FBQztJQUN4RSwrQkFBUyxHQUFULFVBQVUsR0FBWSxFQUFFLE9BQVksSUFBUSxDQUFDO0lBQy9DLGtCQUFDO0FBQUQsQ0FBQyxBQXBSRCxJQW9SQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBb3RDb21waWxlck9wdGlvbnN9IGZyb20gJy4uL2FvdC9jb21waWxlcl9vcHRpb25zJztcbmltcG9ydCB7U3RhdGljUmVmbGVjdG9yfSBmcm9tICcuLi9hb3Qvc3RhdGljX3JlZmxlY3Rvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi4vYW90L3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsIENvbXBpbGVQaXBlU3VtbWFyeX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0JpbmRpbmdGb3JtLCBjb252ZXJ0QWN0aW9uQmluZGluZywgY29udmVydFByb3BlcnR5QmluZGluZywgY29udmVydFByb3BlcnR5QmluZGluZ0J1aWx0aW5zLCBFdmVudEhhbmRsZXJWYXJzLCBMb2NhbFJlc29sdmVyfSBmcm9tICcuLi9jb21waWxlcl91dGlsL2V4cHJlc3Npb25fY29udmVydGVyJztcbmltcG9ydCB7QVNULCBBU1RXaXRoU291cmNlLCBJbnRlcnBvbGF0aW9ufSBmcm9tICcuLi9leHByZXNzaW9uX3BhcnNlci9hc3QnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge0F0dHJBc3QsIEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIEJvdW5kRWxlbWVudFByb3BlcnR5QXN0LCBCb3VuZEV2ZW50QXN0LCBCb3VuZFRleHRBc3QsIERpcmVjdGl2ZUFzdCwgRWxlbWVudEFzdCwgRW1iZWRkZWRUZW1wbGF0ZUFzdCwgTmdDb250ZW50QXN0LCBSZWZlcmVuY2VBc3QsIFRlbXBsYXRlQXN0LCBUZW1wbGF0ZUFzdFZpc2l0b3IsIHRlbXBsYXRlVmlzaXRBbGwsIFRleHRBc3QsIFZhcmlhYmxlQXN0fSBmcm9tICcuLi90ZW1wbGF0ZV9wYXJzZXIvdGVtcGxhdGVfYXN0JztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZXMgY29kZSB0aGF0IGlzIHVzZWQgdG8gdHlwZSBjaGVjayB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUeXBlQ2hlY2tDb21waWxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogQW90Q29tcGlsZXJPcHRpb25zLCBwcml2YXRlIHJlZmxlY3RvcjogU3RhdGljUmVmbGVjdG9yKSB7fVxuXG4gIC8qKlxuICAgKiBJbXBvcnRhbnQgbm90ZXM6XG4gICAqIC0gVGhpcyBtdXN0IG5vdCBwcm9kdWNlIG5ldyBgaW1wb3J0YCBzdGF0ZW1lbnRzLCBidXQgb25seSByZWZlciB0byB0eXBlcyBvdXRzaWRlXG4gICAqICAgb2YgdGhlIGZpbGUgdmlhIHRoZSB2YXJpYWJsZXMgcHJvdmlkZWQgdmlhIGV4dGVybmFsUmVmZXJlbmNlVmFycy5cbiAgICogICBUaGlzIGFsbG93cyBUeXBlc2NyaXB0IHRvIHJldXNlIHRoZSBvbGQgcHJvZ3JhbSdzIHN0cnVjdHVyZSBhcyBubyBpbXBvcnRzIGhhdmUgY2hhbmdlZC5cbiAgICogLSBUaGlzIG11c3Qgbm90IHByb2R1Y2UgYW55IGV4cG9ydHMsIGFzIHRoaXMgd291bGQgcG9sbHV0ZSB0aGUgLmQudHMgZmlsZVxuICAgKiAgIGFuZCBhbHNvIHZpb2xhdGUgdGhlIHBvaW50IGFib3ZlLlxuICAgKi9cbiAgY29tcGlsZUNvbXBvbmVudChcbiAgICAgIGNvbXBvbmVudElkOiBzdHJpbmcsIGNvbXBvbmVudDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCB0ZW1wbGF0ZTogVGVtcGxhdGVBc3RbXSxcbiAgICAgIHVzZWRQaXBlczogQ29tcGlsZVBpcGVTdW1tYXJ5W10sIGV4dGVybmFsUmVmZXJlbmNlVmFyczogTWFwPFN0YXRpY1N5bWJvbCwgc3RyaW5nPixcbiAgICAgIGN0eDogT3V0cHV0Q29udGV4dCk6IG8uU3RhdGVtZW50W10ge1xuICAgIGNvbnN0IHBpcGVzID0gbmV3IE1hcDxzdHJpbmcsIFN0YXRpY1N5bWJvbD4oKTtcbiAgICB1c2VkUGlwZXMuZm9yRWFjaChwID0+IHBpcGVzLnNldChwLm5hbWUsIHAudHlwZS5yZWZlcmVuY2UpKTtcbiAgICBsZXQgZW1iZWRkZWRWaWV3Q291bnQgPSAwO1xuICAgIGNvbnN0IHZpZXdCdWlsZGVyRmFjdG9yeSA9XG4gICAgICAgIChwYXJlbnQ6IFZpZXdCdWlsZGVyfG51bGwsIGd1YXJkczogR3VhcmRFeHByZXNzaW9uW10pOiBWaWV3QnVpbGRlciA9PiB7XG4gICAgICAgICAgY29uc3QgZW1iZWRkZWRWaWV3SW5kZXggPSBlbWJlZGRlZFZpZXdDb3VudCsrO1xuICAgICAgICAgIHJldHVybiBuZXcgVmlld0J1aWxkZXIoXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucywgdGhpcy5yZWZsZWN0b3IsIGV4dGVybmFsUmVmZXJlbmNlVmFycywgcGFyZW50LCBjb21wb25lbnQudHlwZS5yZWZlcmVuY2UsXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5pc0hvc3QsIGVtYmVkZGVkVmlld0luZGV4LCBwaXBlcywgZ3VhcmRzLCBjdHgsIHZpZXdCdWlsZGVyRmFjdG9yeSk7XG4gICAgICAgIH07XG5cbiAgICBjb25zdCB2aXNpdG9yID0gdmlld0J1aWxkZXJGYWN0b3J5KG51bGwsIFtdKTtcbiAgICB2aXNpdG9yLnZpc2l0QWxsKFtdLCB0ZW1wbGF0ZSk7XG5cbiAgICByZXR1cm4gdmlzaXRvci5idWlsZChjb21wb25lbnRJZCk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIEd1YXJkRXhwcmVzc2lvbiB7XG4gIGd1YXJkOiBTdGF0aWNTeW1ib2w7XG4gIHVzZUlmOiBib29sZWFuO1xuICBleHByZXNzaW9uOiBFeHByZXNzaW9uO1xufVxuXG5pbnRlcmZhY2UgVmlld0J1aWxkZXJGYWN0b3J5IHtcbiAgKHBhcmVudDogVmlld0J1aWxkZXIsIGd1YXJkczogR3VhcmRFeHByZXNzaW9uW10pOiBWaWV3QnVpbGRlcjtcbn1cblxuLy8gTm90ZTogVGhpcyBpcyB1c2VkIGFzIGtleSBpbiBNYXAgYW5kIHNob3VsZCB0aGVyZWZvcmUgYmVcbi8vIHVuaXF1ZSBwZXIgdmFsdWUuXG50eXBlIE91dHB1dFZhclR5cGUgPSBvLkJ1aWx0aW5UeXBlTmFtZXxTdGF0aWNTeW1ib2w7XG5cbmludGVyZmFjZSBFeHByZXNzaW9uIHtcbiAgY29udGV4dDogT3V0cHV0VmFyVHlwZTtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2YWx1ZTogQVNUO1xufVxuXG5jb25zdCBEWU5BTUlDX1ZBUl9OQU1FID0gJ19hbnknO1xuXG5jbGFzcyBUeXBlQ2hlY2tMb2NhbFJlc29sdmVyIGltcGxlbWVudHMgTG9jYWxSZXNvbHZlciB7XG4gIG5vdGlmeUltcGxpY2l0UmVjZWl2ZXJVc2UoKTogdm9pZCB7fVxuICBnZXRMb2NhbChuYW1lOiBzdHJpbmcpOiBvLkV4cHJlc3Npb258bnVsbCB7XG4gICAgaWYgKG5hbWUgPT09IEV2ZW50SGFuZGxlclZhcnMuZXZlbnQubmFtZSkge1xuICAgICAgLy8gUmVmZXJlbmNlcyB0byB0aGUgZXZlbnQgc2hvdWxkIG5vdCBiZSB0eXBlLWNoZWNrZWQuXG4gICAgICAvLyBUT0RPKGNodWNraik6IGRldGVybWluZSBhIGJldHRlciB0eXBlIGZvciB0aGUgZXZlbnQuXG4gICAgICByZXR1cm4gby52YXJpYWJsZShEWU5BTUlDX1ZBUl9OQU1FKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFJlc29sdmVyID0gbmV3IFR5cGVDaGVja0xvY2FsUmVzb2x2ZXIoKTtcblxuY2xhc3MgVmlld0J1aWxkZXIgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdFZpc2l0b3IsIExvY2FsUmVzb2x2ZXIge1xuICBwcml2YXRlIHJlZk91dHB1dFZhcnMgPSBuZXcgTWFwPHN0cmluZywgT3V0cHV0VmFyVHlwZT4oKTtcbiAgcHJpdmF0ZSB2YXJpYWJsZXM6IFZhcmlhYmxlQXN0W10gPSBbXTtcbiAgcHJpdmF0ZSBjaGlsZHJlbjogVmlld0J1aWxkZXJbXSA9IFtdO1xuICBwcml2YXRlIHVwZGF0ZXM6IEV4cHJlc3Npb25bXSA9IFtdO1xuICBwcml2YXRlIGFjdGlvbnM6IEV4cHJlc3Npb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBvcHRpb25zOiBBb3RDb21waWxlck9wdGlvbnMsIHByaXZhdGUgcmVmbGVjdG9yOiBTdGF0aWNSZWZsZWN0b3IsXG4gICAgICBwcml2YXRlIGV4dGVybmFsUmVmZXJlbmNlVmFyczogTWFwPFN0YXRpY1N5bWJvbCwgc3RyaW5nPiwgcHJpdmF0ZSBwYXJlbnQ6IFZpZXdCdWlsZGVyfG51bGwsXG4gICAgICBwcml2YXRlIGNvbXBvbmVudDogU3RhdGljU3ltYm9sLCBwcml2YXRlIGlzSG9zdENvbXBvbmVudDogYm9vbGVhbixcbiAgICAgIHByaXZhdGUgZW1iZWRkZWRWaWV3SW5kZXg6IG51bWJlciwgcHJpdmF0ZSBwaXBlczogTWFwPHN0cmluZywgU3RhdGljU3ltYm9sPixcbiAgICAgIHByaXZhdGUgZ3VhcmRzOiBHdWFyZEV4cHJlc3Npb25bXSwgcHJpdmF0ZSBjdHg6IE91dHB1dENvbnRleHQsXG4gICAgICBwcml2YXRlIHZpZXdCdWlsZGVyRmFjdG9yeTogVmlld0J1aWxkZXJGYWN0b3J5KSB7fVxuXG4gIHByaXZhdGUgZ2V0T3V0cHV0VmFyKHR5cGU6IG8uQnVpbHRpblR5cGVOYW1lfFN0YXRpY1N5bWJvbCk6IHN0cmluZyB7XG4gICAgbGV0IHZhck5hbWU6IHN0cmluZ3x1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGUgPT09IHRoaXMuY29tcG9uZW50ICYmIHRoaXMuaXNIb3N0Q29tcG9uZW50KSB7XG4gICAgICB2YXJOYW1lID0gRFlOQU1JQ19WQVJfTkFNRTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIHZhck5hbWUgPSB0aGlzLmV4dGVybmFsUmVmZXJlbmNlVmFycy5nZXQodHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhck5hbWUgPSBEWU5BTUlDX1ZBUl9OQU1FO1xuICAgIH1cbiAgICBpZiAoIXZhck5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBTdGF0ZTogcmVmZXJyaW5nIHRvIGEgdHlwZSB3aXRob3V0IGEgdmFyaWFibGUgJHtKU09OLnN0cmluZ2lmeSh0eXBlKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhck5hbWU7XG4gIH1cblxuICBwcml2YXRlIGdldFR5cGVHdWFyZEV4cHJlc3Npb25zKGFzdDogRW1iZWRkZWRUZW1wbGF0ZUFzdCk6IEd1YXJkRXhwcmVzc2lvbltdIHtcbiAgICBjb25zdCByZXN1bHQgPSBbLi4udGhpcy5ndWFyZHNdO1xuICAgIGZvciAobGV0IGRpcmVjdGl2ZSBvZiBhc3QuZGlyZWN0aXZlcykge1xuICAgICAgZm9yIChsZXQgaW5wdXQgb2YgZGlyZWN0aXZlLmlucHV0cykge1xuICAgICAgICBjb25zdCBndWFyZCA9IGRpcmVjdGl2ZS5kaXJlY3RpdmUuZ3VhcmRzW2lucHV0LmRpcmVjdGl2ZU5hbWVdO1xuICAgICAgICBpZiAoZ3VhcmQpIHtcbiAgICAgICAgICBjb25zdCB1c2VJZiA9IGd1YXJkID09PSAnVXNlSWYnO1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGd1YXJkLFxuICAgICAgICAgICAgdXNlSWYsXG4gICAgICAgICAgICBleHByZXNzaW9uOiB7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29tcG9uZW50LFxuICAgICAgICAgICAgICB2YWx1ZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgIHNvdXJjZVNwYW46IGlucHV0LnNvdXJjZVNwYW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2aXNpdEFsbCh2YXJpYWJsZXM6IFZhcmlhYmxlQXN0W10sIGFzdE5vZGVzOiBUZW1wbGF0ZUFzdFtdKSB7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGVtcGxhdGVWaXNpdEFsbCh0aGlzLCBhc3ROb2Rlcyk7XG4gIH1cblxuICBidWlsZChjb21wb25lbnRJZDogc3RyaW5nLCB0YXJnZXRTdGF0ZW1lbnRzOiBvLlN0YXRlbWVudFtdID0gW10pOiBvLlN0YXRlbWVudFtdIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5idWlsZChjb21wb25lbnRJZCwgdGFyZ2V0U3RhdGVtZW50cykpO1xuICAgIGxldCB2aWV3U3RtdHM6IG8uU3RhdGVtZW50W10gPVxuICAgICAgICBbby52YXJpYWJsZShEWU5BTUlDX1ZBUl9OQU1FKS5zZXQoby5OVUxMX0VYUFIpLnRvRGVjbFN0bXQoby5EWU5BTUlDX1RZUEUpXTtcbiAgICBsZXQgYmluZGluZ0NvdW50ID0gMDtcbiAgICB0aGlzLnVwZGF0ZXMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgY29uc3Qge3NvdXJjZVNwYW4sIGNvbnRleHQsIHZhbHVlfSA9IHRoaXMucHJlcHJvY2Vzc1VwZGF0ZUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgICBjb25zdCBiaW5kaW5nSWQgPSBgJHtiaW5kaW5nQ291bnQrK31gO1xuICAgICAgY29uc3QgbmFtZVJlc29sdmVyID0gY29udGV4dCA9PT0gdGhpcy5jb21wb25lbnQgPyB0aGlzIDogZGVmYXVsdFJlc29sdmVyO1xuICAgICAgY29uc3Qge3N0bXRzLCBjdXJyVmFsRXhwcn0gPSBjb252ZXJ0UHJvcGVydHlCaW5kaW5nKFxuICAgICAgICAgIG5hbWVSZXNvbHZlciwgby52YXJpYWJsZSh0aGlzLmdldE91dHB1dFZhcihjb250ZXh0KSksIHZhbHVlLCBiaW5kaW5nSWQsXG4gICAgICAgICAgQmluZGluZ0Zvcm0uR2VuZXJhbCk7XG4gICAgICBzdG10cy5wdXNoKG5ldyBvLkV4cHJlc3Npb25TdGF0ZW1lbnQoY3VyclZhbEV4cHIpKTtcbiAgICAgIHZpZXdTdG10cy5wdXNoKC4uLnN0bXRzLm1hcChcbiAgICAgICAgICAoc3RtdDogby5TdGF0ZW1lbnQpID0+IG8uYXBwbHlTb3VyY2VTcGFuVG9TdGF0ZW1lbnRJZk5lZWRlZChzdG10LCBzb3VyY2VTcGFuKSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKHtzb3VyY2VTcGFuLCBjb250ZXh0LCB2YWx1ZX0pID0+IHtcbiAgICAgIGNvbnN0IGJpbmRpbmdJZCA9IGAke2JpbmRpbmdDb3VudCsrfWA7XG4gICAgICBjb25zdCBuYW1lUmVzb2x2ZXIgPSBjb250ZXh0ID09PSB0aGlzLmNvbXBvbmVudCA/IHRoaXMgOiBkZWZhdWx0UmVzb2x2ZXI7XG4gICAgICBjb25zdCB7c3RtdHN9ID0gY29udmVydEFjdGlvbkJpbmRpbmcoXG4gICAgICAgICAgbmFtZVJlc29sdmVyLCBvLnZhcmlhYmxlKHRoaXMuZ2V0T3V0cHV0VmFyKGNvbnRleHQpKSwgdmFsdWUsIGJpbmRpbmdJZCk7XG4gICAgICB2aWV3U3RtdHMucHVzaCguLi5zdG10cy5tYXAoXG4gICAgICAgICAgKHN0bXQ6IG8uU3RhdGVtZW50KSA9PiBvLmFwcGx5U291cmNlU3BhblRvU3RhdGVtZW50SWZOZWVkZWQoc3RtdCwgc291cmNlU3BhbikpKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmd1YXJkcy5sZW5ndGgpIHtcbiAgICAgIGxldCBndWFyZEV4cHJlc3Npb246IG8uRXhwcmVzc2lvbnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKGNvbnN0IGd1YXJkIG9mIHRoaXMuZ3VhcmRzKSB7XG4gICAgICAgIGNvbnN0IHtjb250ZXh0LCB2YWx1ZX0gPSB0aGlzLnByZXByb2Nlc3NVcGRhdGVFeHByZXNzaW9uKGd1YXJkLmV4cHJlc3Npb24pO1xuICAgICAgICBjb25zdCBiaW5kaW5nSWQgPSBgJHtiaW5kaW5nQ291bnQrK31gO1xuICAgICAgICBjb25zdCBuYW1lUmVzb2x2ZXIgPSBjb250ZXh0ID09PSB0aGlzLmNvbXBvbmVudCA/IHRoaXMgOiBkZWZhdWx0UmVzb2x2ZXI7XG4gICAgICAgIC8vIFdlIG9ubHkgc3VwcG9ydCBzdXBwb3J0IHNpbXBsZSBleHByZXNzaW9ucyBhbmQgaWdub3JlIG90aGVycyBhcyB0aGV5XG4gICAgICAgIC8vIGFyZSB1bmxpa2VseSB0byBhZmZlY3QgdHlwZSBuYXJyb3dpbmcuXG4gICAgICAgIGNvbnN0IHtzdG10cywgY3VyclZhbEV4cHJ9ID0gY29udmVydFByb3BlcnR5QmluZGluZyhcbiAgICAgICAgICAgIG5hbWVSZXNvbHZlciwgby52YXJpYWJsZSh0aGlzLmdldE91dHB1dFZhcihjb250ZXh0KSksIHZhbHVlLCBiaW5kaW5nSWQsXG4gICAgICAgICAgICBCaW5kaW5nRm9ybS5UcnlTaW1wbGUpO1xuICAgICAgICBpZiAoc3RtdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBjb25zdCBndWFyZENsYXVzZSA9XG4gICAgICAgICAgICAgIGd1YXJkLnVzZUlmID8gY3VyclZhbEV4cHIgOiB0aGlzLmN0eC5pbXBvcnRFeHByKGd1YXJkLmd1YXJkKS5jYWxsRm4oW2N1cnJWYWxFeHByXSk7XG4gICAgICAgICAgZ3VhcmRFeHByZXNzaW9uID0gZ3VhcmRFeHByZXNzaW9uID8gZ3VhcmRFeHByZXNzaW9uLmFuZChndWFyZENsYXVzZSkgOiBndWFyZENsYXVzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGd1YXJkRXhwcmVzc2lvbikge1xuICAgICAgICB2aWV3U3RtdHMgPSBbbmV3IG8uSWZTdG10KGd1YXJkRXhwcmVzc2lvbiwgdmlld1N0bXRzKV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld05hbWUgPSBgX1ZpZXdfJHtjb21wb25lbnRJZH1fJHt0aGlzLmVtYmVkZGVkVmlld0luZGV4fWA7XG4gICAgY29uc3Qgdmlld0ZhY3RvcnkgPSBuZXcgby5EZWNsYXJlRnVuY3Rpb25TdG10KHZpZXdOYW1lLCBbXSwgdmlld1N0bXRzKTtcbiAgICB0YXJnZXRTdGF0ZW1lbnRzLnB1c2godmlld0ZhY3RvcnkpO1xuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmlzaXRCb3VuZFRleHQoYXN0OiBCb3VuZFRleHRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgYXN0V2l0aFNvdXJjZSA9IDxBU1RXaXRoU291cmNlPmFzdC52YWx1ZTtcbiAgICBjb25zdCBpbnRlciA9IDxJbnRlcnBvbGF0aW9uPmFzdFdpdGhTb3VyY2UuYXN0O1xuXG4gICAgaW50ZXIuZXhwcmVzc2lvbnMuZm9yRWFjaChcbiAgICAgICAgKGV4cHIpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaCh7Y29udGV4dDogdGhpcy5jb21wb25lbnQsIHZhbHVlOiBleHByLCBzb3VyY2VTcGFuOiBhc3Quc291cmNlU3Bhbn0pKTtcbiAgfVxuXG4gIHZpc2l0RW1iZWRkZWRUZW1wbGF0ZShhc3Q6IEVtYmVkZGVkVGVtcGxhdGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdEVsZW1lbnRPclRlbXBsYXRlKGFzdCk7XG4gICAgLy8gTm90ZTogVGhlIG9sZCB2aWV3IGNvbXBpbGVyIHVzZWQgdG8gdXNlIGFuIGBhbnlgIHR5cGVcbiAgICAvLyBmb3IgdGhlIGNvbnRleHQgaW4gYW55IGVtYmVkZGVkIHZpZXcuXG4gICAgLy8gV2Uga2VlcCB0aGlzIGJlaGFpdm9yIGJlaGluZCBhIGZsYWcgZm9yIG5vdy5cbiAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxUZW1wbGF0ZVR5cGVDaGVjaykge1xuICAgICAgLy8gRmluZCBhbnkgYXBwbGljYWJsZSB0eXBlIGd1YXJkcy4gRm9yIGV4YW1wbGUsIE5nSWYgaGFzIGEgdHlwZSBndWFyZCBvbiBuZ0lmXG4gICAgICAvLyAoc2VlIE5nSWYubmdJZlR5cGVHdWFyZCkgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGEgdGVtcGxhdGUgaXMgb25seVxuICAgICAgLy8gc3RhbXBlZCBvdXQgaWYgbmdJZiBpcyB0cnV0aHkgc28gYW55IGJpbmRpbmdzIGluIHRoZSB0ZW1wbGF0ZSBjYW4gYXNzdW1lIHRoYXQsXG4gICAgICAvLyBpZiBhIG51bGxhYmxlIHR5cGUgaXMgdXNlZCBmb3IgbmdJZiwgdGhhdCBleHByZXNzaW9uIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICAgIGNvbnN0IGd1YXJkcyA9IHRoaXMuZ2V0VHlwZUd1YXJkRXhwcmVzc2lvbnMoYXN0KTtcbiAgICAgIGNvbnN0IGNoaWxkVmlzaXRvciA9IHRoaXMudmlld0J1aWxkZXJGYWN0b3J5KHRoaXMsIGd1YXJkcyk7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRWaXNpdG9yKTtcbiAgICAgIGNoaWxkVmlzaXRvci52aXNpdEFsbChhc3QudmFyaWFibGVzLCBhc3QuY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdEVsZW1lbnRPclRlbXBsYXRlKGFzdCk7XG5cbiAgICBsZXQgaW5wdXREZWZzOiBvLkV4cHJlc3Npb25bXSA9IFtdO1xuICAgIGxldCB1cGRhdGVSZW5kZXJlckV4cHJlc3Npb25zOiBFeHByZXNzaW9uW10gPSBbXTtcbiAgICBsZXQgb3V0cHV0RGVmczogby5FeHByZXNzaW9uW10gPSBbXTtcbiAgICBhc3QuaW5wdXRzLmZvckVhY2goKGlucHV0QXN0KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZXMucHVzaChcbiAgICAgICAgICB7Y29udGV4dDogdGhpcy5jb21wb25lbnQsIHZhbHVlOiBpbnB1dEFzdC52YWx1ZSwgc291cmNlU3BhbjogaW5wdXRBc3Quc291cmNlU3Bhbn0pO1xuICAgIH0pO1xuXG4gICAgdGVtcGxhdGVWaXNpdEFsbCh0aGlzLCBhc3QuY2hpbGRyZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpdEVsZW1lbnRPclRlbXBsYXRlKGFzdDoge1xuICAgIG91dHB1dHM6IEJvdW5kRXZlbnRBc3RbXSxcbiAgICBkaXJlY3RpdmVzOiBEaXJlY3RpdmVBc3RbXSxcbiAgICByZWZlcmVuY2VzOiBSZWZlcmVuY2VBc3RbXSxcbiAgfSkge1xuICAgIGFzdC5kaXJlY3RpdmVzLmZvckVhY2goKGRpckFzdCkgPT4ge1xuICAgICAgdGhpcy52aXNpdERpcmVjdGl2ZShkaXJBc3QpO1xuICAgIH0pO1xuXG4gICAgYXN0LnJlZmVyZW5jZXMuZm9yRWFjaCgocmVmKSA9PiB7XG4gICAgICBsZXQgb3V0cHV0VmFyVHlwZTogT3V0cHV0VmFyVHlwZSA9IG51bGwhO1xuICAgICAgLy8gTm90ZTogVGhlIG9sZCB2aWV3IGNvbXBpbGVyIHVzZWQgdG8gdXNlIGFuIGBhbnlgIHR5cGVcbiAgICAgIC8vIGZvciBkaXJlY3RpdmVzIGV4cG9zZWQgdmlhIGBleHBvcnRBc2AuXG4gICAgICAvLyBXZSBrZWVwIHRoaXMgYmVoYWl2b3IgYmVoaW5kIGEgZmxhZyBmb3Igbm93LlxuICAgICAgaWYgKHJlZi52YWx1ZSAmJiByZWYudmFsdWUuaWRlbnRpZmllciAmJiB0aGlzLm9wdGlvbnMuZnVsbFRlbXBsYXRlVHlwZUNoZWNrKSB7XG4gICAgICAgIG91dHB1dFZhclR5cGUgPSByZWYudmFsdWUuaWRlbnRpZmllci5yZWZlcmVuY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRWYXJUeXBlID0gby5CdWlsdGluVHlwZU5hbWUuRHluYW1pYztcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmT3V0cHV0VmFycy5zZXQocmVmLm5hbWUsIG91dHB1dFZhclR5cGUpO1xuICAgIH0pO1xuICAgIGFzdC5vdXRwdXRzLmZvckVhY2goKG91dHB1dEFzdCkgPT4ge1xuICAgICAgdGhpcy5hY3Rpb25zLnB1c2goXG4gICAgICAgICAge2NvbnRleHQ6IHRoaXMuY29tcG9uZW50LCB2YWx1ZTogb3V0cHV0QXN0LmhhbmRsZXIsIHNvdXJjZVNwYW46IG91dHB1dEFzdC5zb3VyY2VTcGFufSk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdERpcmVjdGl2ZShkaXJBc3Q6IERpcmVjdGl2ZUFzdCkge1xuICAgIGNvbnN0IGRpclR5cGUgPSBkaXJBc3QuZGlyZWN0aXZlLnR5cGUucmVmZXJlbmNlO1xuICAgIGRpckFzdC5pbnB1dHMuZm9yRWFjaChcbiAgICAgICAgKGlucHV0KSA9PiB0aGlzLnVwZGF0ZXMucHVzaChcbiAgICAgICAgICAgIHtjb250ZXh0OiB0aGlzLmNvbXBvbmVudCwgdmFsdWU6IGlucHV0LnZhbHVlLCBzb3VyY2VTcGFuOiBpbnB1dC5zb3VyY2VTcGFufSkpO1xuICAgIC8vIE5vdGU6IFRoZSBvbGQgdmlldyBjb21waWxlciB1c2VkIHRvIHVzZSBhbiBgYW55YCB0eXBlXG4gICAgLy8gZm9yIGV4cHJlc3Npb25zIGluIGhvc3QgcHJvcGVydGllcyAvIGV2ZW50cy5cbiAgICAvLyBXZSBrZWVwIHRoaXMgYmVoYWl2b3IgYmVoaW5kIGEgZmxhZyBmb3Igbm93LlxuICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFRlbXBsYXRlVHlwZUNoZWNrKSB7XG4gICAgICBkaXJBc3QuaG9zdFByb3BlcnRpZXMuZm9yRWFjaChcbiAgICAgICAgICAoaW5wdXRBc3QpID0+IHRoaXMudXBkYXRlcy5wdXNoKFxuICAgICAgICAgICAgICB7Y29udGV4dDogZGlyVHlwZSwgdmFsdWU6IGlucHV0QXN0LnZhbHVlLCBzb3VyY2VTcGFuOiBpbnB1dEFzdC5zb3VyY2VTcGFufSkpO1xuICAgICAgZGlyQXN0Lmhvc3RFdmVudHMuZm9yRWFjaCgoaG9zdEV2ZW50QXN0KSA9PiB0aGlzLmFjdGlvbnMucHVzaCh7XG4gICAgICAgIGNvbnRleHQ6IGRpclR5cGUsXG4gICAgICAgIHZhbHVlOiBob3N0RXZlbnRBc3QuaGFuZGxlcixcbiAgICAgICAgc291cmNlU3BhbjogaG9zdEV2ZW50QXN0LnNvdXJjZVNwYW5cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBub3RpZnlJbXBsaWNpdFJlY2VpdmVyVXNlKCk6IHZvaWQge31cbiAgZ2V0TG9jYWwobmFtZTogc3RyaW5nKTogby5FeHByZXNzaW9ufG51bGwge1xuICAgIGlmIChuYW1lID09IEV2ZW50SGFuZGxlclZhcnMuZXZlbnQubmFtZSkge1xuICAgICAgcmV0dXJuIG8udmFyaWFibGUodGhpcy5nZXRPdXRwdXRWYXIoby5CdWlsdGluVHlwZU5hbWUuRHluYW1pYykpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjdXJyQnVpbGRlcjogVmlld0J1aWxkZXJ8bnVsbCA9IHRoaXM7IGN1cnJCdWlsZGVyOyBjdXJyQnVpbGRlciA9IGN1cnJCdWlsZGVyLnBhcmVudCkge1xuICAgICAgbGV0IG91dHB1dFZhclR5cGU6IE91dHB1dFZhclR5cGV8dW5kZWZpbmVkO1xuICAgICAgLy8gY2hlY2sgcmVmZXJlbmNlc1xuICAgICAgb3V0cHV0VmFyVHlwZSA9IGN1cnJCdWlsZGVyLnJlZk91dHB1dFZhcnMuZ2V0KG5hbWUpO1xuICAgICAgaWYgKG91dHB1dFZhclR5cGUgPT0gbnVsbCkge1xuICAgICAgICAvLyBjaGVjayB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgdmFyQXN0ID0gY3VyckJ1aWxkZXIudmFyaWFibGVzLmZpbmQoKHZhckFzdCkgPT4gdmFyQXN0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBpZiAodmFyQXN0KSB7XG4gICAgICAgICAgb3V0cHV0VmFyVHlwZSA9IG8uQnVpbHRpblR5cGVOYW1lLkR5bmFtaWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvdXRwdXRWYXJUeXBlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG8udmFyaWFibGUodGhpcy5nZXRPdXRwdXRWYXIob3V0cHV0VmFyVHlwZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgcGlwZU91dHB1dFZhcihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBpcGUgPSB0aGlzLnBpcGVzLmdldChuYW1lKTtcbiAgICBpZiAoIXBpcGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBTdGF0ZTogQ291bGQgbm90IGZpbmQgcGlwZSAke25hbWV9IGluIHRlbXBsYXRlIG9mICR7dGhpcy5jb21wb25lbnR9YCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldE91dHB1dFZhcihwaXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcHJvY2Vzc1VwZGF0ZUV4cHJlc3Npb24oZXhwcmVzc2lvbjogRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2VTcGFuOiBleHByZXNzaW9uLnNvdXJjZVNwYW4sXG4gICAgICBjb250ZXh0OiBleHByZXNzaW9uLmNvbnRleHQsXG4gICAgICB2YWx1ZTogY29udmVydFByb3BlcnR5QmluZGluZ0J1aWx0aW5zKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNyZWF0ZUxpdGVyYWxBcnJheUNvbnZlcnRlcjogKGFyZ0NvdW50OiBudW1iZXIpID0+IChhcmdzOiBvLkV4cHJlc3Npb25bXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhcnIgPSBvLmxpdGVyYWxBcnIoYXJncyk7XG4gICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBvbGQgdmlldyBjb21waWxlciB1c2VkIHRvIHVzZSBhbiBgYW55YCB0eXBlXG4gICAgICAgICAgICAgIC8vIGZvciBhcnJheXMuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZnVsbFRlbXBsYXRlVHlwZUNoZWNrID8gYXJyIDogYXJyLmNhc3Qoby5EWU5BTUlDX1RZUEUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUxpdGVyYWxNYXBDb252ZXJ0ZXI6IChrZXlzOiB7a2V5OiBzdHJpbmcsIHF1b3RlZDogYm9vbGVhbn1bXSkgPT5cbiAgICAgICAgICAgICAgICAodmFsdWVzOiBvLkV4cHJlc3Npb25bXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IGtleXMubWFwKChrLCBpKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBrLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZWQ6IGsucXVvdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IG8ubGl0ZXJhbE1hcChlbnRyaWVzKTtcbiAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBvbGQgdmlldyBjb21waWxlciB1c2VkIHRvIHVzZSBhbiBgYW55YCB0eXBlXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgbWFwcy5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZnVsbFRlbXBsYXRlVHlwZUNoZWNrID8gbWFwIDogbWFwLmNhc3Qoby5EWU5BTUlDX1RZUEUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVQaXBlQ29udmVydGVyOiAobmFtZTogc3RyaW5nLCBhcmdDb3VudDogbnVtYmVyKSA9PiAoYXJnczogby5FeHByZXNzaW9uW10pID0+IHtcbiAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIG9sZCB2aWV3IGNvbXBpbGVyIHVzZWQgdG8gdXNlIGFuIGBhbnlgIHR5cGVcbiAgICAgICAgICAgICAgLy8gZm9yIHBpcGVzLlxuICAgICAgICAgICAgICBjb25zdCBwaXBlRXhwciA9IHRoaXMub3B0aW9ucy5mdWxsVGVtcGxhdGVUeXBlQ2hlY2sgP1xuICAgICAgICAgICAgICAgICAgby52YXJpYWJsZSh0aGlzLnBpcGVPdXRwdXRWYXIobmFtZSkpIDpcbiAgICAgICAgICAgICAgICAgIG8udmFyaWFibGUodGhpcy5nZXRPdXRwdXRWYXIoby5CdWlsdGluVHlwZU5hbWUuRHluYW1pYykpO1xuICAgICAgICAgICAgICByZXR1cm4gcGlwZUV4cHIuY2FsbE1ldGhvZCgndHJhbnNmb3JtJywgYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbi52YWx1ZSlcbiAgICB9O1xuICB9XG5cbiAgdmlzaXROZ0NvbnRlbnQoYXN0OiBOZ0NvbnRlbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuICB2aXNpdFRleHQoYXN0OiBUZXh0QXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cbiAgdmlzaXREaXJlY3RpdmVQcm9wZXJ0eShhc3Q6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuICB2aXNpdFJlZmVyZW5jZShhc3Q6IFJlZmVyZW5jZUFzdCwgY29udGV4dDogYW55KTogYW55IHt9XG4gIHZpc2l0VmFyaWFibGUoYXN0OiBWYXJpYWJsZUFzdCwgY29udGV4dDogYW55KTogYW55IHt9XG4gIHZpc2l0RXZlbnQoYXN0OiBCb3VuZEV2ZW50QXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cbiAgdmlzaXRFbGVtZW50UHJvcGVydHkoYXN0OiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCwgY29udGV4dDogYW55KTogYW55IHt9XG4gIHZpc2l0QXR0cihhc3Q6IEF0dHJBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxufVxuIl19