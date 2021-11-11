module.exports = {
    ...require('@tinkoff/linters/prettier/prettier.config'),
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 80,
                parser: 'html',
            },
        },
        {
            files: '*.svg',
            options: {
                printWidth: 120,
                parser: 'html',
            },
        },
        {
            files: '*.less',
            options: {
                printWidth: 120,
                parser: 'less',
            },
        },
    ],
};
