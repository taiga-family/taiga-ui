import '@angular/common/locales/global/ru';

import {I18nPluralPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        I18nPluralPipe,
        TuiInputNumberModule,
        TuiRoot,
        TuiTextfieldControllerModule,
    ],
    template: `
        <tui-root>
            <tui-input-number
                [tuiTextfieldPostfix]="value | i18nPlural: pluralMap : 'ru-RU'"
                [(ngModel)]="value"
            ></tui-input-number>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputNumberWithPostfix {
    protected value: number | null = null;
    protected pluralMap = {
        one: 'секунда',
        few: 'секунды',
        many: 'секунд',
        other: 'секунды',
    };
}

describe('InputNumber with dynamic postfix', () => {
    describe('Plural forms of seconds (locale ru-RU)', () => {
        beforeEach(() => {
            cy.mount(TestInputNumberWithPostfix);
            cy.get('tui-input-number input').as('textfield');
        });

        const withPostfix = (
            range: number[],
            postfix: string,
        ): ReadonlyArray<{typed: string; value: string}> =>
            range.map(String).map((x) => ({typed: x, value: `${x} ${postfix}`}));

        (
            [
                {typed: '1', value: '1 секунда'},
                ...withPostfix(range(2, 4), 'секунды'),
                ...withPostfix(range(5, 20), 'секунд'),
                {typed: '21', value: '21 секунда'},
                ...withPostfix(range(22, 24), 'секунды'),
                ...withPostfix(range(25, 30), 'секунд'),
                {typed: '31', value: '31 секунда'},
            ] as const
        ).forEach(({typed, value}) => {
            it(`Type ${typed} => ${value}`, () => {
                cy.get('@textfield').type(typed);

                cy.get('@textfield')
                    .should('have.value', value)
                    .should('have.prop', 'selectionStart', typed.length)
                    .should('have.prop', 'selectionEnd', typed.length);
            });
        });

        it('Press sequentially 123', () => {
            cy.get('@textfield')
                .type('1')
                .should('have.value', '1 секунда')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1)
                .type('2')
                .should('have.value', '12 секунд')
                .should('have.prop', 'selectionStart', 2)
                .should('have.prop', 'selectionEnd', 2)
                .type('3')
                .should('have.value', '123 секунды')
                .should('have.prop', 'selectionStart', 3)
                .should('have.prop', 'selectionEnd', 3);
        });

        it('12|3 секунды => Backspace => 1|3 секунд', () => {
            cy.get('@textfield')
                .type('123')
                .should('have.value', '123 секунды')
                .type('{leftArrow}')
                .should('have.prop', 'selectionStart', 2)
                .should('have.prop', 'selectionEnd', 2)
                .type('{backspace}')
                .should('have.value', '13 секунд')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1);
        });

        it('1|3 секунды => Delete => 1| секунда', () => {
            cy.get('@textfield')
                .type('13')
                .type('{leftArrow}')
                .should('have.value', '13 секунд')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1)
                .type('{del}')
                .should('have.value', '1 секунда')
                .should('have.prop', 'selectionStart', 1)
                .should('have.prop', 'selectionEnd', 1);
        });

        it('1| секунда => Backspace => Empty textfield', () => {
            cy.get('@textfield')
                .type('1')
                .should('have.value', '1 секунда')
                .type('{backspace}')
                .should('have.value', '');
        });
    });
});

export function range(from: number, to: number): number[] {
    return new Array(to - from + 1).fill(null).map((_, i) => from + i);
}
