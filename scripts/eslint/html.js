module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            rules: {
                '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
                '@html-eslint/no-duplicate-attrs': 'error',
                'spaced-comment': 'off',
            },
        },
    ],
};
