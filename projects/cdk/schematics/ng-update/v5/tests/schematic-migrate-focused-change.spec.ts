import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update focusedChange removed from legacy controls', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO for (focusedChange) on tui-input-tag',
        migrate({
            template: /* HTML */ `
                <tui-input-tag
                    [(ngModel)]="tags"
                    (focusedChange)="inputFocusChanged($event)"
                />
            `,
        }),
    );

    it(
        'adds TODO for two-way [(focused)] on tui-select',
        migrate({
            template: /* HTML */ `
                <tui-select
                    [formControl]="control"
                    [(focused)]="focused"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-select>
            `,
        }),
    );

    it(
        'adds TODO for (focusedChange) on tui-input (rebuilt element)',
        migrate({
            template: /* HTML */ `
                <tui-input
                    [(ngModel)]="value"
                    (focusedChange)="onFocused($event)"
                >
                    Label
                </tui-input>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
