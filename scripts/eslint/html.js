module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            rules: {
                '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
                'spaced-comment': 'off',
            },
        },
    ],
};
