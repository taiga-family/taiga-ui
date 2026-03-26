import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update legacy select', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates TuiSelectModule import and tui-select template',
        migrate({
            component: `
                import {TuiSelectModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiSelectModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-select><input tuiTextfieldLegacy /></tui-select>
            `,
        }),
    );

    it(
        'migrates complex tui-select template with legacy textfield input',
        migrate({
            template: /* HTML */ `
                <tui-select
                    tuiTextfieldSize="s"
                    [formControl]="testValue"
                >
                    Character
                    <input
                        placeholder="Choose your hero"
                        tuiTextfieldLegacy
                    />
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-select>
            `,
        }),
    );

    it(
        'renames valueContent to content, removes labelOutside and drops TuiTextfieldControllerModule',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiSelectModule, TuiTextfieldControllerModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-select
                    formControlName="testValue"
                    [tuiTextfieldLabelOutside]="true"
                    [valueContent]="cardContent"
                >
                    Choose a card
                    <tui-data-list-wrapper
                        *tuiDataList
                        [itemContent]="cardContent"
                        [items]="cards"
                    />
                </tui-select>
            `,
        }),
    );

    it(
        'moves [(ngModel)] to generated input when input is absent',
        migrate({
            template: /* HTML */ `
                <tui-select [(ngModel)]="value">
                    Choose an option
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
