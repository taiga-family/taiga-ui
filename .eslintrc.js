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
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        eqeqeq: ['error', 'always'],
        'unicorn/prefer-string-slice': 'error',
        'unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeLike', // class, interface, typeAlias, enum, typeParameter
                format: ['PascalCase', 'UPPER_CASE'],
            },
            {
                selector: 'class',
                modifiers: ['exported'],
                format: ['PascalCase'],
                // prefix: ['Tui', 'Example', 'Test', 'Mock'], // TODO: enable later
            },
            {
                selector: 'function',
                modifiers: ['exported'],
                format: ['camelCase'],
                // prefix: ['tui', 'example', 'Tui', 'mock', 'test'], // TODO: enable later
            },
            {
                selector: 'interface',
                modifiers: ['exported'],
                format: ['PascalCase'],
                // prefix: ['Tui', 'Example', 'Test'], // TODO: enable later
            },
            {
                selector: 'variable',
                modifiers: ['destructured'],
                format: null,
            },
            {
                selector: 'variable',
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                modifiers: ['global'],
                format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
            },
            {
                selector: 'variable',
                modifiers: ['exported'],
                format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
            },
            {
                selector: 'class',
                modifiers: ['abstract'],
                format: ['PascalCase'],
                prefix: ['Abstract', 'TuiAbstract', 'Example'],
            },
            {
                selector: 'enum',
                modifiers: ['exported'],
                format: ['StrictPascalCase'],
                prefix: ['Tui', 'Example', 'Test'],
            },
            {
                selector: 'enumMember',
                format: ['PascalCase'],
            },
        ],
    },
};
