"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[84963],{

/***/ 84963:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    size=\"m\"\n    type=\"button\"\n    class=\"tui-space_bottom-4\"\n    (click)=\"show()\"\n>\n    Show simple preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]=\"false\"\n        [zoomable]=\"false\"\n    >\n        <iframe\n            src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n            allowfullscreen\n            class=\"content\"\n        ></iframe>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon=\"tuiIconCloseLarge\"\n            title=\"Close\"\n            (click)=\"preview.complete()\"\n        ></button>\n    </tui-preview>\n</ng-template>\n";

/***/ })

}]);