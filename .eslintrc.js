module.exports = {
    root: true,
    ignorePatterns: ['projects/**/test.ts', 'projects/**/icons/all.ts'],
    extends: ['@tinkoff/eslint-config-angular'],
    rules: {
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        // TODO(splincode): move to @tinkoff/eslint-config-angular
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            {exceptAfterSingleLine: true, exceptAfterOverload: true},
        ],
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'block'},
            {blankLine: 'always', prev: 'block', next: '*'},
            {blankLine: 'always', prev: '*', next: 'block-like'},
            {blankLine: 'always', prev: 'block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'always', prev: 'directive', next: '*'},
            {blankLine: 'always', prev: '*', next: ['interface', 'type']},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var', 'export'],
                next: ['const', 'let', 'var', 'export'],
            },
            {blankLine: 'any', prev: '*', next: ['case', 'default']},
            {blankLine: 'any', prev: ['case', 'default'], next: '*'},
            {blankLine: 'any', prev: '*', next: 'class'},
            {blankLine: 'any', prev: 'class', next: '*'},
            {blankLine: 'any', prev: 'directive', next: 'directive'},
        ],
    },
};
