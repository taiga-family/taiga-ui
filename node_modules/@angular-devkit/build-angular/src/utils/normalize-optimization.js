"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeOptimization(optimization = false) {
    return {
        scripts: typeof optimization === 'object' ? !!optimization.scripts : optimization,
        styles: typeof optimization === 'object' ? !!optimization.styles : optimization,
    };
}
exports.normalizeOptimization = normalizeOptimization;
