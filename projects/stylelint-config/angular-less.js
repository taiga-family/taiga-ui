const angularConfig = require('./angular');
const lessConfig = require('./less');

module.exports = {
    ...angularConfig,
    customSyntax: lessConfig.customSyntax,
    rules: {
        ...angularConfig.rules,
        ...lessConfig.rules,
    },
};
