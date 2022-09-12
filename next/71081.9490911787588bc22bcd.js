"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[71081],{

/***/ 71081:
/***/ ((module) => {

module.exports = "<tui-input\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Enter your name\n    <ng-container *ngIf=\"items?.length\">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor=\"let item of items\"\n                tuiOption\n                [value]=\"item\"\n                [disabled]=\"item.disabled\"\n                (click)=\"onClick(item)\"\n            >\n                <tui-avatar\n                    size=\"xs\"\n                    class=\"avatar\"\n                    [avatarUrl]=\"item.avatarUrl || null\"\n                    [text]=\"item.toString()\"\n                ></tui-avatar>\n                <span class=\"name\">{{ item }}</span>\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input>\n<p>Parsed on complete match:</p>\n{{ firstName }} {{ lastName }}\n";

/***/ })

}]);