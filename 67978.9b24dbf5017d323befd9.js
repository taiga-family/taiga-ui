"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67978],{

/***/ 67978:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHandler} from '@taiga-ui/cdk';\nimport {\n    TUI_TREE_LOADER,\n    TUI_TREE_LOADING,\n    TUI_TREE_START,\n    TuiTreeService,\n} from '@taiga-ui/kit';\n\nimport {TreeLoader} from './service';\n\nexport interface Item {\n    readonly text: string;\n    readonly children?: boolean;\n}\n\n@Component({\n    selector: `tui-tree-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        TuiTreeService,\n        {\n            provide: TUI_TREE_START,\n            useValue: {text: `Topmost`},\n        },\n        {\n            provide: TUI_TREE_LOADER,\n            useClass: TreeLoader,\n        },\n    ],\n})\nexport class TuiTreeExample7 {\n    map = new Map<Item, boolean>();\n\n    constructor(\n        @Inject(TUI_TREE_LOADING) readonly loading: unknown,\n        @Inject(TuiTreeService) readonly service: TuiTreeService<Item>,\n    ) {}\n\n    childrenHandler: TuiHandler<Item, readonly Item[]> = item =>\n        this.service.getChildren(item);\n\n    onToggled(item: Item): void {\n        this.service.loadChildren(item);\n    }\n}\n";

/***/ })

}]);