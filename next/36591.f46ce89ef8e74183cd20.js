"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36591],{

/***/ 36591:
/***/ ((module) => {

module.exports = "<button\n    tuiButton\n    type=\"button\"\n    (click)=\"toggle(true)\"\n    (tuiActiveZoneChange)=\"toggle($event)\"\n>\n    Show sidebar\n    <!-- Nest the directive so it is considered the same active zone -->\n    <div *tuiSidebar=\"open; direction: 'right'\">\n        <tui-accordion [rounded]=\"false\">\n            <tui-accordion-item borders=\"top-bottom\">\n                Web APIs for Angular\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor=\"let link of webApis\"\n                        tuiLink\n                        target=\"_blank\"\n                        href=\"https://github.com/ng-web-apis/{{ link }}\"\n                        class=\"link\"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n            <tui-accordion-item borders=\"top-bottom\">\n                Other libraries\n                <ng-template tuiAccordionItemContent>\n                    <a\n                        *ngFor=\"let link of tinkoff\"\n                        tuiLink\n                        target=\"_blank\"\n                        href=\"https://github.com/tinkoff/{{ link }}\"\n                        class=\"link\"\n                    >\n                        {{ link }}\n                    </a>\n                </ng-template>\n            </tui-accordion-item>\n        </tui-accordion>\n    </div>\n</button>\n";

/***/ })

}]);