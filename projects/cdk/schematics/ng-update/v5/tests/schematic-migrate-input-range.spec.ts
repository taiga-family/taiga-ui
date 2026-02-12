import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update input-range', () => {
    async function migrate(template: string): Promise<string> {
        const {template: result} = await runMigration({
            template,
            collection,
            component: `
                import {TuiInputRange} from '@taiga-ui/kit';

                @Component({
                    templateUrl: './test.html',
                    imports: [TuiInputRange],
                })
                export class TestComponent {}
            `,
        });

        return result;
    }

    it('removes label[tuiLabel] inside tui-input-range', async () => {
        const before = `
<tui-input-range
    [max]="max"
    [min]="min"
    [tuiNumberFormat]="numberFormat"
    [(ngModel)]="value"
>
    <label tuiLabel>Type number like a German</label>
</tui-input-range>
`;

        const after = `
<tui-input-range
    [max]="max"
    [min]="min"
    [tuiNumberFormat]="numberFormat"
    [(ngModel)]="value"
>
    Type number like a German
</tui-input-range>
`;

        expect(await migrate(before)).toEqual(after);
    });

    it('removes label[tuiLabel] inside tui-input-range (with spaces)', async () => {
        const before = `
<tui-input-range
    [max]="max"
    [min]="min"
    [tuiNumberFormat]="numberFormat"
    [(ngModel)]="value"
>
    <label tuiLabel>
        Type number like a German
    </label>
</tui-input-range>
`;

        const after = `
<tui-input-range
    [max]="max"
    [min]="min"
    [tuiNumberFormat]="numberFormat"
    [(ngModel)]="value"
>
    
        Type number like a German
    
</tui-input-range>
`;

        expect(await migrate(before)).toEqual(after);
    });

    afterEach(() => resetActiveProject());
});
