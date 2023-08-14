module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['rxjs'],
            extends: ['plugin:rxjs/recommended'],
            rules: {
                'rxjs/no-compat': 'error',
                'rxjs/no-connectable': 'error',
                'rxjs/no-cyclic-action': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-topromise': 'error',
                'rxjs/no-unsafe-catch': 'error',
                'rxjs/no-unsafe-first': 'error',
                'rxjs/no-unsafe-switchmap': 'error',
                'rxjs/throw-error': 'error',
            },
        },
    ],
};
