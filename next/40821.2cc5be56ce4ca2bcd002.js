"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[40821],{

/***/ 40821:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    size=\"s\"\n    (click)=\"addColumn()\"\n>\n    Add column\n</button>\n<button\n    tuiButton\n    size=\"s\"\n    class=\"tui-space_left-2\"\n    (click)=\"addRows()\"\n>\n    Add row\n</button>\n\n<table\n    tuiTable\n    class=\"table tui-space_top-3\"\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <ng-container *ngFor=\"let col of columns\">\n                <th\n                    *tuiHead=\"col\"\n                    tuiTh\n                >\n                    {{ col }}\n                </th>\n            </ng-container>\n        </tr>\n    </thead>\n    <tbody\n        *tuiLet=\"data | tuiTableSort as sortedData\"\n        tuiTbody\n        [data]=\"sortedData\"\n    >\n        <tr\n            *ngFor=\"let item of sortedData\"\n            tuiTr\n        >\n            <ng-container *ngFor=\"let col of columns\">\n                <td\n                    *tuiCell=\"col\"\n                    tuiTd\n                >\n                    {{ item[col] }}\n                </td>\n            </ng-container>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);