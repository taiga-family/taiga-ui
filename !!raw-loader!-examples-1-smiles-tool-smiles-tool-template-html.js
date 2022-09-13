(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-smiles-tool-smiles-tool-template-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.template.html":
/*!********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.template.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    #dropdown\n    tuiDropdownAlign=\"left\"\n    class=\"t-wrapper\"\n    [content]=\"smileDropdown\"\n>\n    <button\n        tuiIconButton\n        type=\"button\"\n        size=\"s\"\n        icon=\"tuiIconStarLarge\"\n        appearance=\"icon\"\n        automation-id=\"smiles-tool__button\"\n        class=\"tool-button\"\n        [pseudoPressed]=\"dropdown.open\"\n        [focusable]=\"dropdown.open\"\n    ></button>\n    <ng-template\n        #smileDropdown\n        let-activeZone\n    >\n        <div\n            class=\"smiles\"\n            [tuiActiveZoneParent]=\"activeZone\"\n        >\n            <button\n                *ngFor=\"let smile of smiles\"\n                class=\"smile\"\n                [innerHTML]=\"smile\"\n                (click)=\"insertSmile(smile)\"\n            ></button>\n        </div>\n    </ng-template>\n</tui-hosted-dropdown>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-smiles-tool-smiles-tool-template-html.js.map