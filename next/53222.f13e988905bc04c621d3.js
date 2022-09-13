"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53222],{

/***/ 53222:
/***/ ((module) => {

module.exports = ".wrapper-hover(@ruleset) {\n    @media (hover: hover) {\n        &:hover:not(._no-hover),\n        &[data-state='hover'] {\n            @ruleset();\n        }\n    }\n}\n\n.wrapper-active(@ruleset) {\n    &:active:not(._no-active),\n    &[data-state='active'],\n    &[data-state='active']:hover {\n        @ruleset();\n    }\n}\n\n.wrapper-readonly(@ruleset, @native: false) {\n    // Specificity artificially increased to match `:hover:not()` level\n    & when (@native = true) {\n        &:read-only:read-only,\n        &[data-state='readonly'][data-state='readonly'] {\n            @ruleset();\n        }\n    }\n\n    & when (@native = false) {\n        &[data-state='readonly'][data-state='readonly'] {\n            @ruleset();\n        }\n    }\n}\n\n.wrapper-disabled(@ruleset) {\n    // Specificity artificially increased to match `:hover:not()` level\n    &:disabled:disabled,\n    &[data-state='disabled'][data-state='disabled'] {\n        @ruleset();\n    }\n}\n\n.wrapper-focus(@ruleset) {\n    // TODO: Join rules together once all browsers support focus-visible\n    // Specificity artificially increased to match `:hover:not()` level\n    &:focus-visible:focus-visible {\n        @ruleset();\n    }\n\n    &._focused._focused {\n        @ruleset();\n    }\n}\n\n.wrapper-invalid(@ruleset) {\n    &:invalid:invalid,\n    &._invalid._invalid {\n        @ruleset();\n    }\n}\n";

/***/ })

}]);