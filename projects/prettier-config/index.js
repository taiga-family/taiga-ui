module.exports = {
    $schema: 'https://json.schemastore.org/prettierrc',
    htmlWhitespaceSensitivity: 'ignore',
    printWidth: 120,
    tabWidth: 4,
    proseWrap: 'always',
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    endOfLine: 'lf',
    bracketSpacing: false,
    arrowParens: 'avoid',
    singleAttributePerLine: true,
    plugins: [require.resolve('prettier-plugin-organize-attributes')],
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
    ],
    overrides: [
        {
            files: ['*.json', '.prettierrc', '.stylelintrc'],
            options: {parser: 'json'},
        },
        {
            files: ['package.json', 'ng-package.json'],
            options: {
                parser: 'json-stringify',
                plugins: [
                    require.resolve(
                        require('path').resolve(
                            __dirname,
                            'plugins',
                            'prettier-plugin-sort-package.js',
                        ),
                    ),
                ],
            },
        },
        {
            files: ['*.less'],
            options: {parser: 'less'},
        },
        {
            files: ['*.scss'],
            options: {parser: 'scss'},
        },
        {
            files: ['*.xml'],
            options: {
                parser: 'xml',
                plugins: [require.resolve('@prettier/plugin-xml')],
            },
        },
        {
            files: ['*.yml', '*.yaml'],
            options: {parser: 'yaml', tabWidth: 2},
        },
        {
            files: ['*.md'],
            options: {parser: 'markdown', tabWidth: 2},
        },
        {
            files: ['*.js', '*.ts'],
            options: {printWidth: 90, parser: 'typescript'},
        },
        {
            files: ['*.html'],
            options: {
                parser: 'angular',
                printWidth: 120,
            },
        },
        {
            files: '*.svg',
            options: require(require('path').resolve(__dirname, 'options', 'svg.js')),
        },
    ],
};
