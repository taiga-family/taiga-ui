const base = require('@tinkoff/prettier-config/angular');

module.exports = {
    ...base,
    singleAttributePerLine: true,
    overrides: [
        ...base.overrides,
        {
            files: ['*.js', '*.ts'],
            options: {printWidth: 90, parser: 'typescript'},
        },
        {
            files: ['*.html'],
            options: {printWidth: 120, parser: 'angular'},
        },
    ],
};
