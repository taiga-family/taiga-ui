"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67977],{

/***/ 67977:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\n\nexport async function importStarterKit(): Promise<unknown> {\n    return (await import(`@taiga-ui/addon-editor/extensions/starter-kit`)).StarterKit;\n}\n\nexport async function importEmojiExtension(): Promise<unknown> {\n    return (await import(`./smiles-tool/emoji.extension`)).EmojiExtension;\n}\n\n@Component({\n    selector: `tui-editor-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [importStarterKit(), importEmojiExtension()],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl(``, Validators.required);\n}\n";

/***/ })

}]);