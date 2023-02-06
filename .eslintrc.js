/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        '@tinkoff/eslint-config',
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/imports',
        '@tinkoff/eslint-config-angular/promise',
        '@tinkoff/eslint-config-angular/unicorn',
        '@tinkoff/eslint-config-angular/html-eslint',
        '@tinkoff/eslint-config-angular/file-progress',
        '@tinkoff/eslint-config-angular/line-statements',
        '@tinkoff/eslint-config-angular/member-ordering',
        '@tinkoff/eslint-config-angular/decorator-position',
        '@tinkoff/eslint-config-angular/experimental',
        '@tinkoff/eslint-config-angular/function-return-type',
        // @custom
        './scripts/eslint/nx.js',
        './scripts/eslint/typescript.js',
        './scripts/eslint/cypress.js',
        './scripts/eslint/naming-convention.js',
        './scripts/eslint/off.js',
    ],
    ignorePatterns: ['*/icons/all.ts', '404.html', '*.js', '*.json', '*.less', '*.md'],
};
