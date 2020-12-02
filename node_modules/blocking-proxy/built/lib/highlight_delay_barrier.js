"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const webdriver_commands_1 = require("./webdriver_commands");
const HIGHLIGHT_COMMAND = [webdriver_commands_1.CommandName.ElementClick, webdriver_commands_1.CommandName.ElementSendKeys, webdriver_commands_1.CommandName.ElementClear];
let clientScripts = require('./client_scripts/highlight.js');
/**
 * A barrier that delays forwarding WebDriver commands that can affect the app (ie, clicks or
 * sending text) for a fixed amount of time. During the delay, the element that's the target
 * of the command will be highlighted by drawing a transparent div on top of it.
 */
class HighlightDelayBarrier {
    constructor(client, delay) {
        this.client = client;
        this.delay = delay;
    }
    isHighlightCommand(command) {
        return HIGHLIGHT_COMMAND.indexOf(command.commandName) !== -1;
    }
    highlightData(top, left, width, height) {
        return JSON.stringify({
            script: 'return (' + clientScripts.HIGHLIGHT_FN + ').apply(null, arguments);',
            args: [top, left, width, height]
        });
    }
    removeHighlightData() {
        return JSON.stringify({
            script: 'return (' + clientScripts.REMOVE_HIGHLIGHT_FN + ').apply(null, arguments);',
            args: []
        });
    }
    // Simple promise-based sleep so we can use async/await
    sleep(delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
    onCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isHighlightCommand(command) || !this.delay) {
                return;
            }
            const sessId = command.sessionId;
            const el = command.getParam('elementId');
            // The W3C spec does have a 'getRect', but the standalone server doesn't support it yet.
            const loc = yield this.client.getLocation(sessId, el);
            const size = yield this.client.getSize(sessId, el);
            // Set the highlight
            yield this.client.execute(sessId, this.highlightData(loc['y'], loc['x'], size['width'], size['height']));
            // Wait
            yield this.sleep(this.delay);
            // Clear the highlight
            yield this.client.execute(sessId, this.removeHighlightData());
        });
    }
}
exports.HighlightDelayBarrier = HighlightDelayBarrier;
//# sourceMappingURL=highlight_delay_barrier.js.map