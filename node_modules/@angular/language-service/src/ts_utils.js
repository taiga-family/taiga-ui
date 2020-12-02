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
        define("@angular/language-service/src/ts_utils", ["require", "exports", "tslib", "typescript/lib/tsserverlibrary"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript/lib/tsserverlibrary");
    /**
     * Return the node that most tightly encompass the specified `position`.
     * @param node
     * @param position
     */
    function findTightestNode(node, position) {
        if (node.getStart() <= position && position < node.getEnd()) {
            return node.forEachChild(function (c) { return findTightestNode(c, position); }) || node;
        }
    }
    exports.findTightestNode = findTightestNode;
    /**
     * Returns a property assignment from the assignment value if the property name
     * matches the specified `key`, or `undefined` if there is no match.
     */
    function getPropertyAssignmentFromValue(value, key) {
        var propAssignment = value.parent;
        if (!propAssignment || !ts.isPropertyAssignment(propAssignment) ||
            propAssignment.name.getText() !== key) {
            return;
        }
        return propAssignment;
    }
    exports.getPropertyAssignmentFromValue = getPropertyAssignmentFromValue;
    /**
     * Given a decorator property assignment, return the ClassDeclaration node that corresponds to the
     * directive class the property applies to.
     * If the property assignment is not on a class decorator, no declaration is returned.
     *
     * For example,
     *
     * @Component({
     *   template: '<div></div>'
     *   ^^^^^^^^^^^^^^^^^^^^^^^---- property assignment
     * })
     * class AppComponent {}
     *           ^---- class declaration node
     *
     * @param propAsgn property assignment
     */
    function getClassDeclFromDecoratorProp(propAsgnNode) {
        if (!propAsgnNode.parent || !ts.isObjectLiteralExpression(propAsgnNode.parent)) {
            return;
        }
        var objLitExprNode = propAsgnNode.parent;
        if (!objLitExprNode.parent || !ts.isCallExpression(objLitExprNode.parent)) {
            return;
        }
        var callExprNode = objLitExprNode.parent;
        if (!callExprNode.parent || !ts.isDecorator(callExprNode.parent)) {
            return;
        }
        var decorator = callExprNode.parent;
        if (!decorator.parent || !ts.isClassDeclaration(decorator.parent)) {
            return;
        }
        var classDeclNode = decorator.parent;
        return classDeclNode;
    }
    exports.getClassDeclFromDecoratorProp = getClassDeclFromDecoratorProp;
    /**
     * Return metadata about `node` if it looks like an Angular directive class.
     * In this case, potential matches are `@NgModule`, `@Component`, `@Directive`,
     * `@Pipe`, etc.
     * These class declarations all share some common attributes, namely their
     * decorator takes exactly one parameter and the parameter must be an object
     * literal.
     *
     * For example,
     *     v---------- `decoratorId`
     * @NgModule({           <
     *   declarations: [],   < classDecl
     * })                    <
     * class AppModule {}    <
     *          ^----- `classId`
     *
     * @param node Potential node that represents an Angular directive.
     */
    function getDirectiveClassLike(node) {
        var e_1, _a;
        if (!ts.isClassDeclaration(node) || !node.name || !node.decorators) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(node.decorators), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                var expr = d.expression;
                if (!ts.isCallExpression(expr) || expr.arguments.length !== 1 ||
                    !ts.isIdentifier(expr.expression)) {
                    continue;
                }
                var arg = expr.arguments[0];
                if (ts.isObjectLiteralExpression(arg)) {
                    return {
                        decoratorId: expr.expression,
                        classId: node.name,
                    };
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    exports.getDirectiveClassLike = getDirectiveClassLike;
    /**
     * Finds the value of a property assignment that is nested in a TypeScript node and is of a certain
     * type T.
     *
     * @param startNode node to start searching for nested property assignment from
     * @param propName property assignment name
     * @param predicate function to verify that a node is of type T.
     * @return node property assignment value of type T, or undefined if none is found
     */
    function findPropertyValueOfType(startNode, propName, predicate) {
        if (ts.isPropertyAssignment(startNode) && startNode.name.getText() === propName) {
            var initializer = startNode.initializer;
            if (predicate(initializer))
                return initializer;
        }
        return startNode.forEachChild(function (c) { return findPropertyValueOfType(c, propName, predicate); });
    }
    exports.findPropertyValueOfType = findPropertyValueOfType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy90c191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCxtREFBcUQ7SUFFckQ7Ozs7T0FJRztJQUNILFNBQWdCLGdCQUFnQixDQUFDLElBQWEsRUFBRSxRQUFnQjtRQUM5RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQTdCLENBQTZCLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBSkQsNENBSUM7SUFFRDs7O09BR0c7SUFDSCxTQUFnQiw4QkFBOEIsQ0FBQyxLQUFjLEVBQUUsR0FBVztRQUV4RSxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDO1lBQzNELGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxFQUFFO1lBQ3pDLE9BQU87U0FDUjtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFSRCx3RUFRQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNILFNBQWdCLDZCQUE2QixDQUFDLFlBQW1DO1FBRS9FLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5RSxPQUFPO1NBQ1I7UUFDRCxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6RSxPQUFPO1NBQ1I7UUFDRCxJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEUsT0FBTztTQUNSO1FBQ0QsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakUsT0FBTztTQUNSO1FBQ0QsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBbkJELHNFQW1CQztJQU9EOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNILFNBQWdCLHFCQUFxQixDQUFDLElBQWE7O1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsRSxPQUFPO1NBQ1I7O1lBQ0QsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTVCLElBQU0sQ0FBQyxXQUFBO2dCQUNWLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDekQsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDckMsU0FBUztpQkFDVjtnQkFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDckMsT0FBTzt3QkFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDbkIsQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBbEJELHNEQWtCQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsU0FBZ0IsdUJBQXVCLENBQ25DLFNBQWtCLEVBQUUsUUFBZ0IsRUFBRSxTQUF1QztRQUMvRSxJQUFJLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUN4RSxJQUFBLG1DQUFXLENBQWM7WUFDaEMsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDO2dCQUFFLE9BQU8sV0FBVyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFQRCwwREFPQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdC9saWIvdHNzZXJ2ZXJsaWJyYXJ5JztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG5vZGUgdGhhdCBtb3N0IHRpZ2h0bHkgZW5jb21wYXNzIHRoZSBzcGVjaWZpZWQgYHBvc2l0aW9uYC5cbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gcG9zaXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUaWdodGVzdE5vZGUobm9kZTogdHMuTm9kZSwgcG9zaXRpb246IG51bWJlcik6IHRzLk5vZGV8dW5kZWZpbmVkIHtcbiAgaWYgKG5vZGUuZ2V0U3RhcnQoKSA8PSBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8IG5vZGUuZ2V0RW5kKCkpIHtcbiAgICByZXR1cm4gbm9kZS5mb3JFYWNoQ2hpbGQoYyA9PiBmaW5kVGlnaHRlc3ROb2RlKGMsIHBvc2l0aW9uKSkgfHwgbm9kZTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBwcm9wZXJ0eSBhc3NpZ25tZW50IGZyb20gdGhlIGFzc2lnbm1lbnQgdmFsdWUgaWYgdGhlIHByb3BlcnR5IG5hbWVcbiAqIG1hdGNoZXMgdGhlIHNwZWNpZmllZCBga2V5YCwgb3IgYHVuZGVmaW5lZGAgaWYgdGhlcmUgaXMgbm8gbWF0Y2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUFzc2lnbm1lbnRGcm9tVmFsdWUodmFsdWU6IHRzLk5vZGUsIGtleTogc3RyaW5nKTogdHMuUHJvcGVydHlBc3NpZ25tZW50fFxuICAgIHVuZGVmaW5lZCB7XG4gIGNvbnN0IHByb3BBc3NpZ25tZW50ID0gdmFsdWUucGFyZW50O1xuICBpZiAoIXByb3BBc3NpZ25tZW50IHx8ICF0cy5pc1Byb3BlcnR5QXNzaWdubWVudChwcm9wQXNzaWdubWVudCkgfHxcbiAgICAgIHByb3BBc3NpZ25tZW50Lm5hbWUuZ2V0VGV4dCgpICE9PSBrZXkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIHByb3BBc3NpZ25tZW50O1xufVxuXG4vKipcbiAqIEdpdmVuIGEgZGVjb3JhdG9yIHByb3BlcnR5IGFzc2lnbm1lbnQsIHJldHVybiB0aGUgQ2xhc3NEZWNsYXJhdGlvbiBub2RlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlXG4gKiBkaXJlY3RpdmUgY2xhc3MgdGhlIHByb3BlcnR5IGFwcGxpZXMgdG8uXG4gKiBJZiB0aGUgcHJvcGVydHkgYXNzaWdubWVudCBpcyBub3Qgb24gYSBjbGFzcyBkZWNvcmF0b3IsIG5vIGRlY2xhcmF0aW9uIGlzIHJldHVybmVkLlxuICpcbiAqIEZvciBleGFtcGxlLFxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xuICogICBeXl5eXl5eXl5eXl5eXl5eXl5eXl5eXi0tLS0gcHJvcGVydHkgYXNzaWdubWVudFxuICogfSlcbiAqIGNsYXNzIEFwcENvbXBvbmVudCB7fVxuICogICAgICAgICAgIF4tLS0tIGNsYXNzIGRlY2xhcmF0aW9uIG5vZGVcbiAqXG4gKiBAcGFyYW0gcHJvcEFzZ24gcHJvcGVydHkgYXNzaWdubWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NEZWNsRnJvbURlY29yYXRvclByb3AocHJvcEFzZ25Ob2RlOiB0cy5Qcm9wZXJ0eUFzc2lnbm1lbnQpOlxuICAgIHRzLkNsYXNzRGVjbGFyYXRpb258dW5kZWZpbmVkIHtcbiAgaWYgKCFwcm9wQXNnbk5vZGUucGFyZW50IHx8ICF0cy5pc09iamVjdExpdGVyYWxFeHByZXNzaW9uKHByb3BBc2duTm9kZS5wYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9iakxpdEV4cHJOb2RlID0gcHJvcEFzZ25Ob2RlLnBhcmVudDtcbiAgaWYgKCFvYmpMaXRFeHByTm9kZS5wYXJlbnQgfHwgIXRzLmlzQ2FsbEV4cHJlc3Npb24ob2JqTGl0RXhwck5vZGUucGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjYWxsRXhwck5vZGUgPSBvYmpMaXRFeHByTm9kZS5wYXJlbnQ7XG4gIGlmICghY2FsbEV4cHJOb2RlLnBhcmVudCB8fCAhdHMuaXNEZWNvcmF0b3IoY2FsbEV4cHJOb2RlLnBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGVjb3JhdG9yID0gY2FsbEV4cHJOb2RlLnBhcmVudDtcbiAgaWYgKCFkZWNvcmF0b3IucGFyZW50IHx8ICF0cy5pc0NsYXNzRGVjbGFyYXRpb24oZGVjb3JhdG9yLnBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY2xhc3NEZWNsTm9kZSA9IGRlY29yYXRvci5wYXJlbnQ7XG4gIHJldHVybiBjbGFzc0RlY2xOb2RlO1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0aXZlQ2xhc3NMaWtlIHtcbiAgZGVjb3JhdG9ySWQ6IHRzLklkZW50aWZpZXI7ICAvLyBkZWNvcmF0b3IgaWRlbnRpZmllciwgbGlrZSBAQ29tcG9uZW50XG4gIGNsYXNzSWQ6IHRzLklkZW50aWZpZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIG1ldGFkYXRhIGFib3V0IGBub2RlYCBpZiBpdCBsb29rcyBsaWtlIGFuIEFuZ3VsYXIgZGlyZWN0aXZlIGNsYXNzLlxuICogSW4gdGhpcyBjYXNlLCBwb3RlbnRpYWwgbWF0Y2hlcyBhcmUgYEBOZ01vZHVsZWAsIGBAQ29tcG9uZW50YCwgYEBEaXJlY3RpdmVgLFxuICogYEBQaXBlYCwgZXRjLlxuICogVGhlc2UgY2xhc3MgZGVjbGFyYXRpb25zIGFsbCBzaGFyZSBzb21lIGNvbW1vbiBhdHRyaWJ1dGVzLCBuYW1lbHkgdGhlaXJcbiAqIGRlY29yYXRvciB0YWtlcyBleGFjdGx5IG9uZSBwYXJhbWV0ZXIgYW5kIHRoZSBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBvYmplY3RcbiAqIGxpdGVyYWwuXG4gKlxuICogRm9yIGV4YW1wbGUsXG4gKiAgICAgdi0tLS0tLS0tLS0gYGRlY29yYXRvcklkYFxuICogQE5nTW9kdWxlKHsgICAgICAgICAgIDxcbiAqICAgZGVjbGFyYXRpb25zOiBbXSwgICA8IGNsYXNzRGVjbFxuICogfSkgICAgICAgICAgICAgICAgICAgIDxcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fSAgICA8XG4gKiAgICAgICAgICBeLS0tLS0gYGNsYXNzSWRgXG4gKlxuICogQHBhcmFtIG5vZGUgUG90ZW50aWFsIG5vZGUgdGhhdCByZXByZXNlbnRzIGFuIEFuZ3VsYXIgZGlyZWN0aXZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aXZlQ2xhc3NMaWtlKG5vZGU6IHRzLk5vZGUpOiBEaXJlY3RpdmVDbGFzc0xpa2V8dW5kZWZpbmVkIHtcbiAgaWYgKCF0cy5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkgfHwgIW5vZGUubmFtZSB8fCAhbm9kZS5kZWNvcmF0b3JzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgZCBvZiBub2RlLmRlY29yYXRvcnMpIHtcbiAgICBjb25zdCBleHByID0gZC5leHByZXNzaW9uO1xuICAgIGlmICghdHMuaXNDYWxsRXhwcmVzc2lvbihleHByKSB8fCBleHByLmFyZ3VtZW50cy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgIXRzLmlzSWRlbnRpZmllcihleHByLmV4cHJlc3Npb24pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgYXJnID0gZXhwci5hcmd1bWVudHNbMF07XG4gICAgaWYgKHRzLmlzT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oYXJnKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVjb3JhdG9ySWQ6IGV4cHIuZXhwcmVzc2lvbixcbiAgICAgICAgY2xhc3NJZDogbm9kZS5uYW1lLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBhc3NpZ25tZW50IHRoYXQgaXMgbmVzdGVkIGluIGEgVHlwZVNjcmlwdCBub2RlIGFuZCBpcyBvZiBhIGNlcnRhaW5cbiAqIHR5cGUgVC5cbiAqXG4gKiBAcGFyYW0gc3RhcnROb2RlIG5vZGUgdG8gc3RhcnQgc2VhcmNoaW5nIGZvciBuZXN0ZWQgcHJvcGVydHkgYXNzaWdubWVudCBmcm9tXG4gKiBAcGFyYW0gcHJvcE5hbWUgcHJvcGVydHkgYXNzaWdubWVudCBuYW1lXG4gKiBAcGFyYW0gcHJlZGljYXRlIGZ1bmN0aW9uIHRvIHZlcmlmeSB0aGF0IGEgbm9kZSBpcyBvZiB0eXBlIFQuXG4gKiBAcmV0dXJuIG5vZGUgcHJvcGVydHkgYXNzaWdubWVudCB2YWx1ZSBvZiB0eXBlIFQsIG9yIHVuZGVmaW5lZCBpZiBub25lIGlzIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvcGVydHlWYWx1ZU9mVHlwZTxUIGV4dGVuZHMgdHMuTm9kZT4oXG4gICAgc3RhcnROb2RlOiB0cy5Ob2RlLCBwcm9wTmFtZTogc3RyaW5nLCBwcmVkaWNhdGU6IChub2RlOiB0cy5Ob2RlKSA9PiBub2RlIGlzIFQpOiBUfHVuZGVmaW5lZCB7XG4gIGlmICh0cy5pc1Byb3BlcnR5QXNzaWdubWVudChzdGFydE5vZGUpICYmIHN0YXJ0Tm9kZS5uYW1lLmdldFRleHQoKSA9PT0gcHJvcE5hbWUpIHtcbiAgICBjb25zdCB7aW5pdGlhbGl6ZXJ9ID0gc3RhcnROb2RlO1xuICAgIGlmIChwcmVkaWNhdGUoaW5pdGlhbGl6ZXIpKSByZXR1cm4gaW5pdGlhbGl6ZXI7XG4gIH1cbiAgcmV0dXJuIHN0YXJ0Tm9kZS5mb3JFYWNoQ2hpbGQoYyA9PiBmaW5kUHJvcGVydHlWYWx1ZU9mVHlwZShjLCBwcm9wTmFtZSwgcHJlZGljYXRlKSk7XG59XG4iXX0=