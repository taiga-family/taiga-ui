module.exports = {
    overrides: [
        {
            files: ['**/projects/demo-integrations/**/**.cy.ts'],
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
