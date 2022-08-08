module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': async () =>
            import('@commitlint/config-conventional')
                .then(m => m.default)
                .then(({rules}) => {
                    // https://commitlint.js.org/#/reference-rules?id=rules
                    const [level, applicable, types] = rules['type-enum'];

                    return [level, applicable, [...types, 'deprecate']];
                }),
    },
};
