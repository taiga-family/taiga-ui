module.exports = {
    root: true,
    ignorePatterns: [
        'projects/**/test.ts',
        'projects/**/icons/all.ts',
        'commitlint.config.js',
        'prettier.config.js',
    ],
    extends: ['@tinkoff/eslint-config-angular'],
    parserOptions: {
        ecmaVersion: 2020,
        project: ['./tsconfig.eslint.json'],
        sourceType: 'module',
    },
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
