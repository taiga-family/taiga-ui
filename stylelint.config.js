module.exports = {
    extends: ['@tinkoff/stylelint-config/angular-less'],
    ignoreFiles: ['**/demo/**', '**/dist/**', '**/coverage/**', '**/node_modules/**'],
    rules: {
        'function-url-quotes': null,
        'selector-class-pattern': '^(_.*)|(t-.*)|(tui-.*)|(ng-.*)|(hljs.*)$',
        'unit-allowed-list': [
            'px',
            'rem',
            'em',
            'deg',
            's',
            'ms',
            'dpcm',
            'turn',
            'ch',
            '%',
            // 'vw/vh' have a big problem in Safari, when developers set viewport=width~1280px in Application
        ],
    },
};
