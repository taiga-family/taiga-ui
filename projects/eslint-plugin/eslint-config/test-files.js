module.exports = {
    overrides: [
        {
            files: ['*.spec.*', '*.test.*', '*.unit.*', '*/__tests__/*'],

            rules: {
                '@typescript-eslint/no-empty-function': 'off',
                'max-statements': 'off',
                'max-classes-per-file': 'off',
                'max-nested-callbacks': ['warn', 10],
                'prefer-promise-reject-errors': 'warn',
                'import/no-unresolved': 'off',
                'import/extensions': 'off',
                '@typescript-eslint/no-shadow': 'off',
            },
        },
    ],
};
