"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12258],{

/***/ 12258:
/***/ ((module) => {

module.exports = "import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-media-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiMediaExample3 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n";

/***/ })

}]);