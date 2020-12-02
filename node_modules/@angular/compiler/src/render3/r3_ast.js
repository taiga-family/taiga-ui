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
        define("@angular/compiler/src/render3/r3_ast", ["require", "exports", "tslib", "@angular/compiler/src/parse_util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var parse_util_1 = require("@angular/compiler/src/parse_util");
    var Text = /** @class */ (function () {
        function Text(value, sourceSpan) {
            this.value = value;
            this.sourceSpan = sourceSpan;
        }
        Text.prototype.visit = function (visitor) {
            return visitor.visitText(this);
        };
        return Text;
    }());
    exports.Text = Text;
    var BoundText = /** @class */ (function () {
        function BoundText(value, sourceSpan, i18n) {
            this.value = value;
            this.sourceSpan = sourceSpan;
            this.i18n = i18n;
        }
        BoundText.prototype.visit = function (visitor) {
            return visitor.visitBoundText(this);
        };
        return BoundText;
    }());
    exports.BoundText = BoundText;
    var TextAttribute = /** @class */ (function () {
        function TextAttribute(name, value, sourceSpan, valueSpan, i18n) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
            this.i18n = i18n;
        }
        TextAttribute.prototype.visit = function (visitor) {
            return visitor.visitTextAttribute(this);
        };
        return TextAttribute;
    }());
    exports.TextAttribute = TextAttribute;
    var BoundAttribute = /** @class */ (function () {
        function BoundAttribute(name, type, securityContext, value, unit, sourceSpan, valueSpan, i18n) {
            this.name = name;
            this.type = type;
            this.securityContext = securityContext;
            this.value = value;
            this.unit = unit;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
            this.i18n = i18n;
        }
        BoundAttribute.fromBoundElementProperty = function (prop, i18n) {
            return new BoundAttribute(prop.name, prop.type, prop.securityContext, prop.value, prop.unit, prop.sourceSpan, prop.valueSpan, i18n);
        };
        BoundAttribute.prototype.visit = function (visitor) {
            return visitor.visitBoundAttribute(this);
        };
        return BoundAttribute;
    }());
    exports.BoundAttribute = BoundAttribute;
    var BoundEvent = /** @class */ (function () {
        function BoundEvent(name, type, handler, target, phase, sourceSpan, handlerSpan) {
            this.name = name;
            this.type = type;
            this.handler = handler;
            this.target = target;
            this.phase = phase;
            this.sourceSpan = sourceSpan;
            this.handlerSpan = handlerSpan;
        }
        BoundEvent.fromParsedEvent = function (event) {
            var target = event.type === 0 /* Regular */ ? event.targetOrPhase : null;
            var phase = event.type === 1 /* Animation */ ? event.targetOrPhase : null;
            return new BoundEvent(event.name, event.type, event.handler, target, phase, event.sourceSpan, event.handlerSpan);
        };
        BoundEvent.prototype.visit = function (visitor) {
            return visitor.visitBoundEvent(this);
        };
        return BoundEvent;
    }());
    exports.BoundEvent = BoundEvent;
    var Element = /** @class */ (function () {
        function Element(name, attributes, inputs, outputs, children, references, sourceSpan, startSourceSpan, endSourceSpan, i18n) {
            this.name = name;
            this.attributes = attributes;
            this.inputs = inputs;
            this.outputs = outputs;
            this.children = children;
            this.references = references;
            this.sourceSpan = sourceSpan;
            this.startSourceSpan = startSourceSpan;
            this.endSourceSpan = endSourceSpan;
            this.i18n = i18n;
            // If the element is empty then the source span should include any closing tag
            if (children.length === 0 && startSourceSpan && endSourceSpan) {
                this.sourceSpan = new parse_util_1.ParseSourceSpan(sourceSpan.start, endSourceSpan.end);
            }
        }
        Element.prototype.visit = function (visitor) {
            return visitor.visitElement(this);
        };
        return Element;
    }());
    exports.Element = Element;
    var Template = /** @class */ (function () {
        function Template(tagName, attributes, inputs, outputs, templateAttrs, children, references, variables, sourceSpan, startSourceSpan, endSourceSpan, i18n) {
            this.tagName = tagName;
            this.attributes = attributes;
            this.inputs = inputs;
            this.outputs = outputs;
            this.templateAttrs = templateAttrs;
            this.children = children;
            this.references = references;
            this.variables = variables;
            this.sourceSpan = sourceSpan;
            this.startSourceSpan = startSourceSpan;
            this.endSourceSpan = endSourceSpan;
            this.i18n = i18n;
        }
        Template.prototype.visit = function (visitor) {
            return visitor.visitTemplate(this);
        };
        return Template;
    }());
    exports.Template = Template;
    var Content = /** @class */ (function () {
        function Content(selector, attributes, sourceSpan, i18n) {
            this.selector = selector;
            this.attributes = attributes;
            this.sourceSpan = sourceSpan;
            this.i18n = i18n;
        }
        Content.prototype.visit = function (visitor) {
            return visitor.visitContent(this);
        };
        return Content;
    }());
    exports.Content = Content;
    var Variable = /** @class */ (function () {
        function Variable(name, value, sourceSpan, valueSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
        }
        Variable.prototype.visit = function (visitor) {
            return visitor.visitVariable(this);
        };
        return Variable;
    }());
    exports.Variable = Variable;
    var Reference = /** @class */ (function () {
        function Reference(name, value, sourceSpan, valueSpan) {
            this.name = name;
            this.value = value;
            this.sourceSpan = sourceSpan;
            this.valueSpan = valueSpan;
        }
        Reference.prototype.visit = function (visitor) {
            return visitor.visitReference(this);
        };
        return Reference;
    }());
    exports.Reference = Reference;
    var Icu = /** @class */ (function () {
        function Icu(vars, placeholders, sourceSpan, i18n) {
            this.vars = vars;
            this.placeholders = placeholders;
            this.sourceSpan = sourceSpan;
            this.i18n = i18n;
        }
        Icu.prototype.visit = function (visitor) {
            return visitor.visitIcu(this);
        };
        return Icu;
    }());
    exports.Icu = Icu;
    var NullVisitor = /** @class */ (function () {
        function NullVisitor() {
        }
        NullVisitor.prototype.visitElement = function (element) { };
        NullVisitor.prototype.visitTemplate = function (template) { };
        NullVisitor.prototype.visitContent = function (content) { };
        NullVisitor.prototype.visitVariable = function (variable) { };
        NullVisitor.prototype.visitReference = function (reference) { };
        NullVisitor.prototype.visitTextAttribute = function (attribute) { };
        NullVisitor.prototype.visitBoundAttribute = function (attribute) { };
        NullVisitor.prototype.visitBoundEvent = function (attribute) { };
        NullVisitor.prototype.visitText = function (text) { };
        NullVisitor.prototype.visitBoundText = function (text) { };
        NullVisitor.prototype.visitIcu = function (icu) { };
        return NullVisitor;
    }());
    exports.NullVisitor = NullVisitor;
    var RecursiveVisitor = /** @class */ (function () {
        function RecursiveVisitor() {
        }
        RecursiveVisitor.prototype.visitElement = function (element) {
            visitAll(this, element.attributes);
            visitAll(this, element.children);
            visitAll(this, element.references);
        };
        RecursiveVisitor.prototype.visitTemplate = function (template) {
            visitAll(this, template.attributes);
            visitAll(this, template.children);
            visitAll(this, template.references);
            visitAll(this, template.variables);
        };
        RecursiveVisitor.prototype.visitContent = function (content) { };
        RecursiveVisitor.prototype.visitVariable = function (variable) { };
        RecursiveVisitor.prototype.visitReference = function (reference) { };
        RecursiveVisitor.prototype.visitTextAttribute = function (attribute) { };
        RecursiveVisitor.prototype.visitBoundAttribute = function (attribute) { };
        RecursiveVisitor.prototype.visitBoundEvent = function (attribute) { };
        RecursiveVisitor.prototype.visitText = function (text) { };
        RecursiveVisitor.prototype.visitBoundText = function (text) { };
        RecursiveVisitor.prototype.visitIcu = function (icu) { };
        return RecursiveVisitor;
    }());
    exports.RecursiveVisitor = RecursiveVisitor;
    var TransformVisitor = /** @class */ (function () {
        function TransformVisitor() {
        }
        TransformVisitor.prototype.visitElement = function (element) {
            var newAttributes = transformAll(this, element.attributes);
            var newInputs = transformAll(this, element.inputs);
            var newOutputs = transformAll(this, element.outputs);
            var newChildren = transformAll(this, element.children);
            var newReferences = transformAll(this, element.references);
            if (newAttributes != element.attributes || newInputs != element.inputs ||
                newOutputs != element.outputs || newChildren != element.children ||
                newReferences != element.references) {
                return new Element(element.name, newAttributes, newInputs, newOutputs, newChildren, newReferences, element.sourceSpan, element.startSourceSpan, element.endSourceSpan);
            }
            return element;
        };
        TransformVisitor.prototype.visitTemplate = function (template) {
            var newAttributes = transformAll(this, template.attributes);
            var newInputs = transformAll(this, template.inputs);
            var newOutputs = transformAll(this, template.outputs);
            var newTemplateAttrs = transformAll(this, template.templateAttrs);
            var newChildren = transformAll(this, template.children);
            var newReferences = transformAll(this, template.references);
            var newVariables = transformAll(this, template.variables);
            if (newAttributes != template.attributes || newInputs != template.inputs ||
                newOutputs != template.outputs || newTemplateAttrs != template.templateAttrs ||
                newChildren != template.children || newReferences != template.references ||
                newVariables != template.variables) {
                return new Template(template.tagName, newAttributes, newInputs, newOutputs, newTemplateAttrs, newChildren, newReferences, newVariables, template.sourceSpan, template.startSourceSpan, template.endSourceSpan);
            }
            return template;
        };
        TransformVisitor.prototype.visitContent = function (content) {
            return content;
        };
        TransformVisitor.prototype.visitVariable = function (variable) {
            return variable;
        };
        TransformVisitor.prototype.visitReference = function (reference) {
            return reference;
        };
        TransformVisitor.prototype.visitTextAttribute = function (attribute) {
            return attribute;
        };
        TransformVisitor.prototype.visitBoundAttribute = function (attribute) {
            return attribute;
        };
        TransformVisitor.prototype.visitBoundEvent = function (attribute) {
            return attribute;
        };
        TransformVisitor.prototype.visitText = function (text) {
            return text;
        };
        TransformVisitor.prototype.visitBoundText = function (text) {
            return text;
        };
        TransformVisitor.prototype.visitIcu = function (icu) {
            return icu;
        };
        return TransformVisitor;
    }());
    exports.TransformVisitor = TransformVisitor;
    function visitAll(visitor, nodes) {
        var e_1, _a, e_2, _b;
        var result = [];
        if (visitor.visit) {
            try {
                for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    var newNode = visitor.visit(node) || node.visit(visitor);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            try {
                for (var nodes_2 = tslib_1.__values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                    var node = nodes_2_1.value;
                    var newNode = node.visit(visitor);
                    if (newNode) {
                        result.push(newNode);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (nodes_2_1 && !nodes_2_1.done && (_b = nodes_2.return)) _b.call(nodes_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return result;
    }
    exports.visitAll = visitAll;
    function transformAll(visitor, nodes) {
        var e_3, _a;
        var result = [];
        var changed = false;
        try {
            for (var nodes_3 = tslib_1.__values(nodes), nodes_3_1 = nodes_3.next(); !nodes_3_1.done; nodes_3_1 = nodes_3.next()) {
                var node = nodes_3_1.value;
                var newNode = node.visit(visitor);
                if (newNode) {
                    result.push(newNode);
                }
                changed = changed || newNode != node;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (nodes_3_1 && !nodes_3_1.done && (_a = nodes_3.return)) _a.call(nodes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return changed ? result : nodes;
    }
    exports.transformAll = transformAll;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUtILCtEQUE4QztJQU85QztRQUNFLGNBQW1CLEtBQWEsRUFBUyxVQUEyQjtZQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFBRyxDQUFDO1FBQ3hFLG9CQUFLLEdBQUwsVUFBYyxPQUF3QjtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNILFdBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUxZLG9CQUFJO0lBT2pCO1FBQ0UsbUJBQW1CLEtBQVUsRUFBUyxVQUEyQixFQUFTLElBQWU7WUFBdEUsVUFBSyxHQUFMLEtBQUssQ0FBSztZQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO1lBQVMsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFHLENBQUM7UUFDN0YseUJBQUssR0FBTCxVQUFjLE9BQXdCO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0gsZ0JBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUxZLDhCQUFTO0lBT3RCO1FBQ0UsdUJBQ1csSUFBWSxFQUFTLEtBQWEsRUFBUyxVQUEyQixFQUN0RSxTQUEyQixFQUFTLElBQWU7WUFEbkQsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7WUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFpQjtZQUN0RSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtZQUFTLFNBQUksR0FBSixJQUFJLENBQVc7UUFBRyxDQUFDO1FBQ2xFLDZCQUFLLEdBQUwsVUFBYyxPQUF3QjtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQUFDLEFBUEQsSUFPQztJQVBZLHNDQUFhO0lBUzFCO1FBQ0Usd0JBQ1csSUFBWSxFQUFTLElBQWlCLEVBQVMsZUFBZ0MsRUFDL0UsS0FBVSxFQUFTLElBQWlCLEVBQVMsVUFBMkIsRUFDeEUsU0FBMkIsRUFBUyxJQUFlO1lBRm5ELFNBQUksR0FBSixJQUFJLENBQVE7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFhO1lBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQy9FLFVBQUssR0FBTCxLQUFLLENBQUs7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFhO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFDeEUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQUcsQ0FBQztRQUUzRCx1Q0FBd0IsR0FBL0IsVUFBZ0MsSUFBMEIsRUFBRSxJQUFlO1lBQ3pFLE9BQU8sSUFBSSxjQUFjLENBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUNsRixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCw4QkFBSyxHQUFMLFVBQWMsT0FBd0I7WUFDcEMsT0FBTyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FBQyxBQWZELElBZUM7SUFmWSx3Q0FBYztJQWlCM0I7UUFDRSxvQkFDVyxJQUFZLEVBQVMsSUFBcUIsRUFBUyxPQUFZLEVBQy9ELE1BQW1CLEVBQVMsS0FBa0IsRUFBUyxVQUEyQixFQUNsRixXQUE0QjtZQUY1QixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQVMsU0FBSSxHQUFKLElBQUksQ0FBaUI7WUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFLO1lBQy9ELFdBQU0sR0FBTixNQUFNLENBQWE7WUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFhO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFDbEYsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQUcsQ0FBQztRQUVwQywwQkFBZSxHQUF0QixVQUF1QixLQUFrQjtZQUN2QyxJQUFNLE1BQU0sR0FBZ0IsS0FBSyxDQUFDLElBQUksb0JBQTRCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRyxJQUFNLEtBQUssR0FDUCxLQUFLLENBQUMsSUFBSSxzQkFBOEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFFLE9BQU8sSUFBSSxVQUFVLENBQ2pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakcsQ0FBQztRQUVELDBCQUFLLEdBQUwsVUFBYyxPQUF3QjtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0FBQyxBQWpCRCxJQWlCQztJQWpCWSxnQ0FBVTtJQW1CdkI7UUFDRSxpQkFDVyxJQUFZLEVBQVMsVUFBMkIsRUFBUyxNQUF3QixFQUNqRixPQUFxQixFQUFTLFFBQWdCLEVBQVMsVUFBdUIsRUFDOUUsVUFBMkIsRUFBUyxlQUFxQyxFQUN6RSxhQUFtQyxFQUFTLElBQWU7WUFIM0QsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDakYsWUFBTyxHQUFQLE9BQU8sQ0FBYztZQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7WUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFhO1lBQzlFLGVBQVUsR0FBVixVQUFVLENBQWlCO1lBQVMsb0JBQWUsR0FBZixlQUFlLENBQXNCO1lBQ3pFLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtZQUFTLFNBQUksR0FBSixJQUFJLENBQVc7WUFDcEUsOEVBQThFO1lBQzlFLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksZUFBZSxJQUFJLGFBQWEsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDRCQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDO1FBQ0QsdUJBQUssR0FBTCxVQUFjLE9BQXdCO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBZFksMEJBQU87SUFnQnBCO1FBQ0Usa0JBQ1csT0FBZSxFQUFTLFVBQTJCLEVBQVMsTUFBd0IsRUFDcEYsT0FBcUIsRUFBUyxhQUErQyxFQUM3RSxRQUFnQixFQUFTLFVBQXVCLEVBQVMsU0FBcUIsRUFDOUUsVUFBMkIsRUFBUyxlQUFxQyxFQUN6RSxhQUFtQyxFQUFTLElBQWU7WUFKM0QsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO1lBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDcEYsWUFBTyxHQUFQLE9BQU8sQ0FBYztZQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFrQztZQUM3RSxhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtZQUFTLGNBQVMsR0FBVCxTQUFTLENBQVk7WUFDOUUsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7WUFDekUsa0JBQWEsR0FBYixhQUFhLENBQXNCO1lBQVMsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFHLENBQUM7UUFDMUUsd0JBQUssR0FBTCxVQUFjLE9BQXdCO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFWRCxJQVVDO0lBVlksNEJBQVE7SUFZckI7UUFDRSxpQkFDVyxRQUFnQixFQUFTLFVBQTJCLEVBQ3BELFVBQTJCLEVBQVMsSUFBZTtZQURuRCxhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFDcEQsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQUcsQ0FBQztRQUNsRSx1QkFBSyxHQUFMLFVBQWMsT0FBd0I7WUFDcEMsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQVBELElBT0M7SUFQWSwwQkFBTztJQVNwQjtRQUNFLGtCQUNXLElBQVksRUFBUyxLQUFhLEVBQVMsVUFBMkIsRUFDdEUsU0FBMkI7WUFEM0IsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7WUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFpQjtZQUN0RSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFHLENBQUM7UUFDMUMsd0JBQUssR0FBTCxVQUFjLE9BQXdCO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFQRCxJQU9DO0lBUFksNEJBQVE7SUFTckI7UUFDRSxtQkFDVyxJQUFZLEVBQVMsS0FBYSxFQUFTLFVBQTJCLEVBQ3RFLFNBQTJCO1lBRDNCLFNBQUksR0FBSixJQUFJLENBQVE7WUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFDdEUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBRyxDQUFDO1FBQzFDLHlCQUFLLEdBQUwsVUFBYyxPQUF3QjtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FBQyxBQVBELElBT0M7SUFQWSw4QkFBUztJQVN0QjtRQUNFLGFBQ1csSUFBaUMsRUFDakMsWUFBOEMsRUFBUyxVQUEyQixFQUNsRixJQUFlO1lBRmYsU0FBSSxHQUFKLElBQUksQ0FBNkI7WUFDakMsaUJBQVksR0FBWixZQUFZLENBQWtDO1lBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7WUFDbEYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFHLENBQUM7UUFDOUIsbUJBQUssR0FBTCxVQUFjLE9BQXdCO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0gsVUFBQztJQUFELENBQUMsQUFSRCxJQVFDO0lBUlksa0JBQUc7SUE0QmhCO1FBQUE7UUFZQSxDQUFDO1FBWEMsa0NBQVksR0FBWixVQUFhLE9BQWdCLElBQVMsQ0FBQztRQUN2QyxtQ0FBYSxHQUFiLFVBQWMsUUFBa0IsSUFBUyxDQUFDO1FBQzFDLGtDQUFZLEdBQVosVUFBYSxPQUFnQixJQUFTLENBQUM7UUFDdkMsbUNBQWEsR0FBYixVQUFjLFFBQWtCLElBQVMsQ0FBQztRQUMxQyxvQ0FBYyxHQUFkLFVBQWUsU0FBb0IsSUFBUyxDQUFDO1FBQzdDLHdDQUFrQixHQUFsQixVQUFtQixTQUF3QixJQUFTLENBQUM7UUFDckQseUNBQW1CLEdBQW5CLFVBQW9CLFNBQXlCLElBQVMsQ0FBQztRQUN2RCxxQ0FBZSxHQUFmLFVBQWdCLFNBQXFCLElBQVMsQ0FBQztRQUMvQywrQkFBUyxHQUFULFVBQVUsSUFBVSxJQUFTLENBQUM7UUFDOUIsb0NBQWMsR0FBZCxVQUFlLElBQWUsSUFBUyxDQUFDO1FBQ3hDLDhCQUFRLEdBQVIsVUFBUyxHQUFRLElBQVMsQ0FBQztRQUM3QixrQkFBQztJQUFELENBQUMsQUFaRCxJQVlDO0lBWlksa0NBQVc7SUFjeEI7UUFBQTtRQXFCQSxDQUFDO1FBcEJDLHVDQUFZLEdBQVosVUFBYSxPQUFnQjtZQUMzQixRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0Qsd0NBQWEsR0FBYixVQUFjLFFBQWtCO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCx1Q0FBWSxHQUFaLFVBQWEsT0FBZ0IsSUFBUyxDQUFDO1FBQ3ZDLHdDQUFhLEdBQWIsVUFBYyxRQUFrQixJQUFTLENBQUM7UUFDMUMseUNBQWMsR0FBZCxVQUFlLFNBQW9CLElBQVMsQ0FBQztRQUM3Qyw2Q0FBa0IsR0FBbEIsVUFBbUIsU0FBd0IsSUFBUyxDQUFDO1FBQ3JELDhDQUFtQixHQUFuQixVQUFvQixTQUF5QixJQUFTLENBQUM7UUFDdkQsMENBQWUsR0FBZixVQUFnQixTQUFxQixJQUFTLENBQUM7UUFDL0Msb0NBQVMsR0FBVCxVQUFVLElBQVUsSUFBUyxDQUFDO1FBQzlCLHlDQUFjLEdBQWQsVUFBZSxJQUFlLElBQVMsQ0FBQztRQUN4QyxtQ0FBUSxHQUFSLFVBQVMsR0FBUSxJQUFTLENBQUM7UUFDN0IsdUJBQUM7SUFBRCxDQUFDLEFBckJELElBcUJDO0lBckJZLDRDQUFnQjtJQXVCN0I7UUFBQTtRQWlFQSxDQUFDO1FBaEVDLHVDQUFZLEdBQVosVUFBYSxPQUFnQjtZQUMzQixJQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3RCxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxJQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3RCxJQUFJLGFBQWEsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTTtnQkFDbEUsVUFBVSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRO2dCQUNoRSxhQUFhLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FDZCxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQzlFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDekU7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsd0NBQWEsR0FBYixVQUFjLFFBQWtCO1lBQzlCLElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlELElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELElBQU0sZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEUsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsSUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUQsSUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUQsSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDLE1BQU07Z0JBQ3BFLFVBQVUsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLGdCQUFnQixJQUFJLFFBQVEsQ0FBQyxhQUFhO2dCQUM1RSxXQUFXLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLFVBQVU7Z0JBQ3hFLFlBQVksSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO2dCQUN0QyxPQUFPLElBQUksUUFBUSxDQUNmLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUNyRixhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGVBQWUsRUFDMUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUVELHVDQUFZLEdBQVosVUFBYSxPQUFnQjtZQUMzQixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsd0NBQWEsR0FBYixVQUFjLFFBQWtCO1lBQzlCLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFDRCx5Q0FBYyxHQUFkLFVBQWUsU0FBb0I7WUFDakMsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNELDZDQUFrQixHQUFsQixVQUFtQixTQUF3QjtZQUN6QyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsOENBQW1CLEdBQW5CLFVBQW9CLFNBQXlCO1lBQzNDLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCwwQ0FBZSxHQUFmLFVBQWdCLFNBQXFCO1lBQ25DLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxvQ0FBUyxHQUFULFVBQVUsSUFBVTtZQUNsQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCx5Q0FBYyxHQUFkLFVBQWUsSUFBZTtZQUM1QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxtQ0FBUSxHQUFSLFVBQVMsR0FBUTtZQUNmLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FBQyxBQWpFRCxJQWlFQztJQWpFWSw0Q0FBZ0I7SUFtRTdCLFNBQWdCLFFBQVEsQ0FBUyxPQUF3QixFQUFFLEtBQWE7O1FBQ3RFLElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7O2dCQUNqQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUFyQixJQUFNLElBQUksa0JBQUE7b0JBQ2IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM1RDs7Ozs7Ozs7O1NBQ0Y7YUFBTTs7Z0JBQ0wsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtvQkFBckIsSUFBTSxJQUFJLGtCQUFBO29CQUNiLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxFQUFFO3dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFmRCw0QkFlQztJQUVELFNBQWdCLFlBQVksQ0FDeEIsT0FBc0IsRUFBRSxLQUFlOztRQUN6QyxJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDOztZQUNwQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFyQixJQUFNLElBQUksa0JBQUE7Z0JBQ2IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFpQixDQUFDLENBQUM7aUJBQ2hDO2dCQUNELE9BQU8sR0FBRyxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQzthQUN0Qzs7Ozs7Ozs7O1FBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFaRCxvQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtBU1QsIEJpbmRpbmdUeXBlLCBCb3VuZEVsZW1lbnRQcm9wZXJ0eSwgUGFyc2VkRXZlbnQsIFBhcnNlZEV2ZW50VHlwZX0gZnJvbSAnLi4vZXhwcmVzc2lvbl9wYXJzZXIvYXN0JztcbmltcG9ydCB7STE4bk1ldGF9IGZyb20gJy4uL2kxOG4vaTE4bl9hc3QnO1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0PFJlc3VsdD4odmlzaXRvcjogVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQ8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogQVNULCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgaTE4bj86IEkxOG5NZXRhKSB7fVxuICB2aXNpdDxSZXN1bHQ+KHZpc2l0b3I6IFZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCb3VuZFRleHQodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRBdHRyaWJ1dGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBpMThuPzogSTE4bk1ldGEpIHt9XG4gIHZpc2l0PFJlc3VsdD4odmlzaXRvcjogVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHRBdHRyaWJ1dGUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kQXR0cmlidXRlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHR5cGU6IEJpbmRpbmdUeXBlLCBwdWJsaWMgc2VjdXJpdHlDb250ZXh0OiBTZWN1cml0eUNvbnRleHQsXG4gICAgICBwdWJsaWMgdmFsdWU6IEFTVCwgcHVibGljIHVuaXQ6IHN0cmluZ3xudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3BhbiwgcHVibGljIGkxOG4/OiBJMThuTWV0YSkge31cblxuICBzdGF0aWMgZnJvbUJvdW5kRWxlbWVudFByb3BlcnR5KHByb3A6IEJvdW5kRWxlbWVudFByb3BlcnR5LCBpMThuPzogSTE4bk1ldGEpIHtcbiAgICByZXR1cm4gbmV3IEJvdW5kQXR0cmlidXRlKFxuICAgICAgICBwcm9wLm5hbWUsIHByb3AudHlwZSwgcHJvcC5zZWN1cml0eUNvbnRleHQsIHByb3AudmFsdWUsIHByb3AudW5pdCwgcHJvcC5zb3VyY2VTcGFuLFxuICAgICAgICBwcm9wLnZhbHVlU3BhbiwgaTE4bik7XG4gIH1cblxuICB2aXNpdDxSZXN1bHQ+KHZpc2l0b3I6IFZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCb3VuZEF0dHJpYnV0ZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRFdmVudCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBQYXJzZWRFdmVudFR5cGUsIHB1YmxpYyBoYW5kbGVyOiBBU1QsXG4gICAgICBwdWJsaWMgdGFyZ2V0OiBzdHJpbmd8bnVsbCwgcHVibGljIHBoYXNlOiBzdHJpbmd8bnVsbCwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyBoYW5kbGVyU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHN0YXRpYyBmcm9tUGFyc2VkRXZlbnQoZXZlbnQ6IFBhcnNlZEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0OiBzdHJpbmd8bnVsbCA9IGV2ZW50LnR5cGUgPT09IFBhcnNlZEV2ZW50VHlwZS5SZWd1bGFyID8gZXZlbnQudGFyZ2V0T3JQaGFzZSA6IG51bGw7XG4gICAgY29uc3QgcGhhc2U6IHN0cmluZ3xudWxsID1cbiAgICAgICAgZXZlbnQudHlwZSA9PT0gUGFyc2VkRXZlbnRUeXBlLkFuaW1hdGlvbiA/IGV2ZW50LnRhcmdldE9yUGhhc2UgOiBudWxsO1xuICAgIHJldHVybiBuZXcgQm91bmRFdmVudChcbiAgICAgICAgZXZlbnQubmFtZSwgZXZlbnQudHlwZSwgZXZlbnQuaGFuZGxlciwgdGFyZ2V0LCBwaGFzZSwgZXZlbnQuc291cmNlU3BhbiwgZXZlbnQuaGFuZGxlclNwYW4pO1xuICB9XG5cbiAgdmlzaXQ8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Qm91bmRFdmVudCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyaWJ1dGVzOiBUZXh0QXR0cmlidXRlW10sIHB1YmxpYyBpbnB1dHM6IEJvdW5kQXR0cmlidXRlW10sXG4gICAgICBwdWJsaWMgb3V0cHV0czogQm91bmRFdmVudFtdLCBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSwgcHVibGljIHJlZmVyZW5jZXM6IFJlZmVyZW5jZVtdLFxuICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwsXG4gICAgICBwdWJsaWMgZW5kU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwsIHB1YmxpYyBpMThuPzogSTE4bk1ldGEpIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBlbXB0eSB0aGVuIHRoZSBzb3VyY2Ugc3BhbiBzaG91bGQgaW5jbHVkZSBhbnkgY2xvc2luZyB0YWdcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmIHN0YXJ0U291cmNlU3BhbiAmJiBlbmRTb3VyY2VTcGFuKSB7XG4gICAgICB0aGlzLnNvdXJjZVNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHNvdXJjZVNwYW4uc3RhcnQsIGVuZFNvdXJjZVNwYW4uZW5kKTtcbiAgICB9XG4gIH1cbiAgdmlzaXQ8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RWxlbWVudCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdGFnTmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cmlidXRlczogVGV4dEF0dHJpYnV0ZVtdLCBwdWJsaWMgaW5wdXRzOiBCb3VuZEF0dHJpYnV0ZVtdLFxuICAgICAgcHVibGljIG91dHB1dHM6IEJvdW5kRXZlbnRbXSwgcHVibGljIHRlbXBsYXRlQXR0cnM6IChCb3VuZEF0dHJpYnV0ZXxUZXh0QXR0cmlidXRlKVtdLFxuICAgICAgcHVibGljIGNoaWxkcmVuOiBOb2RlW10sIHB1YmxpYyByZWZlcmVuY2VzOiBSZWZlcmVuY2VbXSwgcHVibGljIHZhcmlhYmxlczogVmFyaWFibGVbXSxcbiAgICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBzdGFydFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsLFxuICAgICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsLCBwdWJsaWMgaTE4bj86IEkxOG5NZXRhKSB7fVxuICB2aXNpdDxSZXN1bHQ+KHZpc2l0b3I6IFZpc2l0b3I8UmVzdWx0Pik6IFJlc3VsdCB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZW1wbGF0ZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGVudCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzZWxlY3Rvcjogc3RyaW5nLCBwdWJsaWMgYXR0cmlidXRlczogVGV4dEF0dHJpYnV0ZVtdLFxuICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIGkxOG4/OiBJMThuTWV0YSkge31cbiAgdmlzaXQ8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGVudCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0PFJlc3VsdD4odmlzaXRvcjogVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFZhcmlhYmxlKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2UgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0PFJlc3VsdD4odmlzaXRvcjogVmlzaXRvcjxSZXN1bHQ+KTogUmVzdWx0IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFJlZmVyZW5jZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWN1IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHZhcnM6IHtbbmFtZTogc3RyaW5nXTogQm91bmRUZXh0fSxcbiAgICAgIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbbmFtZTogc3RyaW5nXTogVGV4dHxCb3VuZFRleHR9LCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIGkxOG4/OiBJMThuTWV0YSkge31cbiAgdmlzaXQ8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4pOiBSZXN1bHQge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaXRvcjxSZXN1bHQgPSBhbnk+IHtcbiAgLy8gUmV0dXJuaW5nIGEgdHJ1dGh5IHZhbHVlIGZyb20gYHZpc2l0KClgIHdpbGwgcHJldmVudCBgdmlzaXRBbGwoKWAgZnJvbSB0aGUgY2FsbCB0byB0aGUgdHlwZWRcbiAgLy8gbWV0aG9kIGFuZCByZXN1bHQgcmV0dXJuZWQgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBpbmNsdWRlZCBpbiBgdmlzaXRBbGwoKWBzIHJlc3VsdCBhcnJheS5cbiAgdmlzaXQ/KG5vZGU6IE5vZGUpOiBSZXN1bHQ7XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBSZXN1bHQ7XG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKTogUmVzdWx0O1xuICB2aXNpdENvbnRlbnQoY29udGVudDogQ29udGVudCk6IFJlc3VsdDtcbiAgdmlzaXRWYXJpYWJsZSh2YXJpYWJsZTogVmFyaWFibGUpOiBSZXN1bHQ7XG4gIHZpc2l0UmVmZXJlbmNlKHJlZmVyZW5jZTogUmVmZXJlbmNlKTogUmVzdWx0O1xuICB2aXNpdFRleHRBdHRyaWJ1dGUoYXR0cmlidXRlOiBUZXh0QXR0cmlidXRlKTogUmVzdWx0O1xuICB2aXNpdEJvdW5kQXR0cmlidXRlKGF0dHJpYnV0ZTogQm91bmRBdHRyaWJ1dGUpOiBSZXN1bHQ7XG4gIHZpc2l0Qm91bmRFdmVudChhdHRyaWJ1dGU6IEJvdW5kRXZlbnQpOiBSZXN1bHQ7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogUmVzdWx0O1xuICB2aXNpdEJvdW5kVGV4dCh0ZXh0OiBCb3VuZFRleHQpOiBSZXN1bHQ7XG4gIHZpc2l0SWN1KGljdTogSWN1KTogUmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgTnVsbFZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yPHZvaWQ+IHtcbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHt9XG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKTogdm9pZCB7fVxuICB2aXNpdENvbnRlbnQoY29udGVudDogQ29udGVudCk6IHZvaWQge31cbiAgdmlzaXRWYXJpYWJsZSh2YXJpYWJsZTogVmFyaWFibGUpOiB2b2lkIHt9XG4gIHZpc2l0UmVmZXJlbmNlKHJlZmVyZW5jZTogUmVmZXJlbmNlKTogdm9pZCB7fVxuICB2aXNpdFRleHRBdHRyaWJ1dGUoYXR0cmlidXRlOiBUZXh0QXR0cmlidXRlKTogdm9pZCB7fVxuICB2aXNpdEJvdW5kQXR0cmlidXRlKGF0dHJpYnV0ZTogQm91bmRBdHRyaWJ1dGUpOiB2b2lkIHt9XG4gIHZpc2l0Qm91bmRFdmVudChhdHRyaWJ1dGU6IEJvdW5kRXZlbnQpOiB2b2lkIHt9XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogdm9pZCB7fVxuICB2aXNpdEJvdW5kVGV4dCh0ZXh0OiBCb3VuZFRleHQpOiB2b2lkIHt9XG4gIHZpc2l0SWN1KGljdTogSWN1KTogdm9pZCB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdXJzaXZlVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3I8dm9pZD4ge1xuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IHZvaWQge1xuICAgIHZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgdmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbik7XG4gICAgdmlzaXRBbGwodGhpcywgZWxlbWVudC5yZWZlcmVuY2VzKTtcbiAgfVxuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSk6IHZvaWQge1xuICAgIHZpc2l0QWxsKHRoaXMsIHRlbXBsYXRlLmF0dHJpYnV0ZXMpO1xuICAgIHZpc2l0QWxsKHRoaXMsIHRlbXBsYXRlLmNoaWxkcmVuKTtcbiAgICB2aXNpdEFsbCh0aGlzLCB0ZW1wbGF0ZS5yZWZlcmVuY2VzKTtcbiAgICB2aXNpdEFsbCh0aGlzLCB0ZW1wbGF0ZS52YXJpYWJsZXMpO1xuICB9XG4gIHZpc2l0Q29udGVudChjb250ZW50OiBDb250ZW50KTogdm9pZCB7fVxuICB2aXNpdFZhcmlhYmxlKHZhcmlhYmxlOiBWYXJpYWJsZSk6IHZvaWQge31cbiAgdmlzaXRSZWZlcmVuY2UocmVmZXJlbmNlOiBSZWZlcmVuY2UpOiB2b2lkIHt9XG4gIHZpc2l0VGV4dEF0dHJpYnV0ZShhdHRyaWJ1dGU6IFRleHRBdHRyaWJ1dGUpOiB2b2lkIHt9XG4gIHZpc2l0Qm91bmRBdHRyaWJ1dGUoYXR0cmlidXRlOiBCb3VuZEF0dHJpYnV0ZSk6IHZvaWQge31cbiAgdmlzaXRCb3VuZEV2ZW50KGF0dHJpYnV0ZTogQm91bmRFdmVudCk6IHZvaWQge31cbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQpOiB2b2lkIHt9XG4gIHZpc2l0Qm91bmRUZXh0KHRleHQ6IEJvdW5kVGV4dCk6IHZvaWQge31cbiAgdmlzaXRJY3UoaWN1OiBJY3UpOiB2b2lkIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm1WaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvcjxOb2RlPiB7XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHRyYW5zZm9ybUFsbCh0aGlzLCBlbGVtZW50LmF0dHJpYnV0ZXMpO1xuICAgIGNvbnN0IG5ld0lucHV0cyA9IHRyYW5zZm9ybUFsbCh0aGlzLCBlbGVtZW50LmlucHV0cyk7XG4gICAgY29uc3QgbmV3T3V0cHV0cyA9IHRyYW5zZm9ybUFsbCh0aGlzLCBlbGVtZW50Lm91dHB1dHMpO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gdHJhbnNmb3JtQWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGNvbnN0IG5ld1JlZmVyZW5jZXMgPSB0cmFuc2Zvcm1BbGwodGhpcywgZWxlbWVudC5yZWZlcmVuY2VzKTtcbiAgICBpZiAobmV3QXR0cmlidXRlcyAhPSBlbGVtZW50LmF0dHJpYnV0ZXMgfHwgbmV3SW5wdXRzICE9IGVsZW1lbnQuaW5wdXRzIHx8XG4gICAgICAgIG5ld091dHB1dHMgIT0gZWxlbWVudC5vdXRwdXRzIHx8IG5ld0NoaWxkcmVuICE9IGVsZW1lbnQuY2hpbGRyZW4gfHxcbiAgICAgICAgbmV3UmVmZXJlbmNlcyAhPSBlbGVtZW50LnJlZmVyZW5jZXMpIHtcbiAgICAgIHJldHVybiBuZXcgRWxlbWVudChcbiAgICAgICAgICBlbGVtZW50Lm5hbWUsIG5ld0F0dHJpYnV0ZXMsIG5ld0lucHV0cywgbmV3T3V0cHV0cywgbmV3Q2hpbGRyZW4sIG5ld1JlZmVyZW5jZXMsXG4gICAgICAgICAgZWxlbWVudC5zb3VyY2VTcGFuLCBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiwgZWxlbWVudC5lbmRTb3VyY2VTcGFuKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSk6IE5vZGUge1xuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB0cmFuc2Zvcm1BbGwodGhpcywgdGVtcGxhdGUuYXR0cmlidXRlcyk7XG4gICAgY29uc3QgbmV3SW5wdXRzID0gdHJhbnNmb3JtQWxsKHRoaXMsIHRlbXBsYXRlLmlucHV0cyk7XG4gICAgY29uc3QgbmV3T3V0cHV0cyA9IHRyYW5zZm9ybUFsbCh0aGlzLCB0ZW1wbGF0ZS5vdXRwdXRzKTtcbiAgICBjb25zdCBuZXdUZW1wbGF0ZUF0dHJzID0gdHJhbnNmb3JtQWxsKHRoaXMsIHRlbXBsYXRlLnRlbXBsYXRlQXR0cnMpO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gdHJhbnNmb3JtQWxsKHRoaXMsIHRlbXBsYXRlLmNoaWxkcmVuKTtcbiAgICBjb25zdCBuZXdSZWZlcmVuY2VzID0gdHJhbnNmb3JtQWxsKHRoaXMsIHRlbXBsYXRlLnJlZmVyZW5jZXMpO1xuICAgIGNvbnN0IG5ld1ZhcmlhYmxlcyA9IHRyYW5zZm9ybUFsbCh0aGlzLCB0ZW1wbGF0ZS52YXJpYWJsZXMpO1xuICAgIGlmIChuZXdBdHRyaWJ1dGVzICE9IHRlbXBsYXRlLmF0dHJpYnV0ZXMgfHwgbmV3SW5wdXRzICE9IHRlbXBsYXRlLmlucHV0cyB8fFxuICAgICAgICBuZXdPdXRwdXRzICE9IHRlbXBsYXRlLm91dHB1dHMgfHwgbmV3VGVtcGxhdGVBdHRycyAhPSB0ZW1wbGF0ZS50ZW1wbGF0ZUF0dHJzIHx8XG4gICAgICAgIG5ld0NoaWxkcmVuICE9IHRlbXBsYXRlLmNoaWxkcmVuIHx8IG5ld1JlZmVyZW5jZXMgIT0gdGVtcGxhdGUucmVmZXJlbmNlcyB8fFxuICAgICAgICBuZXdWYXJpYWJsZXMgIT0gdGVtcGxhdGUudmFyaWFibGVzKSB7XG4gICAgICByZXR1cm4gbmV3IFRlbXBsYXRlKFxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUsIG5ld0F0dHJpYnV0ZXMsIG5ld0lucHV0cywgbmV3T3V0cHV0cywgbmV3VGVtcGxhdGVBdHRycywgbmV3Q2hpbGRyZW4sXG4gICAgICAgICAgbmV3UmVmZXJlbmNlcywgbmV3VmFyaWFibGVzLCB0ZW1wbGF0ZS5zb3VyY2VTcGFuLCB0ZW1wbGF0ZS5zdGFydFNvdXJjZVNwYW4sXG4gICAgICAgICAgdGVtcGxhdGUuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHZpc2l0Q29udGVudChjb250ZW50OiBDb250ZW50KTogTm9kZSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlKHZhcmlhYmxlOiBWYXJpYWJsZSk6IE5vZGUge1xuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuICB2aXNpdFJlZmVyZW5jZShyZWZlcmVuY2U6IFJlZmVyZW5jZSk6IE5vZGUge1xuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbiAgdmlzaXRUZXh0QXR0cmlidXRlKGF0dHJpYnV0ZTogVGV4dEF0dHJpYnV0ZSk6IE5vZGUge1xuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH1cbiAgdmlzaXRCb3VuZEF0dHJpYnV0ZShhdHRyaWJ1dGU6IEJvdW5kQXR0cmlidXRlKTogTm9kZSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgfVxuICB2aXNpdEJvdW5kRXZlbnQoYXR0cmlidXRlOiBCb3VuZEV2ZW50KTogTm9kZSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgfVxuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IE5vZGUge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG4gIHZpc2l0Qm91bmRUZXh0KHRleHQ6IEJvdW5kVGV4dCk6IE5vZGUge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG4gIHZpc2l0SWN1KGljdTogSWN1KTogTm9kZSB7XG4gICAgcmV0dXJuIGljdTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRBbGw8UmVzdWx0Pih2aXNpdG9yOiBWaXNpdG9yPFJlc3VsdD4sIG5vZGVzOiBOb2RlW10pOiBSZXN1bHRbXSB7XG4gIGNvbnN0IHJlc3VsdDogUmVzdWx0W10gPSBbXTtcbiAgaWYgKHZpc2l0b3IudmlzaXQpIHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgIGNvbnN0IG5ld05vZGUgPSB2aXNpdG9yLnZpc2l0KG5vZGUpIHx8IG5vZGUudmlzaXQodmlzaXRvcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUudmlzaXQodmlzaXRvcik7XG4gICAgICBpZiAobmV3Tm9kZSkge1xuICAgICAgICByZXN1bHQucHVzaChuZXdOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFsbDxSZXN1bHQgZXh0ZW5kcyBOb2RlPihcbiAgICB2aXNpdG9yOiBWaXNpdG9yPE5vZGU+LCBub2RlczogUmVzdWx0W10pOiBSZXN1bHRbXSB7XG4gIGNvbnN0IHJlc3VsdDogUmVzdWx0W10gPSBbXTtcbiAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUudmlzaXQodmlzaXRvcik7XG4gICAgaWYgKG5ld05vZGUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5ld05vZGUgYXMgUmVzdWx0KTtcbiAgICB9XG4gICAgY2hhbmdlZCA9IGNoYW5nZWQgfHwgbmV3Tm9kZSAhPSBub2RlO1xuICB9XG4gIHJldHVybiBjaGFuZ2VkID8gcmVzdWx0IDogbm9kZXM7XG59XG4iXX0=