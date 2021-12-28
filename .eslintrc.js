module.exports = {
    root: true,
    extends: ['@tinkoff/eslint-config-angular'],
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
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {accessibility: 'no-public'},
        ],
        '@typescript-eslint/prefer-readonly': ['error'],
        'no-console': ['error', {allow: ['info', 'assert', 'warn', 'error']}],
    },
};
