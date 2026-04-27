import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiTableDirectionOrder', () => {
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
        'migrates dynamic [directionOrder] binding and removes tuiDirectionOrder marker',
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

    it(
        'migrates static [directionOrder] values to TuiSortDirection numbers',
        migrate({
            template: /* HTML */ `
                <table
                    tuiDirectionOrder
                    tuiTable
                    [directionOrder]="'asc'"
                >
                    <tbody></tbody>
                </table>
                <table
                    tuiDirectionOrder
                    tuiTable
                    [directionOrder]="'desc'"
                >
                    <tbody></tbody>
                </table>
            `,
        }),
    );

    it(
        'adds TODO comment for dynamic [directionOrder] binding',
        migrate({
            template: /* HTML */ `
                <table
                    tuiDirectionOrder
                    tuiTable
                    [directionOrder]="myOrder"
                >
                    <tbody></tbody>
                </table>
            `,
        }),
    );

    it(
        'migrates two-way [(directionOrder)] binding',
        migrate({
            template: /* HTML */ `
                <table
                    tuiDirectionOrder
                    tuiTable
                    [(directionOrder)]="directionOrder"
                >
                    <tbody></tbody>
                </table>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
