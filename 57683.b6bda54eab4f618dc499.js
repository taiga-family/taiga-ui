"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57683],{

/***/ 57683:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    appearance=\"outline\"\n    class=\"button\"\n    (click)=\"isOpen = !isOpen\"\n>\n    {{ isOpen ? 'Hide me' : 'Show opening crawl' }}\n</button>\n\n<div\n    *ngIf=\"isOpen\"\n    class=\"container\"\n    [@tuiHeightCollapse]=\"getAnimation(speed)\"\n>\n    A long time ago in a galaxy far, far away....\n</div>\n";

/***/ })

}]);