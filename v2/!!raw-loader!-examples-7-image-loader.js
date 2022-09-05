(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-7-image-loader"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/image-loader.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/image-loader.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {fromEvent, Observable} from 'rxjs';\nimport {map, switchMap} from 'rxjs/operators';\n\nimport {ImgbbService} from './imgbb.service';\n\nexport function imageLoader(service: ImgbbService): (file: File) => Observable<string> {\n    return (file: File) => {\n        const fileReader = new FileReader();\n\n        fileReader.readAsDataURL(file);\n\n        return fromEvent(fileReader, `load`)\n            .pipe(map(() => String(fileReader.result)))\n            .pipe(switchMap(base64 => service.save(base64)));\n    };\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-7-image-loader.js.map