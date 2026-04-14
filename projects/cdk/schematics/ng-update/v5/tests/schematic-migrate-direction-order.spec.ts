import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiTableDirectionOrder warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO for TuiTableDirectionOrder import',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiTableDirectionOrder} from '@taiga-ui/addon-table';

                @Component({
                    standalone: true,
                    imports: [TuiTableDirectionOrder],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds HTML TODO comment for tuiDirectionOrder template attribute',
        migrate({
            template: /* HTML */ `
                <table
                    tuiDirectionOrder
                    tuiTable
                    [directionOrder]="directionOrder"
                    (directionOrderChange)="onOrderChange($event)"
                >
                    <tbody></tbody>
                </table>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
