module.exports = {
    ...require('@tinkoff/linters/prettier/prettier.config'),
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 80,
                parser: 'html',
            },
        },
        {
            files: '*.scss',
            options: {
                printWidth: 120,
                parser: 'scss',
            },
        },
    ],
};
