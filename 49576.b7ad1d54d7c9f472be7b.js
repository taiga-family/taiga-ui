"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[49576],{

/***/ 42798:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialogContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `search-dialog-example`,\n    templateUrl: `./search-dialog-example.template.html`,\n    styleUrls: [`./search-dialog-example.component.less`],\n    changeDetection,\n})\nexport class SearchDialogExampleComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,\n    ) {}\n\n    close(): void {\n        this.context.completeWith(false);\n    }\n}\n";

/***/ })

}]);