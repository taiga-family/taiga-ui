const CI_MODE = process.env['TUI_CI'] === 'true';

console.log('CI mode', CI_MODE);

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        ...(CI_MODE ? ['@tinkoff/eslint-config', './scripts/eslint/ci/nx.js'] : []),
        // @default
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/html',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/imports',
        '@tinkoff/eslint-config-angular/promise',
        '@tinkoff/eslint-config-angular/file-progress',
        '@tinkoff/eslint-config-angular/line-statements',
        '@tinkoff/eslint-config-angular/member-ordering',
        '@tinkoff/eslint-config-angular/decorator-position',
        // @custom
        './scripts/eslint/common/cypress.js',
        './scripts/eslint/common/naming-convention.js',
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
    plugins: ['unicorn', '@taiga-ui/eslint-plugin'],
    parser: '@typescript-eslint/parser',
    rules: {
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'backtick'],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': [
            'error',
            {
                allowPrivateClassPropertyAccess: true,
                allowProtectedClassPropertyAccess: true,
                allowIndexSignaturePropertyAccess: true,
            },
        ],
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        'prefer-template': 'error',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
        '@taiga-ui/injection-token-description': 'error',
        '@taiga-ui/no-deep-imports': [
            'error',
            {
                currentProject: `(?<=projects/)([-\\w]+)`,
                ignoreImports: [
                    '\\?raw',
                    '@taiga-ui/testing/cypress',
                    '@taiga-ui/testing/setup-jest',
                ],
            },
        ],
        '@taiga-ui/prefer-inject-decorator': 'error',
        // TODO: move to @tinkoff/eslint-config-angular
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'eslint-comments/disable-enable-pair': 'off',
        'import/no-dynamic-require': 'off',
        'promise/catch-or-return': 'off',
        'max-nested-callbacks': 'off',
        'import/no-deprecated': 'off',
        'prefer-destructuring': 'off',
        'promise/no-nesting': 'off',
        'spaced-comment': 'off',
        'no-loop-func': 'off',
        'no-bitwise': 'off',
        curly: ['error', 'all'],
    },
};
