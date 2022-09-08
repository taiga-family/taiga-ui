"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[92213],{

/***/ 92213:
/***/ ((module) => {

module.exports = "<article class=\"zoom-controller\">\n    <button\n        tuiIconButton\n        appearance=\"flat\"\n        tuiMode=\"onDark\"\n        size=\"s\"\n        icon=\"tuiIconMinus\"\n        class=\"minus\"\n        (click)=\"change(-0.25)\"\n    ></button>\n    <label\n        tuiSliderThumbLabel\n        class=\"slider-wrapper\"\n    >\n        <div\n            tuiHintAppearance=\"onDark\"\n            tuiHintDirection=\"top\"\n            [tuiHint]=\"hint\"\n            [tuiHintManual]=\"!!(showHint$ | async)\"\n        ></div>\n\n        <ng-template #hint>\n            {{ value | percent }}\n        </ng-template>\n\n        <input\n            tuiSlider\n            type=\"range\"\n            step=\"any\"\n            [min]=\"min\"\n            [max]=\"max\"\n            [(ngModel)]=\"value\"\n        />\n    </label>\n    <button\n        tuiIconButton\n        appearance=\"flat\"\n        tuiMode=\"onDark\"\n        size=\"s\"\n        icon=\"tuiIconPlus\"\n        class=\"plus\"\n        (click)=\"change(+0.25)\"\n    ></button>\n</article>\n";

/***/ })

}]);