"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29035],{

/***/ 29035:
/***/ ((module) => {

module.exports = "import {Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHostedDropdownComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample1 {\n    @ViewChild(TuiHostedDropdownComponent)\n    component?: TuiHostedDropdownComponent;\n\n    readonly items = [`Edit`, `Download`, `Rename`, `Delete`];\n\n    open = false;\n\n    onClick(): void {\n        this.open = false;\n        this.component?.nativeFocusableElement?.focus();\n    }\n}\n";

/***/ })

}]);