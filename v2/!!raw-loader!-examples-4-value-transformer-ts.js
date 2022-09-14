(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-value-transformer-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/value-transformer.ts":
/*!********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/value-transformer.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {TuiControlValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';\n\nexport class ExampleDateTimeTransformer\n    implements TuiControlValueTransformer<[TuiDay | null, TuiTime | null], string>\n{\n    private readonly separator = `, `;\n\n    fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {\n        const [day, time = ``] = controlValue.split(this.separator);\n\n        return day\n            ? [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null]\n            : [null, null];\n    }\n\n    toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {\n        return day\n            ? day.toString() + (time ? `${this.separator}${time.toString()}` : ``)\n            : ``;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-value-transformer-ts.js.map