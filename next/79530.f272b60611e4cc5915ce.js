"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[79530],{

/***/ 79530:
/***/ ((module) => {

module.exports = "<tui-select\n    #select\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Select user\n    <tui-data-list *tuiDataList>\n        <tui-opt-group label=\"Monty Python\">\n            <button\n                *ngFor=\"let python of pythons\"\n                tuiOption\n                [value]=\"python\"\n            >\n                {{ python }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label=\"Open-source squad\">\n            <button\n                tuiOption\n                value=\"Alexander Inkin\"\n            >\n                Alexander Inkin\n            </button>\n            <button\n                tuiOption\n                value=\"Roman Sedov\"\n            >\n                Roman Sedov\n            </button>\n        </tui-opt-group>\n        <button\n            tuiOption\n            class=\"more\"\n            (click)=\"addMore(select)\"\n        >\n            <tui-svg\n                src=\"tuiIconPlusCircleLarge\"\n                class=\"tui-space_right-2\"\n            ></tui-svg>\n            Add more\n        </button>\n    </tui-data-list>\n</tui-select>\n";

/***/ })

}]);