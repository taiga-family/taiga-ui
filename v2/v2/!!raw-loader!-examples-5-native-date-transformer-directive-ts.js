(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-native-date-transformer-directive-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Directive} from '@angular/core';\nimport {TuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';\nimport {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';\n\ntype From = TuiDay | null;\n\ntype To = Date | null;\n\nclass ExampleTransformer implements TuiControlValueTransformer<From, To> {\n    fromControlValue(controlValue: To): From {\n        return controlValue && TuiDay.fromLocalNativeDate(controlValue);\n    }\n\n    toControlValue(componentValue: From): To {\n        return componentValue?.toLocalNativeDate() || null;\n    }\n}\n\n@Directive({\n    selector: `tui-input-date[toNativeDate]`,\n    providers: [\n        {\n            provide: TUI_DATE_VALUE_TRANSFORMER,\n            useClass: ExampleTransformer,\n        },\n    ],\n})\nexport class ExampleNativeDateTransformerDirective {}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-native-date-transformer-directive-ts.js.map