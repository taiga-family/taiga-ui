"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[39585],{

/***/ 39585:
/***/ ((module) => {

module.exports = "<tui-tree\n    [tuiTreeController]=\"true\"\n    [value]=\"data\"\n    [content]=\"content\"\n    [childrenHandler]=\"handler\"\n></tui-tree>\n\n<ng-template\n    #content\n    let-value\n    let-node=\"node\"\n>\n    <div\n        class=\"wrapper\"\n        [style.opacity]=\"1 / node.level\"\n    >\n        <tui-svg\n            *ngIf=\"value.icon\"\n            [src]=\"value.icon\"\n        ></tui-svg>\n        {{ value.text }}\n    </div>\n</ng-template>\n";

/***/ })

}]);