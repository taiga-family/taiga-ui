"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34778],{

/***/ 34778:
/***/ ((module) => {

module.exports = "<div class=\"wrapper\">\n    <tui-ring-chart\n        [value]=\"value\"\n        [(activeItemIndex)]=\"activeItemIndex\"\n    >\n        <tui-money\n            [singleColor]=\"true\"\n            [value]=\"sum\"\n        ></tui-money>\n        <div>Total</div>\n    </tui-ring-chart>\n\n    <div class=\"legend\">\n        <tui-legend-item\n            *ngFor=\"let label of labels; let index = index\"\n            size=\"s\"\n            class=\"item\"\n            [color]=\"getColor(index)\"\n            [text]=\"label\"\n            [active]=\"isItemActive(index)\"\n            (tuiHoveredChange)=\"onHover(index, $event)\"\n        >\n            <tui-money\n                [singleColor]=\"true\"\n                [value]=\"value[index]\"\n            ></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n";

/***/ })

}]);