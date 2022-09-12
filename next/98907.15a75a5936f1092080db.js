"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98907],{

/***/ 98907:
/***/ ((module) => {

module.exports = "<ng-container tuiTableFilters>\n    <form\n        class=\"form\"\n        [formGroup]=\"form\"\n    >\n        <tui-input-number\n            tuiTableFilter=\"balance\"\n            formControlName=\"balance\"\n            class=\"control\"\n            [tuiGenericFilter]=\"filter\"\n        >\n            Minimal balance\n        </tui-input-number>\n        <label>\n            <tui-toggle\n                [ngModelOptions]=\"{standalone: true}\"\n                [ngModel]=\"form.enabled\"\n                (ngModelChange)=\"onToggle($event)\"\n            ></tui-toggle>\n            Enable filtering\n        </label>\n    </form>\n    <table\n        tuiTable\n        class=\"table\"\n        [columns]=\"columns\"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th tuiTh>Name</th>\n                <th tuiTh>Balance</th>\n            </tr>\n        </thead>\n        <tbody tuiTbody>\n            <tr\n                *ngFor=\"let item of data | tuiTableFilters | async\"\n                tuiTr\n            >\n                <td\n                    *tuiCell=\"'name'\"\n                    tuiTd\n                >\n                    {{ item.name }}\n                </td>\n                <td\n                    *tuiCell=\"'balance'\"\n                    tuiTd\n                >\n                    {{ item.balance | tuiFormatNumber }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</ng-container>\n";

/***/ })

}]);