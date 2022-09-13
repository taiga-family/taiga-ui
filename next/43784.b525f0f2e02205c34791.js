"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[43784],{

/***/ 43784:
/***/ ((module) => {

module.exports = "import {Directive, Injectable} from '@angular/core';\nimport {TuiControlValueTransformer, TuiDay} from '@taiga-ui/cdk';\nimport {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';\n\ntype From = TuiDay | null;\n\ntype To = Date | null;\n\n@Injectable()\nclass ExampleTransformer implements TuiControlValueTransformer<From, To> {\n    fromControlValue(controlValue: To): From {\n        return controlValue && TuiDay.fromLocalNativeDate(controlValue);\n    }\n\n    toControlValue(componentValue: From): To {\n        return componentValue?.toLocalNativeDate() || null;\n    }\n}\n\n@Directive({\n    selector: `tui-input-date[toNativeDate]`,\n    providers: [\n        {\n            provide: TUI_DATE_VALUE_TRANSFORMER,\n            useClass: ExampleTransformer,\n        },\n    ],\n})\nexport class ExampleNativeDateTransformerDirective {}\n";

/***/ })

}]);