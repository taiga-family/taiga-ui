"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[90486],{

/***/ 90486:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-range-example-3`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputRangeExample3 {\n    readonly control = new FormControl([0, 7]);\n\n    // See https://angular.io/api/common/I18nPluralPipe\n    readonly pluralize = {\n        '=0': `days later`,\n        '=1': `day later`,\n        other: `days later`,\n    };\n}\n";

/***/ })

}]);