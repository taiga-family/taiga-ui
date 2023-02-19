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
                '@typescript-eslint/quotes': ['error', 'backtick'],
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
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
                // Off
                '@angular-eslint/component-max-inline-declarations': 'off',
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
