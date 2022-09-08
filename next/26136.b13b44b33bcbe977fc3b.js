"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26136],{

/***/ 26136:
/***/ ((module) => {

module.exports = "import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiMoneyModule} from '@taiga-ui/addon-commerce';\nimport {TuiAutoFocusModule} from '@taiga-ui/cdk';\nimport {\n    TuiButtonModule,\n    TuiDataListModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/core';\nimport {\n    TuiDataListWrapperModule,\n    TuiInputModule,\n    TuiSelectModule,\n    TuiSliderModule,\n} from '@taiga-ui/kit';\n\nimport {DialogExampleComponent} from './dialog-example.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        FormsModule,\n        TuiButtonModule,\n        TuiSelectModule,\n        TuiInputModule,\n        TuiMoneyModule,\n        TuiTextfieldControllerModule,\n        TuiDataListModule,\n        TuiDataListWrapperModule,\n        TuiSliderModule,\n        TuiAutoFocusModule,\n    ],\n    declarations: [DialogExampleComponent],\n    exports: [DialogExampleComponent],\n    entryComponents: [DialogExampleComponent], // for stackblitz\n})\nexport class DialogExampleModule {}\n";

/***/ })

}]);