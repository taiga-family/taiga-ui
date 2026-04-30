import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update readOnly on legacy controls', () => {
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

    describe('basic [readOnly] migration', () => {
        it(
            'moves bound [readOnly] from tui-input to <input tuiInput>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [readOnly]="!show"
                        [(ngModel)]="value"
                    >
                        Name on the card
                    </tui-input>
                `,
            }),
        );

        it(
            'moves static readOnly attribute from tui-input to <input tuiInput>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        readOnly
                        [(ngModel)]="value"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [readOnly]="true" from tui-input to <input tuiInput>',
            migrate({template: '<tui-input [readOnly]="true">Label</tui-input>'}),
        );
    });

    describe('different legacy controls', () => {
        it(
            'moves [readOnly] on tui-textarea to <textarea tuiTextarea>',
            migrate({template: '<tui-textarea [readOnly]="!show">Label</tui-textarea>'}),
        );

        it(
            'moves [readOnly] on tui-input-date to <input tuiInputDate>',
            migrate({
                template: '<tui-input-date [readOnly]="!show">Date</tui-input-date>',
            }),
        );

        it(
            'moves [readOnly] on tui-input-date-range to <input tuiInputDateRange>',
            migrate({
                template:
                    '<tui-input-date-range [readOnly]="!show">Range</tui-input-date-range>',
            }),
        );

        it(
            'moves [readOnly] on tui-input-time to <input tuiInputTime>',
            migrate({
                template: '<tui-input-time [readOnly]="!show">Time</tui-input-time>',
            }),
        );

        it(
            'moves [readOnly] on tui-input-phone to <input tuiInputPhone>',
            migrate({
                template: '<tui-input-phone [readOnly]="!show">Phone</tui-input-phone>',
            }),
        );

        it(
            'moves [readOnly] on tui-input-tag to <input tuiInputChip>',
            migrate({template: '<tui-input-tag [readOnly]="!show">Tags</tui-input-tag>'}),
        );

        it(
            'moves [readOnly] on tui-combo-box to <input tuiComboBox>',
            migrate({
                template: /* HTML */ `
                    <tui-combo-box
                        [readOnly]="!show"
                        [(ngModel)]="value"
                    >
                        Label
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-combo-box>
                `,
            }),
        );

        it(
            'moves [readOnly] on tui-select to <input tuiSelect>',
            migrate({
                template: /* HTML */ `
                    <tui-select
                        [readOnly]="!show"
                        [(ngModel)]="value"
                    >
                        Select user
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-select>
                `,
            }),
        );

        it(
            'moves [readOnly] on tui-multi-select to <input tuiInputChip>',
            migrate({
                template: /* HTML */ `
                    <tui-multi-select
                        [readOnly]="!show"
                        [formControl]="control"
                    >
                        Persons
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-multi-select>
                `,
            }),
        );
    });

    describe('combined with other attributes', () => {
        it(
            'moves [readOnly] alongside [(ngModel)] without leaving TODO comment',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [readOnly]="!show"
                        [(ngModel)]="value"
                    >
                        Name on the card
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [readOnly] together with formControlName',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        formControlName="value"
                        [readOnly]="!show"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [readOnly] alongside wrapper attrs and recognized hint',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        formControlName="value"
                        tuiHintContent="Hint"
                        tuiTextfieldSize="s"
                        [readOnly]="!show"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );
    });

    describe('multiple occurrences', () => {
        it(
            'migrates [readOnly] on multiple legacy controls in one template',
            migrate({
                template: /* HTML */ `
                    <tui-input [readOnly]="!show">First</tui-input>
                    <tui-textarea [readOnly]="!show">Second</tui-textarea>
                    <tui-select
                        [readOnly]="!show"
                        [(ngModel)]="value"
                    >
                        Third
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-select>
                `,
            }),
        );
    });

    describe('inline template', () => {
        it(
            'moves [readOnly] inside an inline template',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {FormsModule} from '@angular/forms';
                    import {TuiInputModule} from '@taiga-ui/legacy';

                    @Component({
                        selector: 'inline-example',
                        imports: [FormsModule, TuiInputModule],
                        template: \`
                            <tui-input
                                [readOnly]="!show"
                                [(ngModel)]="value"
                            >
                                Name on the card
                            </tui-input>
                        \`,
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class InlineExample {
                        show = true;
                        value = '';
                    }
                `,
            }),
        );
    });

    describe('should not change', () => {
        it(
            'does not touch legacy control without [readOnly]',
            migrate({template: '<tui-input formControlName="value" />'}),
        );

        it(
            'does not touch already-migrated <input tuiInput> with [readOnly]',
            migrate({
                template: /* HTML */ `
                    <tui-textfield>
                        <label tuiLabel>Name on the card</label>
                        <input
                            tuiInput
                            [readOnly]="!show"
                            [(ngModel)]="value"
                        />
                    </tui-textfield>
                `,
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
