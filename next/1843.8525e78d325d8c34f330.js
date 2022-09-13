"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1843],{

/***/ 1843:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: `tui-input-card-grouped-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample3 {\n    readonly control = new FormControl(null, [\n        tuiCardNumberValidator,\n        tuiCardExpireValidator,\n    ]);\n}\n";

/***/ })

}]);