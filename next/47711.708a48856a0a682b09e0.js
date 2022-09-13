"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47711],{

/***/ 47711:
/***/ ((module) => {

module.exports = "import {VIRTUAL_SCROLL_STRATEGY, VirtualScrollStrategy} from '@angular/cdk/scrolling';\nimport {Directive, Inject, Output} from '@angular/core';\n\n@Directive({\n    selector: `[indexChange]`,\n})\nexport class IndexChangeDirective {\n    @Output()\n    readonly indexChange = this.strategy.scrolledIndexChange;\n\n    constructor(\n        @Inject(VIRTUAL_SCROLL_STRATEGY)\n        private readonly strategy: VirtualScrollStrategy,\n    ) {}\n}\n";

/***/ })

}]);