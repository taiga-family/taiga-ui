module.exports = {
    extends: ['@tinkoff/stylelint-config/less', '@tinkoff/stylelint-config/angular'],
    ignoreFiles: ['**/demo/**', '**/dist/**', '**/coverage/**', '**/node_modules/**'],
    rules: {
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['/fade/'],
            },
        ],
    },
};
