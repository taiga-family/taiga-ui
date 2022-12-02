/**
 * Return type from field in constructor
 * @param param {*}
 * @returns {Array<{name: string, args: string[], print: string}>}
 */
module.exports = function getDecorators(param) {
    const decorators = param.decorators ?? [];

    return decorators.map(({expression}) => {
        const name = expression.callee?.name ?? '';
        const arguments = expression.callee?.parent?.arguments ?? [];
        const args = arguments.map(arg => arg.name);

        return {name, args, pretty: `@${name}(${args.join(`,`)})`};
    });
};
