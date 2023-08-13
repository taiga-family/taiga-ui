const sortPackageJson = require('sort-package-json');
const {parsers} = require('prettier/parser-babel');

const parser = parsers['json-stringify'];

exports.parsers = {
    'json-stringify': {
        ...parser,
        preprocess(text, options) {
            const processed = parser.preprocess ? parser.preprocess(text, options) : text;

            const isPackageJson =
                options.filepath &&
                /package\.json$|ng-package\.json$/.test(options.filepath);

            if (isPackageJson) {
                const json = JSON.parse(processed);
                const unsortedScripts = deepClone((json && json.scripts) || {});
                const sorted = sortPackageJson(json);

                /**
                 * @note: add the scripts field if it's provided
                 * the scripts must be unsorted
                 */
                // eslint-disable-next-line no-prototype-builtins
                if (json && json.hasOwnProperty('scripts')) {
                    sorted.scripts = unsortedScripts;
                }

                return JSON.stringify(sorted);
            }

            return processed;
        },
    },
};

function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}
