module.exports = {
    extends: ['plugin:@typescript-eslint/eslint-recommended'],

    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:import/typescript',
            ],

            parser: '@typescript-eslint/parser',

            plugins: ['@typescript-eslint'],

            files: ['*.ts', '*.tsx'],

            rules: {
                // swears on cases like constructor(public c: C) {}
                'no-useless-constructor': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                'class-methods-use-this': 'off',
                '@typescript-eslint/member-ordering': [
                    'off',
                    {
                        default: [
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',
                            'constructor',
                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                ],
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        types: {
                            String: {message: 'Use string instead', fixWith: 'string'},
                            Boolean: {message: 'Use boolean instead', fixWith: 'boolean'},
                            Number: {message: 'Use number instead', fixWith: 'number'},
                            Object: {
                                message: 'Use Record<string, any> instead',
                                fixWith: 'Record<string, any>',
                            },
                            object: {
                                message: 'Use Record<string, any> instead',
                                fixWith: 'Record<string, any>',
                            },
                        },
                        extendDefaults: false,
                    },
                ],
                '@typescript-eslint/no-extraneous-class': [
                    'error',
                    {
                        allowWithDecorator: true,
                        allowStaticOnly: true,
                    },
                ],
                // '@typescript-eslint/no-unnecessary-qualifier': 'error', need ts config
                // '@typescript-eslint/restrict-plus-operands': 'error', need ts config
                '@typescript-eslint/no-explicit-any': 'off',
                camelcase: 'off',
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: ['camelCase', 'PascalCase'],
                        leadingUnderscore: 'allow',
                        trailingUnderscore: 'allow',
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow',
                        trailingUnderscore: 'allow',
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'property',
                        format: ['camelCase', 'PascalCase'],
                    },
                    {
                        selector: [
                            'classProperty',
                            'objectLiteralProperty',
                            'typeProperty',
                            'classMethod',
                            'objectLiteralMethod',
                            'typeMethod',
                            'accessor',
                            'enumMember',
                        ],
                        format: null,
                        modifiers: ['requiresQuotes'],
                    },
                ],
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/no-empty-function': 'warn',
                // standard no-unused-expressions don't understand optional chaining from ts
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                    },
                ],
                '@typescript-eslint/no-var-requires': 'warn',
                '@typescript-eslint/no-namespace': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        functions: false,
                        classes: false,
                        variables: true,
                        enums: true,
                        typedefs: true,
                    },
                ],
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                'consistent-return': 'off',
                '@typescript-eslint/consistent-type-imports': [
                    'warn',
                    {
                        prefer: 'type-imports',
                        disallowTypeAnnotations: true,
                    },
                ],
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['warn'],
                // conflict with import type statement, try to merge default and named imports
                // https://github.com/typescript-eslint/typescript-eslint/issues/2545#issuecomment-692842483
                // https://github.com/import-js/eslint-plugin-import/issues/2114
                'import/no-duplicates': 'off',
            },
        },
    ],
};
