import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    TUI_DEFAULT_ERROR_MESSAGE,
    TuiError,
    TuiInput,
    TuiRoot,
    tuiValidationErrorsProvider,
} from '@taiga-ui/core';

/**
 * `maxlength` is deliberately missing from the provided messages
 * to cover the fallback to `TUI_DEFAULT_ERROR_MESSAGE`
 */
const DEFAULT_MESSAGE = '[Default] No value in tuiValidationErrorsProvider';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Digits</label>
                <input
                    tuiInput
                    [formControl]="control"
                />
            </tui-textfield>

            <tui-error
                [formControl]="control"
                [order]="order()"
            />

            <button
                id="disable"
                type="button"
                (click)="control.disable()"
            >
                Disable
            </button>

            <button
                id="reset"
                type="button"
                (click)="control.reset()"
            >
                Reset
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: TUI_DEFAULT_ERROR_MESSAGE, useValue: () => DEFAULT_MESSAGE},
        tuiValidationErrorsProvider({
            required: 'Value is required',
            minlength: ({requiredLength}: {requiredLength: number}) =>
                `At least ${requiredLength} characters`,
            pattern: 'Digits only',
        }),
    ],
})
export class Sandbox {
    public readonly control = new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
        Validators.pattern(/^\d+$/),
    ]);

    public readonly order = input<readonly string[]>([]);
}

describe('tui-error + reactive forms', () => {
    describe('Error visibility', () => {
        beforeEach(() => {
            cy.mount(Sandbox);
            cy.get('tui-textfield input').as('input');
        });

        it('Invalid but untouched => nothing is shown', () => {
            cy.get('tui-error').should('not.be.visible');
        });

        it('Blur of an empty field => shows the message of `required`', () => {
            cy.get('@input').focus().blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'Value is required');
        });

        it('Too short value => message is built by a function with the error context', () => {
            cy.get('@input').type('12').blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'At least 3 characters');
        });

        it('Valid value => message hides', () => {
            cy.get('@input').type('123').blur();

            cy.get('tui-error').should('not.be.visible');
        });

        it('Already touched field => message returns without another blur', () => {
            cy.get('@input').type('123').blur();
            cy.get('tui-error').should('not.be.visible');

            cy.get('@input').clear();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'Value is required');
        });

        it('Error without a message in the token => falls back to the default one', () => {
            cy.get('@input').type('abcdef').blur();

            cy.get('tui-error').should('be.visible').and('contain.text', DEFAULT_MESSAGE);
        });

        it('Disabled control => message hides even though the value is still invalid', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-error').should('be.visible');

            cy.get('#disable').click();

            cy.get('tui-error').should('not.be.visible');
        });

        it('Reset makes the control untouched => message hides', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-error').should('be.visible');

            cy.get('#reset').click();

            cy.get('tui-error').should('not.be.visible');
        });
    });

    describe('Error priority', () => {
        it('Without `order` the first error of the control wins', () => {
            cy.mount(Sandbox);

            cy.get('tui-textfield input').type('ab').blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'At least 3 characters');
        });

        it('`order` moves `pattern` above `minlength`', () => {
            cy.mount(Sandbox, {componentProperties: {order: ['pattern']}});

            cy.get('tui-textfield input').type('ab').blur();

            cy.get('tui-error').should('be.visible').and('contain.text', 'Digits only');
        });
    });
});
