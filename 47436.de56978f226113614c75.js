"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47436],{

/***/ 47436:
/***/ ((module) => {

module.exports = "```ts\nimport {ToggleOptions, TUI_TOGGLE_DEFAULT_OPTIONS, TUI_TOGGLE_OPTIONS} from '@taiga-ui/kit';\n\n// ...\nconst options: Partial<ToggleOptions> = {\n  icons: {\n    toggleOff: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge'),\n    toggleOn: ({$implicit}) => ($implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge'),\n  },\n};\n\n@NgModule({\n  providers: [\n    {\n      provide: TUI_TOGGLE_OPTIONS,\n      useValue: {\n        ...TUI_TOGGLE_DEFAULT_OPTIONS,\n        ...options,\n      },\n    },\n  ],\n})\nexport class MyModule {}\n```\n";

/***/ })

}]);