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
     */var t="\n",a={},r="STACKTRACE TRACKING",e="__SEP_TAG__",n=e+"@[native]",c=function c(){this.error=f(),this.timestamp=new Date};function i(){return new Error(r)}function o(){try{throw i()}catch(t){return t}}var _=i(),s=o(),f=_.stack?i:s.stack?o:i;function u(a){return a.stack?a.stack.split(t):[]}function k(t,r){for(var e=u(r),n=0;n<e.length;n++)a.hasOwnProperty(e[n])||t.push(e[n])}function h(a,r){var c=[r?r.trim():""];if(a)for(var i=(new Date).getTime(),o=0;o<a.length;o++){var _=a[o],s=_.timestamp,f="____________________Elapsed "+(i-s.getTime())+" ms; At: "+s;f=f.replace(/[^\w\d]/g,"_"),c.push(n.replace(e,f)),k(c,_.error),i=s.getTime()}return c.join(t)}function l(){return Error.stackTraceLimit>0}Zone.longStackTraceZoneSpec={name:"long-stack-trace",longStackTraceLimit:10,getLongStackTrace:function(t){if(t){var a=t[Zone.__symbol__("currentTaskTrace")];return a?h(a,t.stack):t.stack}},onScheduleTask:function(t,a,r,e){if(l()){var n=Zone.currentTask,i=n&&n.data&&n.data.__creationTrace__||[];(i=[new c].concat(i)).length>this.longStackTraceLimit&&(i.length=this.longStackTraceLimit),e.data||(e.data={}),"eventTask"===e.type&&(e.data=Object.assign({},e.data)),e.data.__creationTrace__=i}return t.scheduleTask(r,e)},onHandleError:function(t,a,r,e){if(l()){var n=Zone.currentTask||e.task;if(e instanceof Error&&n){var c=h(n.data&&n.data.__creationTrace__,e.stack);try{e.stack=e.longStack=c}catch(t){}}}return t.handleError(r,e)}},function T(){if(l()){var t=[];!function t(a,r){r>0&&(a.push(u((new c).error)),t(a,r-1))}(t,2);for(var i=t[0],o=t[1],_=0;_<i.length;_++)if(-1==(f=i[_]).indexOf(r)){var s=f.match(/^\s*at\s+/);if(s){n=s[0]+e+" (http://localhost)";break}}for(_=0;_<i.length;_++){var f;if((f=i[_])!==o[_])break;a[f]=!0}}}()}));