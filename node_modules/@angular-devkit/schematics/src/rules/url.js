"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const url_1 = require("url");
function url(urlString) {
    const url = url_1.parse(urlString);
    return (context) => context.engine.createSourceFromUrl(url, context)(context);
}
exports.url = url;
