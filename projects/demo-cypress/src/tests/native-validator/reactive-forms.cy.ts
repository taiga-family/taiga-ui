import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiError, TuiInput, TuiRoot} from '@taiga-ui/core';

// https://docs.cypress.io/app/faq#Can-I-check-that-a-forms-HTML-form-validation-is-shown-when-an-input-is-invalid
function expectValidationMessage(message: string): void {
    cy.get('@input').should(($input) =>
        expect(($input[0] as HTMLInputElement).validationMessage).to.equal(message),
    );
}

describe('TuiNativeValidator + reactive forms', () => {
    describe('Single field', () => {
        @Component({
            imports: [ReactiveFormsModule, TuiError, TuiInput, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>Name</label>
                        <input
                            tuiInput
                            [formControl]="control"
                        />
                    </tui-textfield>

                    <tui-error [formControl]="control" />

                    <button
                        id="disable"
                        type="button"
                        (click)="control.disable()"
                    >
                        Disable
                    </button>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Sandbox {
            public readonly control = new FormControl('', Validators.required);
        }

        beforeEach(() => {
            cy.mount(Sandbox);
            cy.get('tui-textfield input').as('input');
        });

        it('Invalid but untouched => native validity is untouched as well', () => {
            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            expectValidationMessage('');
        });

        it('Touched and invalid => marks the input and the textfield', () => {
            cy.get('@input').focus().blur();

            cy.get('@input').should('have.attr', 'aria-invalid', 'true');
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
            expectValidationMessage('Invalid');
        });

        it('Fixed value => everything rolls back', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid');

            cy.get('@input').type('123');

            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            expectValidationMessage('');
        });

        it('`aria-describedby` of the input points at tui-error', () => {
            cy.get('@input').focus().blur();

            cy.get('tui-error')
                .invoke('attr', 'id')
                .should('not.be.empty')
                .then((id) => {
                    cy.get('@input').should('have.attr', 'aria-describedby', String(id));
                });
        });

        it('Disabled control is never invalid', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid');

            cy.get('#disable').click();

            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
        });
    });

    describe('Two fields', () => {
        @Component({
            imports: [ReactiveFormsModule, TuiError, TuiInput, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>First</label>
                        <input
                            id="first"
                            tuiInput
                            [formControl]="first"
                        />
                    </tui-textfield>

                    <tui-error
                        id="first-error"
                        [formControl]="first"
                    />

                    <tui-textfield>
                        <label tuiLabel>Second</label>
                        <input
                            id="second"
                            tuiInput
                            [formControl]="second"
                        />
                    </tui-textfield>

                    <tui-error
                        id="second-error"
                        [formControl]="second"
                    />
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Sandbox {
            public readonly first = new FormControl('', Validators.required);
            public readonly second = new FormControl('', Validators.required);
        }

        beforeEach(() => {
            cy.mount(Sandbox);
        });

        it('Each input is described by its own tui-error', () => {
            cy.get('#first').focus().blur();
            cy.get('#second').focus().blur();

            cy.get('#first').should('have.attr', 'aria-describedby', 'first-error');
            cy.get('#second').should('have.attr', 'aria-describedby', 'second-error');
        });

        it('Blur of the second field alone leaves the first one undescribed', () => {
            cy.get('#second').focus().blur();

            cy.get('#second').should('have.attr', 'aria-describedby', 'second-error');
            cy.get('#first').should('not.have.attr', 'aria-describedby');
        });

        it('Fixing one field does not affect the other', () => {
            cy.get('#first').focus().blur();
            cy.get('#second').focus().blur();

            cy.get('#first').type('123');

            cy.get('#first').should('have.attr', 'aria-invalid', 'false');
            cy.get('#second').should('have.attr', 'aria-invalid', 'true');
        });
    });
});
