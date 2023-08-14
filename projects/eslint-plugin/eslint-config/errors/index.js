module.exports = {
    overrides: [
        {
            files: ['*.js', '*.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['eslint-config-airbnb-base/rules/errors'],
            rules: {
                // eslint-config-airbnb-base/errors
                'no-empty': ['error', {allowEmptyCatch: true}],
                'no-await-in-loop': 'off',
            },
        },
    ],
};
