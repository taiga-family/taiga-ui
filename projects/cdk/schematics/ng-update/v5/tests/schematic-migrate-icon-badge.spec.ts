import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('should migrate tui-icon badge icon input to iconStart', async () => {
        const {template} = await runMigration({
            collection,
            component: `
import {Component} from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './test.html',
})
export class TestComponent {}
`,
            template: `
<tui-icon
    icon="@tui.box"
    tuiBadge
/>
<tui-icon
    [icon]="icon"
    tuiBadge
/>
<tui-icon icon="@tui.box"></tui-icon>
`,
        });

        expect(template).toEqual(`
<tui-icon
    iconStart="@tui.box"
    tuiBadge
/>
<tui-icon
    [iconStart]="icon"
    tuiBadge
/>
<tui-icon icon="@tui.box"></tui-icon>
`);
    });

    afterEach(() => resetActiveProject());
});
