"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[35222],{

/***/ 35222:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {TUI_ICONS_PATH} from '@taiga-ui/core';\n\nconst MAPPER: Record<string, string> = {\n    tuiIconCalendarLarge: `date_range-24px`,\n    tuiIconTooltipLarge: `help-24px`,\n    tuiIconInfo: `info-16px`,\n    tuiIconCloseLarge: `clear-24px`,\n    tuiIconChevronLeftLarge: `keyboard_arrow_left-24px`,\n    tuiIconChevronRightLarge: `keyboard_arrow_right-24px`,\n    // and so on\n};\n\n// This assumes that icons were properly processed\nexport function iconsPath(name: string): string {\n    return `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`;\n}\n\n@Component({\n    selector: `tui-icon-set-example-1`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_ICONS_PATH,\n            useValue: iconsPath,\n        },\n    ],\n})\nexport class TuiIconSetExample1 {\n    date = null;\n}\n";

/***/ })

}]);