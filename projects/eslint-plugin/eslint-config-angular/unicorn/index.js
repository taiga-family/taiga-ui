module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['unicorn', '@typescript-eslint'],
            rules: {
                'unicorn/prefer-string-slice': 'error',
                'unicorn/no-array-push-push': 'error',
                'unicorn/require-number-to-fixed-digits-argument': 'error',
                'unicorn/no-empty-file': 'error',
                'unicorn/new-for-builtins': 'error',
                'unicorn/no-useless-spread': 'error',
                'unicorn/escape-case': 'error',
                'unicorn/no-unsafe-regex': 'error',
                'unicorn/filename-case': [
                    'error',
                    {
                        case: 'kebabCase',
                    },
                ],
            },
        },
    ],
};
