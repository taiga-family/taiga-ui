import { Tree } from '@angular-devkit/schematics';
import * as ts from '../third_party/github.com/Microsoft/TypeScript/lib/typescript';
export declare function findBootstrapModuleCall(host: Tree, mainPath: string): ts.CallExpression | null;
export declare function findBootstrapModulePath(host: Tree, mainPath: string): string;
export declare function getAppModulePath(host: Tree, mainPath: string): string;
