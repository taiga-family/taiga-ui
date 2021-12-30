module.exports = {
    root: true,
    extends: [
        // TODO: move rules to @tinkoff/eslint-config-angular
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        '@tinkoff/eslint-config-angular',
    ],
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
    parser: '@typescript-eslint/parser',
    rules: {
        // TODO: move rules to @tinkoff/eslint-config-angular
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {accessibility: 'no-public'},
        ],
        '@typescript-eslint/prefer-readonly': ['error'],
        'no-console': ['error', {allow: ['info', 'assert', 'warn', 'error']}],

        'no-prototype-builtins': 'off',
        // note you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    },
};
