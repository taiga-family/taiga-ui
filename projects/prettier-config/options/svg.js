module.exports = {
    parser: 'html',
    printWidth: 120,
    singleAttributePerLine: false,
    plugins: [require.resolve('prettier-plugin-organize-attributes')],
    attributeGroups: ['^(id|name)$', '^x$', '^y$', '^xmlns$', '$DEFAULT'],
};
