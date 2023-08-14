module.exports = {
    extends: [
        './eslint-config/base',
        './eslint-config/sort-class-members',
        './eslint-config/import',
        './eslint-config/promise',
        './eslint-config/test-files',
        './eslint-config/typescript',
        './eslint-config/prettier',
    ],

    env: {
        browser: true,
        node: true,
    },
};
