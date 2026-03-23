import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate style imports', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should replace @taiga-ui/core/styles/taiga-ui-local with @taiga-ui/styles/utils',
        migrate({styles: "@import '@taiga-ui/core/styles/taiga-ui-local.less';"}),
    );

    it(
        'should replace @taiga-ui/core/styles/taiga-ui-fonts with @taiga-ui/styles/taiga-ui-fonts',
        migrate({styles: "@import '@taiga-ui/core/styles/taiga-ui-fonts';"}),
    );

    it(
        'should replace @taiga-ui/kit/styles/ with @taiga-ui/styles/',
        migrate({styles: "@import '@taiga-ui/kit/styles/components/checkbox.less';"}),
    );

    it(
        'should handle multiple replacements in the same file',
        migrate({
            styles: `
                @import '@taiga-ui/core/styles/taiga-ui-local';
                @import '@taiga-ui/styles/markup/tui-space.less';
                @import '@taiga-ui/styles/markup/tui-list';
                @import '@taiga-ui/core/styles/taiga-ui-fonts.less';
                @import '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less';
                @import '@taiga-ui/styles/taiga-ui-global.less';
                @import '@taiga-ui/core/styles/taiga-ui-theme.less';
            `,
        }),
    );

    it(
        'should migrate style imports in project.json',
        migrate({
            projectJson: JSON.stringify({
                name: 'test-project',
                targets: {
                    build: {
                        options: {
                            styles: [
                                '@taiga-ui/core/styles/taiga-ui-theme.less',
                                '@taiga-ui/core/styles/taiga-ui-fonts.less',
                                '@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less',
                                '@taiga-ui/styles/taiga-ui-global.less',
                            ],
                        },
                    },
                },
            }),
        }),
    );

    afterEach(() => resetActiveProject());
});
