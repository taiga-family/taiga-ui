(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-3-image-preview-image-preview-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/3/image-preview/image-preview.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: `image-preview-example`,\n    templateUrl: `./image-preview.template.html`,\n    styleUrls: [`./image-preview.style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class ImagePreviewExampleComponent {\n    @ViewChild(`previewImages`)\n    template?: TemplateRef<TuiDialogContext>;\n\n    image?: HTMLImageElement;\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly dialogService: PreviewDialogService,\n    ) {}\n\n    showImage(image: HTMLImageElement): void {\n        this.image = image;\n        this.dialogService.open(this.template || ``).subscribe();\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-3-image-preview-image-preview-component-ts.js.map