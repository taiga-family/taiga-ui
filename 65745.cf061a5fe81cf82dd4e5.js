"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65745],{

/***/ 65745:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-push-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPushExample1 {\n    constructor(@Inject(TuiAlertService) private readonly alert: TuiAlertService) {}\n\n    onClose(): void {\n        this.alert\n            .open(`Close button is visible when you subscribe to (close) output`)\n            .subscribe();\n    }\n}\n";

/***/ })

}]);