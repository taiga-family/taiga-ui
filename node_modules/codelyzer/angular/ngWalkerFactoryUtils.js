"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadataReader_1 = require("./metadataReader");
var urlResolver_1 = require("./urlResolvers/urlResolver");
var fsFileResolver_1 = require("./fileResolver/fsFileResolver");
var basicCssAstVisitor_1 = require("./styles/basicCssAstVisitor");
var recursiveAngularExpressionVisitor_1 = require("./templates/recursiveAngularExpressionVisitor");
var basicTemplateAstVisitor_1 = require("./templates/basicTemplateAstVisitor");
var pathResolver_1 = require("./urlResolvers/pathResolver");
exports.ngWalkerFactoryUtils = {
    defaultConfig: function () {
        return {
            templateVisitorCtrl: basicTemplateAstVisitor_1.BasicTemplateAstVisitor,
            expressionVisitorCtrl: recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor,
            cssVisitorCtrl: basicCssAstVisitor_1.BasicCssAstVisitor
        };
    },
    defaultMetadataReader: function () {
        return new metadataReader_1.MetadataReader(new fsFileResolver_1.FsFileResolver(), new urlResolver_1.UrlResolver(new pathResolver_1.PathResolver()));
    },
    normalizeConfig: function (config) {
        return Object.assign(this.defaultConfig(), config || {});
    }
};
