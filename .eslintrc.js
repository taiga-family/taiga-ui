module.exports = {
    root: true,
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    extends: ['@tinkoff/eslint-config-angular'],
    rules: {
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        // TODO(splincode): move to @tinkoff/eslint-config-angular
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            {exceptAfterSingleLine: true, exceptAfterOverload: true},
        ],
    },
};
