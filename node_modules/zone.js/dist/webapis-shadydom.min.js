/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */Zone.__load_patch("shadydom",(function(t,e,o){var n=t.HTMLSlotElement;[Object.getPrototypeOf(window),Node.prototype,Text.prototype,Element.prototype,HTMLElement.prototype,n&&n.prototype,DocumentFragment.prototype,Document.prototype].forEach((function(n){n&&n.hasOwnProperty("addEventListener")&&(n[e.__symbol__("addEventListener")]=null,n[e.__symbol__("removeEventListener")]=null,o.patchEventTarget(t,[n]))}))}))}));