"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors");
var ColorsDisplay = (function () {
    function ColorsDisplay() {
    }
    ColorsDisplay.init = function (configuration) {
        colors.enabled = configuration.colors.enabled;
        colors.setTheme({
            failed: configuration.colors.failed,
            pending: configuration.colors.pending,
            successful: configuration.colors.successful,
        });
    };
    return ColorsDisplay;
}());
exports.ColorsDisplay = ColorsDisplay;
//# sourceMappingURL=colors-display.js.map