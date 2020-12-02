"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpTypes = {
    Binary: function (ast) {
        return ast.constructor.name === 'Binary';
    },
    Quote: function (ast) {
        return ast.constructor.name === 'Quote';
    },
    EmptyExpr: function (ast) {
        return ast.constructor.name === 'EmptyExpr';
    },
    ImplicitReceiver: function (ast) {
        return ast.constructor.name === 'ImplicitReceiver';
    },
    Chain: function (ast) {
        return ast.constructor.name === 'Chain';
    },
    Conditional: function (ast) {
        return ast.constructor.name === 'Conditional';
    },
    PropertyRead: function (ast) {
        return ast.constructor.name === 'PropertyRead';
    },
    PropertyWrite: function (ast) {
        return ast.constructor.name === 'PropertyWrite';
    },
    SafePropertyRead: function (ast) {
        return ast.constructor.name === 'SafePropertyRead';
    },
    KeyedRead: function (ast) {
        return ast.constructor.name === 'KeyedRead';
    },
    KeyedWrite: function (ast) {
        return ast.constructor.name === 'KeyedWrite';
    },
    BindingPipe: function (ast) {
        return ast.constructor.name === 'BindingPipe';
    },
    LiteralPrimitive: function (ast) {
        return ast.constructor.name === 'LiteralPrimitive';
    },
    LiteralArray: function (ast) {
        return ast.constructor.name === 'LiteralArray';
    },
    LiteralMap: function (ast) {
        return ast.constructor.name === 'LiteralMap';
    },
    Interpolation: function (ast) {
        return ast.constructor.name === 'Interpolation';
    },
    PrefixNot: function (ast) {
        return ast.constructor.name === 'PrefixNot';
    },
    MethodCall: function (ast) {
        return ast.constructor.name === 'MethodCall';
    },
    SafeMethodCall: function (ast) {
        return ast.constructor.name === 'SafeMethodCall';
    },
    FunctionCall: function (ast) {
        return ast.constructor.name === 'FunctionCall';
    },
    ASTWithSource: function (ast) {
        return ast.constructor.name === 'ASTWithSource';
    }
};
