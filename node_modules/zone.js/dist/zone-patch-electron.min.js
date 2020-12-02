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
     */Zone.__load_patch("electron",(function(e,n,t){function r(e,n,r){return t.patchMethod(e,n,(function(e){return function(n,o){return e&&e.apply(n,t.bindArguments(o,r))}}))}var o=require("electron"),c=o.desktopCapturer,i=o.shell,u=o.CallbacksRegistry,a=o.ipcRenderer;c&&r(c,"getSources","electron.desktopCapturer.getSources"),i&&r(i,"openExternal","electron.shell.openExternal"),u?r(u.prototype,"add","CallbackRegistry.add"):a&&r(a,"on","ipcRenderer.on")}))}));