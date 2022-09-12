"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[41349],{

/***/ 41349:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-active-zone-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiActiveZoneExample1 {\n    childActive = false;\n\n    parentActive = false;\n\n    items = [1, 2, 3];\n\n    onParentActiveZone(active: boolean): void {\n        this.parentActive = active;\n    }\n\n    onChildActiveZone(active: boolean): void {\n        this.childActive = active;\n    }\n\n    onClick({nativeFocusableElement}: TuiInputComponent): void {\n        if (nativeFocusableElement) {\n            nativeFocusableElement.focus();\n        }\n    }\n}\n";

/***/ })

}]);