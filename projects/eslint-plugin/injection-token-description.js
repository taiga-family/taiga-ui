const MESSAGE_ID = `invalid-injection-token-description`;
const ERROR_MESSAGE = `InjectionToken's description should contain token's name`;

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        docs: {description: ERROR_MESSAGE},
        messages: {
            [MESSAGE_ID]: ERROR_MESSAGE,
        },
        fixable: 'code',
    },
    create(context) {
        return {
            'NewExpression[callee.name="InjectionToken"]'(node) {
                const [tokenDescriptionNode] = node.arguments || [];
                const tokenDescription =
                    tokenDescriptionNode.value || // simple string
                    tokenDescriptionNode.quasis?.[0].value?.raw || // TemplateLiteral (backtick string)
                    '';
                const tokenName = node.parent.id.name;

                if (tokenDescription && !tokenDescription.includes(tokenName)) {
                    context.report({
                        node: tokenDescriptionNode,
                        messageId: MESSAGE_ID,
                        fix: fixer => {
                            const [start, end] = tokenDescriptionNode.range;

                            return fixer.insertTextBeforeRange(
                                [start + 1, end],
                                `[${tokenName}]: `,
                            );
                        },
                    });
                }
            },
        };
    },
};
