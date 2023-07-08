/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    configs: {
        off: require('./configs/off.json'),
        ng: require('./configs/ng.json'),
        typescript: require('./configs/typescript.json'),
        cypress: require('./configs/cypress.json'),
        taiga: require('./configs/taiga.json'),
        'naming-convention': require('./configs/naming-convention.json'),
        'no-restricted-syntax': require('./configs/no-restricted-syntax.json'),
        /**
         * @deprecated, use taiga ruleset
         */
        all: require('./configs/taiga.json'),
    },
    rules: {
        'injection-token-description': require('./rules/injection-token-description'),
        'no-deep-imports': require('./rules/no-deep-imports'),
        'prefer-inject-decorator': require('./rules/prefer-inject-decorator'),
        'prefer-self-destroy-service': require('./rules/prefer-self-destroy-service'),
        'no-typeof': require('./rules/no-typeof'),
        'strict-tui-doc-example': require('./rules/strict-tui-doc-example'),
        'no-assert-without-ng-dev-mode': require('./rules/no-assert-without-ng-dev-mode'),
    },
};
