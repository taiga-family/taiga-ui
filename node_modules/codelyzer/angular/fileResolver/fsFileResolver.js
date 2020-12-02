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
var fs_1 = require("fs");
var fileResolver_1 = require("./fileResolver");
var FsFileResolver = (function (_super) {
    __extends(FsFileResolver, _super);
    function FsFileResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FsFileResolver.prototype.resolve = function (path) {
        return fs_1.readFileSync(path).toString();
    };
    return FsFileResolver;
}(fileResolver_1.FileResolver));
exports.FsFileResolver = FsFileResolver;
