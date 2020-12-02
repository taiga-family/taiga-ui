"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginModuleCache = /** @class */ (function () {
    function PluginModuleCache() {
        this.totalCache = {};
        this.chunkCache = {};
        this.chunkSeenCache = {};
    }
    PluginModuleCache.prototype.registerModule = function (chunkName, module) {
        this.totalCache[module.name] = module;
        if (!this.chunkCache[chunkName]) {
            this.chunkCache[chunkName] = {};
        }
        this.chunkCache[chunkName][module.name] = module;
    };
    PluginModuleCache.prototype.getModule = function (packageName) {
        return this.totalCache[packageName] || null;
    };
    PluginModuleCache.prototype.markSeenForChunk = function (chunkName, packageName) {
        if (!this.chunkSeenCache[chunkName]) {
            this.chunkSeenCache[chunkName] = {};
        }
        this.chunkSeenCache[chunkName][packageName] = true;
    };
    PluginModuleCache.prototype.alreadySeenForChunk = function (chunkName, packageName) {
        return !!(this.chunkSeenCache[chunkName] &&
            this.chunkSeenCache[chunkName][packageName]);
    };
    PluginModuleCache.prototype.getAllModulesForChunk = function (chunkName) {
        var modules = [];
        var cache = this.chunkCache[chunkName];
        if (cache) {
            Object.keys(cache).forEach(function (key) {
                modules.push(cache[key]);
            });
        }
        return modules;
    };
    PluginModuleCache.prototype.getAllModules = function () {
        var _this = this;
        var modules = [];
        Object.keys(this.totalCache).forEach(function (key) {
            modules.push(_this.totalCache[key]);
        });
        return modules;
    };
    return PluginModuleCache;
}());
exports.PluginModuleCache = PluginModuleCache;
