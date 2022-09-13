"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[60989],{

/***/ 60989:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-slider-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample1 {\n    readonly min = 5;\n    readonly max = 20;\n    readonly sliderStep = 1;\n    readonly steps = (this.max - this.min) / this.sliderStep;\n    readonly quantum = 0.01;\n\n    readonly hint = `Dragging slider change input by ${this.sliderStep}.\\nBut you can type decimal number which is multiple of ${this.quantum}.`;\n\n    readonly control = new FormControl(6.5);\n}\n";

/***/ })

}]);