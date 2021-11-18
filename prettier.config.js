module.exports = {
    ...require('@tinkoff/prettier-config/angular'),
    printWidth: 90,
    overrides: [
        {
            files: '*.html',
            options: {printWidth: 80, parser: 'html'},
        },
        {
            files: '*.md',
            options: {printWidth: 120, parser: 'markdown'},
        },
        {
            files: '*.svg',
            options: {printWidth: 120, parser: 'xml'},
        },
        {
            files: ['*.yml', '*.yaml'],
            options: {printWidth: 120, parser: 'yaml'},
        },
    ],
};
