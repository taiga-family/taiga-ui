"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = require("typescript");
var utils_1 = require("../../util/utils");
var AbstractResolver = (function () {
    function AbstractResolver() {
    }
    AbstractResolver.prototype.getTemplateUrl = function (decorator) {
        var templateUrlExpression = utils_1.getDecoratorPropertyInitializer(decorator, 'templateUrl');
        if (!templateUrlExpression || !utils_1.isStringLiteralLike(templateUrlExpression))
            return undefined;
        return templateUrlExpression.text;
    };
    AbstractResolver.prototype.getStyleUrls = function (decorator) {
        var styleUrlsExpression = utils_1.getDecoratorPropertyInitializer(decorator, 'styleUrls');
        if (!styleUrlsExpression || !typescript_1.isArrayLiteralExpression(styleUrlsExpression))
            return [];
        return styleUrlsExpression.elements.filter(utils_1.isStringLiteralLike).map(function (element) { return element.text; });
    };
    return AbstractResolver;
}());
exports.AbstractResolver = AbstractResolver;
