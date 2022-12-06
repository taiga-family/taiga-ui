module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                // TODO: move to @tinkoff/eslint-config-angular
                '@typescript-eslint/no-useless-constructor': 'off',
                'no-prototype-builtins': 'off',
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
                'promise/no-nesting': 'off',
                'spaced-comment': 'off',
                'no-loop-func': 'off',
                'no-bitwise': 'off',
                quotes: 'off',
            },
        },
    ],
};
