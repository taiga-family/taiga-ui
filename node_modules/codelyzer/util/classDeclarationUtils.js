"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
exports.getDeclaredProperties = function (declaration) {
    var members = declaration.members;
    var ctr = members.find(ts.isConstructorDeclaration);
    var params = (ctr ? ctr.parameters.filter(ts.isParameter) : []);
    return members.filter(function (x) { return ts.isPropertyDeclaration(x) || ts.isGetAccessor(x) || ts.isSetAccessor(x); }).concat(params);
};
exports.getDeclaredPropertyNames = function (declaration) {
    return exports.getDeclaredProperties(declaration)
        .filter(function (p) { return p.name && ts.isIdentifier(p.name); })
        .map(function (p) { return p.name.text; })
        .reduce(function (accum, p) {
        accum[p] = true;
        return accum;
    }, {});
};
exports.getDeclaredMethods = function (declaration) {
    return declaration.members.filter(ts.isMethodDeclaration);
};
exports.getDeclaredMethodNames = function (declaration) {
    return exports.getDeclaredMethods(declaration)
        .map(function (d) { return d.name.text; })
        .reduce(function (accum, m) {
        accum[m] = true;
        return accum;
    }, {});
};
