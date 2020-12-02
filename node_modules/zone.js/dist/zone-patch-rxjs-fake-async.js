/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('rxjs')) :
        typeof define === 'function' && define.amd ? define(['rxjs'], factory) :
            (global = global || self, factory(global.rxjs));
}(this, (function (rxjs) {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('rxjs.Scheduler.now', function (global, Zone, api) {
        api.patchMethod(rxjs.Scheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
        api.patchMethod(rxjs.asyncScheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
        api.patchMethod(rxjs.asapScheduler, 'now', function (delegate) { return function (self, args) {
            return Date.now.call(self);
        }; });
    });
})));
