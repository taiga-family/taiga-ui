"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAttributeValue_1 = require("./getAttributeValue");
var getLiteralValue_1 = require("./getLiteralValue");
exports.PROPERTY = ['PROPERTY'];
exports.isHiddenFromScreenReader = function (el) {
    if (el.name.toUpperCase() === 'INPUT') {
        var hidden = getAttributeValue_1.getAttributeValue(el, 'type');
        if (hidden && hidden.toUpperCase() === 'HIDDEN') {
            return true;
        }
    }
    var ariaHidden = getLiteralValue_1.getLiteralValue(getAttributeValue_1.getAttributeValue(el, 'aria-hidden'));
    return ariaHidden === exports.PROPERTY || ariaHidden === true;
};
