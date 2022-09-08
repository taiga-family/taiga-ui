"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[82155],{

/***/ 82155:
/***/ ((module) => {

module.exports = "```ts\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_DIALOGS_CLOSE,\n      deps: [AuthService],\n      useFactory: authService => authService.logout$,\n    },\n  ],\n})\nexport class MyModule {}\n```\n";

/***/ })

}]);