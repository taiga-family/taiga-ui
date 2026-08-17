import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update [(tuiDropdownOpen)] -> [(open)] on textfield inputs', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames [(tuiDropdownOpen)] on tui-input-tag',
        migrate({
            template: /* HTML */ `
                <tui-input-tag
                    [(ngModel)]="tags"
                    [(tuiDropdownOpen)]="open"
                >
                    <tui-data-list *tuiDataList>
                        <button tuiOption>A</button>
                    </tui-data-list>
                </tui-input-tag>
            `,
        }),
    );

    it(
        'renames [(tuiDropdownOpen)] on tui-select',
        migrate({
            template: /* HTML */ `
                <tui-select
                    [formControl]="control"
                    [(tuiDropdownOpen)]="open"
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
        'renames [(tuiDropdownOpen)] on tui-combo-box',
        migrate({
            template: /* HTML */ `
                <tui-combo-box
                    [formControl]="control"
                    [(tuiDropdownOpen)]="open"
                >
                    <tui-data-list *tuiDataList>
                        <button
                            tuiOption
                            [value]="item"
                        >
                            {{ item }}
                        </button>
                    </tui-data-list>
                </tui-combo-box>
            `,
        }),
    );

    it(
        'renames [(tuiDropdownOpen)] on tui-multi-select',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    [formControl]="control"
                    [(tuiDropdownOpen)]="open"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'renames [(tuiDropdownOpen)] on tui-input',
        migrate({
            template: /* HTML */ `
                <tui-input
                    [(ngModel)]="value"
                    [(tuiDropdownOpen)]="open"
                >
                    Label
                    <tui-data-list *tuiDataList>
                        <button tuiOption>A</button>
                    </tui-data-list>
                </tui-input>
            `,
        }),
    );

    it(
        'renames the one-way [tuiDropdownOpen] and (tuiDropdownOpenChange) forms',
        migrate({
            template: /* HTML */ `
                <tui-select
                    [formControl]="control"
                    [tuiDropdownOpen]="open"
                    (tuiDropdownOpenChange)="onOpenChange($event)"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-select>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
