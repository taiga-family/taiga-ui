"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[28503],{

/***/ 28503:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    (click)=\"onClick(choose, poorly, wisely)\"\n>\n    Show prompt\n</button>\n<ng-template #choose>\n    <div class=\"wrapper\">\n        <tui-avatar\n            avatarUrl=\"assets/images/choose.png\"\n            size=\"l\"\n            class=\"tui-space_right-2\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n        «Choose wisely»\n    </div>\n</ng-template>\n<ng-template #poorly>\n    <div class=\"wrapper\">\n        <tui-avatar\n            avatarUrl=\"assets/images/poorly.png\"\n            class=\"tui-space_right-2\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n        «You chose poorly»\n    </div>\n</ng-template>\n<ng-template #wisely>\n    <div class=\"wrapper\">\n        «You have chosen wisely»\n        <tui-avatar\n            avatarUrl=\"assets/images/wisely.png\"\n            class=\"tui-space_left-1\"\n            [rounded]=\"true\"\n        ></tui-avatar>\n    </div>\n</ng-template>\n";

/***/ })

}]);