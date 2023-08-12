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
        'eslint-config': require('./eslint-config/index.js'),
        'eslint-config-angular-recommended': require('./eslint-config-angular/recommended/index.js'),
        'eslint-config-angular-decorator-position': require('./eslint-config-angular/decorator-position/index.js'),
        'eslint-config-angular-experimental': require('./eslint-config-angular/experimental/index.js'),
        'eslint-config-angular-file-progress': require('./eslint-config-angular/file-progress/index.js'),
        'eslint-config-angular-function-return-type': require('./eslint-config-angular/function-return-type/index.js'),
        'eslint-config-angular-html': require('./eslint-config-angular/html/index.js'),
        'eslint-config-angular-html-eslint': require('./eslint-config-angular/html-eslint/index.js'),
        'eslint-config-angular-imports': require('./eslint-config-angular/imports/index.js'),
        'eslint-config-angular-line-statements': require('./eslint-config-angular/line-statements/index.js'),
        'eslint-config-angular-member-ordering': require('./eslint-config-angular/member-ordering/index.js'),
        'eslint-config-angular-promise': require('./eslint-config-angular/promise/index.js'),
        'eslint-config-angular-rxjs': require('./eslint-config-angular/rxjs/index.js'),
        'eslint-config-angular-unicorn': require('./eslint-config-angular/unicorn/index.js'),
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
