"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12269],{

/***/ 12269:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-scrollbar-example-6`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample6Component {\n    items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);\n\n    add(): void {\n        this.items = [...this.items, `Item #${this.items.length}`];\n    }\n}\n";

/***/ })

}]);