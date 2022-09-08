"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[62451],{

/***/ 62451:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-skeleton-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSkeletonExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl(true),\n    });\n\n    skeletonVisible = false;\n    lightMode = false;\n    placeholder = `Some paragraph with information`;\n\n    showSkeleton(): void {\n        this.skeletonVisible = !this.skeletonVisible;\n    }\n\n    toggleLight(): void {\n        this.lightMode = !this.lightMode;\n    }\n}\n";

/***/ })

}]);