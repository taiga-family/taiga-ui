/**
 * @description:
 * https://yeonjuan.github.io/html-eslint/docs/rules/no-inline-styles/
 */
module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            rules: {
                'spaced-comment': 'off',
                'eslint-comments/disable-enable-pair': 'off',
                // Best Practice
                '@html-eslint/no-duplicate-attrs': 'error',
                '@html-eslint/no-duplicate-id': 'error',
                '@html-eslint/no-inline-styles': 'error',
                '@html-eslint/no-obsolete-tags': 'error',
                '@html-eslint/no-target-blank': 'error',
                '@html-eslint/require-button-type': 'off',
                '@html-eslint/require-closing-tags': [
                    'error',
                    {selfClosing: 'always', allowSelfClosingCustom: false},
                ],
                '@html-eslint/require-li-container': 'error',
                // SEO
                '@html-eslint/no-multiple-h1': 'error',
                '@html-eslint/require-lang': 'error',
                '@html-eslint/require-title': 'error',
                // Accessibility
                '@html-eslint/no-abstract-roles': 'error',
                '@html-eslint/no-accesskey-attrs': 'error',
                '@html-eslint/no-aria-hidden-body': 'error',
                '@html-eslint/no-non-scalable-viewport': 'error',
                '@html-eslint/no-positive-tabindex': 'error',
                '@html-eslint/require-frame-title': 'error',
                '@html-eslint/require-img-alt': 'error',
                '@html-eslint/require-meta-viewport': 'error',
                // Style
                '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
                '@html-eslint/element-newline': 'error',
                '@html-eslint/indent': 'error',
                '@html-eslint/no-extra-spacing-attrs': [
                    'error',
                    {enforceBeforeSelfClose: true},
                ],
                '@html-eslint/no-multiple-empty-lines': 'error',
                '@html-eslint/no-trailing-spaces': 'error',
                '@html-eslint/quotes': 'error',
            },
        },
    ],
};
