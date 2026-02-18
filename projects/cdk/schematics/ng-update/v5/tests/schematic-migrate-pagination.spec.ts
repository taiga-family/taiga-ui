import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update migrate tui-pagination size', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('adds TODO comment and removes size="s" from tui-pagination', async () => {
        expect(await migrate('<tui-pagination size="s" />')).toEqual(
            '<!-- TODO: (Taiga UI migration) use tui-pager instead -->\n<tui-pagination  />',
        );

        expect(
            await migrate(`
                <tui-pagination
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />`),
        ).toEqual(`
                <tui-pagination
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />`);

        expect(
            await migrate(
                `
                <tui-pagination
                    [size]="'s'"
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />`.trim(),
            ),
        ).toEqual(
            `<!-- TODO: (Taiga UI migration) use tui-pager instead -->
<tui-pagination
                    ${''}
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />`,
        );
    });

    afterEach(() => resetActiveProject());
});
