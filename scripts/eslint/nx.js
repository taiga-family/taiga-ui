/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    plugins: ['@nrwl/nx'],
    rules: {
        '@nrwl/nx/enforce-module-boundaries': [
            'error',
            {
                enforceBuildableLibDependency: true,
                allowCircularSelfDependency: true,
                depConstraints: [{sourceTag: '*', onlyDependOnLibsWithTags: ['*']}],
            },
        ],
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
                '@nrwl/nx/enforce-module-boundaries': [
                    'error',
                    {
                        enforceBuildableLibDependency: true,
                        allowCircularSelfDependency: true,
                        allow: ['@taiga-ui/testing'],
                        depConstraints: [
                            {sourceTag: '*', onlyDependOnLibsWithTags: ['*']},
                        ],
                    },
                ],
            },
        },
    ],
};
