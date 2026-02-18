import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update migrate style imports', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('should replace @taiga-ui/core/styles/taiga-ui-local with @taiga-ui/styles/utils', async () => {
        const {styles} = await runMigration({
            collection,
            styles: "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
        });

        expect(styles).toEqual("@import '@taiga-ui/styles/utils.less';");
    });

    it('should replace @taiga-ui/core/styles/taiga-ui-fonts with @taiga-ui/styles/taiga-ui-fonts', async () => {
        const {styles} = await runMigration({
            collection,
            styles: "@import '@taiga-ui/core/styles/taiga-ui-fonts';",
        });

        expect(styles).toEqual("@import '@taiga-ui/styles/taiga-ui-fonts';");
    });

    it('should replace @taiga-ui/kit/styles/ with @taiga-ui/styles/', async () => {
        const {styles} = await runMigration({
            collection,
            styles: "@import '@taiga-ui/kit/styles/components/checkbox.less';",
        });

        expect(styles).toEqual("@import '@taiga-ui/styles/components/checkbox.less';");
    });

    it('should handle multiple replacements in the same file', async () => {
        const {styles} = await runMigration({
            collection,
            styles: `
@import '@taiga-ui/core/styles/taiga-ui-local';
@import '@taiga-ui/core/styles/taiga-ui-fonts.less';
@import '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less';
@import '@taiga-ui/core/styles/taiga-ui-theme.less';
`,
        });

        expect(styles).toEqual(`
@import '@taiga-ui/styles/utils';
@import '@taiga-ui/styles/taiga-ui-fonts.less';
@import '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less';
@import '@taiga-ui/styles/taiga-ui-theme.less';
`);
    });

    it('should migrate style imports in project.json', async () => {
        const {projectJson} = await runMigration({
            collection,
            projectJson: JSON.stringify({
                name: 'test-project',
                targets: {
                    build: {
                        options: {
                            styles: [
                                '@taiga-ui/core/styles/taiga-ui-theme.less',
                                '@taiga-ui/core/styles/taiga-ui-fonts.less',
                                '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less',
                            ],
                        },
                    },
                },
            }),
        });

        expect(projectJson).toEqual(
            JSON.stringify({
                name: 'test-project',
                targets: {
                    build: {
                        options: {
                            styles: [
                                '@taiga-ui/styles/taiga-ui-theme.less',
                                '@taiga-ui/styles/taiga-ui-fonts.less',
                                '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less',
                            ],
                        },
                    },
                },
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
