const getDecorators = require('./get-decorators');

/**
 * @param param {*}
 * @param decorators {string}
 * @returns {boolean}
 */
module.exports = function hasDecorator(param, ...decorators) {
    return getDecorators(param).some(({name}) => decorators.includes(name));
};
