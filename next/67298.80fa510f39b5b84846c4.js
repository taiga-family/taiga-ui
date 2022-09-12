"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67298],{

/***/ 67298:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-tag-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTagExample4 {\n    tags: readonly string[] = [\n        `Taiga UI`,\n        `is an open-source library`,\n        `for awesome people`,\n    ];\n\n    handleTagEdited(newCaption: string, currentIndex: number): void {\n        this.tags = this.tags\n            .map((caption, index) => (index === currentIndex ? newCaption : caption))\n            .filter(Boolean);\n    }\n}\n";

/***/ })

}]);