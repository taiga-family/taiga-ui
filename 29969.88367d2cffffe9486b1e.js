"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29969],{

/***/ 29969:
/***/ ((module) => {

module.exports = "<table\n    tuiTable\n    class=\"table\"\n    [columns]=\"columns\"\n>\n    <thead>\n        <tr tuiThGroup>\n            <th\n                tuiTh\n                [resizable]=\"true\"\n            >\n                Name\n            </th>\n            <th tuiTh>Balance</th>\n        </tr>\n    </thead>\n    <tbody\n        tuiTbody\n        [data]=\"data\"\n    >\n        <tr\n            *tuiRow=\"let item of data\"\n            tuiTr\n        >\n            <td\n                *tuiCell=\"'balance'\"\n                tuiTd\n            >\n                {{ item.balance | tuiFormatNumber }}\n            </td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ })

}]);