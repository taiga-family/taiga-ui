"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[33591],{

/***/ 33591:
/***/ ((module) => {

module.exports = "```ts\nimport {TUI_INPUT_PASSWORD_OPTIONS, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n// ...\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_INPUT_PASSWORD_OPTIONS,\n      useValue: {\n        ...TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,\n        icons: {\n          hide: 'tuiIconEyeClosed',\n          show: 'tuiIconEyeOpen',\n        },\n      },\n    },\n  ],\n  // ...\n})\nexport class MyModule {}\n```\n";

/***/ })

}]);