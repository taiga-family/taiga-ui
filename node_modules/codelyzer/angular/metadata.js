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
var DirectiveMetadata = (function () {
    function DirectiveMetadata(controller, decorator, selector) {
        this.controller = controller;
        this.decorator = decorator;
        this.selector = selector;
    }
    return DirectiveMetadata;
}());
exports.DirectiveMetadata = DirectiveMetadata;
var ComponentMetadata = (function (_super) {
    __extends(ComponentMetadata, _super);
    function ComponentMetadata(controller, decorator, selector, animations, styles, template) {
        var _this = _super.call(this, controller, decorator, selector) || this;
        _this.controller = controller;
        _this.decorator = decorator;
        _this.selector = selector;
        _this.animations = animations;
        _this.styles = styles;
        _this.template = template;
        return _this;
    }
    return ComponentMetadata;
}(DirectiveMetadata));
exports.ComponentMetadata = ComponentMetadata;
var PipeMetadata = (function () {
    function PipeMetadata(controller, decorator, name, pure) {
        this.controller = controller;
        this.decorator = decorator;
        this.name = name;
        this.pure = pure;
    }
    return PipeMetadata;
}());
exports.PipeMetadata = PipeMetadata;
var ModuleMetadata = (function () {
    function ModuleMetadata(controller, decorator) {
        this.controller = controller;
        this.decorator = decorator;
    }
    return ModuleMetadata;
}());
exports.ModuleMetadata = ModuleMetadata;
var InjectableMetadata = (function () {
    function InjectableMetadata(controller, decorator, providedIn) {
        this.controller = controller;
        this.decorator = decorator;
        this.providedIn = providedIn;
    }
    return InjectableMetadata;
}());
exports.InjectableMetadata = InjectableMetadata;
