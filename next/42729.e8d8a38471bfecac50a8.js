"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[42729],{

/***/ 42729:
/***/ ((module) => {

module.exports = "```ts\nimport {tuiEditorOptionsProvider, TuiEditorOptions} from '@taiga-ui/addon-editor';\n\nconst YOUR_PARAMS: TuiEditorOptions = {\n  color: new Map([\n    ['red', 'rgba(244, 87, 37, 1)'],\n    ['blue', 'var(--tui-primary)'],\n  ]),\n  //...\n};\n\n@Component({\n  //...\n  providers: [tuiEditorOptionsProvider(YOUR_PARAMS)],\n})\nexport class YourComponent {}\n```\n";

/***/ })

}]);