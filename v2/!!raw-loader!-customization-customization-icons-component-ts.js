(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-customization-customization-icons-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/icons/customization/customization-icons.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/icons/customization/customization-icons.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core';\n\nexport function icons8SourceProcessor(): (src: string) => string {\n    return (src: string) => {\n        const myCustomPrefix = `icons8::`;\n\n        return src.startsWith(myCustomPrefix)\n            ? `assets/icons8/${src.replace(myCustomPrefix, ``)}.svg`\n            : src;\n    };\n}\n\n@Component({\n    selector: `customization-icons-example`,\n    templateUrl: `./customization-icons.template.html`,\n    styleUrls: [`./customization-icons.style.less`],\n    providers: [\n        {\n            provide: TUI_SVG_SRC_PROCESSOR,\n            useFactory: icons8SourceProcessor,\n        },\n    ],\n})\nexport class IconsCustomizationComponent {}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-customization-customization-icons-component-ts.js.map