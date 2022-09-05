(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!../addon-doc/src/components/language-switcher/language-switcher.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {TUI_ICONS_PATH, tuiCapitalizeFirstLetter} from '@taiga-ui/core';\nimport {TuiCountryIsoCode, TuiLanguageName, TuiLanguageSwitcher} from '@taiga-ui/i18n';\n\n@Component({\n    selector: `tui-language-switcher`,\n    templateUrl: `./language-switcher.component.html`,\n    styleUrls: [`./language-switcher.component.less`],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiLanguageSwitcherComponent {\n    private readonly path = this.iconsPath(`tuiIcon`).replace(`tuiIcon.svg#tuiIcon`, ``);\n\n    readonly language = new FormControl(tuiCapitalizeFirstLetter(this.switcher.language));\n\n    readonly flags: Map<TuiLanguageName, TuiCountryIsoCode> = new Map([\n        [`chinese`, TuiCountryIsoCode.CN],\n        [`dutch`, TuiCountryIsoCode.NL],\n        [`english`, TuiCountryIsoCode.GB],\n        [`french`, TuiCountryIsoCode.FR],\n        [`german`, TuiCountryIsoCode.DE],\n        [`italian`, TuiCountryIsoCode.IT],\n        [`polish`, TuiCountryIsoCode.PL],\n        [`portuguese`, TuiCountryIsoCode.PT],\n        [`russian`, TuiCountryIsoCode.RU],\n        [`spanish`, TuiCountryIsoCode.ES],\n        [`turkish`, TuiCountryIsoCode.TR],\n        [`ukrainian`, TuiCountryIsoCode.UA],\n        [`vietnamese`, TuiCountryIsoCode.VN],\n    ]);\n\n    readonly names: TuiLanguageName[] = Array.from(this.flags.keys());\n\n    constructor(\n        @Inject(TuiLanguageSwitcher) readonly switcher: TuiLanguageSwitcher,\n        @Inject(TUI_ICONS_PATH) private readonly iconsPath: TuiStringHandler<string>,\n    ) {}\n\n    getFlagPath(code?: TuiCountryIsoCode): string | null {\n        return code ? `${this.path}${code}.png` : null;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-addon-doc-src-components-language-switcher-language-switcher-component-ts.js.map