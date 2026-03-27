import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update proprietary textfield icons', () => {
    const proprietaryMigrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        packageJson: JSON.stringify({dependencies: {'@taiga-ui/proprietary': '^4.0.0'}}),
    });
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'changes medium icons to small when size is absent in proprietary project',
        proprietaryMigrate({
            template: /* HTML */ `
                <tui-textfield
                    iconEnd="@tui.foo.medium.settings"
                    iconStart="@tui.pragmatic.medium.magnifier"
                />
            `,
        }),
    );

    it(
        'changes medium icons to small when tuiTextfieldSize is l in proprietary project',
        proprietaryMigrate({
            template: /* HTML */ `
                <tui-textfield
                    iconEnd="@tui.pragmatic.medium.settings"
                    iconStart="@tui.foo.medium.magnifier"
                    tuiTextfieldSize="l"
                />
            `,
        }),
    );

    it(
        'does not change icons without proprietary dependency',
        migrate({
            template: /* HTML */ `
                <tui-textfield
                    iconEnd="@tui.pragmatic.medium.settings"
                    iconStart="@tui.foo.medium.magnifier"
                />
            `,
        }),
    );

    it(
        'does not change icons when tuiTextfieldSize is m in proprietary project',
        proprietaryMigrate({
            template: /* HTML */ `
                <tui-textfield
                    iconEnd="@tui.pragmatic.medium.settings"
                    iconStart="@tui.foo.medium.magnifier"
                    tuiTextfieldSize="m"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
