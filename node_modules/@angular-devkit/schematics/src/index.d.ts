/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FilePredicate, MergeStrategy, Tree as TreeInterface } from './tree/interface';
export { SchematicsException } from './exception/exception';
export * from './tree/action';
export * from './engine/index';
export * from './exception/exception';
export * from './tree/interface';
export * from './rules/base';
export * from './rules/call';
export * from './rules/move';
export * from './rules/random';
export * from './rules/schematic';
export * from './rules/template';
export * from './rules/url';
export * from './tree/delegate';
export * from './tree/empty';
export * from './tree/host-tree';
export { UpdateRecorder } from './tree/interface';
export * from './engine/schematic';
export * from './sink/dryrun';
export * from './sink/host';
export * from './sink/sink';
import * as formats from './formats/index';
export { formats };
import * as workflow from './workflow/index';
export { workflow };
export interface TreeConstructor {
    empty(): TreeInterface;
    branch(tree: TreeInterface): TreeInterface;
    merge(tree: TreeInterface, other: TreeInterface, strategy?: MergeStrategy): TreeInterface;
    partition(tree: TreeInterface, predicate: FilePredicate<boolean>): [TreeInterface, TreeInterface];
    optimize(tree: TreeInterface): TreeInterface;
}
export declare type Tree = TreeInterface;
export declare const Tree: TreeConstructor;
