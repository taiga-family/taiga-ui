const tsconfig = require.resolve('../../tsconfig.eslint.json');

console.log('Compiling typescript files by tsconfig: ', tsconfig);

module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                ecmaVersion: 'latest',
                project: [tsconfig],
                sourceType: 'module',
            },
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/quotes': ['error', 'backtick'],
            },
        },
    ],
};
