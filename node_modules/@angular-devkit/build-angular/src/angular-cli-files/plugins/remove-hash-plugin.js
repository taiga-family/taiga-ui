"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveHashPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('remove-hash-plugin', compilation => {
            const mainTemplate = compilation.mainTemplate;
            mainTemplate.hooks.assetPath.tap('remove-hash-plugin', (path, data) => {
                const chunkName = data.chunk && data.chunk.name;
                const { chunkNames, hashFormat } = this.options;
                if (chunkName && chunkNames.includes(chunkName)) {
                    // Replace hash formats with empty strings.
                    return path
                        .replace(hashFormat.chunk, '')
                        .replace(hashFormat.extract, '');
                }
                return path;
            });
        });
    }
}
exports.RemoveHashPlugin = RemoveHashPlugin;
