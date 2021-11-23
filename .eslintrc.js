module.exports = {
    root: true,
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    extends: ['@tinkoff/eslint-config-angular'],
    rules: {
        // TODO(splincode): enable later
        'no-param-reassign': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
    },
};
