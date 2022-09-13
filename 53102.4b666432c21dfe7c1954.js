"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53102],{

/***/ 53102:
/***/ ((module) => {

module.exports = "<tui-combo-box\n    *tuiLet=\"service.request(search) | async as filtered\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n    [valueContent]=\"value\"\n    [(search)]=\"search\"\n>\n    Find the best employees\n    <input\n        tuiTextfield\n        placeholder=\"Type a name\"\n    />\n    <ng-template\n        #value\n        let-item\n    >\n        <tui-avatar\n            size=\"xs\"\n            class=\"avatar\"\n            [avatarUrl]=\"item.avatarUrl || null\"\n            [text]=\"item.toString()\"\n        ></tui-avatar>\n        <span class=\"name\">{{ item }}</span>\n    </ng-template>\n    <ng-template tuiDataList>\n        <tui-data-list *ngIf=\"filtered; else loading\">\n            <button\n                *ngFor=\"let item of filtered\"\n                tuiOption\n                [value]=\"item\"\n                [disabled]=\"item.disabled\"\n            >\n                <tui-avatar\n                    size=\"xs\"\n                    class=\"avatar\"\n                    [avatarUrl]=\"item.avatarUrl || null\"\n                    [text]=\"item.toString()\"\n                ></tui-avatar>\n                <span class=\"name\">{{ item }}</span>\n            </button>\n        </tui-data-list>\n        <ng-template #loading>\n            <tui-loader class=\"tui-space_vertical-4\"></tui-loader>\n        </ng-template>\n    </ng-template>\n</tui-combo-box>\n";

/***/ })

}]);