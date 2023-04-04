console.log('Compiling typescript files by tsconfig...');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    ignorePatterns: require('./scripts/eslint/ignore-patterns'),
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
        // @custom rules
        './scripts/eslint/typescript.js',
        './scripts/eslint/no-restricted-syntax.js',
        './scripts/eslint/angular.js',
        './scripts/eslint/taiga.js',
        './scripts/eslint/cypress.js',
        './scripts/eslint/naming-convention.js',
        './scripts/eslint/off.js',
    ],
};
