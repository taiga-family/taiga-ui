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
            'import/export': 'off',
            'import/no-cycle': 'off',
            '@typescript-eslint/max-params': ['error', {countVoidThis: true, max: 5}],
        },
    },
    {
        files: ['**/*'],
        rules: {
            '@angular-eslint/template/button-has-type': 'off',
            '@angular-eslint/template/elements-content': 'off',
            'jest/prefer-importing-jest-globals': 'off',
        },
    },
];
