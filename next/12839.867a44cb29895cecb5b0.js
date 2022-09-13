"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12839],{

/***/ 12839:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-auto-focus-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAutoFocusExample1 {\n    showInput = false;\n    model = `Focused after its appearance`;\n\n    onClick(): void {\n        this.showInput = true;\n    }\n}\n";

/***/ })

}]);