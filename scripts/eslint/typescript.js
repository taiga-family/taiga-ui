console.log('Compiling typescript files by tsconfig...');

module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                ecmaVersion: 'latest',
                project: ['tsconfig.eslint.json'],
                sourceType: 'module',
            },
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'unicorn/switch-case-braces': ['error', 'always'],
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/quotes': ['error', 'backtick'],
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/func-call-spacing': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/consistent-type-exports': 'error',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-unnecessary-qualifier': 'error',
                '@typescript-eslint/no-confusing-void-expression': [
                    'error',
                    {
                        ignoreArrowShorthand: true,
                    },
                ],
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-invalid-void-type': [
                    'error',
                    {
                        allowInGenericTypeArguments: true,
                    },
                ],
                '@typescript-eslint/no-meaningless-void-operator': 'error',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow-as-parameter',
                    },
                ],
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-mixed-enums': 'error',
                '@typescript-eslint/no-namespace': [
                    'error',
                    {
                        allowDeclarations: true,
                        allowDefinitionFiles: true,
                    },
                ],
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unnecessary-type-arguments': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-unsafe-declaration-merging': 'error',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-enum-initializers': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/prefer-readonly': 'error',
                '@typescript-eslint/prefer-return-this-type': 'error',
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/sort-type-constituents': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                '@typescript-eslint/no-dupe-class-members': 'error',
                '@typescript-eslint/no-extra-semi': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-invalid-this': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {path: 'always', types: 'always', lib: 'always'},
                ],
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        types: {
                            Number: {
                                message: 'Use number instead',
                                fixWith: 'number',
                            },

                            String: {
                                message: 'Use string instead',
                                fixWith: 'string',
                            },

                            '{}': {
                                message: 'Use Record instead',
                                fixWith: 'Record<string, any>',
                            },
                        },
                        extendDefaults: true,
                    },
                ],
                'no-restricted-syntax': [
                    'error',
                    {
                        selector: "CallExpression[callee.name='mapTo']",
                        message:
                            'Use `map(() => value)` instead of `mapTo(value)`, the operator is deprecated',
                    },
                    {
                        selector: `ArrowFunctionExpression[params.length=0][body.raw='false'][body.value='false']`,
                        message:
                            'Use `ALWAYS_FALSE_HANDLER` please instead of `() => false`',
                    },
                    {
                        selector: `ArrowFunctionExpression[params.length=0][body.raw='true'][body.value='true']`,
                        message:
                            'Use `ALWAYS_TRUE_HANDLER` please instead of `() => true`',
                    },
                    {
                        selector: "CallExpression[callee.name='switchMapTo']",
                        message:
                            'Use `switchMap(() => stream$)` instead of `switchMapTo(stream$)`, the operator is deprecated',
                    },
                    {
                        selector: "CallExpression[callee.name='flatMap']",
                        message:
                            'Use `mergeMap` instead of `flatMap`, the operator is deprecated',
                    },
                    {
                        selector: "CallExpression[callee.name='pluck']",
                        message:
                            "Use `map(x => x?.foo?.bar)` instead of `pluck('foo', 'bar')`",
                    },
                ].concat(
                    require('rxjs/package.json').version.startsWith('7')
                        ? [
                              {
                                  selector: "CallExpression[callee.name='repeatWhen']",
                                  message:
                                      'Use `repeat({ delay: () => notify$ })` instead of `repeatWhen(() => notify$)`',
                              },
                          ]
                        : [],
                ),
                // TODO: investigate / enable later
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
                '@typescript-eslint/prefer-readonly-parameter-types': 'off',
                '@typescript-eslint/strict-boolean-expressions': 'off',
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
                '@typescript-eslint/require-array-sort-compare': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
            },
        },
        {
            files: ['*.component.ts', '*.directive.ts', '**/examples/**/index.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/quotes': ['error', 'single'],
                'import/extensions': 'off',
            },
        },
        {
            files: ['*.component.ts', '*.service.ts', '*.directive.ts', '*.module.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@angular-eslint/eslint-plugin'],
            rules: {
                '@angular-eslint/component-class-suffix': 'error',
                '@angular-eslint/component-selector': 'error',
                '@angular-eslint/contextual-decorator': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': 'error',
                '@angular-eslint/directive-selector': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-empty-lifecycle-method': 'error',
                '@angular-eslint/no-input-prefix': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-pipe-impure': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/pipe-prefix': 'error',
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/relative-url-prefix': 'error',
                '@angular-eslint/use-component-selector': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
                '@angular-eslint/no-lifecycle-call': 'error',
                '@angular-eslint/component-max-inline-declarations': 'error',
                // Off
                '@angular-eslint/no-host-metadata-property': 'off',
                '@angular-eslint/use-component-view-encapsulation': 'off',
                '@angular-eslint/use-injectable-provided-in': 'off',
                '@angular-eslint/no-inputs-metadata-property': 'off',
                '@angular-eslint/no-outputs-metadata-property': 'off',
                '@angular-eslint/sort-ngmodule-metadata-arrays': 'off',
                '@angular-eslint/no-output-rename': 'off',
                '@angular-eslint/no-input-rename': 'off',
                '@angular-eslint/no-forward-ref': 'off',
            },
        },
    ],
};
