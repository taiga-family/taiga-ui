/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
export interface PackageDependencies {
    [dependency: string]: string;
}
export declare type NgAddSaveDepedency = 'dependencies' | 'devDependencies' | boolean;
export interface PackageIdentifier {
    type: 'git' | 'tag' | 'version' | 'range' | 'file' | 'directory' | 'remote';
    name: string;
    scope: string | null;
    registry: boolean;
    raw: string;
    fetchSpec: string;
    rawSpec: string;
}
export interface PackageManifest {
    name: string;
    version: string;
    license?: string;
    private?: boolean;
    deprecated?: boolean;
    dependencies: PackageDependencies;
    devDependencies: PackageDependencies;
    peerDependencies: PackageDependencies;
    optionalDependencies: PackageDependencies;
    'ng-add'?: {
        save?: NgAddSaveDepedency;
    };
    'ng-update'?: {
        migrations: string;
        packageGroup: {
            [name: string]: string;
        };
    };
}
export interface PackageMetadata {
    name: string;
    tags: {
        [tag: string]: PackageManifest | undefined;
    };
    versions: Record<string, PackageManifest>;
}
export declare function fetchPackageMetadata(name: string, logger: logging.LoggerApi, options?: {
    registry?: string;
    usingYarn?: boolean;
    verbose?: boolean;
}): Promise<PackageMetadata>;
export declare function fetchPackageManifest(name: string, logger: logging.LoggerApi, options?: {
    registry?: string;
    usingYarn?: boolean;
    verbose?: boolean;
}): Promise<PackageManifest>;
