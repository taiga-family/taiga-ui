"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[76049],{

/***/ 76049:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {USER_AGENT} from '@ng-web-apis/common';\nimport {tuiIsEdge, tuiIsEdgeOlderThan, tuiIsFirefox} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-browser-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBrowserExample1 {\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    get aboutMyBrowser(): string {\n        if (tuiIsEdge(this.userAgent)) {\n            if (tuiIsEdgeOlderThan(13, this.userAgent)) {\n                return `Edge older than 13`;\n            }\n\n            return `Edge until 13`;\n        }\n\n        if (tuiIsFirefox(this.userAgent)) {\n            return `Okay, you have Firefox!`;\n        }\n\n        return `You have Chromium based browser, cool!`;\n    }\n}\n";

/***/ })

}]);