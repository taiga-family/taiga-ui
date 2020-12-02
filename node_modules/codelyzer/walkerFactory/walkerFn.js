"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ngWalker_1 = require("../angular/ngWalker");
var function_1 = require("../util/function");
function validate(syntaxKind) {
    return function (validateFn) { return ({
        kind: 'Node',
        validate: function (node, options) { return (node.kind === syntaxKind ? validateFn(node, options) : function_1.Maybe.nothing); }
    }); };
}
exports.validate = validate;
function validateComponent(validate) {
    return {
        kind: 'NgComponent',
        validate: validate
    };
}
exports.validateComponent = validateComponent;
function all() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (sourceFile, options) {
        var e = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visitNgComponent = function (meta) {
                var _this = this;
                validators.forEach(function (v) {
                    if (v.kind === 'NgComponent') {
                        v.validate(meta, _this.getOptions()).fmap(function (failures) { return failures.forEach(function (f) { return _this.generateFailure(f); }); });
                    }
                });
                _super.prototype.visitNgComponent.call(this, meta);
            };
            class_1.prototype.visitNode = function (node) {
                var _this = this;
                validators.forEach(function (v) {
                    if (v.kind === 'Node') {
                        v.validate(node, _this.getOptions()).fmap(function (failures) { return failures.forEach(function (f) { return _this.generateFailure(f); }); });
                    }
                });
                _super.prototype.visitNode.call(this, node);
            };
            class_1.prototype.generateFailure = function (failure) {
                this.addFailureAtNode(failure.node, failure.message);
            };
            return class_1;
        }(ngWalker_1.NgWalker));
        return new e(sourceFile, options);
    };
}
exports.all = all;
