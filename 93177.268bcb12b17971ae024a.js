"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[93177],{

/***/ 93177:
/***/ ((module) => {

module.exports = "```ts\nconstructor(private readonly dialogsService: TuiMobileDialogService) {}\n\n// ...\n\nthis.dialogsService\n    .open(\n        'Text',\n        {\n            label: 'Heading',\n            actions: ['Button 1', 'Button 2'],\n            data: 'Some data'\n        },\n    )\n    .subscribe(index => {\n        // Index of clicked button\n        console.log(index);\n    });\n```\n";

/***/ })

}]);