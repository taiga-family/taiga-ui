"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
var path_1 = require("path");
var child_process_1 = require("child_process");
var chalk_1 = require("chalk");
if (!yargs_1.argv.p) {
    console.log(chalk_1.default.red('Provide path to your `tsconfig` file using the `-p` flag.'));
    process.exit(1);
}
var command = '"' + path_1.join(__dirname, 'node_modules', '.bin', 'tslint') + '"' +
    ' -c ' +
    '"' + path_1.join(__dirname, 'rxjs-5-to-6-migrate.json') + '"' +
    ' -p ' +
    '"' + yargs_1.argv.p + '"' +
    ' --fix';
var migrate = function () {
    var errors = '';
    try {
        errors = child_process_1.execSync(command).toString() || '';
    }
    catch (e) {
        console.error('Error while running the migration:', e.output.toString());
        process.exit(1);
    }
    if (errors.indexOf('WARNING:') >= 0) {
        return errors + migrate();
    }
    return '';
};
process.stdout.write(chalk_1.default.yellow('Running the automatic migrations. Please, be patient and wait until the execution completes.\n'));
var errors = migrate();
if (errors) {
    process.stdout.write(chalk_1.default.blue('Found and fixed the following deprecations:\n'));
    process.stdout.write(chalk_1.default.yellow("\n" + errors));
}
else {
    process.stdout.write(chalk_1.default.blue('Cannot find any possible migrations\n'));
}
