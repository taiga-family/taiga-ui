"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[74363],{

/***/ 74363:
/***/ ((module) => {

module.exports = "@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\n[tuiWrapper][data-appearance='icon'] {\n    background: transparent;\n    color: var(--tui-base-06);\n\n    &[data-mode='onDark'] {\n        color: var(--tui-text-01-night);\n        opacity: var(--tui-disabled-opacity);\n\n        .wrapper-focus({\n            --tui-focus: var(--tui-base-01);\n        });\n\n        .wrapper-hover({\n            color: var(--tui-text-01-night);\n            opacity: 1;\n        });\n\n        .wrapper-active({\n            color: var(--tui-text-01-night);\n            opacity: 1;\n        });\n    }\n\n    &[data-mode='onLight'] {\n        color: var(--tui-text-01);\n        opacity: var(--tui-disabled-opacity);\n\n        .wrapper-hover({\n            color: var(--tui-text-01);\n            opacity: 1;\n        });\n\n        .wrapper-active({\n            color: var(--tui-text-01);\n            opacity: 1;\n        });\n    }\n\n    .wrapper-hover({\n        color: var(--tui-base-07);\n        opacity: 1;\n    });\n\n    .wrapper-active({\n        color: var(--tui-base-08);\n        opacity: 1;\n    });\n}\n";

/***/ })

}]);