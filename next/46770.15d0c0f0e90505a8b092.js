"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46770],{

/***/ 46770:
/***/ ((module) => {

module.exports = "import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiHeightCollapse} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-height-collapse-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiHeightCollapse],\n})\nexport class TuiHeightCollapseExample {\n    @Input()\n    speed = 0;\n\n    isOpen = false;\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n";

/***/ })

}]);