"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** Naive priority queue; not intended for large datasets */
class PriorityQueue {
    constructor(_comparator) {
        this._comparator = _comparator;
        this._items = new Array();
    }
    clear() {
        this._items = new Array();
    }
    push(item) {
        const index = this._items.findIndex(existing => this._comparator(item, existing) <= 0);
        if (index === -1) {
            this._items.push(item);
        }
        else {
            this._items.splice(index, 0, item);
        }
    }
    pop() {
        if (this._items.length === 0) {
            return undefined;
        }
        return this._items.splice(0, 1)[0];
    }
    peek() {
        if (this._items.length === 0) {
            return undefined;
        }
        return this._items[0];
    }
    get size() {
        return this._items.length;
    }
    toArray() {
        return this._items.slice();
    }
}
exports.PriorityQueue = PriorityQueue;
