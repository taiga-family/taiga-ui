"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[50704],{

/***/ 50704:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-time-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: `HH:MM`,\n            postfix: `left`,\n            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample4 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n}\n";

/***/ })

}]);