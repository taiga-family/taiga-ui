module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': [
                    'error',
                    {
                        allowPrivateClassPropertyAccess: true,
                        allowProtectedClassPropertyAccess: true,
                        allowIndexSignaturePropertyAccess: true,
                    },
                ],
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/no-base-to-string': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        functions: false,
                        classes: false,
                        variables: true,
                        enums: true,
                        typedefs: true,
                    },
                ],
                '@typescript-eslint/sort-type-constituents': 'error',
            },
        },
    ],
};
