import taiga from '@taiga-ui/eslint-plugin-experience-next';
import {globalIgnores} from 'eslint/config';

export default process.env.HTML_ESLINT
    ? [
          // Eslint doesn't support multiple parsers for different rules
          ...taiga.configs['html-eslint'],
          globalIgnores(['**/*.{ts,js,css,less,scss}']),
          {
              files: ['**/demo/**/pipes/format-date/index.html'],
              rules: {'@html-eslint/require-li-container': 'off'},
          },
          {
              files: ['**/demo/**/components/input-inline/examples/4/index.html'],
              rules: {'@html-eslint/element-newline': 'off'},
          },
      ]
    : [
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
                  '@typescript-eslint/max-params': [
                      'error',
                      {countVoidThis: true, max: 5},
                  ],
              },
          },
      ];
