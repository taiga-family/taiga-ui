"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12878],{

/***/ 12878:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tree-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTreeExample2 {\n    readonly data = [\n        `Top level 1`,\n        [`Second level item`, [`Third level 1`, `Third level 2`, `Third level 3`]],\n        `Top level 2`,\n        `Top level 3`,\n        [`Second 1`, `Second 2`],\n    ];\n}\n";

/***/ })

}]);