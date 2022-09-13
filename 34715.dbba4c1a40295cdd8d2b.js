"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[34715],{

/***/ 34715:
/***/ ((module) => {

module.exports = "'{{ paymentSystem }}' = getPaymentSystem(cardNumber);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-select\n            formControlName=\"cardNumber\"\n            class=\"tui-space_top-2\"\n        >\n            Choose card number\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]=\"items\"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n";

/***/ })

}]);