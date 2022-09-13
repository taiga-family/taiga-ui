"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3991],{

/***/ 3991:
/***/ ((module) => {

module.exports = "```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n// ...\n\nexport class LazyModule {\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService.showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector)).subscribe();\n    // ...\n  }\n}\n```\n";

/***/ })

}]);