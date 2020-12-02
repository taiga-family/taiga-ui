"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks"); // tslint:disable-line:no-implicit-dependencies
const path = require("path");
function default_1(options) {
    return (_, context) => {
        context.addTask(new tasks_1.TslintFixTask({
            rulesDirectory: path.join(__dirname, 'rules'),
            rules: {
                'custom-rule': [true, options.shouldPass],
            },
        }, {
            includes: '*.ts',
            silent: false,
        }));
    };
}
exports.default = default_1;
