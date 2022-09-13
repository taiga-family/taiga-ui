(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-portal-custom-host-component"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/portals/examples/1/portal/custom-host.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/portals/examples/1/portal/custom-host.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {AbstractTuiPortalHostComponent} from '@taiga-ui/cdk/abstract/portal-host';\nimport {AbstractTuiPortalService} from '@taiga-ui/cdk/abstract/portal-service';\n\nimport {CustomPortalService} from './custom-portal.service';\n\n@Component({\n    selector: `custom-host`,\n    templateUrl: `./custom-host.template.html`,\n    styleUrls: [`./custom-host.style.less`],\n    changeDetection,\n    providers: [{provide: AbstractTuiPortalService, useExisting: CustomPortalService}],\n})\nexport class CustomHostComponent extends AbstractTuiPortalHostComponent {}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-portal-custom-host-component.js.map