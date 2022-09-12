"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[79654],{

/***/ 79654:
/***/ ((module) => {

module.exports = "```ts\nimport {TUI_SANITIZER} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\n\n// ...\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n```\n";

/***/ })

}]);