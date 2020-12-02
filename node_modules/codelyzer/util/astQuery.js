"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var function_1 = require("./function");
var utils_1 = require("./utils");
function callExpression(dec) {
    return function_1.Maybe.lift(dec.expression).fmap(function (expr) { return (expr && ts.isCallExpression(expr) ? expr : undefined); });
}
exports.callExpression = callExpression;
function hasProperties(expr) {
    return !!(expr && expr.properties);
}
exports.hasProperties = hasProperties;
function objectLiteralExpression(expr) {
    return function_1.Maybe.lift(expr.arguments[0]).fmap(function (arg0) { return (arg0 && ts.isObjectLiteralExpression(arg0) ? arg0 : undefined); });
}
exports.objectLiteralExpression = objectLiteralExpression;
function withIdentifier(identifier) {
    return function_1.ifTrue(function (expr) { return ts.isIdentifier(expr.expression) && expr.expression.text === identifier; });
}
exports.withIdentifier = withIdentifier;
function isProperty(propName, p) {
    return ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === propName;
}
exports.isProperty = isProperty;
function getInitializer(p) {
    return function_1.Maybe.lift(p && ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) ? p.initializer : undefined);
}
exports.getInitializer = getInitializer;
function getStringInitializerFromProperty(propertyName, ps) {
    var property = ps.find(function (p) { return isProperty(propertyName, p); });
    return (getInitializer(property)
        .fmap(function (expr) { return (expr && utils_1.isStringLiteralLike(expr) ? expr : undefined); }));
}
exports.getStringInitializerFromProperty = getStringInitializerFromProperty;
function decoratorArgument(dec) {
    return function_1.Maybe.lift(dec)
        .bind(callExpression)
        .bind(objectLiteralExpression);
}
exports.decoratorArgument = decoratorArgument;
