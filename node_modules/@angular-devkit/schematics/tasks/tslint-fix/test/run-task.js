"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks"); // tslint:disable-line:no-implicit-dependencies
function default_1() {
    return (_, context) => {
        context.addTask(new tasks_1.TslintFixTask({
            rules: {
                'max-line-length': [true, 80],
            },
        }, {
            includes: '*.ts',
            silent: false,
        }));
    };
}
exports.default = default_1;
