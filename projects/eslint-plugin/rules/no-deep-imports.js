const path = require('path');

const MESSAGE_ID = `no-deep-imports`;
const ERROR_MESSAGE = `Deep imports of Taiga UI packages are prohibited`;

const DEFAULT_OPTIONS = {
    importDeclaration: `^@taiga-ui*`,
    deepImport: `(?<=^@taiga-ui/[\\w-]+)(/.+)$`,
    projectName: `(?<=^@taiga-ui/)([-\\w]+)`,
    currentProject: ``,
    ignoreImports: [],
};

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
        schema: [
            {
                type: `object`,
                properties: {
                    importDeclaration: {
                        type: `string`,
                        description: `RegExp string to detect import declarations for which this rule should be applied`,
                    },
                    deepImport: {
                        type: `string`,
                        description: `RegExp string to pick out deep import part`,
                    },
                    currentProject: {
                        type: `string`,
                        description: `RegExp string to pick out current project name of processed file`,
                    },
                    ignoreImports: {
                        type: `array`,
                        items: {
                            type: `string`,
                        },
                        description: `RegExp string to exclude import declarations which is selected by importDeclaration-option`,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    create(context) {
        const {
            importDeclaration,
            deepImport,
            projectName,
            currentProject,
            ignoreImports,
        } = {
            ...DEFAULT_OPTIONS,
            ...(context.options[0] || {}),
        };

        const isDeepImport = source => {
            return !!source.match(new RegExp(deepImport, 'g'))?.length;
        };

        const isInsideTheSameEntryPoint = source => {
            const filePath = path
                .relative(context.getCwd(), context.getFilename())
                .replace(/\\+/g, '/');

            const [currentFileProjectName] =
                (currentProject && filePath.match(new RegExp(currentProject, 'g'))) || [];

            const [importSourceProjectName] =
                source.match(new RegExp(projectName, 'g')) || [];

            return Boolean(
                currentFileProjectName &&
                    importSourceProjectName &&
                    currentFileProjectName === importSourceProjectName,
            );
        };

        const shouldIgnore = source => {
            return ignoreImports.some(p => source.match(new RegExp(p, 'g')));
        };

        return {
            [`ImportDeclaration[source.value=/${importDeclaration}/]`]({
                source: sourceNode,
            }) {
                const importSource = sourceNode?.value || ``;

                if (
                    !isDeepImport(importSource) ||
                    isInsideTheSameEntryPoint(importSource) ||
                    shouldIgnore(importSource)
                ) {
                    return;
                }

                context.report({
                    node: sourceNode,
                    messageId: MESSAGE_ID,
                    fix: fixer => {
                        const [start, end] = sourceNode.range;

                        return fixer.replaceTextRange(
                            [start + 1, end - 1], //  keeps quotes
                            importSource.replace(new RegExp(deepImport, 'g'), ``),
                        );
                    },
                });
            },
        };
    },
};
