"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[28198],{

/***/ 28198:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptOptions} from './prompt-options';\n\n@Component({\n    selector: `prompt`,\n    templateUrl: `./prompt.template.html`,\n    styleUrls: [`./prompt.style.less`],\n    changeDetection,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean): void {\n        this.context.completeWith(response);\n    }\n}\n";

/***/ })

}]);