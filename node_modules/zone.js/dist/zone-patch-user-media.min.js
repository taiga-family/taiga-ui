/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */Zone.__load_patch("getUserMedia",(function(e,n,t){var i=e.navigator;i&&i.getUserMedia&&(i.getUserMedia=function r(e,n){return function(){var i=Array.prototype.slice.call(arguments),r=t.bindArguments(i,n||e.name);return e.apply(this,r)}}(i.getUserMedia))}))}));