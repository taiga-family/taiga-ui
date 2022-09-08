"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65035],{

/***/ 65035:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiTagOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-tag-example-5`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiTagOptionsProvider({\n            size: `l`,\n            status: `success`,\n        }),\n    ],\n})\nexport class TuiTagExample5 {\n    tag = `Hello`;\n}\n";

/***/ })

}]);