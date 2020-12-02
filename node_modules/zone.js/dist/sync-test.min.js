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
     */var e=function(){function e(e){this.runZone=Zone.current,this.name="syncTestZone for "+e}return e.prototype.onScheduleTask=function(e,n,t,o){switch(o.type){case"microTask":case"macroTask":throw new Error("Cannot call "+o.source+" from within a sync test.");case"eventTask":o=e.scheduleTask(t,o)}return o},e}();Zone.SyncTestZoneSpec=e}));