import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update notification directive', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces component tag with div and directive',
        migrate({
            template: '<tui-notification appearance="positive"></tui-notification>',
        }),
    );

    it(
        'handles nested content inside notification',
        migrate({
            template: '<tui-notification size="s"><span>Hello</span></tui-notification>',
        }),
    );

    it(
        'handles self-closing notifications',
        migrate({template: '<tui-notification size="s" />'}),
    );

    it(
        'does not duplicate directive attribute',
        migrate({template: '<tui-notification tuiNotification></tui-notification>'}),
    );

    afterEach(() => resetActiveProject());
});
