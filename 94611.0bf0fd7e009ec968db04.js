"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[94611],{

/***/ 94611:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-hosted-dropdown-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHostedDropdownExample4 {\n    readonly form = new FormGroup({\n        control: new FormControl([]),\n    });\n\n    open = false;\n\n    readonly items = [`Drafts`, `In Progress`, `Completed`];\n\n    readonly arrow = TUI_ARROW;\n\n    private get value(): readonly string[] {\n        return this.form.get(`control`)?.value || [];\n    }\n\n    get appearance(): string {\n        return this.length ? `whiteblock-active` : `whiteblock`;\n    }\n\n    get length(): number {\n        return this.value.length || 0;\n    }\n\n    get text(): string {\n        switch (this.length) {\n            case 0:\n                return `Select`;\n            case 1:\n                return this.value[0];\n            default:\n                return `${this.length} selected`;\n        }\n    }\n}\n";

/***/ })

}]);