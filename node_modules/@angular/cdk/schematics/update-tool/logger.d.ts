/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/logger" />
export interface UpdateLogger {
    debug(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
    info(message: string): void;
    warn(message: string): void;
}
export declare const defaultLogger: UpdateLogger;
