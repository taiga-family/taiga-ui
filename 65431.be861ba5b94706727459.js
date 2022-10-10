"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65431],{

/***/ 65431:
/***/ ((module) => {

module.exports = "import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(\n                    ({createImageEditorExtension}) =>\n                        createImageEditorExtension(injector),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<p>Small image</p><img data-type=\"image-editor\" src=\"assets/images/lumberjack.png\" width=\"300\"><p>Big image</p><img data-type=\"image-editor\" src=\"assets/images/big-wallpaper.jpg\" width=\"500\">`,\n        );\n    }\n}\n";

/***/ })

}]);