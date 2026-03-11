import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tui-doc-documentation to table[tuiDocAPI]', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('replaces tui-doc-documentation tag with table and adds tuiDocAPI attribute', async () => {
        expect(await migrate('<tui-doc-documentation></tui-doc-documentation>')).toEqual(
            '<table tuiDocAPI></table>',
        );
    });

    it('handles self-closing tui-doc-documentation tag', async () => {
        expect(await migrate('<tui-doc-documentation />')).toEqual('<table tuiDocAPI />');
    });

    afterEach(() => resetActiveProject());
});
