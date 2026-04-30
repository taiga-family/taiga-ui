import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update label on legacy controls', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {Component} from '@angular/core';
            import {TuiInputModule} from '@taiga-ui/legacy';

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiInputModule],
            })
            export class Test {}
        `,
    });

    it(
        'preserves plain text label when inner <input tuiTextfieldLegacy> has no placeholder',
        migrate({
            template: /* HTML */ `
                <tui-input
                    [maskito]="maskitoOptions"
                    [style.max-width.rem]="20"
                    [(ngModel)]="value"
                >
                    Enter number

                    <input
                        tuiTextfieldLegacy
                        [maskito]="maskitoOptions"
                        (change)="log($event)"
                    />
                </tui-input>
            `,
        }),
    );

    it(
        'preserves plain text label and keeps existing placeholder on inner <input tuiTextfieldLegacy>',
        migrate({
            template: /* HTML */ `
                <tui-input
                    [style.max-width.rem]="30"
                    [(ngModel)]="value"
                >
                    Japanese yen
                    <input
                        inputmode="decimal"
                        placeholder="¥1,2345,6789"
                        tuiTextfieldLegacy
                        [maskito]="maskitoOptions"
                    />
                </tui-input>
            `,
        }),
    );

    it(
        'preserves HTML label content and keeps existing placeholder on inner <input tuiTextfieldLegacy>',
        migrate({
            template: /* HTML */ `
                <tui-input
                    [style.max-width.rem]="30"
                    [(ngModel)]="value"
                >
                    <strong>&pi;</strong>
                    -value
                    <input
                        inputmode="decimal"
                        placeholder="3,141..."
                        tuiTextfieldLegacy
                        [maskito]="maskitoOptions"
                    />
                </tui-input>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
