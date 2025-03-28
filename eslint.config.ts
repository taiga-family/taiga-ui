import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    ...taiga.configs['taiga-specific'],
    {
        files: ['**/legacy/**/*.ts'],
        rules: {
            '@angular-eslint/prefer-standalone': 'off',
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            'import/no-cycle': 'off',
            '@typescript-eslint/max-params': ['error', {countVoidThis: true, max: 5}],
        },
    },
];
