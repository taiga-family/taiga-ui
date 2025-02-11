import config from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...config,
    {
        files: ['**/legacy/**/*.ts'],
        rules: {
            '@angular-eslint/prefer-standalone': 'off',
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            'max-params': ['error', 5],
            'no-nested-ternary': 'error',
            'rxjs/no-nested-subscribe': 'error',
        },
    },
    {
        files: ['**/*'],
        rules: {
            '@angular-eslint/template/button-has-type': 'off',
            '@angular-eslint/template/elements-content': 'off',
            '@typescript-eslint/max-params': 'off',
            'jest/prefer-importing-jest-globals': 'off',
            'sonarjs/prefer-nullish-coalescing': 'off',
            'no-irregular-whitespace': 'off',
        },
    },
];
