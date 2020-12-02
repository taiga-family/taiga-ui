"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
const clean = require("./cmds/clean");
const shutdown = require("./cmds/shutdown");
const start = require("./cmds/start");
const status = require("./cmds/status");
const update = require("./cmds/update");
const version = require("./cmds/version");
exports.cli = new cli_1.Cli()
    .usage('webdriver-manager <command> [options]')
    .program(clean.program)
    .program(start.program)
    .program(shutdown.program)
    .program(status.program)
    .program(update.program)
    .program(version.program);
//# sourceMappingURL=cli_instance.js.map