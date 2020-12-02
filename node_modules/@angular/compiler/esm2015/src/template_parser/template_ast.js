/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A segment of text within the template.
 */
export class TextAst {
    constructor(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
/**
 * A bound expression within the text of a template.
 */
export class BoundTextAst {
    constructor(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitBoundText(this, context);
    }
}
/**
 * A plain attribute on an element.
 */
export class AttrAst {
    constructor(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitAttr(this, context);
    }
}
const BoundPropertyMapping = {
    [4 /* Animation */]: 4 /* Animation */,
    [1 /* Attribute */]: 1 /* Attribute */,
    [2 /* Class */]: 2 /* Class */,
    [0 /* Property */]: 0 /* Property */,
    [3 /* Style */]: 3 /* Style */,
};
/**
 * A binding for an element property (e.g. `[property]="expression"`) or an animation trigger (e.g.
 * `[@trigger]="stateExp"`)
 */
export class BoundElementPropertyAst {
    constructor(name, type, securityContext, value, unit, sourceSpan) {
        this.name = name;
        this.type = type;
        this.securityContext = securityContext;
        this.value = value;
        this.unit = unit;
        this.sourceSpan = sourceSpan;
        this.isAnimation = this.type === 4 /* Animation */;
    }
    static fromBoundProperty(prop) {
        const type = BoundPropertyMapping[prop.type];
        return new BoundElementPropertyAst(prop.name, type, prop.securityContext, prop.value, prop.unit, prop.sourceSpan);
    }
    visit(visitor, context) {
        return visitor.visitElementProperty(this, context);
    }
}
/**
 * A binding for an element event (e.g. `(event)="handler()"`) or an animation trigger event (e.g.
 * `(@trigger.phase)="callback($event)"`).
 */
export class BoundEventAst {
    constructor(name, target, phase, handler, sourceSpan, handlerSpan) {
        this.name = name;
        this.target = target;
        this.phase = phase;
        this.handler = handler;
        this.sourceSpan = sourceSpan;
        this.handlerSpan = handlerSpan;
        this.fullName = BoundEventAst.calcFullName(this.name, this.target, this.phase);
        this.isAnimation = !!this.phase;
    }
    static calcFullName(name, target, phase) {
        if (target) {
            return `${target}:${name}`;
        }
        if (phase) {
            return `@${name}.${phase}`;
        }
        return name;
    }
    static fromParsedEvent(event) {
        const target = event.type === 0 /* Regular */ ? event.targetOrPhase : null;
        const phase = event.type === 1 /* Animation */ ? event.targetOrPhase : null;
        return new BoundEventAst(event.name, target, phase, event.handler, event.sourceSpan, event.handlerSpan);
    }
    visit(visitor, context) {
        return visitor.visitEvent(this, context);
    }
}
/**
 * A reference declaration on an element (e.g. `let someName="expression"`).
 */
export class ReferenceAst {
    constructor(name, value, originalValue, sourceSpan) {
        this.name = name;
        this.value = value;
        this.originalValue = originalValue;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitReference(this, context);
    }
}
/**
 * A variable declaration on a <ng-template> (e.g. `var-someName="someLocalName"`).
 */
export class VariableAst {
    constructor(name, value, sourceSpan, valueSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
        this.valueSpan = valueSpan;
    }
    static fromParsedVariable(v) {
        return new VariableAst(v.name, v.value, v.sourceSpan, v.valueSpan);
    }
    visit(visitor, context) {
        return visitor.visitVariable(this, context);
    }
}
/**
 * An element declaration in a template.
 */
export class ElementAst {
    constructor(name, attrs, inputs, outputs, references, directives, providers, hasViewContainer, queryMatches, children, ngContentIndex, sourceSpan, endSourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitElement(this, context);
    }
}
/**
 * A `<ng-template>` element included in an Angular template.
 */
export class EmbeddedTemplateAst {
    constructor(attrs, outputs, references, variables, directives, providers, hasViewContainer, queryMatches, children, ngContentIndex, sourceSpan) {
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
    visit(visitor, context) {
        return visitor.visitEmbeddedTemplate(this, context);
    }
}
/**
 * A directive property with a bound value (e.g. `*ngIf="condition").
 */
export class BoundDirectivePropertyAst {
    constructor(directiveName, templateName, value, sourceSpan) {
        this.directiveName = directiveName;
        this.templateName = templateName;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitDirectiveProperty(this, context);
    }
}
/**
 * A directive declared on an element.
 */
export class DirectiveAst {
    constructor(directive, inputs, hostProperties, hostEvents, contentQueryStartId, sourceSpan) {
        this.directive = directive;
        this.inputs = inputs;
        this.hostProperties = hostProperties;
        this.hostEvents = hostEvents;
        this.contentQueryStartId = contentQueryStartId;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitDirective(this, context);
    }
}
/**
 * A provider declared on an element
 */
export class ProviderAst {
    constructor(token, multiProvider, eager, providers, providerType, lifecycleHooks, sourceSpan, isModule) {
        this.token = token;
        this.multiProvider = multiProvider;
        this.eager = eager;
        this.providers = providers;
        this.providerType = providerType;
        this.lifecycleHooks = lifecycleHooks;
        this.sourceSpan = sourceSpan;
        this.isModule = isModule;
    }
    visit(visitor, context) {
        // No visit method in the visitor for now...
        return null;
    }
}
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
export class NgContentAst {
    constructor(index, ngContentIndex, sourceSpan) {
        this.index = index;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitNgContent(this, context);
    }
}
/**
 * A visitor that accepts each node but doesn't do anything. It is intended to be used
 * as the base class for a visitor that is only interested in a subset of the node types.
 */
export class NullTemplateVisitor {
    visitNgContent(ast, context) { }
    visitEmbeddedTemplate(ast, context) { }
    visitElement(ast, context) { }
    visitReference(ast, context) { }
    visitVariable(ast, context) { }
    visitEvent(ast, context) { }
    visitElementProperty(ast, context) { }
    visitAttr(ast, context) { }
    visitBoundText(ast, context) { }
    visitText(ast, context) { }
    visitDirective(ast, context) { }
    visitDirectiveProperty(ast, context) { }
}
/**
 * Base class that can be used to build a visitor that visits each node
 * in an template ast recursively.
 */
export class RecursiveTemplateAstVisitor extends NullTemplateVisitor {
    constructor() {
        super();
    }
    // Nodes with children
    visitEmbeddedTemplate(ast, context) {
        return this.visitChildren(context, visit => {
            visit(ast.attrs);
            visit(ast.references);
            visit(ast.variables);
            visit(ast.directives);
            visit(ast.providers);
            visit(ast.children);
        });
    }
    visitElement(ast, context) {
        return this.visitChildren(context, visit => {
            visit(ast.attrs);
            visit(ast.inputs);
            visit(ast.outputs);
            visit(ast.references);
            visit(ast.directives);
            visit(ast.providers);
            visit(ast.children);
        });
    }
    visitDirective(ast, context) {
        return this.visitChildren(context, visit => {
            visit(ast.inputs);
            visit(ast.hostProperties);
            visit(ast.hostEvents);
        });
    }
    visitChildren(context, cb) {
        let results = [];
        let t = this;
        function visit(children) {
            if (children && children.length)
                results.push(templateVisitAll(t, children, context));
        }
        cb(visit);
        return Array.prototype.concat.apply([], results);
    }
}
/**
 * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
 */
export function templateVisitAll(visitor, asts, context = null) {
    const result = [];
    const visit = visitor.visit ?
        (ast) => visitor.visit(ast, context) || ast.visit(visitor, context) :
        (ast) => ast.visit(visitor, context);
    asts.forEach(ast => {
        const astResult = visit(ast);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBMEJIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUFDbEIsWUFDVyxLQUFhLEVBQVMsY0FBc0IsRUFBUyxVQUEyQjtRQUFoRixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFDL0YsS0FBSyxDQUFDLE9BQTJCLEVBQUUsT0FBWTtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFDVyxLQUFvQixFQUFTLGNBQXNCLEVBQ25ELFVBQTJCO1FBRDNCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUNuRCxlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFDMUMsS0FBSyxDQUFDLE9BQTJCLEVBQUUsT0FBWTtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUFDbEIsWUFBbUIsSUFBWSxFQUFTLEtBQWEsRUFBUyxVQUEyQjtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUM3RixLQUFLLENBQUMsT0FBMkIsRUFBRSxPQUFZO1FBQzdD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c0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FzdFBhdGh9IGZyb20gJy4uL2FzdF9wYXRoJztcbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBDb21waWxlVG9rZW5NZXRhZGF0YX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0FTVFdpdGhTb3VyY2UsIEJpbmRpbmdUeXBlLCBCb3VuZEVsZW1lbnRQcm9wZXJ0eSwgUGFyc2VkRXZlbnQsIFBhcnNlZEV2ZW50VHlwZSwgUGFyc2VkVmFyaWFibGV9IGZyb20gJy4uL2V4cHJlc3Npb25fcGFyc2VyL2FzdCc7XG5pbXBvcnQge0xpZmVjeWNsZUhvb2tzfSBmcm9tICcuLi9saWZlY3ljbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuXG5cbi8qKlxuICogQW4gQWJzdHJhY3QgU3ludGF4IFRyZWUgbm9kZSByZXByZXNlbnRpbmcgcGFydCBvZiBhIHBhcnNlZCBBbmd1bGFyIHRlbXBsYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQXN0IHtcbiAgLyoqXG4gICAqIFRoZSBzb3VyY2Ugc3BhbiBmcm9tIHdoaWNoIHRoaXMgbm9kZSB3YXMgcGFyc2VkLlxuICAgKi9cbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuXG4gIC8qKlxuICAgKiBWaXNpdCB0aGlzIG5vZGUgYW5kIHBvc3NpYmx5IHRyYW5zZm9ybSBpdC5cbiAgICovXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55O1xufVxuXG4vKipcbiAqIEEgc2VnbWVudCBvZiB0ZXh0IHdpdGhpbiB0aGUgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlciwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgYm91bmQgZXhwcmVzc2lvbiB3aXRoaW4gdGhlIHRleHQgb2YgYSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvdW5kVGV4dEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdmFsdWU6IEFTVFdpdGhTb3VyY2UsIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLFxuICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Qm91bmRUZXh0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBwbGFpbiBhdHRyaWJ1dGUgb24gYW4gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFByb3BlcnR5QmluZGluZ1R5cGUge1xuICAvLyBBIG5vcm1hbCBiaW5kaW5nIHRvIGEgcHJvcGVydHkgKGUuZy4gYFtwcm9wZXJ0eV09XCJleHByZXNzaW9uXCJgKS5cbiAgUHJvcGVydHksXG4gIC8vIEEgYmluZGluZyB0byBhbiBlbGVtZW50IGF0dHJpYnV0ZSAoZS5nLiBgW2F0dHIubmFtZV09XCJleHByZXNzaW9uXCJgKS5cbiAgQXR0cmlidXRlLFxuICAvLyBBIGJpbmRpbmcgdG8gYSBDU1MgY2xhc3MgKGUuZy4gYFtjbGFzcy5uYW1lXT1cImNvbmRpdGlvblwiYCkuXG4gIENsYXNzLFxuICAvLyBBIGJpbmRpbmcgdG8gYSBzdHlsZSBydWxlIChlLmcuIGBbc3R5bGUucnVsZV09XCJleHByZXNzaW9uXCJgKS5cbiAgU3R5bGUsXG4gIC8vIEEgYmluZGluZyB0byBhbiBhbmltYXRpb24gcmVmZXJlbmNlIChlLmcuIGBbYW5pbWF0ZS5rZXldPVwiZXhwcmVzc2lvblwiYCkuXG4gIEFuaW1hdGlvbixcbn1cblxuY29uc3QgQm91bmRQcm9wZXJ0eU1hcHBpbmcgPSB7XG4gIFtCaW5kaW5nVHlwZS5BbmltYXRpb25dOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLkFuaW1hdGlvbixcbiAgW0JpbmRpbmdUeXBlLkF0dHJpYnV0ZV06IFByb3BlcnR5QmluZGluZ1R5cGUuQXR0cmlidXRlLFxuICBbQmluZGluZ1R5cGUuQ2xhc3NdOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLkNsYXNzLFxuICBbQmluZGluZ1R5cGUuUHJvcGVydHldOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLlByb3BlcnR5LFxuICBbQmluZGluZ1R5cGUuU3R5bGVdOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLlN0eWxlLFxufTtcblxuLyoqXG4gKiBBIGJpbmRpbmcgZm9yIGFuIGVsZW1lbnQgcHJvcGVydHkgKGUuZy4gYFtwcm9wZXJ0eV09XCJleHByZXNzaW9uXCJgKSBvciBhbiBhbmltYXRpb24gdHJpZ2dlciAoZS5nLlxuICogYFtAdHJpZ2dlcl09XCJzdGF0ZUV4cFwiYClcbiAqL1xuZXhwb3J0IGNsYXNzIEJvdW5kRWxlbWVudFByb3BlcnR5QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICByZWFkb25seSBpc0FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBQcm9wZXJ0eUJpbmRpbmdUeXBlLFxuICAgICAgcHVibGljIHNlY3VyaXR5Q29udGV4dDogU2VjdXJpdHlDb250ZXh0LCBwdWJsaWMgdmFsdWU6IEFTVFdpdGhTb3VyY2UsXG4gICAgICBwdWJsaWMgdW5pdDogc3RyaW5nfG51bGwsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gdGhpcy50eXBlID09PSBQcm9wZXJ0eUJpbmRpbmdUeXBlLkFuaW1hdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRQcm9wZXJ0eShwcm9wOiBCb3VuZEVsZW1lbnRQcm9wZXJ0eSkge1xuICAgIGNvbnN0IHR5cGUgPSBCb3VuZFByb3BlcnR5TWFwcGluZ1twcm9wLnR5cGVdO1xuICAgIHJldHVybiBuZXcgQm91bmRFbGVtZW50UHJvcGVydHlBc3QoXG4gICAgICAgIHByb3AubmFtZSwgdHlwZSwgcHJvcC5zZWN1cml0eUNvbnRleHQsIHByb3AudmFsdWUsIHByb3AudW5pdCwgcHJvcC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnRQcm9wZXJ0eSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgYmluZGluZyBmb3IgYW4gZWxlbWVudCBldmVudCAoZS5nLiBgKGV2ZW50KT1cImhhbmRsZXIoKVwiYCkgb3IgYW4gYW5pbWF0aW9uIHRyaWdnZXIgZXZlbnQgKGUuZy5cbiAqIGAoQHRyaWdnZXIucGhhc2UpPVwiY2FsbGJhY2soJGV2ZW50KVwiYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb3VuZEV2ZW50QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICByZWFkb25seSBmdWxsTmFtZTogc3RyaW5nO1xuICByZWFkb25seSBpc0FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0YXJnZXQ6IHN0cmluZ3xudWxsLCBwdWJsaWMgcGhhc2U6IHN0cmluZ3xudWxsLFxuICAgICAgcHVibGljIGhhbmRsZXI6IEFTVFdpdGhTb3VyY2UsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICBwdWJsaWMgaGFuZGxlclNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBCb3VuZEV2ZW50QXN0LmNhbGNGdWxsTmFtZSh0aGlzLm5hbWUsIHRoaXMudGFyZ2V0LCB0aGlzLnBoYXNlKTtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gISF0aGlzLnBoYXNlO1xuICB9XG5cbiAgc3RhdGljIGNhbGNGdWxsTmFtZShuYW1lOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nfG51bGwsIHBoYXNlOiBzdHJpbmd8bnVsbCk6IHN0cmluZyB7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcmV0dXJuIGAke3RhcmdldH06JHtuYW1lfWA7XG4gICAgfVxuICAgIGlmIChwaGFzZSkge1xuICAgICAgcmV0dXJuIGBAJHtuYW1lfS4ke3BoYXNlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnNlZEV2ZW50KGV2ZW50OiBQYXJzZWRFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldDogc3RyaW5nfG51bGwgPSBldmVudC50eXBlID09PSBQYXJzZWRFdmVudFR5cGUuUmVndWxhciA/IGV2ZW50LnRhcmdldE9yUGhhc2UgOiBudWxsO1xuICAgIGNvbnN0IHBoYXNlOiBzdHJpbmd8bnVsbCA9XG4gICAgICAgIGV2ZW50LnR5cGUgPT09IFBhcnNlZEV2ZW50VHlwZS5BbmltYXRpb24gPyBldmVudC50YXJnZXRPclBoYXNlIDogbnVsbDtcbiAgICByZXR1cm4gbmV3IEJvdW5kRXZlbnRBc3QoXG4gICAgICAgIGV2ZW50Lm5hbWUsIHRhcmdldCwgcGhhc2UsIGV2ZW50LmhhbmRsZXIsIGV2ZW50LnNvdXJjZVNwYW4sIGV2ZW50LmhhbmRsZXJTcGFuKTtcbiAgfVxuXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV2ZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSByZWZlcmVuY2UgZGVjbGFyYXRpb24gb24gYW4gZWxlbWVudCAoZS5nLiBgbGV0IHNvbWVOYW1lPVwiZXhwcmVzc2lvblwiYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBDb21waWxlVG9rZW5NZXRhZGF0YSwgcHVibGljIG9yaWdpbmFsVmFsdWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFJlZmVyZW5jZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmFyaWFibGUgZGVjbGFyYXRpb24gb24gYSA8bmctdGVtcGxhdGU+IChlLmcuIGB2YXItc29tZU5hbWU9XCJzb21lTG9jYWxOYW1lXCJgKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhcmlhYmxlQXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsIHB1YmxpYyByZWFkb25seSB2YWx1ZTogc3RyaW5nLFxuICAgICAgcHVibGljIHJlYWRvbmx5IHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHJlYWRvbmx5IHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3Bhbikge31cblxuICBzdGF0aWMgZnJvbVBhcnNlZFZhcmlhYmxlKHY6IFBhcnNlZFZhcmlhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBWYXJpYWJsZUFzdCh2Lm5hbWUsIHYudmFsdWUsIHYuc291cmNlU3Bhbiwgdi52YWx1ZVNwYW4pO1xuICB9XG5cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbGVtZW50IGRlY2xhcmF0aW9uIGluIGEgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyczogQXR0ckFzdFtdLCBwdWJsaWMgaW5wdXRzOiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdFtdLFxuICAgICAgcHVibGljIG91dHB1dHM6IEJvdW5kRXZlbnRBc3RbXSwgcHVibGljIHJlZmVyZW5jZXM6IFJlZmVyZW5jZUFzdFtdLFxuICAgICAgcHVibGljIGRpcmVjdGl2ZXM6IERpcmVjdGl2ZUFzdFtdLCBwdWJsaWMgcHJvdmlkZXJzOiBQcm92aWRlckFzdFtdLFxuICAgICAgcHVibGljIGhhc1ZpZXdDb250YWluZXI6IGJvb2xlYW4sIHB1YmxpYyBxdWVyeU1hdGNoZXM6IFF1ZXJ5TWF0Y2hbXSxcbiAgICAgIHB1YmxpYyBjaGlsZHJlbjogVGVtcGxhdGVBc3RbXSwgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXJ8bnVsbCxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBlbmRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbCkge31cblxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBgPG5nLXRlbXBsYXRlPmAgZWxlbWVudCBpbmNsdWRlZCBpbiBhbiBBbmd1bGFyIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRW1iZWRkZWRUZW1wbGF0ZUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgYXR0cnM6IEF0dHJBc3RbXSwgcHVibGljIG91dHB1dHM6IEJvdW5kRXZlbnRBc3RbXSwgcHVibGljIHJlZmVyZW5jZXM6IFJlZmVyZW5jZUFzdFtdLFxuICAgICAgcHVibGljIHZhcmlhYmxlczogVmFyaWFibGVBc3RbXSwgcHVibGljIGRpcmVjdGl2ZXM6IERpcmVjdGl2ZUFzdFtdLFxuICAgICAgcHVibGljIHByb3ZpZGVyczogUHJvdmlkZXJBc3RbXSwgcHVibGljIGhhc1ZpZXdDb250YWluZXI6IGJvb2xlYW4sXG4gICAgICBwdWJsaWMgcXVlcnlNYXRjaGVzOiBRdWVyeU1hdGNoW10sIHB1YmxpYyBjaGlsZHJlbjogVGVtcGxhdGVBc3RbXSxcbiAgICAgIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVtYmVkZGVkVGVtcGxhdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBwcm9wZXJ0eSB3aXRoIGEgYm91bmQgdmFsdWUgKGUuZy4gYCpuZ0lmPVwiY29uZGl0aW9uXCIpLlxuICovXG5leHBvcnQgY2xhc3MgQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZGlyZWN0aXZlTmFtZTogc3RyaW5nLCBwdWJsaWMgdGVtcGxhdGVOYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogQVNUV2l0aFNvdXJjZSxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERpcmVjdGl2ZVByb3BlcnR5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgZGVjbGFyZWQgb24gYW4gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZGlyZWN0aXZlOiBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSwgcHVibGljIGlucHV0czogQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdFtdLFxuICAgICAgcHVibGljIGhvc3RQcm9wZXJ0aWVzOiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdFtdLCBwdWJsaWMgaG9zdEV2ZW50czogQm91bmRFdmVudEFzdFtdLFxuICAgICAgcHVibGljIGNvbnRlbnRRdWVyeVN0YXJ0SWQ6IG51bWJlciwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGlyZWN0aXZlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBwcm92aWRlciBkZWNsYXJlZCBvbiBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQcm92aWRlckFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhLCBwdWJsaWMgbXVsdGlQcm92aWRlcjogYm9vbGVhbiwgcHVibGljIGVhZ2VyOiBib29sZWFuLFxuICAgICAgcHVibGljIHByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSwgcHVibGljIHByb3ZpZGVyVHlwZTogUHJvdmlkZXJBc3RUeXBlLFxuICAgICAgcHVibGljIGxpZmVjeWNsZUhvb2tzOiBMaWZlY3ljbGVIb29rc1tdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcmVhZG9ubHkgaXNNb2R1bGU6IGJvb2xlYW4pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIC8vIE5vIHZpc2l0IG1ldGhvZCBpbiB0aGUgdmlzaXRvciBmb3Igbm93Li4uXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gUHJvdmlkZXJBc3RUeXBlIHtcbiAgUHVibGljU2VydmljZSxcbiAgUHJpdmF0ZVNlcnZpY2UsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBCdWlsdGluXG59XG5cbi8qKlxuICogUG9zaXRpb24gd2hlcmUgY29udGVudCBpcyB0byBiZSBwcm9qZWN0ZWQgKGluc3RhbmNlIG9mIGA8bmctY29udGVudD5gIGluIGEgdGVtcGxhdGUpLlxuICovXG5leHBvcnQgY2xhc3MgTmdDb250ZW50QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlciwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmdDb250ZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlNYXRjaCB7XG4gIHF1ZXJ5SWQ6IG51bWJlcjtcbiAgdmFsdWU6IENvbXBpbGVUb2tlbk1ldGFkYXRhO1xufVxuXG4vKipcbiAqIEEgdmlzaXRvciBmb3Ige0BsaW5rIFRlbXBsYXRlQXN0fSB0cmVlcyB0aGF0IHdpbGwgcHJvY2VzcyBlYWNoIG5vZGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVBc3RWaXNpdG9yIHtcbiAgLy8gUmV0dXJuaW5nIGEgdHJ1dGh5IHZhbHVlIGZyb20gYHZpc2l0KClgIHdpbGwgcHJldmVudCBgdGVtcGxhdGVWaXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvXG4gIC8vIHRoZSB0eXBlZCBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHNcbiAgLy8gcmVzdWx0IGFycmF5LlxuICB2aXNpdD8oYXN0OiBUZW1wbGF0ZUFzdCwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0TmdDb250ZW50KGFzdDogTmdDb250ZW50QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RW1iZWRkZWRUZW1wbGF0ZShhc3Q6IEVtYmVkZGVkVGVtcGxhdGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRFbGVtZW50KGFzdDogRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFJlZmVyZW5jZShhc3Q6IFJlZmVyZW5jZUFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFZhcmlhYmxlKGFzdDogVmFyaWFibGVBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRFdmVudChhc3Q6IEJvdW5kRXZlbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRFbGVtZW50UHJvcGVydHkoYXN0OiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEF0dHIoYXN0OiBBdHRyQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Qm91bmRUZXh0KGFzdDogQm91bmRUZXh0QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dChhc3Q6IFRleHRBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXREaXJlY3RpdmUoYXN0OiBEaXJlY3RpdmVBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXREaXJlY3RpdmVQcm9wZXJ0eShhc3Q6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbn1cblxuLyoqXG4gKiBBIHZpc2l0b3IgdGhhdCBhY2NlcHRzIGVhY2ggbm9kZSBidXQgZG9lc24ndCBkbyBhbnl0aGluZy4gSXQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZFxuICogYXMgdGhlIGJhc2UgY2xhc3MgZm9yIGEgdmlzaXRvciB0aGF0IGlzIG9ubHkgaW50ZXJlc3RlZCBpbiBhIHN1YnNldCBvZiB0aGUgbm9kZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxUZW1wbGF0ZVZpc2l0b3IgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdFZpc2l0b3Ige1xuICB2aXNpdE5nQ29udGVudChhc3Q6IE5nQ29udGVudEFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRSZWZlcmVuY2UoYXN0OiBSZWZlcmVuY2VBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRWYXJpYWJsZShhc3Q6IFZhcmlhYmxlQXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0RXZlbnQoYXN0OiBCb3VuZEV2ZW50QXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0RWxlbWVudFByb3BlcnR5KGFzdDogQm91bmRFbGVtZW50UHJvcGVydHlBc3QsIGNvbnRleHQ6IGFueSk6IHZvaWQge31cbiAgdmlzaXRBdHRyKGFzdDogQXR0ckFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdEJvdW5kVGV4dChhc3Q6IEJvdW5kVGV4dEFzdCwgY29udGV4dDogYW55KTogdm9pZCB7fVxuICB2aXNpdFRleHQoYXN0OiBUZXh0QXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0RGlyZWN0aXZlKGFzdDogRGlyZWN0aXZlQXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG4gIHZpc2l0RGlyZWN0aXZlUHJvcGVydHkoYXN0OiBCb3VuZERpcmVjdGl2ZVByb3BlcnR5QXN0LCBjb250ZXh0OiBhbnkpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGJ1aWxkIGEgdmlzaXRvciB0aGF0IHZpc2l0cyBlYWNoIG5vZGVcbiAqIGluIGFuIHRlbXBsYXRlIGFzdCByZWN1cnNpdmVseS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZVRlbXBsYXRlQXN0VmlzaXRvciBleHRlbmRzIE51bGxUZW1wbGF0ZVZpc2l0b3IgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdFZpc2l0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLy8gTm9kZXMgd2l0aCBjaGlsZHJlblxuICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0Q2hpbGRyZW4oY29udGV4dCwgdmlzaXQgPT4ge1xuICAgICAgdmlzaXQoYXN0LmF0dHJzKTtcbiAgICAgIHZpc2l0KGFzdC5yZWZlcmVuY2VzKTtcbiAgICAgIHZpc2l0KGFzdC52YXJpYWJsZXMpO1xuICAgICAgdmlzaXQoYXN0LmRpcmVjdGl2ZXMpO1xuICAgICAgdmlzaXQoYXN0LnByb3ZpZGVycyk7XG4gICAgICB2aXNpdChhc3QuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGFzdDogRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgIHZpc2l0KGFzdC5hdHRycyk7XG4gICAgICB2aXNpdChhc3QuaW5wdXRzKTtcbiAgICAgIHZpc2l0KGFzdC5vdXRwdXRzKTtcbiAgICAgIHZpc2l0KGFzdC5yZWZlcmVuY2VzKTtcbiAgICAgIHZpc2l0KGFzdC5kaXJlY3RpdmVzKTtcbiAgICAgIHZpc2l0KGFzdC5wcm92aWRlcnMpO1xuICAgICAgdmlzaXQoYXN0LmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0RGlyZWN0aXZlKGFzdDogRGlyZWN0aXZlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0Q2hpbGRyZW4oY29udGV4dCwgdmlzaXQgPT4ge1xuICAgICAgdmlzaXQoYXN0LmlucHV0cyk7XG4gICAgICB2aXNpdChhc3QuaG9zdFByb3BlcnRpZXMpO1xuICAgICAgdmlzaXQoYXN0Lmhvc3RFdmVudHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZpc2l0Q2hpbGRyZW4oXG4gICAgICBjb250ZXh0OiBhbnksXG4gICAgICBjYjogKHZpc2l0OiAoPFYgZXh0ZW5kcyBUZW1wbGF0ZUFzdD4oY2hpbGRyZW46IFZbXXx1bmRlZmluZWQpID0+IHZvaWQpKSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlc3VsdHM6IGFueVtdW10gPSBbXTtcbiAgICBsZXQgdCA9IHRoaXM7XG4gICAgZnVuY3Rpb24gdmlzaXQ8VCBleHRlbmRzIFRlbXBsYXRlQXN0PihjaGlsZHJlbjogVFtdfHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkgcmVzdWx0cy5wdXNoKHRlbXBsYXRlVmlzaXRBbGwodCwgY2hpbGRyZW4sIGNvbnRleHQpKTtcbiAgICB9XG4gICAgY2IodmlzaXQpO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHRzKTtcbiAgfVxufVxuXG4vKipcbiAqIFZpc2l0IGV2ZXJ5IG5vZGUgaW4gYSBsaXN0IG9mIHtAbGluayBUZW1wbGF0ZUFzdH1zIHdpdGggdGhlIGdpdmVuIHtAbGluayBUZW1wbGF0ZUFzdFZpc2l0b3J9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVWaXNpdEFsbChcbiAgICB2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGFzdHM6IFRlbXBsYXRlQXN0W10sIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0ID9cbiAgICAgIChhc3Q6IFRlbXBsYXRlQXN0KSA9PiB2aXNpdG9yLnZpc2l0IShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KSA6XG4gICAgICAoYXN0OiBUZW1wbGF0ZUFzdCkgPT4gYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICBhc3RzLmZvckVhY2goYXN0ID0+IHtcbiAgICBjb25zdCBhc3RSZXN1bHQgPSB2aXNpdChhc3QpO1xuICAgIGlmIChhc3RSZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFzdFJlc3VsdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVBc3RQYXRoID0gQXN0UGF0aDxUZW1wbGF0ZUFzdD47XG4iXX0=