/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgAddSaveDepedency } from './package-metadata';
export interface PackageTreeNodeBase {
    name: string;
    path: string;
    realpath: string;
    error?: Error;
    id: number;
    isLink: boolean;
    package: {
        name: string;
        version: string;
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
        peerDependencies?: Record<string, string>;
        optionalDependencies?: Record<string, string>;
        'ng-update'?: {
            migrations?: string;
        };
        'ng-add'?: {
            save?: NgAddSaveDepedency;
        };
    };
    parent?: PackageTreeNode;
    children: PackageTreeNode[];
}
export interface PackageTreeActual extends PackageTreeNodeBase {
    isLink: false;
}
export interface PackageTreeLink extends PackageTreeNodeBase {
    isLink: true;
    target: PackageTreeActual;
}
export declare type PackageTreeNode = PackageTreeActual | PackageTreeLink;
export declare function readPackageTree(path: string): Promise<PackageTreeNode>;
export interface NodeDependency {
    version: string;
    node?: PackageTreeNode;
}
export declare function findNodeDependencies(node: PackageTreeNode): Record<string, NodeDependency>;
