"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
const exception_1 = require("../../exception");
class Empty {
    constructor() {
        this.capabilities = {
            synchronous: true,
        };
    }
    read(path) {
        return rxjs_1.throwError(new exception_1.FileDoesNotExistException(path));
    }
    list(path) {
        return rxjs_1.of([]);
    }
    exists(path) {
        return rxjs_1.of(false);
    }
    isDirectory(path) {
        return rxjs_1.of(false);
    }
    isFile(path) {
        return rxjs_1.of(false);
    }
    stat(path) {
        // We support stat() but have no file.
        return rxjs_1.of(null);
    }
}
exports.Empty = Empty;
