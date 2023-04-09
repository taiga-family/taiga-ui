const traverseLogicalExpression = require('../utils/traverse-logical-expression');

const MESSAGE_ID = `no-assert-without-ng-dev-mode`;
const ERROR_MESSAGE = `callee.assert must be used along with ngDevMode`;

const DEFAULT_OPTIONS = {
    callee: ['tuiAssert'],
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
                 * 1. ngDevMode && callee.assert()
                 * 2. if (ngDevMode && isUser) { callee.assert() }
                 * 3. ngDevMode ? callee.assert() : null
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
 * Tries to find a required identifier in the provided logical expression.
 * @param expression {import('@types/estree').LogicalExpression}
 * @returns {import('@types/estree').Identifier | null}
 */
const getRequiredIdentifierFromLogicalExpression = expression => {
    let requiredIdentifier = null;

    traverseLogicalExpression(expression, leaf => {
        if (leaf.name === requiredIdentifierName) {
            requiredIdentifier = leaf;
        }
    });

    return requiredIdentifier;
};

/**
 * Validates that a required identifier is presented in the provided expressions.
 * Handles `ngDevMode && callee.assert()` expression.
 * @param expressions {import('@types/estree').LogicalExpression[]}
 * @returns {boolean}
 */
const validateLogicalExpressions = expressions =>
    expressions.some(expression =>
        Boolean(getRequiredIdentifierFromLogicalExpression(expression)),
    );

/**
 * Validates that a required identifier is presented in the provided ancestors.
 * Handles `if (ngDevMode && isUser) { callee.assert() }` expression.
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
        if (test.type === 'Identifier' && test.name === 'ngDevMode') {
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
 * Handles `ngDevMode ? callee.assert() : null` expression.
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
        if (test.type === 'Identifier' && test.name === 'ngDevMode') {
            return true;
        }

        if (test.type === 'LogicalExpression') {
            logicalExpressions.push(test);
        }
    }

    return validateLogicalExpressions(logicalExpressions);
};
