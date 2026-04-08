import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update input-range', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {TuiInputRange} from '@taiga-ui/kit';

            @Component({
                templateUrl: './test.html',
                imports: [TuiInputRange],
            })
            export class TestComponent {}
        `,
    });

    it(
        'removes label[tuiLabel] inside tui-input-range',
        migrate({
            template: /* HTML */ `
                <tui-input-range
                    [max]="max"
                    [min]="min"
                    [tuiNumberFormat]="numberFormat"
                    [(ngModel)]="value"
                >
                    <label tuiLabel>Type number like a German</label>
                </tui-input-range>
            `,
        }),
    );

    it(
        'removes label[tuiLabel] inside tui-input-range (with spaces)',
        migrate({
            template: /* HTML */ `
                <tui-input-range
                    [max]="max"
                    [min]="min"
                    [tuiNumberFormat]="numberFormat"
                    [(ngModel)]="value"
                >
                    <label tuiLabel>Type number like a German</label>
                </tui-input-range>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
