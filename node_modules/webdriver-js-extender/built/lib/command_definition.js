"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class CommandDefinition {
    constructor(name, params, method, path, preprocessParams = (x) => x) {
        this.name = name;
        this.params = params;
        this.method = method;
        this.path = path;
        this.preprocessParams = preprocessParams;
    }
    compile(extender, silentFailure) {
        try {
            extender.defineCommand(this.name, this.params, this.method, path_1.posix.join('/session/:sessionId', this.path));
            return (...args) => {
                return extender.execCommand(this.name, this.method, this.preprocessParams(args));
            };
        }
        catch (e) {
            if (silentFailure) {
                return (...args) => {
                    throw new Error('Command "' + this.name + '" could not be extended onto WebDriver instance. ' +
                        'This is generally a result of using `directConnect` in protractor.');
                };
            }
            else {
                throw e;
            }
        }
    }
}
exports.CommandDefinition = CommandDefinition;
//# sourceMappingURL=command_definition.js.map