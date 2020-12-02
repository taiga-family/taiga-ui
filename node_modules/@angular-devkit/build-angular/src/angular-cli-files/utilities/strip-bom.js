"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
Object.defineProperty(exports, "__esModule", { value: true });
// Strip BOM from file data.
// https://stackoverflow.com/questions/24356713
function stripBom(data) {
    return data.replace(/^\uFEFF/, '');
}
exports.stripBom = stripBom;
