/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    extends: ['./nx.js'],
    rules: {
        'import/no-cycle': 'error',
    },
};
