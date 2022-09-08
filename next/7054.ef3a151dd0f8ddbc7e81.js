"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7054],{

/***/ 7054:
/***/ ((module) => {

module.exports = "<h2 i18n>Named icon from ShadowDOM</h2>\n<tui-svg\n    src=\"customTuiIconMaestro\"\n    class=\"icon\"\n></tui-svg>\n<ng-container *ngIf=\"timeout$ | async\">\n    <h2 i18n>Named icon</h2>\n    <tui-svg\n        src=\"customTuiIconMastercard\"\n        class=\"icon\"\n    ></tui-svg>\n\n    <h2 i18n>\n        Named icon got with\n        <code>TUI_ICONS_PATH</code>\n    </h2>\n    <tui-svg\n        src=\"tuiIconLikeLarge\"\n        class=\"icon\"\n    ></tui-svg>\n\n    <h2 i18n>Source code</h2>\n    <tui-svg [src]=\"tuiIconTimeLarge\"></tui-svg>\n\n    <h2 i18n>External link</h2>\n    <tui-svg\n        src=\"https://ng-web-apis.github.io/dist/assets/images/web-api.svg\"\n        class=\"external-icon\"\n    ></tui-svg>\n\n    <h2 i18n>External segment link</h2>\n    <tui-svg\n        class=\"icon\"\n        [src]=\"imageUrl\"\n    ></tui-svg>\n</ng-container>\n";

/***/ })

}]);