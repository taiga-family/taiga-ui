/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        // TODO: warning No cached ProjectGraph is available. The rule will be skipped. @nrwl/nx/enforce-module-boundaries
        // If you encounter this error as part of running standard `nx` commands then please open an issue on
        // https://github.com/nrwl/nx
        // './scripts/eslint/nx.js',
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/html',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/promise',
    ],
    ignorePatterns: [
        'projects/**/test.ts',
        'projects/**/icons/all.ts',
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
    plugins: ['unicorn'],
    parser: '@typescript-eslint/parser',
    rules: {
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
        eqeqeq: ['error', 'always'],
        'unicorn/prefer-string-slice': 'error',
        'unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
    },
};
