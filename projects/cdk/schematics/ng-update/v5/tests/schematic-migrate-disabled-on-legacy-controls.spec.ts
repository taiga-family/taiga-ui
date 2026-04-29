import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update disabled on legacy controls', () => {
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

    describe('basic [disabled] migration', () => {
        it(
            'moves bound [disabled] from tui-input to <input tuiInput>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [disabled]="!show"
                        [(ngModel)]="value"
                    >
                        Name on the card
                    </tui-input>
                `,
            }),
        );

        it(
            'moves static disabled attribute from tui-input to <input tuiInput>',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        disabled
                        [(ngModel)]="value"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [disabled]="true" from tui-input to <input tuiInput>',
            migrate({template: '<tui-input [disabled]="true">Label</tui-input>'}),
        );
    });

    describe('different legacy controls', () => {
        it(
            'moves [disabled] on tui-textarea to <textarea tuiTextarea>',
            migrate({template: '<tui-textarea [disabled]="!show">Label</tui-textarea>'}),
        );

        it(
            'moves [disabled] on tui-input-date to <input tuiInputDate>',
            migrate({
                template: '<tui-input-date [disabled]="!show">Date</tui-input-date>',
            }),
        );

        it(
            'moves [disabled] on tui-input-date-range to <input tuiInputDateRange>',
            migrate({
                template:
                    '<tui-input-date-range [disabled]="!show">Range</tui-input-date-range>',
            }),
        );

        it(
            'moves [disabled] on tui-input-time to <input tuiInputTime>',
            migrate({
                template: '<tui-input-time [disabled]="!show">Time</tui-input-time>',
            }),
        );

        it(
            'moves [disabled] on tui-input-phone to <input tuiInputPhone>',
            migrate({
                template: '<tui-input-phone [disabled]="!show">Phone</tui-input-phone>',
            }),
        );

        it(
            'moves [disabled] on tui-input-tag to <input tuiInputChip>',
            migrate({template: '<tui-input-tag [disabled]="!show">Tags</tui-input-tag>'}),
        );

        it(
            'moves [disabled] on tui-combo-box to <input tuiComboBox>',
            migrate({
                template: /* HTML */ `
                    <tui-combo-box
                        [disabled]="!show"
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
            'moves [disabled] on tui-select to <input tuiSelect>',
            migrate({
                template: /* HTML */ `
                    <tui-select
                        [disabled]="!show"
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
            'moves [disabled] on tui-multi-select to <input tuiInputChip>',
            migrate({
                template: /* HTML */ `
                    <tui-multi-select
                        [disabled]="!show"
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
            'moves [disabled] alongside [(ngModel)] without leaving TODO comment',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        [disabled]="!show"
                        [(ngModel)]="value"
                    >
                        Name on the card
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [disabled] together with formControlName',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        formControlName="value"
                        [disabled]="!show"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );

        it(
            'moves [disabled] alongside wrapper attrs and recognized hint',
            migrate({
                template: /* HTML */ `
                    <tui-input
                        formControlName="value"
                        tuiHintContent="Hint"
                        tuiTextfieldSize="s"
                        [disabled]="!show"
                    >
                        Label
                    </tui-input>
                `,
            }),
        );
    });

    describe('multiple occurrences', () => {
        it(
            'migrates [disabled] on multiple legacy controls in one template',
            migrate({
                template: /* HTML */ `
                    <tui-input [disabled]="!show">First</tui-input>
                    <tui-textarea [disabled]="!show">Second</tui-textarea>
                    <tui-select
                        [disabled]="!show"
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
            'moves [disabled] inside an inline template',
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
                                [disabled]="!show"
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
            'does not touch legacy control without [disabled]',
            migrate({template: '<tui-input formControlName="value" />'}),
        );

        it(
            'does not touch already-migrated <input tuiInput> with [disabled]',
            migrate({
                template: /* HTML */ `
                    <tui-textfield>
                        <label tuiLabel>Name on the card</label>
                        <input
                            tuiInput
                            [disabled]="!show"
                            [(ngModel)]="value"
                        />
                    </tui-textfield>
                `,
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
