"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[39650],{

/***/ 39650:
/***/ ((module) => {

module.exports = "```ts\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n// ...\nexport class AppComponent {\n  @ViewChild('tableBarTemplate')\n  tableBarTemplate: TemplateRef<Record<string, unknown>>;\n\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService\n      .showTableBar(this.tableBarTemplate, {\n        mode: 'onLight',\n        hasCloseButton: true,\n      })\n      .subscribe();\n    // ...\n  }\n}\n```\n";

/***/ })

}]);