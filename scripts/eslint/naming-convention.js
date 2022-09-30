module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'typeLike',
                        format: ['PascalCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'class',
                        modifiers: ['exported'],
                        format: ['PascalCase'],
                        prefix: ['Tui'],
                    },
                    {
                        selector: 'class',
                        modifiers: ['exported', 'abstract'],
                        format: ['PascalCase'],
                        prefix: ['AbstractTui'],
                    },
                    {
                        selector: 'function',
                        modifiers: ['exported'],
                        format: ['PascalCase'], // @note: tui{PascalCase}FnName
                        prefix: ['tui'],
                    },
                    {
                        selector: 'interface',
                        modifiers: ['exported'],
                        format: ['PascalCase'],
                        prefix: ['Tui'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['destructured'],
                        format: null,
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['global'],
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['exported'],
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                    },
                    {
                        selector: 'class',
                        modifiers: ['abstract'],
                        format: ['PascalCase'],
                        prefix: ['AbstractTui'],
                    },
                    {
                        selector: 'enum',
                        modifiers: ['exported'],
                        format: ['StrictPascalCase'],
                        prefix: ['Tui'],
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase'],
                    },
                ],
            },
        },
        {
            files: ['**/projects/*demo/**/*.ts', '**/scripts/**/*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'typeLike',
                        format: ['PascalCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'class',
                        modifiers: ['exported'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'function',
                        modifiers: ['exported'],
                        format: ['camelCase'],
                    },
                    {
                        selector: 'interface',
                        modifiers: ['exported'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['destructured'],
                        format: null,
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['global'],
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                    },
                    {
                        selector: 'variable',
                        modifiers: ['exported'],
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                    },
                    {
                        selector: 'class',
                        modifiers: ['abstract'],
                        format: ['PascalCase'],
                        prefix: ['Abstract', 'TuiAbstract', 'Example'],
                    },
                    {
                        selector: 'enum',
                        modifiers: ['exported'],
                        format: ['StrictPascalCase'],
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase'],
                    },
                ],
            },
        },
    ],
};
