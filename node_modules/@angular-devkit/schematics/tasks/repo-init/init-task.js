"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
class RepositoryInitializerTask {
    constructor(workingDirectory, commitOptions) {
        this.workingDirectory = workingDirectory;
        this.commitOptions = commitOptions;
    }
    toConfiguration() {
        return {
            name: options_1.RepositoryInitializerName,
            options: {
                commit: !!this.commitOptions,
                workingDirectory: this.workingDirectory,
                authorName: this.commitOptions && this.commitOptions.name,
                authorEmail: this.commitOptions && this.commitOptions.email,
                message: this.commitOptions && this.commitOptions.message,
            },
        };
    }
}
exports.RepositoryInitializerTask = RepositoryInitializerTask;
