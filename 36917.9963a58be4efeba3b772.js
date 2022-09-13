"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36917],{

/***/ 36917:
/***/ ((module) => {

module.exports = "import {Component, Inject, Renderer2} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-token-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample1 {\n    style = this.renderer.createElement(`style`);\n\n    constructor(@Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2) {}\n}\n";

/***/ })

}]);