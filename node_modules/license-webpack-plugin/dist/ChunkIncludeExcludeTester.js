"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChunkIncludeExcludeTester = /** @class */ (function () {
    function ChunkIncludeExcludeTester(includeExcludeTest) {
        this.includeExcludeTest = includeExcludeTest;
    }
    ChunkIncludeExcludeTester.prototype.isIncluded = function (chunkName) {
        if (typeof this.includeExcludeTest === 'function') {
            return this.includeExcludeTest(chunkName);
        }
        // only include
        if (this.includeExcludeTest.include && !this.includeExcludeTest.exclude) {
            return this.includeExcludeTest.include.indexOf(chunkName) > -1;
        }
        // only exclude
        if (this.includeExcludeTest.exclude && !this.includeExcludeTest.include) {
            // included as long as it's not excluded
            return !(this.includeExcludeTest.exclude.indexOf(chunkName) > -1);
        }
        // include and exclude together
        if (this.includeExcludeTest.include && this.includeExcludeTest.exclude) {
            return (!(this.includeExcludeTest.exclude.indexOf(chunkName) > -1) &&
                this.includeExcludeTest.include.indexOf(chunkName) > -1);
        }
        return true;
    };
    return ChunkIncludeExcludeTester;
}());
exports.ChunkIncludeExcludeTester = ChunkIncludeExcludeTester;
