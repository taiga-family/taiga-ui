import { HostTree } from './host-tree';
import { FilePredicate, MergeStrategy, Tree } from './interface';
export declare function empty(): HostTree;
export declare function branch(tree: Tree): Tree;
export declare function merge(tree: Tree, other: Tree, strategy?: MergeStrategy): Tree;
export declare function partition(tree: Tree, predicate: FilePredicate<boolean>): [Tree, Tree];
