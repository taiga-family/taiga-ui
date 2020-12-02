"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../../utility/dependencies");
const json_utils_1 = require("../../utility/json-utils");
const utils_1 = require("../update-9/utils");
exports.TSLINT_VERSION = '~6.1.0';
const TSLINT_CONFIG_PATH = '/tslint.json';
const RULES_TO_DELETE = [
    'no-use-before-declare',
    'no-unused-variable',
];
const RULES_TO_ADD = {
    align: {
        options: ['parameters', 'statements'],
    },
    'arrow-return-shorthand': true,
    curly: true,
    eofline: true,
    'import-spacing': true,
    indent: {
        options: ['spaces'],
    },
    'variable-name': {
        options: ['ban-keywords', 'check-format', 'allow-pascal-case'],
    },
    semicolon: { options: ['always'] },
    'space-before-function-paren': {
        options: {
            anonymous: 'never',
            asyncArrow: 'always',
            constructor: 'never',
            method: 'never',
            named: 'never',
        },
    },
    'typedef-whitespace': {
        options: [
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                parameter: 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace',
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                parameter: 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace',
            },
        ],
    },
    whitespace: {
        options: [
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
            'check-typecast',
        ],
    },
};
function default_1() {
    return (tree, context) => {
        const logger = context.logger;
        // Update tslint dependency
        const current = dependencies_1.getPackageJsonDependency(tree, 'tslint');
        if (!current) {
            logger.info('"tslint" in not a dependency of this workspace.');
            return;
        }
        if (current.version !== exports.TSLINT_VERSION) {
            dependencies_1.addPackageJsonDependency(tree, {
                type: current.type,
                name: 'tslint',
                version: exports.TSLINT_VERSION,
                overwrite: true,
            });
        }
        // Update tslint config.
        const tslintJsonAst = utils_1.readJsonFileAsAstObject(tree, TSLINT_CONFIG_PATH);
        if (!tslintJsonAst) {
            const config = ['tslint.js', 'tslint.yaml'].find(c => tree.exists(c));
            if (config) {
                logger.warn(`Expected a JSON configuration file but found "${config}".`);
            }
            else {
                logger.warn('Cannot find "tslint.json" configuration file.');
            }
            return;
        }
        // Remove old/deprecated rules.
        for (const rule of RULES_TO_DELETE) {
            const tslintJsonAst = utils_1.readJsonFileAsAstObject(tree, TSLINT_CONFIG_PATH);
            const rulesAst = json_utils_1.findPropertyInAstObject(tslintJsonAst, 'rules');
            if ((rulesAst === null || rulesAst === void 0 ? void 0 : rulesAst.kind) !== 'object') {
                break;
            }
            const recorder = tree.beginUpdate(TSLINT_CONFIG_PATH);
            json_utils_1.removePropertyInAstObject(recorder, rulesAst, rule);
            tree.commitUpdate(recorder);
        }
        // Add new rules only iif the configuration extends 'tslint:recommended'.
        // This is because some rules conflict with prettier or other tools.
        const extendsAst = json_utils_1.findPropertyInAstObject(tslintJsonAst, 'extends');
        if (!extendsAst ||
            (extendsAst.kind === 'string' && extendsAst.value !== 'tslint:recommended') ||
            (extendsAst.kind === 'array' && extendsAst.elements.some(e => e.value !== 'tslint:recommended'))) {
            logger.warn(`tslint configuration does not extend "tslint:recommended" or it extends multiple configurations.`
                + '\nSkipping rule changes as some rules might conflict.');
            return;
        }
        for (const [name, value] of Object.entries(RULES_TO_ADD)) {
            const tslintJsonAst = utils_1.readJsonFileAsAstObject(tree, TSLINT_CONFIG_PATH);
            const rulesAst = json_utils_1.findPropertyInAstObject(tslintJsonAst, 'rules');
            if ((rulesAst === null || rulesAst === void 0 ? void 0 : rulesAst.kind) !== 'object') {
                break;
            }
            if (json_utils_1.findPropertyInAstObject(rulesAst, name)) {
                // Skip as rule already exists.
                continue;
            }
            const recorder = tree.beginUpdate(TSLINT_CONFIG_PATH);
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, rulesAst, name, value, 4);
            tree.commitUpdate(recorder);
        }
    };
}
exports.default = default_1;
