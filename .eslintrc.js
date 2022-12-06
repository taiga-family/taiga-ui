const CI_MODE = process.env['TUI_CI'] === 'true';

console.log('CI mode', CI_MODE);

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        // @default
        ...(CI_MODE ? ['@tinkoff/eslint-config', './scripts/eslint/ci/nx.js'] : []),
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/html',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/imports',
        '@tinkoff/eslint-config-angular/promise',
        '@tinkoff/eslint-config-angular/unicorn',
        '@tinkoff/eslint-config-angular/file-progress',
        '@tinkoff/eslint-config-angular/line-statements',
        '@tinkoff/eslint-config-angular/member-ordering',
        '@tinkoff/eslint-config-angular/decorator-position',
        '@tinkoff/eslint-config-angular/experimental',
        '@tinkoff/eslint-config-angular/function-return-type',
        // @custom
        './scripts/eslint/common/off.js',
        './scripts/eslint/common/cypress.js',
        './scripts/eslint/common/naming-convention.js',
        // @taiga
        'plugin:@taiga-ui/eslint-plugin/all',
    ],
    ignorePatterns: [
        'projects/**/icons/all.ts',
        '404.html',
        '*.js',
        '*.json',
        '*.less',
        '*.md',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/quotes': ['error', 'backtick'],
    },
};
