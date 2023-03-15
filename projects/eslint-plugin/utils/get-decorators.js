/**
 * Return type from field in constructor
 * @param node {*}
 * @param filterFn {function}
 * @returns {Array<{name: string, args: string[], rawArgs: string[], pretty: string}>}
 */
module.exports = function getDecorators(node, filterFn) {
    let decorators = node.decorators ?? [];

    if (filterFn) {
        decorators = decorators.filter(decorator => filterFn(decorator));
    }

    return decorators.map(({expression}) => {
        const name = expression.callee?.name ?? '';
        const arguments = expression.callee?.parent?.arguments ?? [];

        const args = [];
        const rawArgs = [];

        for (const arg of arguments) {
            if (Array.isArray(arg.elements)) {
                const rawArray = arg.elements.map(item => item.raw);
                const valueArray = arg.elements.map(item => item.value);

                rawArgs.push(`[${rawArray.join(', ')}]`);
                args.push(valueArray);
            } else {
                rawArgs.push(arg.name ?? arg.raw);
                args.push(arg.name ?? arg.value);
            }
        }

        return {
            name,
            args,
            rawArgs,
            pretty: `@${name}(${rawArgs.join(`, `)})`,
        };
    });
};
