import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update font variables', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('should migrate heading and text font variables', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<div style="font: var(--tui-font-heading-3)">
    <span style="font: var(--tui-font-text-m)">Text</span>
    <span style="font: var(--tui-font-text-ui-s)">UI</span>
</div>
`,
        });

        expect(template).toEqual(`
<div style="font: var(--tui-font-heading-h3)">
    <span style="font: var(--tui-font-body-m)">Text</span>
    <span style="font: var(--tui-font-ui-s)">UI</span>
</div>
`);
    });

    afterEach(() => resetActiveProject());
});
