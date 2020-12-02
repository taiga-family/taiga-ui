/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _a;
import { __extends } from "tslib";
/**
 * A segment of text within the template.
 */
var TextAst = /** @class */ (function () {
    function TextAst(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    TextAst.prototype.visit = function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return TextAst;
}());
export { TextAst };
/**
 * A bound expression within the text of a template.
 */
var BoundTextAst = /** @class */ (function () {
    function BoundTextAst(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    BoundTextAst.prototype.visit = function (visitor, context) {
        return visitor.visitBoundText(this, context);
    };
    return BoundTextAst;
}());
export { BoundTextAst };
/**
 * A plain attribute on an element.
 */
var AttrAst = /** @class */ (function () {
    function AttrAst(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    AttrAst.prototype.visit = function (visitor, context) {
        return visitor.visitAttr(this, context);
    };
    return AttrAst;
}());
export { AttrAst };
var BoundPropertyMapping = (_a = {},
    _a[4 /* Animation */] = 4 /* Animation */,
    _a[1 /* Attribute */] = 1 /* Attribute */,
    _a[2 /* Class */] = 2 /* Class */,
    _a[0 /* Property */] = 0 /* Property */,
    _a[3 /* Style */] = 3 /* Style */,
    _a);
/**
 * A binding for an element property (e.g. `[property]="expression"`) or an animation trigger (e.g.
 * `[@trigger]="stateExp"`)
 */
var BoundElementPropertyAst = /** @class */ (function () {
    function BoundElementPropertyAst(name, type, securityContext, value, unit, sourceSpan) {
        this.name = name;
        this.type = type;
        this.securityContext = securityContext;
        this.value = value;
        this.unit = unit;
        this.sourceSpan = sourceSpan;
        this.isAnimation = this.type === 4 /* Animation */;
    }
    BoundElementPropertyAst.fromBoundProperty = function (prop) {
        var type = BoundPropertyMapping[prop.type];
        return new BoundElementPropertyAst(prop.name, type, prop.securityContext, prop.value, prop.unit, prop.sourceSpan);
    };
    BoundElementPropertyAst.prototype.visit = function (visitor, context) {
        return visitor.visitElementProperty(this, context);
    };
    return BoundElementPropertyAst;
}());
export { BoundElementPropertyAst };
/**
 * A binding for an element event (e.g. `(event)="handler()"`) or an animation trigger event (e.g.
 * `(@trigger.phase)="callback($event)"`).
 */
var BoundEventAst = /** @class */ (function () {
    function BoundEventAst(name, target, phase, handler, sourceSpan, handlerSpan) {
        this.name = name;
        this.target = target;
        this.phase = phase;
        this.handler = handler;
        this.sourceSpan = sourceSpan;
        this.handlerSpan = handlerSpan;
        this.fullName = BoundEventAst.calcFullName(this.name, this.target, this.phase);
        this.isAnimation = !!this.phase;
    }
    BoundEventAst.calcFullName = function (name, target, phase) {
        if (target) {
            return target + ":" + name;
        }
        if (phase) {
            return "@" + name + "." + phase;
        }
        return name;
    };
    BoundEventAst.fromParsedEvent = function (event) {
        var target = event.type === 0 /* Regular */ ? event.targetOrPhase : null;
        var phase = event.type === 1 /* Animation */ ? event.targetOrPhase : null;
        return new BoundEventAst(event.name, target, phase, event.handler, event.sourceSpan, event.handlerSpan);
    };
    BoundEventAst.prototype.visit = function (visitor, context) {
        return visitor.visitEvent(this, context);
    };
    return BoundEventAst;
}());
export { BoundEventAst };
/**
 * A reference declaration on an element (e.g. `let someName="expression"`).
 */
var ReferenceAst = /** @class */ (function () {
    function ReferenceAst(name, value, originalValue, sourceSpan) {
        this.name = name;
        this.value = value;
        this.originalValue = originalValue;
        this.sourceSpan = sourceSpan;
    }
    ReferenceAst.prototype.visit = function (visitor, context) {
        return visitor.visitReference(this, context);
    };
    return ReferenceAst;
}());
export { ReferenceAst };
/**
 * A variable declaration on a <ng-template> (e.g. `var-someName="someLocalName"`).
 */
var VariableAst = /** @class */ (function () {
    function VariableAst(name, value, sourceSpan, valueSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
        this.valueSpan = valueSpan;
    }
    VariableAst.fromParsedVariable = function (v) {
        return new VariableAst(v.name, v.value, v.sourceSpan, v.valueSpan);
    };
    VariableAst.prototype.visit = function (visitor, context) {
        return visitor.visitVariable(this, context);
    };
    return VariableAst;
}());
export { VariableAst };
/**
 * An element declaration in a template.
 */
var ElementAst = /** @class */ (function () {
    function ElementAst(name, attrs, inputs, outputs, references, directives, providers, hasViewContainer, queryMatches, children, ngContentIndex, sourceSpan, endSourceSpan) {
        this.name = name;
        this.attrs = attrs;
        this.inputs = inputs;
        this.outputs = outputs;
        this.references = references;
        this.directives = directives;
        this.providers = providers;
        this.hasViewContainer = hasViewContainer;
        this.queryMatches = queryMatches;
        this.children = children;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    ElementAst.prototype.visit = function (visitor, context) {
        return visitor.visitElement(this, context);
    };
    return ElementAst;
}());
export { ElementAst };
/**
 * A `<ng-template>` element included in an Angular template.
 */
var EmbeddedTemplateAst = /** @class */ (function () {
    function EmbeddedTemplateAst(attrs, outputs, references, variables, directives, providers, hasViewContainer, queryMatches, children, ngContentIndex, sourceSpan) {
        this.attrs = attrs;
        this.outputs = outputs;
        this.references = references;
        this.variables = variables;
        this.directives = directives;
        this.providers = providers;
        this.hasViewContainer = hasViewContainer;
        this.queryMatches = queryMatches;
        this.children = children;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    EmbeddedTemplateAst.prototype.visit = function (visitor, context) {
        return visitor.visitEmbeddedTemplate(this, context);
    };
    return EmbeddedTemplateAst;
}());
export { EmbeddedTemplateAst };
/**
 * A directive property with a bound value (e.g. `*ngIf="condition").
 */
var BoundDirectivePropertyAst = /** @class */ (function () {
    function BoundDirectivePropertyAst(directiveName, templateName, value, sourceSpan) {
        this.directiveName = directiveName;
        this.templateName = templateName;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    BoundDirectivePropertyAst.prototype.visit = function (visitor, context) {
        return visitor.visitDirectiveProperty(this, context);
    };
    return BoundDirectivePropertyAst;
}());
export { BoundDirectivePropertyAst };
/**
 * A directive declared on an element.
 */
var DirectiveAst = /** @class */ (function () {
    function DirectiveAst(directive, inputs, hostProperties, hostEvents, contentQueryStartId, sourceSpan) {
        this.directive = directive;
        this.inputs = inputs;
        this.hostProperties = hostProperties;
        this.hostEvents = hostEvents;
        this.contentQueryStartId = contentQueryStartId;
        this.sourceSpan = sourceSpan;
    }
    DirectiveAst.prototype.visit = function (visitor, context) {
        return visitor.visitDirective(this, context);
    };
    return DirectiveAst;
}());
export { DirectiveAst };
/**
 * A provider declared on an element
 */
var ProviderAst = /** @class */ (function () {
    function ProviderAst(token, multiProvider, eager, providers, providerType, lifecycleHooks, sourceSpan, isModule) {
        this.token = token;
        this.multiProvider = multiProvider;
        this.eager = eager;
        this.providers = providers;
        this.providerType = providerType;
        this.lifecycleHooks = lifecycleHooks;
        this.sourceSpan = sourceSpan;
        this.isModule = isModule;
    }
    ProviderAst.prototype.visit = function (visitor, context) {
        // No visit method in the visitor for now...
        return null;
    };
    return ProviderAst;
}());
export { ProviderAst };
export var ProviderAstType;
(function (ProviderAstType) {
    ProviderAstType[ProviderAstType["PublicService"] = 0] = "PublicService";
    ProviderAstType[ProviderAstType["PrivateService"] = 1] = "PrivateService";
    ProviderAstType[ProviderAstType["Component"] = 2] = "Component";
    ProviderAstType[ProviderAstType["Directive"] = 3] = "Directive";
    ProviderAstType[ProviderAstType["Builtin"] = 4] = "Builtin";
})(ProviderAstType || (ProviderAstType = {}));
/**
 * Position where content is to be projected (instance of `<ng-content>` in a template).
 */
var NgContentAst = /** @class */ (function () {
    function NgContentAst(index, ngContentIndex, sourceSpan) {
        this.index = index;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    NgContentAst.prototype.visit = function (visitor, context) {
        return visitor.visitNgContent(this, context);
    };
    return NgContentAst;
}());
export { NgContentAst };
/**
 * A visitor that accepts each node but doesn't do anything. It is intended to be used
 * as the base class for a visitor that is only interested in a subset of the node types.
 */
var NullTemplateVisitor = /** @class */ (function () {
    function NullTemplateVisitor() {
    }
    NullTemplateVisitor.prototype.visitNgContent = function (ast, context) { };
    NullTemplateVisitor.prototype.visitEmbeddedTemplate = function (ast, context) { };
    NullTemplateVisitor.prototype.visitElement = function (ast, context) { };
    NullTemplateVisitor.prototype.visitReference = function (ast, context) { };
    NullTemplateVisitor.prototype.visitVariable = function (ast, context) { };
    NullTemplateVisitor.prototype.visitEvent = function (ast, context) { };
    NullTemplateVisitor.prototype.visitElementProperty = function (ast, context) { };
    NullTemplateVisitor.prototype.visitAttr = function (ast, context) { };
    NullTemplateVisitor.prototype.visitBoundText = function (ast, context) { };
    NullTemplateVisitor.prototype.visitText = function (ast, context) { };
    NullTemplateVisitor.prototype.visitDirective = function (ast, context) { };
    NullTemplateVisitor.prototype.visitDirectiveProperty = function (ast, context) { };
    return NullTemplateVisitor;
}());
export { NullTemplateVisitor };
/**
 * Base class that can be used to build a visitor that visits each node
 * in an template ast recursively.
 */
var RecursiveTemplateAstVisitor = /** @class */ (function (_super) {
    __extends(RecursiveTemplateAstVisitor, _super);
    function RecursiveTemplateAstVisitor() {
        return _super.call(this) || this;
    }
    // Nodes with children
    RecursiveTemplateAstVisitor.prototype.visitEmbeddedTemplate = function (ast, context) {
        return this.visitChildren(context, function (visit) {
            visit(ast.attrs);
            visit(ast.references);
            visit(ast.variables);
            visit(ast.directives);
            visit(ast.providers);
            visit(ast.children);
        });
    };
    RecursiveTemplateAstVisitor.prototype.visitElement = function (ast, context) {
        return this.visitChildren(context, function (visit) {
            visit(ast.attrs);
            visit(ast.inputs);
            visit(ast.outputs);
            visit(ast.references);
            visit(ast.directives);
            visit(ast.providers);
            visit(ast.children);
        });
    };
    RecursiveTemplateAstVisitor.prototype.visitDirective = function (ast, context) {
        return this.visitChildren(context, function (visit) {
            visit(ast.inputs);
            visit(ast.hostProperties);
            visit(ast.hostEvents);
        });
    };
    RecursiveTemplateAstVisitor.prototype.visitChildren = function (context, cb) {
        var results = [];
        var t = this;
        function visit(children) {
            if (children && children.length)
                results.push(templateVisitAll(t, children, context));
        }
        cb(visit);
        return Array.prototype.concat.apply([], results);
    };
    return RecursiveTemplateAstVisitor;
}(NullTemplateVisitor));
export { RecursiveTemplateAstVisitor };
/**
 * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
 */
export function templateVisitAll(visitor, asts, context) {
    if (context === void 0) { context = null; }
    var result = [];
    var visit = visitor.visit ?
        function (ast) { return visitor.visit(ast, context) || ast.visit(visitor, context); } :
        function (ast) { return ast.visit(visitor, context); };
    asts.forEach(function (ast) {
        var astResult = visit(ast);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7QUEwQkg7O0dBRUc7QUFDSDtJQUNFLGlCQUNXLEtBQWEsRUFBUyxjQUFzQixFQUFTLFVBQTJCO1FBQWhGLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUMvRix1QkFBSyxHQUFMLFVBQU0sT0FBMkIsRUFBRSxPQUFZO1FBQzdDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDs7R0FFRztBQUNIO0lBQ0Usc0JBQ1csS0FBb0IsRUFBUyxjQUFzQixFQUNuRCxVQUEyQjtRQUQzQixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDbkQsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBQzFDLDRCQUFLLEdBQUwsVUFBTSxPQUEyQixFQUFFLE9BQVk7UUFDN0MsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7QUFFRDs7R0FFRztBQUNIO0lBQ0UsaUJBQW1CLElBQVksRUFBUyxLQUFhLEVBQVMsVUFBMkI7UUFBdEUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFDN0Ys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LE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBM0QsQ0FBMkQsQ0FBQyxDQUFDO1FBQ25GLFVBQUMsR0FBZ0IsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUFDO0lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ2QsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksU0FBUyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBc3RQYXRofSBmcm9tICcuLi9hc3RfcGF0aCc7XG5pbXBvcnQge0NvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5LCBDb21waWxlUHJvdmlkZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtBU1RXaXRoU291cmNlLCBCaW5kaW5nVHlwZSwgQm91bmRFbGVtZW50UHJvcGVydHksIFBhcnNlZEV2ZW50LCBQYXJzZWRFdmVudFR5cGUsIFBhcnNlZFZhcmlhYmxlfSBmcm9tICcuLi9leHByZXNzaW9uX3BhcnNlci9hc3QnO1xuaW1wb3J0IHtMaWZlY3ljbGVIb29rc30gZnJvbSAnLi4vbGlmZWN5Y2xlX3JlZmxlY3Rvcic7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cblxuXG4vKipcbiAqIEFuIEFic3RyYWN0IFN5bnRheCBUcmVlIG5vZGUgcmVwcmVzZW50aW5nIHBhcnQgb2YgYSBwYXJzZWQgQW5ndWxhciB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUFzdCB7XG4gIC8qKlxuICAgKiBUaGUgc291cmNlIHNwYW4gZnJvbSB3aGljaCB0aGlzIG5vZGUgd2FzIHBhcnNlZC5cbiAgICovXG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcblxuICAvKipcbiAgICogVmlzaXQgdGhpcyBub2RlIGFuZCBwb3NzaWJseSB0cmFuc2Zvcm0gaXQuXG4gICAqL1xuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueTtcbn1cblxuLyoqXG4gKiBBIHNlZ21lbnQgb2YgdGV4dCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgVGV4dEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXIsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGJvdW5kIGV4cHJlc3Npb24gd2l0aGluIHRoZSB0ZXh0IG9mIGEgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb3VuZFRleHRBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHZhbHVlOiBBU1RXaXRoU291cmNlLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlcixcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEJvdW5kVGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgcGxhaW4gYXR0cmlidXRlIG9uIGFuIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyQXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXR0cih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW51bSBQcm9wZXJ0eUJpbmRpbmdUeXBlIHtcbiAgLy8gQSBub3JtYWwgYmluZGluZyB0byBhIHByb3BlcnR5IChlLmcuIGBbcHJvcGVydHldPVwiZXhwcmVzc2lvblwiYCkuXG4gIFByb3BlcnR5LFxuICAvLyBBIGJpbmRpbmcgdG8gYW4gZWxlbWVudCBhdHRyaWJ1dGUgKGUuZy4gYFthdHRyLm5hbWVdPVwiZXhwcmVzc2lvblwiYCkuXG4gIEF0dHJpYnV0ZSxcbiAgLy8gQSBiaW5kaW5nIHRvIGEgQ1NTIGNsYXNzIChlLmcuIGBbY2xhc3MubmFtZV09XCJjb25kaXRpb25cImApLlxuICBDbGFzcyxcbiAgLy8gQSBiaW5kaW5nIHRvIGEgc3R5bGUgcnVsZSAoZS5nLiBgW3N0eWxlLnJ1bGVdPVwiZXhwcmVzc2lvblwiYCkuXG4gIFN0eWxlLFxuICAvLyBBIGJpbmRpbmcgdG8gYW4gYW5pbWF0aW9uIHJlZmVyZW5jZSAoZS5nLiBgW2FuaW1hdGUua2V5XT1cImV4cHJlc3Npb25cImApLlxuICBBbmltYXRpb24sXG59XG5cbmNvbnN0IEJvdW5kUHJvcGVydHlNYXBwaW5nID0ge1xuICBbQmluZGluZ1R5cGUuQW5pbWF0aW9uXTogUHJvcGVydHlCaW5kaW5nVHlwZS5BbmltYXRpb24sXG4gIFtCaW5kaW5nVHlwZS5BdHRyaWJ1dGVdOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLkF0dHJpYnV0ZSxcbiAgW0JpbmRpbmdUeXBlLkNsYXNzXTogUHJvcGVydHlCaW5kaW5nVHlwZS5DbGFzcyxcbiAgW0JpbmRpbmdUeXBlLlByb3BlcnR5XTogUHJvcGVydHlCaW5kaW5nVHlwZS5Qcm9wZXJ0eSxcbiAgW0JpbmRpbmdUeXBlLlN0eWxlXTogUHJvcGVydHlCaW5kaW5nVHlwZS5TdHlsZSxcbn07XG5cbi8qKlxuICogQSBiaW5kaW5nIGZvciBhbiBlbGVtZW50IHByb3BlcnR5IChlLmcuIGBbcHJvcGVydHldPVwiZXhwcmVzc2lvblwiYCkgb3IgYW4gYW5pbWF0aW9uIHRyaWdnZXIgKGUuZy5cbiAqIGBbQHRyaWdnZXJdPVwic3RhdGVFeHBcImApXG4gKi9cbmV4cG9ydCBjbGFzcyBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgcmVhZG9ubHkgaXNBbmltYXRpb246IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdHlwZTogUHJvcGVydHlCaW5kaW5nVHlwZSxcbiAgICAgIHB1YmxpYyBzZWN1cml0eUNvbnRleHQ6IFNlY3VyaXR5Q29udGV4dCwgcHVibGljIHZhbHVlOiBBU1RXaXRoU291cmNlLFxuICAgICAgcHVibGljIHVuaXQ6IHN0cmluZ3xudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgdGhpcy5pc0FuaW1hdGlvbiA9IHRoaXMudHlwZSA9PT0gUHJvcGVydHlCaW5kaW5nVHlwZS5BbmltYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kUHJvcGVydHkocHJvcDogQm91bmRFbGVtZW50UHJvcGVydHkpIHtcbiAgICBjb25zdCB0eXBlID0gQm91bmRQcm9wZXJ0eU1hcHBpbmdbcHJvcC50eXBlXTtcbiAgICByZXR1cm4gbmV3IEJvdW5kRWxlbWVudFByb3BlcnR5QXN0KFxuICAgICAgICBwcm9wLm5hbWUsIHR5cGUsIHByb3Auc2VjdXJpdHlDb250ZXh0LCBwcm9wLnZhbHVlLCBwcm9wLnVuaXQsIHByb3Auc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50UHJvcGVydHkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGJpbmRpbmcgZm9yIGFuIGVsZW1lbnQgZXZlbnQgKGUuZy4gYChldmVudCk9XCJoYW5kbGVyKClcImApIG9yIGFuIGFuaW1hdGlvbiB0cmlnZ2VyIGV2ZW50IChlLmcuXG4gKiBgKEB0cmlnZ2VyLnBoYXNlKT1cImNhbGxiYWNrKCRldmVudClcImApLlxuICovXG5leHBvcnQgY2xhc3MgQm91bmRFdmVudEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgcmVhZG9ubHkgZnVsbE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgaXNBbmltYXRpb246IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGFyZ2V0OiBzdHJpbmd8bnVsbCwgcHVibGljIHBoYXNlOiBzdHJpbmd8bnVsbCxcbiAgICAgIHB1YmxpYyBoYW5kbGVyOiBBU1RXaXRoU291cmNlLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIGhhbmRsZXJTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gQm91bmRFdmVudEFzdC5jYWxjRnVsbE5hbWUodGhpcy5uYW1lLCB0aGlzLnRhcmdldCwgdGhpcy5waGFzZSk7XG4gICAgdGhpcy5pc0FuaW1hdGlvbiA9ICEhdGhpcy5waGFzZTtcbiAgfVxuXG4gIHN0YXRpYyBjYWxjRnVsbE5hbWUobmFtZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZ3xudWxsLCBwaGFzZTogc3RyaW5nfG51bGwpOiBzdHJpbmcge1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBgJHt0YXJnZXR9OiR7bmFtZX1gO1xuICAgIH1cbiAgICBpZiAocGhhc2UpIHtcbiAgICAgIHJldHVybiBgQCR7bmFtZX0uJHtwaGFzZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJzZWRFdmVudChldmVudDogUGFyc2VkRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQ6IHN0cmluZ3xudWxsID0gZXZlbnQudHlwZSA9PT0gUGFyc2VkRXZlbnRUeXBlLlJlZ3VsYXIgPyBldmVudC50YXJnZXRPclBoYXNlIDogbnVsbDtcbiAgICBjb25zdCBwaGFzZTogc3RyaW5nfG51bGwgPVxuICAgICAgICBldmVudC50eXBlID09PSBQYXJzZWRFdmVudFR5cGUuQW5pbWF0aW9uID8gZXZlbnQudGFyZ2V0T3JQaGFzZSA6IG51bGw7XG4gICAgcmV0dXJuIG5ldyBCb3VuZEV2ZW50QXN0KFxuICAgICAgICBldmVudC5uYW1lLCB0YXJnZXQsIHBoYXNlLCBldmVudC5oYW5kbGVyLCBldmVudC5zb3VyY2VTcGFuLCBldmVudC5oYW5kbGVyU3Bhbik7XG4gIH1cblxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFdmVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgcmVmZXJlbmNlIGRlY2xhcmF0aW9uIG9uIGFuIGVsZW1lbnQgKGUuZy4gYGxldCBzb21lTmFtZT1cImV4cHJlc3Npb25cImApLlxuICovXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlQXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogQ29tcGlsZVRva2VuTWV0YWRhdGEsIHB1YmxpYyBvcmlnaW5hbFZhbHVlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZWZlcmVuY2UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhcmlhYmxlIGRlY2xhcmF0aW9uIG9uIGEgPG5nLXRlbXBsYXRlPiAoZS5nLiBgdmFyLXNvbWVOYW1lPVwic29tZUxvY2FsTmFtZVwiYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLCBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyByZWFkb25seSBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyByZWFkb25seSB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4pIHt9XG5cbiAgc3RhdGljIGZyb21QYXJzZWRWYXJpYWJsZSh2OiBQYXJzZWRWYXJpYWJsZSkge1xuICAgIHJldHVybiBuZXcgVmFyaWFibGVBc3Qodi5uYW1lLCB2LnZhbHVlLCB2LnNvdXJjZVNwYW4sIHYudmFsdWVTcGFuKTtcbiAgfVxuXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhcmlhYmxlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQW4gZWxlbWVudCBkZWNsYXJhdGlvbiBpbiBhIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRWxlbWVudEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IEF0dHJBc3RbXSwgcHVibGljIGlucHV0czogQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSxcbiAgICAgIHB1YmxpYyBvdXRwdXRzOiBCb3VuZEV2ZW50QXN0W10sIHB1YmxpYyByZWZlcmVuY2VzOiBSZWZlcmVuY2VBc3RbXSxcbiAgICAgIHB1YmxpYyBkaXJlY3RpdmVzOiBEaXJlY3RpdmVBc3RbXSwgcHVibGljIHByb3ZpZGVyczogUHJvdmlkZXJBc3RbXSxcbiAgICAgIHB1YmxpYyBoYXNWaWV3Q29udGFpbmVyOiBib29sZWFuLCBwdWJsaWMgcXVlcnlNYXRjaGVzOiBRdWVyeU1hdGNoW10sXG4gICAgICBwdWJsaWMgY2hpbGRyZW46IFRlbXBsYXRlQXN0W10sIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyfG51bGwsXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgZW5kU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwpIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RWxlbWVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQgaW5jbHVkZWQgaW4gYW4gQW5ndWxhciB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEVtYmVkZGVkVGVtcGxhdGVBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGF0dHJzOiBBdHRyQXN0W10sIHB1YmxpYyBvdXRwdXRzOiBCb3VuZEV2ZW50QXN0W10sIHB1YmxpYyByZWZlcmVuY2VzOiBSZWZlcmVuY2VBc3RbXSxcbiAgICAgIHB1YmxpYyB2YXJpYWJsZXM6IFZhcmlhYmxlQXN0W10sIHB1YmxpYyBkaXJlY3RpdmVzOiBEaXJlY3RpdmVBc3RbXSxcbiAgICAgIHB1YmxpYyBwcm92aWRlcnM6IFByb3ZpZGVyQXN0W10sIHB1YmxpYyBoYXNWaWV3Q29udGFpbmVyOiBib29sZWFuLFxuICAgICAgcHVibGljIHF1ZXJ5TWF0Y2hlczogUXVlcnlNYXRjaFtdLCBwdWJsaWMgY2hpbGRyZW46IFRlbXBsYXRlQXN0W10sXG4gICAgICBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlciwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbWJlZGRlZFRlbXBsYXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgcHJvcGVydHkgd2l0aCBhIGJvdW5kIHZhbHVlIChlLmcuIGAqbmdJZj1cImNvbmRpdGlvblwiKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpcmVjdGl2ZU5hbWU6IHN0cmluZywgcHVibGljIHRlbXBsYXRlTmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IEFTVFdpdGhTb3VyY2UsXG4gICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREaXJlY3RpdmVQcm9wZXJ0eSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIGRlY2xhcmVkIG9uIGFuIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGRpcmVjdGl2ZTogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIHB1YmxpYyBpbnB1dHM6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3RbXSxcbiAgICAgIHB1YmxpYyBob3N0UHJvcGVydGllczogQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSwgcHVibGljIGhvc3RFdmVudHM6IEJvdW5kRXZlbnRBc3RbXSxcbiAgICAgIHB1YmxpYyBjb250ZW50UXVlcnlTdGFydElkOiBudW1iZXIsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERpcmVjdGl2ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgcHJvdmlkZXIgZGVjbGFyZWQgb24gYW4gZWxlbWVudFxuICovXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSwgcHVibGljIG11bHRpUHJvdmlkZXI6IGJvb2xlYW4sIHB1YmxpYyBlYWdlcjogYm9vbGVhbixcbiAgICAgIHB1YmxpYyBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10sIHB1YmxpYyBwcm92aWRlclR5cGU6IFByb3ZpZGVyQXN0VHlwZSxcbiAgICAgIHB1YmxpYyBsaWZlY3ljbGVIb29rczogTGlmZWN5Y2xlSG9va3NbXSwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHJlYWRvbmx5IGlzTW9kdWxlOiBib29sZWFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAvLyBObyB2aXNpdCBtZXRob2QgaW4gdGhlIHZpc2l0b3IgZm9yIG5vdy4uLlxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFByb3ZpZGVyQXN0VHlwZSB7XG4gIFB1YmxpY1NlcnZpY2UsXG4gIFByaXZhdGVTZXJ2aWNlLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgQnVpbHRpblxufVxuXG4vKipcbiAqIFBvc2l0aW9uIHdoZXJlIGNvbnRlbnQgaXMgdG8gYmUgcHJvamVjdGVkIChpbnN0YW5jZSBvZiBgPG5nLWNvbnRlbnQ+YCBpbiBhIHRlbXBsYXRlKS5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nQ29udGVudEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXIsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE5nQ29udGVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TWF0Y2gge1xuICBxdWVyeUlkOiBudW1iZXI7XG4gIHZhbHVlOiBDb21waWxlVG9rZW5NZXRhZGF0YTtcbn1cblxuLyoqXG4gKiBBIHZpc2l0b3IgZm9yIHtAbGluayBUZW1wbGF0ZUFzdH0gdHJlZXMgdGhhdCB3aWxsIHByb2Nlc3MgZWFjaCBub2RlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQXN0VmlzaXRvciB7XG4gIC8vIFJldHVybmluZyBhIHRydXRoeSB2YWx1ZSBmcm9tIGB2aXNpdCgpYCB3aWxsIHByZXZlbnQgYHRlbXBsYXRlVmlzaXRBbGwoKWAgZnJvbSB0aGUgY2FsbCB0b1xuICAvLyB0aGUgdHlwZWQgbWV0aG9kIGFuZCByZXN1bHQgcmV0dXJuZWQgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBpbmNsdWRlZCBpbiBgdmlzaXRBbGwoKWBzXG4gIC8vIHJlc3VsdCBhcnJheS5cbiAgdmlzaXQ/KGFzdDogVGVtcGxhdGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcblxuICB2aXNpdE5nQ29udGVudChhc3Q6IE5nQ29udGVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRSZWZlcmVuY2UoYXN0OiBSZWZlcmVuY2VBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRWYXJpYWJsZShhc3Q6IFZhcmlhYmxlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXZlbnQoYXN0OiBCb3VuZEV2ZW50QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RWxlbWVudFByb3BlcnR5KGFzdDogQm91bmRFbGVtZW50UHJvcGVydHlBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRBdHRyKGFzdDogQXR0ckFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEJvdW5kVGV4dChhc3Q6IEJvdW5kVGV4dEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQoYXN0OiBUZXh0QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RGlyZWN0aXZlKGFzdDogRGlyZWN0aXZlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RGlyZWN0aXZlUHJvcGVydHkoYXN0OiBCb3VuZERpcmVjdGl2ZVByb3BlcnR5QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbi8qKlxuICogQSB2aXNpdG9yIHRoYXQgYWNjZXB0cyBlYWNoIG5vZGUgYnV0IGRvZXNuJ3QgZG8gYW55dGhpbmcuIEl0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIHRoZSBiYXNlIGNsYXNzIGZvciBhIHZpc2l0b3IgdGhhdCBpcyBvbmx5IGludGVyZXN0ZWQgaW4gYSBzdWJzZXQgb2YgdGhlIG5vZGUgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsVGVtcGxhdGVWaXNpdG9yIGltcGxlbWVudHMgVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgdmlzaXROZ0NvbnRlbnQoYXN0OiBOZ0NvbnRlbnRBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRFbWJlZGRlZFRlbXBsYXRlKGFzdDogRW1iZWRkZWRUZW1wbGF0ZUFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdEVsZW1lbnQoYXN0OiBFbGVtZW50QXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0UmVmZXJlbmNlKGFzdDogUmVmZXJlbmNlQXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0VmFyaWFibGUoYXN0OiBWYXJpYWJsZUFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdEV2ZW50KGFzdDogQm91bmRFdmVudEFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdEVsZW1lbnRQcm9wZXJ0eShhc3Q6IEJvdW5kRWxlbWVudFByb3BlcnR5QXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0QXR0cihhc3Q6IEF0dHJBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRCb3VuZFRleHQoYXN0OiBCb3VuZFRleHRBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRUZXh0KGFzdDogVGV4dEFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdERpcmVjdGl2ZShhc3Q6IERpcmVjdGl2ZUFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdERpcmVjdGl2ZVByb3BlcnR5KGFzdDogQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byBidWlsZCBhIHZpc2l0b3IgdGhhdCB2aXNpdHMgZWFjaCBub2RlXG4gKiBpbiBhbiB0ZW1wbGF0ZSBhc3QgcmVjdXJzaXZlbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWN1cnNpdmVUZW1wbGF0ZUFzdFZpc2l0b3IgZXh0ZW5kcyBOdWxsVGVtcGxhdGVWaXNpdG9yIGltcGxlbWVudHMgVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIE5vZGVzIHdpdGggY2hpbGRyZW5cbiAgdmlzaXRFbWJlZGRlZFRlbXBsYXRlKGFzdDogRW1iZWRkZWRUZW1wbGF0ZUFzdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgIHZpc2l0KGFzdC5hdHRycyk7XG4gICAgICB2aXNpdChhc3QucmVmZXJlbmNlcyk7XG4gICAgICB2aXNpdChhc3QudmFyaWFibGVzKTtcbiAgICAgIHZpc2l0KGFzdC5kaXJlY3RpdmVzKTtcbiAgICAgIHZpc2l0KGFzdC5wcm92aWRlcnMpO1xuICAgICAgdmlzaXQoYXN0LmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7XG4gICAgICB2aXNpdChhc3QuYXR0cnMpO1xuICAgICAgdmlzaXQoYXN0LmlucHV0cyk7XG4gICAgICB2aXNpdChhc3Qub3V0cHV0cyk7XG4gICAgICB2aXNpdChhc3QucmVmZXJlbmNlcyk7XG4gICAgICB2aXNpdChhc3QuZGlyZWN0aXZlcyk7XG4gICAgICB2aXNpdChhc3QucHJvdmlkZXJzKTtcbiAgICAgIHZpc2l0KGFzdC5jaGlsZHJlbik7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdERpcmVjdGl2ZShhc3Q6IERpcmVjdGl2ZUFzdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgIHZpc2l0KGFzdC5pbnB1dHMpO1xuICAgICAgdmlzaXQoYXN0Lmhvc3RQcm9wZXJ0aWVzKTtcbiAgICAgIHZpc2l0KGFzdC5ob3N0RXZlbnRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2aXNpdENoaWxkcmVuKFxuICAgICAgY29udGV4dDogYW55LFxuICAgICAgY2I6ICh2aXNpdDogKDxWIGV4dGVuZHMgVGVtcGxhdGVBc3Q+KGNoaWxkcmVuOiBWW118dW5kZWZpbmVkKSA9PiB2b2lkKSkgPT4gdm9pZCkge1xuICAgIGxldCByZXN1bHRzOiBhbnlbXVtdID0gW107XG4gICAgbGV0IHQgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHZpc2l0PFQgZXh0ZW5kcyBUZW1wbGF0ZUFzdD4oY2hpbGRyZW46IFRbXXx1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHJlc3VsdHMucHVzaCh0ZW1wbGF0ZVZpc2l0QWxsKHQsIGNoaWxkcmVuLCBjb250ZXh0KSk7XG4gICAgfVxuICAgIGNiKHZpc2l0KTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0cyk7XG4gIH1cbn1cblxuLyoqXG4gKiBWaXNpdCBldmVyeSBub2RlIGluIGEgbGlzdCBvZiB7QGxpbmsgVGVtcGxhdGVBc3R9cyB3aXRoIHRoZSBnaXZlbiB7QGxpbmsgVGVtcGxhdGVBc3RWaXNpdG9yfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlVmlzaXRBbGwoXG4gICAgdmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBhc3RzOiBUZW1wbGF0ZUFzdFtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gIGNvbnN0IHZpc2l0ID0gdmlzaXRvci52aXNpdCA/XG4gICAgICAoYXN0OiBUZW1wbGF0ZUFzdCkgPT4gdmlzaXRvci52aXNpdCEoYXN0LCBjb250ZXh0KSB8fCBhc3QudmlzaXQodmlzaXRvciwgY29udGV4dCkgOlxuICAgICAgKGFzdDogVGVtcGxhdGVBc3QpID0+IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgYXN0cy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgY29uc3QgYXN0UmVzdWx0ID0gdmlzaXQoYXN0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB0eXBlIFRlbXBsYXRlQXN0UGF0aCA9IEFzdFBhdGg8VGVtcGxhdGVBc3Q+O1xuIl19