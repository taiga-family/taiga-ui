const base = require('@tinkoff/prettier-config/angular');

module.exports = {
    ...base,
    overrides: [
        ...base.overrides,
        {
            files: ['*.js', '*.ts'],
            options: {printWidth: 90, parser: 'typescript'},
        },
        {
            files: '*.html',
            options: {printWidth: 80, parser: 'html'},
        },
    ],
};
