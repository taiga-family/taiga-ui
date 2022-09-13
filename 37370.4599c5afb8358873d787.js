"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37370],{

/***/ 37370:
/***/ ((module) => {

module.exports = "<h3>TODO:</h3>\n<p>(click on item if it is finished)</p>\n\n<ul class=\"tui-list\">\n    <li\n        *ngFor=\"let task of todoTasks\"\n        class=\"tui-list__item\"\n        (click)=\"task.completed = !task.completed\"\n    >\n        {{ task.title }}\n        <tui-svg\n            *ngIf=\"task.completed\"\n            src=\"tuiIconCheckLarge\"\n            [@tuiScaleIn]=\"getAnimation(speed)\"\n        ></tui-svg>\n    </li>\n</ul>\n";

/***/ })

}]);