"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22680],{

/***/ 22680:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-dropdown-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample1 {\n    open = false;\n\n    onClick(): void {\n        this.open = !this.open;\n    }\n\n    onObscured(obscured: boolean): void {\n        if (obscured) {\n            this.open = false;\n        }\n    }\n\n    onActiveZone(active: boolean): void {\n        this.open = active && this.open;\n    }\n}\n";

/***/ })

}]);