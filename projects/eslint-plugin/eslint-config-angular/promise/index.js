module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'require-await': 'off', // note you must disable the base rule as it can report incorrect errors
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/promise-function-async': [
                    'error',
                    {
                        allowedPromiseNames: ['Thenable'],
                        checkArrowFunctions: true,
                        checkFunctionDeclarations: true,
                        checkFunctionExpressions: true,
                        checkMethodDeclarations: true,
                    },
                ],
                '@typescript-eslint/no-floating-promises': [
                    'error',
                    {ignoreVoid: true, ignoreIIFE: true},
                ],
                'no-void': ['error', {allowAsStatement: true}],
            },
        },
    ],
};
