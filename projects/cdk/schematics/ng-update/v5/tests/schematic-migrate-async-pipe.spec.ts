import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update remove | async from signal-based pipes', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should remove | async after tuiAmount',
        migrate({template: '{{ 10728.9 | tuiAmount | async }}'}),
    );

    it(
        'should remove | async after tuiAmount with currency argument',
        migrate({template: "{{ 10728.9 | tuiAmount: 'RUB' | async }}"}),
    );

    it(
        'should remove | async after tuiAmount with multiple arguments',
        migrate({template: "{{ 54000.643 | tuiAmount: 'USD' : 'left' | async }}"}),
    );

    it(
        'should remove | async after tuiDecimal',
        migrate({template: '{{ 120.59 | tuiDecimal | async }}'}),
    );

    it(
        'should remove | async after tuiFormatNumber',
        migrate({template: '{{ 10500.33 | tuiFormatNumber | async }}'}),
    );

    it(
        'should remove | async after tuiFormatNumber with object argument',
        migrate({
            template:
                "{{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} | async }}",
        }),
    );

    it(
        'should handle pipe inside element with attributes',
        migrate({
            template:
                '<span [style.color]="\'var(--tui-text-secondary)\'">{{ 120.59 | tuiDecimal | async }}</span>',
        }),
    );

    it(
        'should handle multiline template',
        migrate({
            template: /* HTML */ `
                <p>
                    Formatted number with rounding: {{ 10500.334 | tuiFormatNumber:
                    {precision: 2, decimalSeparator: '.', rounding: 'ceil'} | async }}
                </p>
            `,
        }),
    );

    it(
        'should handle multiple pipes in the same template',
        migrate({
            template: /* HTML */ `
                <li>{{ 10728.9 | tuiAmount | async }}</li>
                <li>{{ 10728.9 | tuiAmount: 'RUB' | async }}</li>
                <span>{{ 120.59 | tuiDecimal | async }}</span>
                <p>{{ 10500.33 | tuiFormatNumber | async }}</p>
            `,
        }),
    );

    it(
        'should not touch | async that is not preceded by tui pipes',
        migrate({template: '{{ someObservable$ | async }}'}),
    );

    it(
        'should not touch pipes without | async',
        migrate({template: '{{ 10728.9 | tuiAmount }}'}),
    );

    afterEach(() => resetActiveProject());
});
