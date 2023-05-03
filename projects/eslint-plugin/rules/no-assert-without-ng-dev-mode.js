const getNodeByNameFromLogicalExpression = require('../utils/get-node-by-name-from-logical-expression');

const MESSAGE_ID = `no-assert-without-ng-dev-mode`;
const ERROR_MESSAGE = `callee.assert must be used along with ngDevMode`;

const DEFAULT_OPTIONS = {
    callee: ['tuiAssert', 'console'],
};

const requiredIdentifierName = 'ngDevMode';

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
        schema: [
            {
                type: 'object',
                properties: {
                    callee: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        description: 'An array of callees that will be checked.',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    create(context) {
        const {callee} = {
            ...DEFAULT_OPTIONS,
            ...(context.options[0] || {}),
        };

        const constructSelectors = () => {
            const selectors = callee.map(
                name =>
                    `CallExpression[callee.object.name="${name}"][callee.property.name="assert"]`,
            );

            return selectors.join(', ');
        };

        return {
            /**
             * @param node {import('@types/estree').ExpressionStatement}
             */
            [constructSelectors()](node) {
                const ancestors = context.getAncestors();
                const logicalExpressions = getLogicalExpressions(ancestors);

                /**
                 * There are 3 cases, the goal is to find a required identifier in any of them.
                 * 1. required && callee.assert()
                 * 2. if (required && isUser) { callee.assert() }
                 * 3. required ? callee.assert() : null
                 */
                const isValid =
                    validateLogicalExpressions(logicalExpressions) ||
                    validateIfExpressions(ancestors) ||
                    validateConditionalExpressions(ancestors);

                if (isValid) {
                    return;
                }

                context.report({
                    node,
                    messageId: MESSAGE_ID,
                    /**
                     * This fixer is pretty straightforward.
                     * The best solution requires complicated logic,
                     * handling different types of expressions and combinations of them.
                     */
                    fix: fixer => [
                        fixer.insertTextBefore(node, `(${requiredIdentifierName} && `),
                        fixer.insertTextAfter(node, `)`),
                    ],
                });
            },
        };
    },
};

/**
 * Filters the provided ancestors by a LogicalExpression type.
 * @param ancestors {import('@types/estree').Node[]}
 * @returns {import('@types/estree').LogicalExpression[]}
 */
const getLogicalExpressions = ancestors => {
    return ancestors.filter(({type}) => type === 'LogicalExpression');
};

/**
 * Validates that a required identifier is presented in the provided expressions.
 * Handles `required && callee.assert()` expression.
 * @param expressions {import('@types/estree').LogicalExpression[]}
 * @returns {boolean}
 */
const validateLogicalExpressions = expressions =>
    expressions.some(expression =>
        Boolean(getNodeByNameFromLogicalExpression(expression, requiredIdentifierName)),
    );

/**
 * Validates that a required identifier is presented in the provided ancestors.
 * Handles `if (required && isUser) { callee.assert() }` expression.
 * @param ancestors {import('@types/estree').Node[]}
 * @returns {boolean}
 */
const validateIfExpressions = ancestors => {
    /**
     * @param statement {import('@types/estree').IfStatement[]}
     */
    const statements = ancestors.filter(({type}) => type === 'IfStatement');

    const logicalExpressions = [];

    for (const {test} of statements) {
        if (test.type === 'Identifier' && test.name === requiredIdentifierName) {
            return true;
        }

        if (test.type === 'LogicalExpression') {
            logicalExpressions.push(test);
        }
    }

    return validateLogicalExpressions(logicalExpressions);
};

/**
 * Validates that a required identifier is presented in the provided ancestors.
 * Handles `required ? callee.assert() : null` expression.
 * @param ancestors {import('@types/estree').Node[]}
 * @returns {boolean}
 */
const validateConditionalExpressions = ancestors => {
    /**
     * @param statement {import('@types/estree').ConditionalExpression[]}
     */
    const statements = ancestors.filter(({type}) => type === 'ConditionalExpression');

    const logicalExpressions = [];

    for (const {test} of statements) {
        if (test.type === 'Identifier' && test.name === requiredIdentifierName) {
            return true;
        }

        if (test.type === 'LogicalExpression') {
            logicalExpressions.push(test);
        }
    }

    return validateLogicalExpressions(logicalExpressions);
};
