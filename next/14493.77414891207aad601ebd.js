"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[14493],{

/***/ 14493:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nexport interface Item {\n    readonly name: string;\n    readonly price: number;\n}\n\n@Component({\n    selector: `tui-filter-example1`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items: readonly Item[] = [\n        {\n            name: `Sword`,\n            price: 1000,\n        },\n        {\n            name: `Axe`,\n            price: 100,\n        },\n        {\n            name: `Spear`,\n            price: 500,\n        },\n    ];\n\n    readonly matcher = (item: Item, search: number): boolean => item.price > search;\n}\n";

/***/ })

}]);