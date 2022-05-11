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
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/await-thenable': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        'prefer-template': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {default: 'array', readonly: 'array-simple'},
        ],
        'rxjs/no-compat': 'error',
        'rxjs/no-connectable': 'error',
        'rxjs/no-cyclic-action': 'error',
        'rxjs/no-ignored-observable': 'error',
        'rxjs/no-topromise': 'error',
        'rxjs/no-unsafe-catch': 'error',
        'rxjs/no-unsafe-first': 'error',
        'rxjs/no-unsafe-switchmap': 'error',
        'rxjs/throw-error': 'error',
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                allowedPromiseNames: ['Thenable'],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true,
            },
        ],
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
    },
};
