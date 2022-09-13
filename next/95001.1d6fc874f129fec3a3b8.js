"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[95001],{

/***/ 95001:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiContextWithImplicit, TuiDialog, tuiPure} from '@taiga-ui/cdk';\nimport {TuiAlertOptions, TuiNotification} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example-with-custom-label`,\n    templateUrl: `./alert-example-with-custom-label.template.html`,\n    changeDetection,\n})\nexport class AlertExampleWithCustomLabelComponent {\n    @tuiPure\n    get label(): PolymorpheusContent<TuiContextWithImplicit<TuiNotification>> {\n        return this.context.label;\n    }\n\n    @tuiPure\n    get status(): TuiNotification {\n        return this.context.status;\n    }\n\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiDialog<TuiAlertOptions<unknown>, boolean>,\n    ) {}\n}\n";

/***/ })

}]);