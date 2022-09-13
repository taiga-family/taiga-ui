"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[23040],{

/***/ 23040:
/***/ ((module) => {

module.exports = "```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\n\nimport {CustomNotificationComponent} from './custom-notification.component';\n\n//...\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private injector: Injector,\n    @Inject(TuiAlertService) private readonly alertService: TuiAlertService,\n  ) {\n    //...\n    this.alertService\n      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})\n      .subscribe();\n  }\n  //...\n}\n```\n";

/***/ })

}]);