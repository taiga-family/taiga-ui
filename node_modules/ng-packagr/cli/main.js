#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const path = require("path");
const updateNotifier = require("update-notifier");
const readPkgUp = require("read-pkg-up");
const public_api_1 = require("../public_api");
const DEFAULT_PROJECT_PATH = path.resolve(process.cwd(), 'ng-package.json');
function parseProjectPath(parsed) {
    return parsed || DEFAULT_PROJECT_PATH;
}
program
    .name('ng-packagr')
    .option('-V, --version', 'Prints version info')
    .option('-w, --watch', 'Watch for file changes')
    .option('-p, --project [path]', "Path to the 'ng-package.json' or 'package.json' file.", parseProjectPath, DEFAULT_PROJECT_PATH)
    .option('-c, --config [config]', 'Path to a tsconfig file.', (value) => value ? path.resolve(value) : undefined);
const dir = path.dirname(module.filename);
const pkg = readPkgUp.sync({ cwd: dir }).pkg;
updateNotifier({ pkg }).notify();
program.on('option:version', () => {
    public_api_1.version(pkg);
    process.exit(0);
});
program.parse(process.argv);
const { config, project, watch } = program.opts();
public_api_1.execute(public_api_1.build, { config, project, watch: !!watch }).catch(() => process.exit(111));
//# sourceMappingURL=main.js.map