"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFileContent(tree, path) {
    const fileEntry = tree.get(path);
    if (!fileEntry) {
        throw new Error(`The file (${path}) does not exist.`);
    }
    return fileEntry.content.toString();
}
exports.getFileContent = getFileContent;
