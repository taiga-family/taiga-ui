console.log('Compiling typescript files by tsconfig...');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        'plugin:@taiga-ui/eslint-plugin/eslint-config',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-recommended',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-rxjs',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-imports',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-promise',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-unicorn',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-html-eslint',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-file-progress',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-line-statements',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-member-ordering',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-decorator-position',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-experimental',
        'plugin:@taiga-ui/eslint-plugin/eslint-config-angular-function-return-type',
        'plugin:@taiga-ui/eslint-plugin/taiga',
        'plugin:@taiga-ui/eslint-plugin/no-restricted-syntax',
        'plugin:@taiga-ui/eslint-plugin/typescript',
        'plugin:@taiga-ui/eslint-plugin/ng',
        'plugin:@taiga-ui/eslint-plugin/cypress',
        'plugin:@taiga-ui/eslint-plugin/naming-convention',
        'plugin:@taiga-ui/eslint-plugin/off',
    ],
    ignorePatterns: require('@taiga-ui/eslint-plugin/configs/ignore-patterns'),
};
