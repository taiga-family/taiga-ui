"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47368],{

/***/ 47368:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiAlertOptions} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example-with-data`,\n    templateUrl: `./alert-example-with-data.template.html`,\n    styleUrls: [`./alert-example-with-data.style.less`],\n    changeDetection,\n})\nexport class AlertExampleWithDataComponent {\n    value: number;\n\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiDialog<TuiAlertOptions<number>, number>,\n    ) {\n        this.value = this.context.data;\n    }\n\n    increaseBalance(): void {\n        this.value += 10;\n    }\n\n    submit(): void {\n        this.context.completeWith(this.value);\n    }\n}\n";

/***/ })

}]);