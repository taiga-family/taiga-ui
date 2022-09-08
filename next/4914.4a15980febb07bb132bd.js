"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[4914],{

/***/ 4914:
/***/ ((module) => {

module.exports = "```ts\nexport class MyComponent {\n  constructor(@Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService) {}\n\n  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n      .open('/assets/taiga.pdf', {\n        label: 'Taiga UI',\n        actions,\n      })\n      .subscribe();\n  }\n}\n```\n";

/***/ })

}]);