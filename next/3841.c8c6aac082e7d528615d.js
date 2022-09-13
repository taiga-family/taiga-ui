"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3841],{

/***/ 3841:
/***/ ((module) => {

module.exports = "<ng-template\n    #previewImages\n    let-dialog\n>\n    <tui-preview [rotatable]=\"true\">\n        <img\n            *ngIf=\"image\"\n            loading=\"lazy\"\n            alt=\"\"\n            class=\"t-image-preview\"\n            [src]=\"image.src\"\n        />\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon=\"tuiIconCloseLarge\"\n            title=\"Close\"\n            (click)=\"dialog.complete()\"\n        ></button>\n    </tui-preview>\n</ng-template>\n";

/***/ })

}]);