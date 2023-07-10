console.log('Compiling typescript files by tsconfig...');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        '@tinkoff/eslint-config',
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/imports',
        '@tinkoff/eslint-config-angular/promise',
        '@tinkoff/eslint-config-angular/unicorn',
        '@tinkoff/eslint-config-angular/html-eslint',
        '@tinkoff/eslint-config-angular/file-progress',
        '@tinkoff/eslint-config-angular/line-statements',
        '@tinkoff/eslint-config-angular/member-ordering',
        '@tinkoff/eslint-config-angular/decorator-position',
        '@tinkoff/eslint-config-angular/experimental',
        '@tinkoff/eslint-config-angular/function-return-type',
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
