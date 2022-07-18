module.exports = {
    overrides: [
        {
            files: ['**/projects/demo-integrations/**/**.spec.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'no-restricted-properties': [
                    'error',
                    {
                        property: 'screenshot',
                        message: 'Please use matchImageSnapshot instead.',
                    },
                    {
                        property: 'visit',
                        message: 'Please use tuiVisit instead.',
                    },
                ],
            },
        },
    ],
};
