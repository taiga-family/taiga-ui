"use strict";
/**
 * Custom chromium commands
 *
 * In this file we define all the custom commands which are part of the chromium API but will probably
 * never be part of the webdriver spec or JsonWireProtocol.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
exports.chromium = {
    sendChromiumCommand: helpers_1.noopFactory('chromium/send_command'),
    sendChromiumCommandAndGetResult: helpers_1.noopFactory('chromium/send_command_and_get_result')
};
//# sourceMappingURL=chromium.js.map