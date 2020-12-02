"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor(_head) {
        this._head = _head;
    }
    get(l) {
        let c = this._head;
        while (c && l > 0) {
            l--;
            c = c.next;
        }
        return c;
    }
    get head() { return this._head; }
    get length() {
        let c = this._head;
        let i = 0;
        while (c) {
            i++;
            c = c.next;
        }
        return i;
    }
    reduce(accumulator, seed) {
        let c = this._head;
        let acc = seed;
        let i = 0;
        while (c) {
            acc = accumulator(acc, c, i);
            i++;
            c = c.next;
        }
        return acc;
    }
    find(predicate) {
        let c = this._head;
        let i = 0;
        while (c) {
            if (predicate(c, i)) {
                break;
            }
            i++;
            c = c.next;
        }
        return c;
    }
    forEach(visitor) {
        let c = this._head;
        let i = 0;
        while (c) {
            visitor(c, i);
            i++;
            c = c.next;
        }
    }
}
exports.LinkedList = LinkedList;
