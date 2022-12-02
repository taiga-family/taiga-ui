const hasDecorator = require('../utils/has-decorator');
const getTypeName = require('../utils/get-type-name');
const getNgConstructor = require('../utils/get-ng-constructor');

const MESSAGE_ID = `invalid-prefer-inject-decorator`;
const ERROR_MESSAGE = `Use Inject() decorator for Dependency Injection`;

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
            ClassDeclaration(node) {
                const constructor = getNgConstructor(node);

                if (!constructor) {
                    return;
                }

                constructor.value.params.forEach(param => {
                    if (!hasDecorator(param, 'Inject', 'Attribute')) {
                        context.report({
                            node: param,
                            messageId: MESSAGE_ID,
                            fix: fixer => {
                                const typeName = getTypeName(param);

                                if (!typeName) {
                                    return;
                                }

                                const [start, end] = param.range;

                                return fixer.insertTextBeforeRange(
                                    [start, end],
                                    `@Inject(${typeName}) `,
                                );
                            },
                        });
                    }
                });
            },
        };
    },
};
