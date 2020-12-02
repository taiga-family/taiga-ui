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
var ts = require("typescript");
var config_1 = require("../config");
var abstractResolver_1 = require("./abstractResolver");
var path_1 = require("path");
var UrlResolver = (function (_super) {
    __extends(UrlResolver, _super);
    function UrlResolver(pathResolver) {
        var _this = _super.call(this) || this;
        _this.pathResolver = pathResolver;
        return _this;
    }
    UrlResolver.prototype.resolve = function (d) {
        var _this = this;
        var templateUrl = this.getTemplateUrl(d);
        var styleUrls = this.getStyleUrls(d);
        var targetPath = this.getProgramFilePath(d);
        if (targetPath) {
            var componentPath_1 = path_1.dirname(targetPath);
            return {
                templateUrl: config_1.Config.resolveUrl(this.pathResolver.resolve(templateUrl, componentPath_1)),
                styleUrls: styleUrls.map(function (p) {
                    return config_1.Config.resolveUrl(_this.pathResolver.resolve(p, componentPath_1));
                })
            };
        }
        return {
            templateUrl: config_1.Config.resolveUrl(null),
            styleUrls: []
        };
    };
    UrlResolver.prototype.getProgramFilePath = function (d) {
        var current = d;
        while (current) {
            if (current.kind === ts.SyntaxKind.SourceFile) {
                return current.path || current.fileName;
            }
            current = current.parent;
        }
        return undefined;
    };
    return UrlResolver;
}(abstractResolver_1.AbstractResolver));
exports.UrlResolver = UrlResolver;
