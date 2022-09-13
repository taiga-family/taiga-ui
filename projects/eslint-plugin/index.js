/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    rules: {
        'injection-token-description': require('./injection-token-description'),
        'no-deep-imports': require('./no-deep-imports'),
        'prefer-inject-decorator': require('./prefer-inject-decorator'),
    },
};
