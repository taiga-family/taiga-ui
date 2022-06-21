module.exports = {
    extends: ['@tinkoff/stylelint-config/less', '@tinkoff/stylelint-config/angular'],
    ignoreFiles: ['**/demo/**', '**/dist/**', '**/coverage/**', '**/node_modules/**'],
    plugins: ['./scripts/stylelint/stylelint-force-selector-name-prefix'],
    rules: {
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['/fade/'],
            },
        ],
        'tui/stylelint-force-selector-name-prefix': [
            {afterPath: 'components', separator: 't-'},
        ],
    },
};
