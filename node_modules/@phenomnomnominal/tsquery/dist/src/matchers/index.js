"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Matches:
var attribute_1 = require("./attribute");
var child_1 = require("./child");
var class_1 = require("./class");
var descendant_1 = require("./descendant");
var field_1 = require("./field");
var has_1 = require("./has");
var identifier_1 = require("./identifier");
var matches_1 = require("./matches");
var not_1 = require("./not");
var nth_child_1 = require("./nth-child");
var sibling_1 = require("./sibling");
var wildcard_1 = require("./wildcard");
exports.MATCHERS = {
    adjacent: sibling_1.adjacent,
    attribute: attribute_1.attribute,
    child: child_1.child,
    compound: matches_1.matches('every'),
    'class': class_1.classs,
    descendant: descendant_1.descendant,
    field: field_1.field,
    'nth-child': nth_child_1.nthChild,
    'nth-last-child': nth_child_1.nthLastChild,
    has: has_1.has,
    identifier: identifier_1.identifier,
    matches: matches_1.matches('some'),
    not: not_1.not,
    sibling: sibling_1.sibling,
    wildcard: wildcard_1.wildcard
};
//# sourceMappingURL=index.js.map