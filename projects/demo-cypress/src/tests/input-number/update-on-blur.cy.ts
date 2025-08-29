import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

describe('InputNumber | updateOn behavior', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <form [formGroup]="form">
                    <tui-textfield>
                        <input
                            formControlName="control"
                            tuiInputNumber
                        />
                    </tui-textfield>
                </form>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        public form = new FormGroup({
            control: new FormControl(321, {updateOn: 'blur'}),
        });
    }

    beforeEach(() => {
        cy.mount(TestComponent);
        cy.get('[tuiInputNumber]').as('input');
    });

    it('should setup correctly with initial value', () => {
        cy.get('@input').should('have.value', '321');
    });

    it('should not reset input value on blur when updateOn is blur', () => {
        cy.get('@input')
            .clear()
            .type('456')
            .should('have.value', '456')
            .blur()
            .should('have.value', '456');
    });

    it('should preserve user input during typing before blur', () => {
        cy.get('@input')
            .clear()
            .type('123')
            .should('have.value', '123');

        // Value should stay as typed until blur
        cy.get('@input').should('have.value', '123');

        cy.get('@input')
            .blur()
            .should('have.value', '123');
    });
});

describe('InputNumber | default updateOn behavior', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <form [formGroup]="form">
                    <tui-textfield>
                        <input
                            formControlName="control"
                            tuiInputNumber
                        />
                    </tui-textfield>
                </form>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class DefaultTestComponent {
        public form = new FormGroup({
            control: new FormControl(100),
        });
    }

    it('should work correctly for default updateOn: change', () => {
        cy.mount(DefaultTestComponent);

        cy.get('[tuiInputNumber]')
            .should('have.value', '100')
            .clear()
            .type('200')
            .should('have.value', '200')
            .blur()
            .should('have.value', '200');
    });
});