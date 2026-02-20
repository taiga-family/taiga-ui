import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update remove | async from signal-based pipes', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('should remove | async after tuiAmount', async () => {
        expect(await migrate('{{ 10728.9 | tuiAmount | async }}')).toEqual(
            '{{ 10728.9 | tuiAmount }}',
        );
    });

    it('should remove | async after tuiAmount with currency argument', async () => {
        expect(await migrate("{{ 10728.9 | tuiAmount: 'RUB' | async }}")).toEqual(
            "{{ 10728.9 | tuiAmount: 'RUB' }}",
        );
    });

    it('should remove | async after tuiAmount with multiple arguments', async () => {
        expect(
            await migrate("{{ 54000.643 | tuiAmount: 'USD' : 'left' | async }}"),
        ).toEqual("{{ 54000.643 | tuiAmount: 'USD' : 'left' }}");
    });

    it('should remove | async after tuiDecimal', async () => {
        expect(await migrate('{{ 120.59 | tuiDecimal | async }}')).toEqual(
            '{{ 120.59 | tuiDecimal }}',
        );
    });

    it('should remove | async after tuiFormatNumber', async () => {
        expect(await migrate('{{ 10500.33 | tuiFormatNumber | async }}')).toEqual(
            '{{ 10500.33 | tuiFormatNumber }}',
        );
    });

    it('should remove | async after tuiFormatNumber with object argument', async () => {
        expect(
            await migrate(
                "{{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} | async }}",
            ),
        ).toEqual(
            "{{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} }}",
        );
    });

    it('should handle pipe inside element with attributes', async () => {
        expect(
            await migrate(
                `<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal | async }}</span>`,
            ),
        ).toEqual(
            `<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal }}</span>`,
        );
    });

    it('should handle multiline template', async () => {
        expect(
            await migrate(`<p>
    Formatted number with rounding:
    {{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} | async }}
</p>`),
        ).toEqual(`<p>
    Formatted number with rounding:
    {{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} }}
</p>`);
    });

    it('should handle multiple pipes in the same template', async () => {
        expect(
            await migrate(`<li>{{ 10728.9 | tuiAmount | async }}</li>
<li>{{ 10728.9 | tuiAmount: 'RUB' | async }}</li>
<span>{{ 120.59 | tuiDecimal | async }}</span>
<p>{{ 10500.33 | tuiFormatNumber | async }}</p>`),
        ).toEqual(`<li>{{ 10728.9 | tuiAmount }}</li>
<li>{{ 10728.9 | tuiAmount: 'RUB' }}</li>
<span>{{ 120.59 | tuiDecimal }}</span>
<p>{{ 10500.33 | tuiFormatNumber }}</p>`);
    });

    it('should not touch | async that is not preceded by tui pipes', async () => {
        expect(await migrate('{{ someObservable$ | async }}')).toEqual(
            '{{ someObservable$ | async }}',
        );
    });

    it('should not touch pipes without | async', async () => {
        expect(await migrate('{{ 10728.9 | tuiAmount }}')).toEqual(
            '{{ 10728.9 | tuiAmount }}',
        );
    });

    afterEach(() => resetActiveProject());
});
