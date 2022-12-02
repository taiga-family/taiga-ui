/**
 * Return type from field in constructor
 * @param param {*}
 * @returns {*}
 */
module.exports = function getTypeName(param) {
    const typeAnnotation = param?.parameter?.typeAnnotation ?? param?.typeAnnotation;

    return typeAnnotation?.typeAnnotation?.typeName?.name;
};
