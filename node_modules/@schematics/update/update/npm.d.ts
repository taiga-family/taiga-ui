/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { NpmRepositoryPackageJson } from './npm-package-json';
/**
 * Get the NPM repository's package.json for a package. This is p
 * @param {string} packageName The package name to fetch.
 * @param {string} registryUrl The NPM Registry URL to use.
 * @param {LoggerApi} logger A logger instance to log debug information.
 * @returns An observable that will put the pacakge.json content.
 * @private
 */
export declare function getNpmPackageJson(packageName: string, logger: logging.LoggerApi, options?: {
    registryUrl?: string;
    usingYarn?: boolean;
    verbose?: boolean;
}): Observable<Partial<NpmRepositoryPackageJson>>;
