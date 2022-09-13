"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22771],{

/***/ 22771:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\n\n@Component({\n    selector: `tui-button-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample1 {\n    readonly avatarUrl = assets`/images/avatar.jpg`;\n\n    onClick(event: MouseEvent): void {\n        console.info(`click `, this.avatarUrl, event);\n    }\n}\n";

/***/ })

}]);