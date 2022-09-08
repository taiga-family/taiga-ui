"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[30222],{

/***/ 30222:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_NOTIFICATION_DEFAULT_OPTIONS,\n    TUI_NOTIFICATION_OPTIONS,\n    TuiNotification,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-notification-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NOTIFICATION_OPTIONS,\n            useValue: {\n                ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n                status: TuiNotification.Error,\n                hasIcon: false,\n            },\n        },\n    ],\n})\nexport class TuiNotificationExample2 {}\n";

/***/ })

}]);