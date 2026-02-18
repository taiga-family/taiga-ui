import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update chip and badge selectors', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('replaces tui-chip with span and tuiChip directive', async () => {
        expect(await migrate('<tui-chip></tui-chip>')).toEqual('<span tuiChip></span>');
    });

    it('preserves attributes on tui-chip', async () => {
        expect(
            await migrate('<tui-chip appearance="primary" size="s">Content</tui-chip>'),
        ).toEqual('<span tuiChip appearance="primary" size="s">Content</span>');
    });

    it('replaces tui-badge with span and tuiBadge directive', async () => {
        expect(await migrate('<tui-badge></tui-badge>')).toEqual(
            '<span tuiBadge></span>',
        );
    });

    it('replaces nav[tuiStepper] with tui-stepper directive', async () => {
        expect(await migrate('<nav tuiStepper></nav>')).toEqual(
            '<tui-stepper ></tui-stepper>',
        );
    });

    it('preserves attributes and content on tui-badge', async () => {
        expect(
            await migrate(
                '<tui-badge appearance="neutral" size="s"><span>1</span></tui-badge>',
            ),
        ).toEqual('<span tuiBadge appearance="neutral" size="s"><span>1</span></span>');
    });

    afterEach(() => resetActiveProject());
});
