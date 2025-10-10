import taiga from '@taiga-ui/eslint-plugin-experience-next';
import {globalIgnores} from 'eslint/config';

export default process.env.HTML_ESLINT
    ? [
          // Eslint doesn't support multiple parsers for different rules
          ...taiga.configs['html-eslint'],
          globalIgnores(['**/*.{ts,js,css,less,scss}']),
          {
              files: [
                  '**/demo/**/pipes/format-date/index.html',
                  '**/demo/**/toast/index.html',
              ],
              rules: {'html/require-li-container': 'off'},
          },
          {
              files: ['**/demo/**/components/input-inline/examples/4/index.html'],
              rules: {'html/element-newline': 'off'},
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
                  '@typescript-eslint/no-unnecessary-condition': 'off',
                  'unicorn/no-array-method-this-argument': 'off',
                  '@typescript-eslint/max-params': [
                      'error',
                      {countVoidThis: true, max: 5},
                  ],
                  '@angular-eslint/no-uncalled-signals': 'off',
                  // TODO enable after fixing all issues
                  '@angular-eslint/prefer-signals': 'off',
                  '@angular-eslint/template/prefer-control-flow': 'off',
              },
          },
          {
              files: ['**/*.html'],
              rules: {
                  // TODO enable after fixing all issues
                  '@angular-eslint/template/prefer-control-flow': 'off',
                  '@angular-eslint/template/prefer-contextual-for-variables': 'off',
              },
          },
      ];
