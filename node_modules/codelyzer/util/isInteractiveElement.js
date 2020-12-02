"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aria_query_1 = require("aria-query");
var axobject_query_1 = require("axobject-query");
var attributesComparator_1 = require("./attributesComparator");
var domKeys = Array.from(aria_query_1.dom.keys());
var roleKeys = Array.from(aria_query_1.roles.keys());
var elementRoleEntries = Array.from(aria_query_1.elementRoles);
var nonInteractiveRoles = new Set(roleKeys.filter(function (name) {
    var role = aria_query_1.roles.get(name);
    return !role.abstract && !role.superClass.some(function (classes) { return classes.indexOf('widget') !== 0; });
}));
var interactiveRoles = new Set(__spreadArrays(roleKeys, [
    'toolbar'
]).filter(function (name) {
    var role = aria_query_1.roles.get(name);
    return !role.abstract && role.superClass.some(function (classes) { return classes.indexOf('widget') !== 0; });
}));
var nonInteractiveElementRoleSchemas = elementRoleEntries.reduce(function (accumulator, _a) {
    var elementSchema = _a[0], roleSet = _a[1];
    if (Array.from(roleSet).every(function (role) { return nonInteractiveRoles.has(role); })) {
        accumulator.push(elementSchema);
    }
    return accumulator;
}, []);
var interactiveElementRoleSchemas = elementRoleEntries.reduce(function (accumulator, _a) {
    var elementSchema = _a[0], roleSet = _a[1];
    if (Array.from(roleSet).some(function (role) { return interactiveRoles.has(role); })) {
        accumulator.push(elementSchema);
    }
    return accumulator;
}, []);
var interactiveAXObjects = new Set(Array.from(axobject_query_1.AXObjects.keys()).filter(function (name) { return axobject_query_1.AXObjects.get(name).type === 'widget'; }));
var interactiveElementAXObjectSchemas = Array.from(axobject_query_1.elementAXObjects).reduce(function (accumulator, _a) {
    var elementSchema = _a[0], AXObjectSet = _a[1];
    if (Array.from(AXObjectSet).every(function (role) { return interactiveAXObjects.has(role); })) {
        accumulator.push(elementSchema);
    }
    return accumulator;
}, []);
function checkIsInteractiveElement(el) {
    function elementSchemaMatcher(elementSchema) {
        return el.name === elementSchema.name && attributesComparator_1.attributesComparator(elementSchema.attributes, el);
    }
    var isInherentInteractiveElement = interactiveElementRoleSchemas.some(elementSchemaMatcher);
    if (isInherentInteractiveElement) {
        return true;
    }
    var isInherentNonInteractiveElement = nonInteractiveElementRoleSchemas.some(elementSchemaMatcher);
    if (isInherentNonInteractiveElement) {
        return false;
    }
    var isInteractiveAXElement = interactiveElementAXObjectSchemas.some(elementSchemaMatcher);
    if (isInteractiveAXElement) {
        return true;
    }
    return false;
}
exports.isInteractiveElement = function (el) {
    if (domKeys.indexOf(el.name) === -1) {
        return false;
    }
    return checkIsInteractiveElement(el);
};
