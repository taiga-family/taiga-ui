(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-value-transformers-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/value-transformers.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/value-transformers.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {TuiControlValueTransformer, TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\nexport class ExampleDateTransformer\n    implements TuiControlValueTransformer<TuiDay | null, Date | null>\n{\n    fromControlValue(controlValue: Date | null): TuiDay | null {\n        return controlValue && TuiDay.fromLocalNativeDate(controlValue);\n    }\n\n    toControlValue(componentValue: TuiDay | null): Date | null {\n        return componentValue?.toLocalNativeDate() || null;\n    }\n}\n\nclass ExampleDateRangeTransformer\n    implements TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null>\n{\n    constructor(\n        private readonly dateTransformer: TuiControlValueTransformer<\n            TuiDay | null,\n            Date | null\n        >,\n    ) {}\n\n    fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {\n        const [transformedFrom, transformedTo] = controlValue || [null, null];\n        const from =\n            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);\n        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);\n\n        return from && to && new TuiDayRange(from, to);\n    }\n\n    toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {\n        const from =\n            componentValue && this.dateTransformer.toControlValue(componentValue.from);\n        const to =\n            componentValue && this.dateTransformer.toControlValue(componentValue.to);\n\n        return from && to && [from, to];\n    }\n}\n\nexport function getExampleDateRangeTransformer(\n    dateTransformer: ExampleDateTransformer | null,\n): TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {\n    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-value-transformers-ts.js.map