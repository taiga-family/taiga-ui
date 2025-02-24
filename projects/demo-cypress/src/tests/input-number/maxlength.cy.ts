import '@angular/common/locales/global/ru';

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputNumber
                    [attr.maxlength]="maxLength"
                    [max]="max"
                    [(ngModel)]="value"
                />
            </tui-textfield>

            <button (click)="maxLength = 5; max = 5000">Increase limits</button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {
    protected value: number | null = null;

    @Input()
    public maxLength: number | null = null;

    @Input()
    public max: number | null = null;
}

describe('InputNumber with [attr.maxlength]', () => {
    describe('[attr.maxlength]=3 & [max]=333', () => {
        beforeEach(() => {
            cy.mount(Test, {
                componentProperties: {
                    maxLength: 3,
                    max: 333,
                },
            });
        });

        it('Enter 12345 => 123 (value is NOT replaced by max value)', () => {
            cy.get('[tuiInputNumber]')
                .type('12345')
                .should('have.value', '123')
                .should('have.prop', 'selectionStart', 3)
                .should('have.prop', 'selectionEnd', 3);
        });

        it('Enter 777 => 333 (max limit still works)', () => {
            cy.get('[tuiInputNumber]')
                .type('777')
                .should('have.value', '333')
                .should('have.prop', 'selectionStart', 3)
                .should('have.prop', 'selectionEnd', 3);
        });
    });

    it('Dynamic change of [attr.maxlength] works', () => {
        cy.mount(Test, {
            componentProperties: {
                maxLength: 3,
                max: 999,
            },
        });

        cy.get('[tuiInputNumber]').type('12345').should('have.value', '123');
        cy.get('button').contains('Increase limits').click();
        cy.get('[tuiInputNumber]')
            .type('456')
            .should('have.value', '1 234')
            .clear()
            .type('9999')
            .should('have.value', '5 000');
    });
});
