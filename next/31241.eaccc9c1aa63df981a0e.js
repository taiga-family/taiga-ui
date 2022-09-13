"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[31241],{

/***/ 31241:
/***/ ((module) => {

module.exports = "<tui-combo-box\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Country\n    <ng-container *tuiDataList>\n        <cdk-virtual-scroll-viewport\n            *tuiLet=\"countries | tuiFilterByInput as items\"\n            tuiScrollable\n            class=\"scroll\"\n            [style.height.px]=\"items.length * 44\"\n            [itemSize]=\"44\"\n            (indexChange)=\"list.handleFocusLossIfNecessary()\"\n        >\n            <tui-data-list #list>\n                <button\n                    *cdkVirtualFor=\"let item of items\"\n                    tuiOption\n                    [value]=\"item\"\n                >\n                    {{ item }}\n                </button>\n            </tui-data-list>\n        </cdk-virtual-scroll-viewport>\n    </ng-container>\n</tui-combo-box>\n";

/***/ })

}]);