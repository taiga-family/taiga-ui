"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var astQuery_1 = require("./astQuery");
function getAnimations(dec) {
    return astQuery_1.decoratorArgument(dec).bind(function (expr) {
        var property = expr.properties.find(function (p) { return astQuery_1.isProperty('animations', p); });
        return astQuery_1.getInitializer(property).fmap(function (expr) { return (ts.isArrayLiteralExpression(expr) ? expr : undefined); });
    });
}
exports.getAnimations = getAnimations;
function getInlineStyle(dec) {
    return astQuery_1.decoratorArgument(dec).bind(function (expr) {
        var property = expr.properties.find(function (p) { return astQuery_1.isProperty('styles', p); });
        return astQuery_1.getInitializer(property).fmap(function (expr) { return (expr && ts.isArrayLiteralExpression(expr) ? expr : undefined); });
    });
}
exports.getInlineStyle = getInlineStyle;
function getTemplate(dec) {
    return astQuery_1.decoratorArgument(dec).bind(function (expr) { return astQuery_1.getStringInitializerFromProperty('template', expr.properties); });
}
exports.getTemplate = getTemplate;
function getTemplateUrl(dec) {
    return astQuery_1.decoratorArgument(dec).bind(function (expr) { return astQuery_1.getStringInitializerFromProperty('templateUrl', expr.properties); });
}
exports.getTemplateUrl = getTemplateUrl;
