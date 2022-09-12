"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[69169],{

/***/ 69169:
/***/ ((module) => {

module.exports = "<tui-input\n    tuiTextfieldIconLeft=\"tuiIconSearchLarge\"\n    [(ngModel)]=\"search\"\n>\n    Search\n</tui-input>\n<table class=\"tui-space_top-4\">\n    <thead>\n        <tr>\n            <th>Member</th>\n            <th>Nickname</th>\n            <th>Fate</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let row of rows\">\n            <td\n                *ngFor=\"let cell of row\"\n                [tuiHighlight]=\"search\"\n                [tuiHighlightColor]=\"'#228B22'\"\n            >\n                {{ cell }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);