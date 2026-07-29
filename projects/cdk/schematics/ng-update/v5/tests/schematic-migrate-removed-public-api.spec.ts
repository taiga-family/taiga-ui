import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed public API warnings (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed @taiga-ui/core portal hosts and hint APIs',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TuiAlertComponent,
                    TuiAlerts,
                    TuiDialogs,
                    TuiDropdowns,
                    TuiHintOptionsDirective,
                    TuiHints,
                    TuiHintService,
                } from '@taiga-ui/core';

                @Component({
                    imports: [
                        TuiAlertComponent,
                        TuiAlerts,
                        TuiDialogs,
                        TuiDropdowns,
                        TuiHints,
                        TuiHintOptionsDirective,
                    ],
                })
                export class TestComponent {
                    protected readonly hint = inject(TuiHintService);
                }
            `,
        }),
    );

    it(
        'adds TODO comments for removed @taiga-ui/kit textarea counter/limit components',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiTextareaCounterComponent,
                    TuiTextareaLimitComponent,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [TuiTextareaCounterComponent, TuiTextareaLimitComponent],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for removed table (tuiSortByChange) output',
        migrate({
            template: /* HTML */ `
                <table
                    tuiTable
                    [tuiSortBy]="key"
                    (tuiSortByChange)="onSort($event)"
                >
                    <tbody></tbody>
                </table>
            `,
        }),
    );

    it(
        'adds TODO comment for removed tui-scrollbar [hidden] input',
        migrate({
            template: /* HTML */ `
                <tui-scrollbar [hidden]="isHidden">Content</tui-scrollbar>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
