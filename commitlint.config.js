module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': () => {
            const {readdirSync, statSync} = require('fs');
            const dir = 'projects';
            const projectsNames = readdirSync(dir).filter(entity =>
                statSync(`${dir}/${entity}`).isDirectory(),
            );

            return [2, 'always', projectsNames];
        },
        'type-enum': () => {
            const [level, applicable, types] = require('@commitlint/config-conventional')
                .rules['type-enum'];

            return [level, applicable, [...types, 'deprecate']];
        },
    },
};
