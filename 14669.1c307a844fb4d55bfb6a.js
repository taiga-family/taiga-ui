"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[14669],{

/***/ 14669:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiToggleOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-toggle-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiToggleOptionsProvider({\n            icons: {\n                toggleOff: ({$implicit}) =>\n                    $implicit === `m`\n                        ? `tuiIconChevronRight`\n                        : `tuiIconChevronRightLarge`,\n                toggleOn: ({$implicit}) =>\n                    $implicit === `m` ? `tuiIconChevronLeft` : `tuiIconChevronLeftLarge`,\n            },\n            showIcons: true,\n        }),\n    ],\n})\nexport class TuiToggleExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n    });\n}\n";

/***/ })

}]);