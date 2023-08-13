module.exports = {
    extends: ['./stylelint.config.js', 'stylelint-config-prettier'],
    plugins: ['stylelint-order', 'stylelint-no-px'],
    rules: {
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
        'order/order': [
            'less-mixins',
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules',
        ],
        indentation: null,
        'color-named': null,
        'at-rule-no-unknown': null,
        'max-line-length': null,
        'number-leading-zero': null,
        'selector-class-pattern': null,
        'number-max-precision': null,
        'property-no-vendor-prefix': null,
        'keyframes-name-pattern': null,
        'value-keyword-case': null,
        'media-feature-name-no-vendor-prefix': null,
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'selector-max-specificity': [
            '0,5,0',
            {
                ignoreSelectors: [':host-context', ':first-child'],
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: ['/^/deep/'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
        'meowtec/no-px': [
            true,
            {
                ignore: [
                    // for cases with borders,
                    // box-shadows and other special cases
                    '-5px',
                    '-4px',
                    '-3px',
                    '-2px',
                    '-1px',
                    '0px',
                    '1px',
                    '2px',
                    '3px',
                    '4px',
                    '5px',
                ],
            },
        ],
    },
};
