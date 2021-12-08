module.exports = {
    root: true,
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    extends: ['@tinkoff/eslint-config-angular'],
    rules: {
        '@typescript-eslint/no-useless-constructor': 'off',
    },
};
