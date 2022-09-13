"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75767],{

/***/ 75767:
/***/ ((module) => {

module.exports = "```ts\nimport {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_NOTIFICATION_OPTIONS,\n      useValue: {\n        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n        status: TuiNotification.Error,\n        hasIcon: false,\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n";

/***/ })

}]);