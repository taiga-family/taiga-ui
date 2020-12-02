/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
}((function () {
    'use strict';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Monkey patch `MessagePort.prototype.onmessage` and `MessagePort.prototype.onmessageerror`
     * properties to make the callback in the zone when the value are set.
     */
    Zone.__load_patch('MessagePort', function (global, Zone, api) {
        var MessagePort = global['MessagePort'];
        if (typeof MessagePort !== 'undefined' && MessagePort.prototype) {
            api.patchOnProperties(MessagePort.prototype, ['message', 'messageerror']);
        }
    });
})));
