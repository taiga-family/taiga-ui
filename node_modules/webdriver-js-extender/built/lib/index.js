"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandDefinitions = require("./command_definitions");
const extender_1 = require("./extender");
function extend(baseDriver, fallbackGracefully = false) {
    var extender = new extender_1.Extender(baseDriver);
    let extendedDriver = baseDriver;
    for (let commandName in commandDefinitions) {
        extendedDriver[commandName] =
            commandDefinitions[commandName].compile(extender, fallbackGracefully);
    }
    return extendedDriver;
}
exports.extend = extend;
//# sourceMappingURL=index.js.map