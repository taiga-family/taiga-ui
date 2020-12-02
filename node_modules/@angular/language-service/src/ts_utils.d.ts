/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/ts_utils" />
import * as ts from 'typescript/lib/tsserverlibrary';
/**
 * Return the node that most tightly encompass the specified `position`.
 * @param node
 * @param position
 */
export declare function findTightestNode(node: ts.Node, position: number): ts.Node | undefined;
/**
 * Returns a property assignment from the assignment value if the property name
 * matches the specified `key`, or `undefined` if there is no match.
 */
export declare function getPropertyAssignmentFromValue(value: ts.Node, key: string): ts.PropertyAssignment | undefined;
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
export declare function getClassDeclFromDecoratorProp(propAsgnNode: ts.PropertyAssignment): ts.ClassDeclaration | undefined;
interface DirectiveClassLike {
    decoratorId: ts.Identifier;
    classId: ts.Identifier;
}
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
export declare function getDirectiveClassLike(node: ts.Node): DirectiveClassLike | undefined;
/**
 * Finds the value of a property assignment that is nested in a TypeScript node and is of a certain
 * type T.
 *
 * @param startNode node to start searching for nested property assignment from
 * @param propName property assignment name
 * @param predicate function to verify that a node is of type T.
 * @return node property assignment value of type T, or undefined if none is found
 */
export declare function findPropertyValueOfType<T extends ts.Node>(startNode: ts.Node, propName: string, predicate: (node: ts.Node) => node is T): T | undefined;
export {};
