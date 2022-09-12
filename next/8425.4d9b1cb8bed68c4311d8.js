"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[8425],{

/***/ 8425:
/***/ ((module) => {

module.exports = "```ts\n@Component({\n  selector: 'my-portal-host',\n  templateUrl: './my-portal-host.template.html',\n  styleUrls: ['./my-portal-host.style.less'],\n  providers: [\n    {provide: AbstractTuiPortalService, useExisting: MyPortalService},\n    {provide: AbstractTuiPortalHostComponent, useExisting: MyPortalHost},\n  ],\n})\nexport class MyPortalHost extends AbstractTuiPortalHostComponent {}\n```\n";

/***/ })

}]);