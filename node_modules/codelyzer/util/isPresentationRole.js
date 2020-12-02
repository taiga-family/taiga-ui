"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAttributeValue_1 = require("./getAttributeValue");
var isHiddenFromScreenReader_1 = require("./isHiddenFromScreenReader");
var presentationRoles = new Set(['presentation', 'none', isHiddenFromScreenReader_1.PROPERTY]);
exports.isPresentationRole = function (el) { return presentationRoles.has(getAttributeValue_1.getAttributeValue(el, 'role')); };
