import * as ts from 'typescript';
export declare function collectDeepNodes<T extends ts.Node>(node: ts.Node, kind: ts.SyntaxKind): T[];
export declare function addPureComment<T extends ts.Node>(node: T): T;
export declare function hasPureComment(node: ts.Node): boolean;
export declare function isHelperName(name: string): boolean;
/**
 * In FESM's when not using `importHelpers` there might be multiple in the same file.
  @example
  ```
  var __decorate$1 = '';
  var __decorate$2 = '';
  ```
 * @returns Helper name without the '$' and number suffix or `undefined` if it's not a helper.
 */
export declare function getCleanHelperName(name: string): string | undefined;
