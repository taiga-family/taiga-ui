"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[96381],{

/***/ 96381:
/***/ ((module) => {

module.exports = "<!-- Add id for accessibility purposes -->\n<h2 [id]=\"context.id\">{{ context.heading }}</h2>\n<section>\n    <!-- TODO: Polymorpheus fix type -->\n    <ng-container *polymorpheusOutlet=\"$any(context.content) as text; context: context\">\n        {{ text }}\n    </ng-container>\n</section>\n<p class=\"buttons\">\n    <button\n        tuiButton\n        class=\"tui-space_right-3\"\n        (click)=\"onClick(true)\"\n    >\n        {{ context.buttons[0] }}\n    </button>\n    <button\n        tuiButton\n        appearance=\"secondary\"\n        (click)=\"onClick(false)\"\n    >\n        {{ context.buttons[1] }}\n    </button>\n</p>\n";

/***/ })

}]);