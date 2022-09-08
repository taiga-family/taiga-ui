"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29483],{

/***/ 29483:
/***/ ((module) => {

module.exports = "import {Component, Inject, Optional} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\n\n@Component({\n    selector: `tui-token-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample2 {\n    constructor(\n        @Optional()\n        @Inject(TUI_DIALOGS)\n        readonly dialogs: ReadonlyArray<Observable<readonly unknown[]>> | null,\n    ) {}\n}\n";

/***/ })

}]);