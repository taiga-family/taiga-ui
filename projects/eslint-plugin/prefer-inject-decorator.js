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
        /**
         * Returns can the rule be applied for a provided node.
         * For simplicity, we exclude some specific cases.
         * @param node
         * @returns {boolean}
         */
        const isSupportedClass = node => {
            const isAbstract = node.abstract;

            const angularDecorators = new Set([
                'Component',
                'Directive',
                'Injectable',
                'Pipe',
                'NgModule',
            ]);

            const isAngularEntity = (node.decorators || []).some(({expression}) =>
                angularDecorators.has(expression.callee?.name),
            );

            return !isAbstract && isAngularEntity;
        };

        /**
         * Returns whether the node is method definition.
         * @param node
         * @returns {boolean}
         */
        const isMethodDefinition = node => {
            return node.type === 'MethodDefinition';
        };

        /**
         * Returns a constructor from a provided node if it exists.
         * @param node
         * @returns {*}
         */
        const getConstructorFromClassDeclaration = node => {
            const body = node.body;

            if (!body) {
                return;
            }

            const classElements = body.body;

            if (!classElements.length) {
                return;
            }

            const constructorMethodDefinition = classElements
                .filter(classElement => isMethodDefinition(classElement))
                .find(methodDefinition => methodDefinition.kind === 'constructor');

            if (
                !constructorMethodDefinition ||
                !isMethodDefinition(constructorMethodDefinition)
            ) {
                return;
            }

            return constructorMethodDefinition;
        };

        return {
            ClassDeclaration(node) {
                if (!isSupportedClass(node)) {
                    return;
                }

                const constructor = getConstructorFromClassDeclaration(node);

                if (!constructor) {
                    return;
                }

                const params = constructor.value.params;

                /**
                 * Iterates through constructor's parameters,
                 * validates that at least one parameter has 'Inject' decorator.
                 */
                params.forEach(param => {
                    const decorators = param.decorators || [];

                    if (
                        !decorators.some(({expression}) => {
                            const {name} = expression.callee;
                            return name === 'Inject' || name === 'Attribute';
                        })
                    ) {
                        context.report({
                            node: param,
                            messageId: MESSAGE_ID,
                            fix: fixer => {
                                /**
                                 * TSParameterProperty has param.parameter.typeAnnotation structure.
                                 * While Identifier has param.typeAnnotation structure.
                                 */
                                const typeAnnotation =
                                    param?.parameter?.typeAnnotation ||
                                    param?.typeAnnotation;

                                const typeName =
                                    typeAnnotation?.typeAnnotation?.typeName?.name;

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
