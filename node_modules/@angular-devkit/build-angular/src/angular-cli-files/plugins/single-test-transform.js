"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_utils_1 = require("loader-utils");
const path_1 = require("path");
exports.SingleTestTransformLoader = require.resolve(path_1.join(__dirname, 'single-test-transform'));
/**
 * This loader transforms the default test file to only run tests
 * for some specs instead of all specs.
 * It works by replacing the known content of the auto-generated test file:
 *   const context = require.context('./', true, /\.spec\.ts$/);
 *   context.keys().map(context);
 * with:
 *   const context = { keys: () => ({ map: (_a) => { } }) };
 *   context.keys().map(context);
 * So that it does nothing.
 * Then it adds import statements for each file in the files options
 * array to import them directly, and thus run the tests there.
 */
function loader(source) {
    const options = loader_utils_1.getOptions(this);
    const lineSeparator = process.platform === 'win32' ? '\r\n' : '\n';
    const targettedImports = options.files
        .map(path => `require('./${path.replace('.' + path_1.extname(path), '')}');`)
        .join(lineSeparator);
    // TODO: maybe a documented 'marker/comment' inside test.ts would be nicer?
    const regex = /require\.context\(.*/;
    // signal the user that expected content is not present
    if (!regex.test(source)) {
        const message = [
            `The 'include' option requires that the 'main' file for tests include the line below:`,
            `const context = require.context('./', true, /\.spec\.ts$/);`,
            `Arguments passed to require.context are not strict and can be changed`,
        ];
        options.logger.error(message.join(lineSeparator));
    }
    const mockedRequireContext = 'Object.assign(() => { }, { keys: () => [], resolve: () => undefined });' + lineSeparator;
    source = source.replace(regex, mockedRequireContext + targettedImports);
    return source;
}
exports.default = loader;
