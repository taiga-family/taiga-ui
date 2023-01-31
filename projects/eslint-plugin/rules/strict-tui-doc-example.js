const getTypeName = require(`../utils/get-type-name`);

const INVALID_KEY_MESSAGE_ID = `strict-doc-example-extensions-invalid-key`;
const INVALID_VALUE_MESSAGE_ID = `strict-doc-example-extensions-invalid-value`;

const DOC_EXAMPLE_INTERFACE_NAME = `TuiDocExample`;

/**
 * @type {TuiDocExample}
 */
const fileNameToExtension = {
    TypeScript: `.ts`,
    HTML: `.html`,
    LESS: `.less`,
    CSS: '.css',
    JavaScript: '.md',
};

/**
 * Parses a path into RegExp groups:
 * 1. Everything before the last extension (greedy)
 * 2. The last extension
 * 3. Everything after the last extension (can be empty)
 * @example
 * // returns [`./examples/2/index.html/index`, `.ts`, `?raw`]
 * getPathGroups(`./examples/2/index.html/index.ts?raw`)
 * @param {string} path
 * @returns {RegExpMatchArray | null}
 */
const getPathGroups = path => path.match(/(.+)(\.(?:ts|less|scss|js|md|css|html))(.*)/);

/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: `problem`,
        docs: {
            description: `Ensures that keys and values are valid in a ${DOC_EXAMPLE_INTERFACE_NAME} interface.`,
        },
        messages: {
            [INVALID_KEY_MESSAGE_ID]: `The value must be either a valid path with an extension or an abstract file name.`,
            [INVALID_VALUE_MESSAGE_ID]: `The import path extension must match the extension from the object key.`,
        },
        fixable: `code`,
    },
    create(context) {
        return {
            /**
             * It would be better to support any object expression, not only within a class,
             * but it`s pretty complicated to extract the object type since all parents have different interfaces.
             */
            'PropertyDefinition[value.type="ObjectExpression"]'(node) {
                if (getTypeName(node) !== DOC_EXAMPLE_INTERFACE_NAME) {
                    return;
                }

                node.value.properties.forEach(prop => {
                    // It can be either Identifier or Literal.
                    const objKey = prop.key.name || prop.key.value;
                    const objValue = prop.value;

                    if (objValue.type !== `ImportExpression`) {
                        return;
                    }

                    const {source} = objValue;

                    /**
                     * Extract an extension from the object key.
                     * The object key can be a file name or module path.
                     * At the same time the key can be invalid, that`s why this value can be null.
                     * @see TuiDocExample
                     * @type {string|null}
                     */
                    const expectedExtension =
                        fileNameToExtension[objKey] || getPathGroups(objKey)?.[2];

                    /**
                     * Split the object value (actually import value) into groups.
                     * The object value should contain a module path.
                     */
                    const actualPathGroups = getPathGroups(source.value) ?? [];

                    const [, beforeExtensionPart, actualExtension, afterExtensionPart] =
                        actualPathGroups;

                    /**
                     * Both paths must be parsed.
                     * And both extensions must match each other.
                     */
                    const mismatchExtensions =
                        !(expectedExtension && actualPathGroups.length) ||
                        expectedExtension !== actualExtension;

                    if (mismatchExtensions) {
                        const invalidNode = expectedExtension ? source : prop.key;

                        const messageId = expectedExtension
                            ? INVALID_VALUE_MESSAGE_ID
                            : INVALID_KEY_MESSAGE_ID;

                        context.report({
                            node: invalidNode,
                            messageId,
                            fix: fixer => {
                                if (expectedExtension && actualPathGroups.length) {
                                    // It`s safer to use groups instead of finding and replacing.
                                    const fixedValue = `'${beforeExtensionPart}${expectedExtension}${afterExtensionPart}'`;
                                    return fixer.replaceText(source, fixedValue);
                                }
                            },
                        });
                    }
                });
            },
        };
    },
};
