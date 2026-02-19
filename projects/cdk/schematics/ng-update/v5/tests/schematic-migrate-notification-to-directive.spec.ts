import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update notification directive', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('replaces component tag with div and directive', async () => {
        expect(
            await migrate('<tui-notification appearance="positive"></tui-notification>'),
        ).toEqual('<div tuiNotification appearance="positive"></div>');
    });

    it('handles nested content inside notification', async () => {
        expect(
            await migrate(
                '<tui-notification size="s"><span>Hello</span></tui-notification>',
            ),
        ).toEqual('<div tuiNotification size="s"><span>Hello</span></div>');
    });

    it('handles self-closing notifications', async () => {
        expect(await migrate('<tui-notification size="s" />')).toEqual(
            '<div tuiNotification size="s"></div>',
        );
    });

    it('does not duplicate directive attribute', async () => {
        expect(
            await migrate('<tui-notification tuiNotification></tui-notification>'),
        ).toEqual('<div tuiNotification></div>');
    });

    afterEach(() => resetActiveProject());
});
