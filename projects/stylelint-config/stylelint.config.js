module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-name-space-after': 'always',
        'block-opening-brace-newline-after': 'always',
        'color-named': 'never',
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-empty-line-before': 'never',
        indentation: [
            4,
            {
                indentInsideParens: 'once-at-root-twice-in-block',
                severity: 'error',
            },
        ],
        'max-empty-lines': 2,
        'max-line-length': [
            80,
            {
                ignore: ['non-comments'],
            },
        ],
        'no-descending-specificity': null,
        'no-duplicate-selectors': true,
        'number-leading-zero': 'never',
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-attribute-quotes': 'always',
        'selector-max-specificity': '0,5,0',
        'selector-pseudo-element-colon-notation': 'single',
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['/^/deep/'],
            },
        ],
        'string-quotes': 'single',
        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,
        'order/order': [
            'at-variables',
            'less-mixins',
            'declarations',
            {
                type: 'rule',
                selector: '^&\\s\\+\\s\\S',
            },
            {
                type: 'rule',
                selector: '^&:\\w',
            },
            {
                type: 'rule',
                selector: '^&\\[\\w+\\]',
            },
            {
                type: 'rule',
                selector: '^&_[^\\W_]',
            },
            {
                type: 'rule',
                selector: '^&__\\w',
            },
            'rules',
            {
                type: 'at-rule',
                name: 'media',
                hasBlock: true,
            },
        ],
        'order/properties-order': [
            [
                'all',
                'content',
                'position',
                {
                    order: 'flexible',
                    properties: ['top', 'left', 'right', 'bottom'],
                },
                'z-index',
                'display',
            ],
            {
                unspecified: 'bottom',
            },
        ],
    },
};
