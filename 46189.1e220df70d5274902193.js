"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46189],{

/***/ 46189:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-math-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiRound(value ?? 1.005, precision ?? 2);\n    }\n\n    get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiFloor(value ?? 1.005, precision ?? 2);\n    }\n\n    get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return tuiCeil(value ?? 1.005, precision ?? 2);\n    }\n}\n";

/***/ })

}]);