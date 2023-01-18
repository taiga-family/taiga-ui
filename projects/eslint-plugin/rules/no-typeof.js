/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        schema: [],
    },
    create(context) {
        return {
            /**
             * @type {import('eslint').Rule.Node}
             * @return {*}
             */
            "BinaryExpression[operator='==='][left.operator='typeof']"(node) {
                markTypeOfString(context, node);
                markTypeOfNumber(context, node);
                markTypeOfObject(context, node);
            },
        };
    },
};

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('eslint').Rule.Node} node
 */
function markTypeOfString(context, node) {
    if (checkRightOperandIs(node, `string`)) {
        context.report({
            node,
            message: `Don't use "typeof value === 'string'" instead of tuiIsString(value)`,
        });
    }
}

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('eslint').Rule.Node} node
 */
function markTypeOfNumber(context, node) {
    if (checkRightOperandIs(node, `number`)) {
        context.report({
            node,
            message: `Don't use "typeof value === 'number'" instead of tuiIsNumber(value)`,
        });
    }
}

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('eslint').Rule.Node} node
 */
function markTypeOfObject(context, node) {
    if (checkRightOperandIs(node, `object`)) {
        context.report({
            node,
            message: `Don't use "typeof value === 'object'" instead of tuiIsObject(value)`,
        });
    }
}

/**
 * @param {import('eslint').Rule.Node} node
 * @param {string} type
 */
function checkRightOperandIs(node, type) {
    return node?.right?.quasis?.[0]?.value?.raw === type || node?.right?.value === type;
}
