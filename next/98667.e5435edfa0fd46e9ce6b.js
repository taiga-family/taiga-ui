"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98667],{

/***/ 98667:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core';\n\n@Component({\n    selector: `customization-icons-example`,\n    templateUrl: `./customization-icons.template.html`,\n    styleUrls: [`./customization-icons.style.less`],\n    providers: [\n        {\n            provide: TUI_SVG_SRC_PROCESSOR,\n            useFactory: () => {\n                return (src: string): string => {\n                    const myCustomPrefix = `icons8::`;\n\n                    return src.startsWith(myCustomPrefix)\n                        ? `assets/icons8/${src.replace(myCustomPrefix, ``)}.svg`\n                        : src;\n                };\n            },\n        },\n    ],\n})\nexport class IconsCustomizationComponent {}\n";

/***/ })

}]);