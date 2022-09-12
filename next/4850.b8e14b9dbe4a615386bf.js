"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[4850],{

/***/ 4850:
/***/ ((module) => {

module.exports = "```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n// ...\n\nexport class MyDialogComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>) {}\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n";

/***/ })

}]);