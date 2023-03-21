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
                '@typescript-eslint/no-unnecessary-qualifier': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-arguments': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/quotes': ['error', 'backtick'],
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/func-call-spacing': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow-as-parameter',
                    },
                ],
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {path: 'always', types: 'always', lib: 'always'},
                ],
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        types: {
                            String: {
                                message: 'Use string instead',
                                fixWith: 'string',
                            },
                            Boolean: {
                                message: 'Use boolean instead',
                                fixWith: 'boolean',
                            },
                            Number: {
                                message: 'Use number instead',
                                fixWith: 'number',
                            },
                            Symbol: {
                                message: 'Use symbol instead',
                                fixWith: 'symbol',
                            },
                            BigInt: {
                                message: 'Use bigint instead',
                                fixWith: 'bigint',
                            },
                            Function: {
                                message: [
                                    'The `Function` type accepts any function-like value.',
                                    'It provides no type safety when calling the function, which can be a common source of bugs.',
                                    'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
                                    'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                                ].join('\n'),
                            },
                            Object: {
                                message: [
                                    'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                                    '- If you want a type meaning "any object", you probably want `object` instead.',
                                    '- If you want a type meaning "any value", you probably want `unknown` instead.',
                                ].join('\n'),
                            },
                            '{}': {
                                message: [
                                    '`{}` actually means "any non-nullish value".',
                                    '- If you want a type meaning "any object", you probably want `object` instead.',
                                    '- If you want a type meaning "any value", you probably want `unknown` instead.',
                                    '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.',
                                ].join('\n'),
                            },
                        },
                        extendDefaults: true,
                    },
                ],
                '@typescript-eslint/prefer-includes': 'error',
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
    ],
};
