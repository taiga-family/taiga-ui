"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36703],{

/***/ 36703:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {AbstractTuiPortalHostComponent, AbstractTuiPortalService} from '@taiga-ui/cdk';\n\nimport {CustomPortalService} from './custom-portal.service';\n\n@Component({\n    selector: `custom-host`,\n    templateUrl: `./custom-host.template.html`,\n    styleUrls: [`./custom-host.style.less`],\n    changeDetection,\n    providers: [\n        {provide: AbstractTuiPortalService, useExisting: CustomPortalService},\n        {provide: AbstractTuiPortalHostComponent, useExisting: CustomHostComponent},\n    ],\n})\nexport class CustomHostComponent extends AbstractTuiPortalHostComponent {}\n";

/***/ })

}]);