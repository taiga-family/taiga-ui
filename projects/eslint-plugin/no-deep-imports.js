const MESSAGE_ID = `no-deep-imports`;
const ERROR_MESSAGE = `Deep imports of Taiga UI packages are prohibited`;

const DEEP_IMPORT_REG = /(?<=^@taiga-ui\/[\w-]+)(\/.+)$/g;
const CURRENT_PROJECT_REG = /(?<=taiga-ui\/projects\/)(\w+)/g;

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: `problem`,
        docs: {description: ERROR_MESSAGE},
        messages: {
            [MESSAGE_ID]: ERROR_MESSAGE,
        },
        fixable: `code`,
    },
    create(context) {
        return {
            'ImportDeclaration[source.value=/^@taiga-ui*/]'({source: sourceNode}) {
                const currentFilePath = context.getFilename();
                const [currentFileProjectName = ``] =
                    currentFilePath.match(CURRENT_PROJECT_REG) || [];
                const importSource = sourceNode?.value || ``;

                if (
                    !currentFileProjectName ||
                    importSource.includes(currentFileProjectName) ||
                    importSource.includes(`?raw`) ||
                    // TODO temporary workaround until it can be imported from @taiga-ui/testing
                    importSource.includes(`@taiga-ui/testing/cypress`)
                ) {
                    return;
                }

                if (importSource.match(DEEP_IMPORT_REG)?.length) {
                    context.report({
                        node: sourceNode,
                        messageId: MESSAGE_ID,
                        fix: fixer => {
                            const [start, end] = sourceNode.range;

                            return fixer.replaceTextRange(
                                [start + 1, end - 1], //  keeps quotes
                                importSource.replace(DEEP_IMPORT_REG, ``),
                            );
                        },
                    });
                }
            },
        };
    },
};
