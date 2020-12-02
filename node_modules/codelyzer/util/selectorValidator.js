"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectorPropertyBase_1 = require("../selectorPropertyBase");
exports.SelectorValidator = {
    attribute: function (selector) {
        return selector.length !== 0;
    },
    camelCase: function (selector) {
        return /^[a-zA-Z0-9\[\]]+$/.test(selector);
    },
    element: function (selector) {
        return selector !== null;
    },
    kebabCase: function (selector) {
        return /^[a-z0-9\-]+\-[a-z0-9\-]+$/.test(selector);
    },
    prefix: function (prefix, selectorStyle) {
        var regex = new RegExp("^\\[?(" + prefix + ")");
        return function (selector) {
            if (!prefix)
                return true;
            if (!regex.test(selector))
                return false;
            var suffix = selector.replace(regex, '');
            if (selectorStyle === selectorPropertyBase_1.OPTION_STYLE_CAMEL_CASE) {
                return !suffix || suffix[0] === suffix[0].toUpperCase();
            }
            else if (selectorStyle === selectorPropertyBase_1.OPTION_STYLE_KEBAB_CASE) {
                return !suffix || suffix[0] === '-';
            }
            throw Error('Invalid selector style!');
        };
    }
};
