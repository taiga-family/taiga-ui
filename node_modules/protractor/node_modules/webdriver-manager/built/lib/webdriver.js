"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const cli_instance_1 = require("./cli_instance");
let minimistOptions = cli_instance_1.cli.getMinimistOptions();
let argv = minimist(process.argv.slice(2), minimistOptions);
let cmd = argv._;
if (cli_instance_1.cli.programs[cmd[0]]) {
    if (cmd[0] === 'help') {
        cli_instance_1.cli.printHelp();
    }
    else if (cmd[1] === 'help' || argv['help'] || argv['h']) {
        cli_instance_1.cli.programs[cmd[0]].printHelp();
    }
    else {
        cli_instance_1.cli.programs[cmd[0]].run(JSON.parse(JSON.stringify(argv)));
    }
}
else {
    cli_instance_1.cli.printHelp();
}
//# sourceMappingURL=webdriver.js.map