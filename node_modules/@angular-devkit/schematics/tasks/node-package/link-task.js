"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
class NodePackageLinkTask {
    constructor(packageName, workingDirectory) {
        this.packageName = packageName;
        this.workingDirectory = workingDirectory;
        this.quiet = true;
    }
    toConfiguration() {
        return {
            name: options_1.NodePackageName,
            options: {
                command: 'link',
                quiet: this.quiet,
                workingDirectory: this.workingDirectory,
                packageName: this.packageName,
            },
        };
    }
}
exports.NodePackageLinkTask = NodePackageLinkTask;
