import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update MobileCalendar', () => {
    it('add html comment for [single]', async () => {
        const {template} = await runMigration({
            template: `
<tui-mobile-calendar
    [max]="max"
    [min]="min"
    [single]="true"
></tui-mobile-calendar>
`,
            collection,
        });

        expect(template).toBe(`
<!-- TODO: (Taiga UI migration) Use tuiCalendarSheetOptionsProvider({rangeMode: boolean}) instead of [single] property. See example https://taiga-ui.dev/components/mobile-calendar#range -->
<tui-mobile-calendar
    [max]="max"
    [min]="min"
    [single]="true"
></tui-mobile-calendar>
`);
    });

    afterEach(() => resetActiveProject());
});
