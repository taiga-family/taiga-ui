"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44671],{

/***/ 44671:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog()\"\n>\n    Show\n</button>\n<ng-template\n    let-observer\n    [tuiDialogOptions]=\"{label: 'Declarative directive', size: 's'}\"\n    [(tuiDialog)]=\"open\"\n>\n    <form\n        [formGroup]=\"exampleForm\"\n        (ngSubmit)=\"observer.complete()\"\n    >\n        <p>This abstracts away service and subscription</p>\n        <tui-input\n            tuiAutoFocus\n            formControlName=\"exampleControl\"\n        >\n            Some value\n        </tui-input>\n        <p>\n            <button\n                tuiButton\n                type=\"submit\"\n            >\n                Ok\n            </button>\n        </p>\n    </form>\n</ng-template>\n";

/***/ })

}]);