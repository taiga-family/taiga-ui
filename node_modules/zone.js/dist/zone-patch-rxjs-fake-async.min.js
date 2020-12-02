/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("rxjs")):"function"==typeof define&&define.amd?define(["rxjs"],e):e((n=n||self).rxjs)}(this,(function(n){"use strict";
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */Zone.__load_patch("rxjs.Scheduler.now",(function(e,t,o){o.patchMethod(n.Scheduler,"now",(function(n){return function(n,e){return Date.now.call(n)}})),o.patchMethod(n.asyncScheduler,"now",(function(n){return function(n,e){return Date.now.call(n)}})),o.patchMethod(n.asapScheduler,"now",(function(n){return function(n,e){return Date.now.call(n)}}))}))}));