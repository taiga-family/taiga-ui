/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {disabled, form, FormField, required} from '@angular/forms/signals';
import {TuiError, TuiInput, TuiRoot} from '@taiga-ui/core';

// https://docs.cypress.io/app/faq#Can-I-check-that-a-forms-HTML-form-validation-is-shown-when-an-input-is-invalid
function expectValidationMessage(message: string): void {
    cy.get('@input').should(($input) =>
        expect(($input[0] as HTMLInputElement).validationMessage).to.equal(message),
    );
}

describe('TuiNativeValidator + signal forms', () => {
    describe('Single field', () => {
        @Component({
            imports: [FormField, TuiError, TuiInput, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>Name</label>
                        <input
                            tuiInput
                            [formField]="f"
                        />
                    </tui-textfield>

                    <tui-error [formField]="f" />

                    <button
                        id="disable"
                        type="button"
                        (click)="off.set(true)"
                    >
                        Disable
                    </button>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Sandbox {
            private readonly value = signal('');

            public readonly off = signal(false);

            public readonly f = form(this.value, (path) => {
                required(path);
                disabled(path, () => this.off());
            });
        }

        beforeEach(() => {
            cy.mount(Sandbox);
            cy.get('tui-textfield input').as('input');
        });

        it('Invalid but untouched => no custom validity is set', () => {
            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
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

        it('Disabled field is never invalid', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid');

            cy.get('#disable').click();

            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
        });
    });

    describe('Two fields', () => {
        @Component({
            imports: [FormField, TuiError, TuiInput, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>First</label>
                        <input
                            id="first"
                            tuiInput
                            [formField]="f.first"
                        />
                    </tui-textfield>

                    <tui-error
                        id="first-error"
                        [formField]="f.first"
                    />

                    <tui-textfield>
                        <label tuiLabel>Second</label>
                        <input
                            id="second"
                            tuiInput
                            [formField]="f.second"
                        />
                    </tui-textfield>

                    <tui-error
                        id="second-error"
                        [formField]="f.second"
                    />
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Sandbox {
            private readonly value = signal({first: '', second: ''});

            public readonly f = form(this.value, (path) => {
                required(path.first);
                required(path.second);
            });
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
*/
// eslint-disable-next-line unicorn/no-empty-file
