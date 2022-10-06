"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36620],{

/***/ 36620:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-carousel-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCarouselExample5 {\n    index = 0;\n\n    readonly itemsCount = 3;\n\n    readonly items = [\n        {title: `First`, content: `First content`},\n        {title: `Title #2`, content: `Much more content here so the height is bigger`},\n        {title: `Title III`, content: `Small item again`},\n        {title: `Title four`, content: `Relatively ling content here`},\n        {title: `Fifth item`, content: `Tiny text`},\n        {title: `6`, content: `That one's short too`},\n        {title: `Lucky 7`, content: `This takes about two lines or so`},\n        {title: `Eighth card`, content: `Almost the last one`},\n        {title: `X`, content: `This is the longest item there is in this list`},\n    ];\n\n    get rounded(): number {\n        return Math.floor(this.index / this.itemsCount);\n    }\n\n    onIndex(index: number): void {\n        this.index = index * this.itemsCount;\n    }\n}\n";

/***/ })

}]);