"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72605],{

/***/ 72605:
/***/ ((module) => {

module.exports = "<tui-tabs [(activeItemIndex)]=\"activeItemIndex\">\n    <ng-container *ngFor=\"let step of steps; let last = last\">\n        <button\n            tuiTab\n            class=\"step\"\n            [disabled]=\"last\"\n            (click)=\"onClick(step)\"\n        >\n            {{ step }}\n        </button>\n        <tui-svg\n            *ngIf=\"!last\"\n            src=\"tuiIconChevronRight\"\n            class=\"separator\"\n        ></tui-svg>\n    </ng-container>\n</tui-tabs>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"2\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n";

/***/ })

}]);