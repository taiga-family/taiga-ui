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
            },
        },
    ],
};
