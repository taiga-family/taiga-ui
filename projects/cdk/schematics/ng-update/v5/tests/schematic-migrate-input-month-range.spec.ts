import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiInputMonthRangeModule to TuiInputMonthRange', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates import and basic template with label and explicit input',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiInputMonthRangeModule],
                    template: \`
                        <tui-input-month-range [formControl]="ctrl">
                            Choose a range
                            <input tuiTextfieldLegacy />
                        </tui-input-month-range>
                    \`,
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'moves [min]/[max]/[minLength]/[maxLength] to tui-calendar-month',
        migrate({
            template: /* HTML */ `
                <tui-input-month-range
                    [formControl]="ctrl"
                    [min]="min"
                    [max]="max"
                    [minLength]="3"
                    [maxLength]="6"
                >
                    Choose a range
                    <input tuiTextfieldLegacy />
                </tui-input-month-range>
            `,
        }),
    );

    it(
        'moves [disabledItemHandler] and [defaultActiveYear] to tui-calendar-month',
        migrate({
            template: /* HTML */ `
                <tui-input-month-range
                    [(ngModel)]="value"
                    [disabledItemHandler]="handler"
                    [defaultActiveYear]="activeYear"
                >
                    Choose a range
                    <input tuiTextfieldLegacy />
                </tui-input-month-range>
            `,
        }),
    );

    it(
        'migrates when there is no explicit <input> child',
        migrate({
            template: /* HTML */ `
                <tui-input-month-range formControlName="range">
                    Choose a range
                </tui-input-month-range>
            `,
        }),
    );

    it(
        'preserves camelCase for (ngModelChange) and [formControlName] bindings',
        migrate({
            template: /* HTML */ `
                <tui-input-month-range
                    [formControlName]="control"
                    (ngModelChange)="onChange($event)"
                >
                    Choose a range
                </tui-input-month-range>
            `,
        }),
    );

    it(
        'adds TODO comment for dynamic [tuiTextfieldLabelOutside]',
        migrate({
            template: /* HTML */ `
                <tui-input-month-range
                    [(ngModel)]="value"
                    [tuiTextfieldLabelOutside]="isLabelOutside"
                >
                    Choose a range
                </tui-input-month-range>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
