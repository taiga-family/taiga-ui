"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51407],{

/***/ 51407:
/***/ ((module) => {

module.exports = "<tui-select\n    class=\"b-form\"\n    [valueContent]=\"content\"\n    [(ngModel)]=\"value\"\n>\n    Bank and account\n    <ng-template tuiDataList>\n        <tui-data-list>\n            <tui-opt-group>\n                <button\n                    tuiOption\n                    [value]=\"all\"\n                >\n                    All\n                </button>\n            </tui-opt-group>\n            <tui-opt-group label=\"Best bank\">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor=\"let item of bank\"\n                        tuiOption\n                        [value]=\"item\"\n                    >\n                        <label [tuiLabel]=\"item.name\">\n                            {{ item.account }}\n                        </label>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group label=\"Other banks\">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor=\"let item of others\"\n                        tuiOption\n                        [value]=\"item\"\n                    >\n                        <label [tuiLabel]=\"item.name\">\n                            {{ item.account }}\n                        </label>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group tuiMultiSelectGroup>\n                <button\n                    tuiOption\n                    [value]=\"cash\"\n                >\n                    Cash\n                </button>\n            </tui-opt-group>\n        </tui-data-list>\n    </ng-template>\n</tui-select>\n";

/***/ })

}]);