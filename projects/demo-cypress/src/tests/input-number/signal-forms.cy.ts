/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
    disabled,
    form,
    FormField,
    maxError,
    required,
    validate,
} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormField, TuiInputNumber, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Amount</label>
                <input
                    tuiInputNumber
                    [formField]="$any(f.amount)"
                />
            </tui-textfield>

            <output id="value">{{ f.amount().value() }}</output>
            <output id="touched">{{ f.amount().touched() }}</output>
            <output id="invalid">{{ f.amount().invalid() }}</output>

            <button
                id="set-value"
                type="button"
                (click)="f.amount().value.set(42)"
            >
                Set value
            </button>

            <button
                id="mark-touched"
                type="button"
                (click)="f().markAsTouched()"
            >
                Mark as touched
            </button>

            <button
                id="strict"
                type="button"
                (click)="strict.set(!strict())"
            >
                Toggle strict
            </button>

            <button
                id="disable"
                type="button"
                (click)="off.set(!off())"
            >
                Toggle disabled
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly off = signal(false);
    public readonly strict = signal(false);
    public readonly model = signal<{amount: number | null}>({amount: null});

    public readonly f = form(this.model, (path) => {
        required(path.amount);
        disabled(path.amount, {when: () => this.off()});
        validate(path.amount, ({value}) =>
            this.strict() && (value() ?? 0) > 10 ? maxError(10) : null,
        );
    });
}

describe('tuiInputNumber + signal forms', () => {
    beforeEach(() => {
        cy.window().then((win) => cy.spy(win.console, 'error').as('console'));
        cy.mount(Sandbox);
        cy.get('input[tuiInputNumber]').as('input');
    });

    it('mounts without runtime errors', () => {
        cy.get('@input').type('42').blur();

        cy.get('@console').then((spy) => {
            const messages = (spy as unknown as {args: unknown[][]}).args
                .map(([error]) => String(error))
                // Dev server noise of the component testing harness, not the application
                .filter((message) => !message.startsWith('[webpack-dev-server]'));

            expect(messages).to.deep.equal([]);
        });
    });

    describe('Value synchronization', () => {
        it('typing updates the model', () => {
            cy.get('@input').type('42').should('have.value', '42');

            cy.get('#value').should('have.text', '42');
            cy.get('#invalid').should('have.text', 'false');
        });

        it('programmatic value.set() updates the input', () => {
            cy.get('#set-value').click();

            cy.get('@input').should('have.value', '42');
            cy.get('#touched').should('have.text', 'false');
        });
    });

    describe('Invalid state is shown only after touch', () => {
        it('invalid but untouched => no invalid decoration', () => {
            cy.get('#invalid').should('have.text', 'true');

            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            cy.get('@input').should('have.attr', 'aria-invalid', 'false');
        });

        it('blur without typing => invalid decoration appears', () => {
            cy.get('@input').focus().blur();

            cy.get('#touched').should('have.text', 'true');
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
            cy.get('@input').should('have.attr', 'aria-invalid', 'true');
        });

        it('external markAsTouched() => invalid decoration appears', () => {
            cy.get('#mark-touched').click();

            cy.get('#touched').should('have.text', 'true');
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
            cy.get('@input').should('have.attr', 'aria-invalid', 'true');
        });
    });

    it('external validator change repaints a touched field', () => {
        cy.get('@input').type('42').blur();

        cy.get('#invalid').should('have.text', 'false');
        cy.get('tui-textfield').should('not.have.class', 'tui-invalid');

        cy.get('#strict').click();

        cy.get('#invalid').should('have.text', 'true');
        cy.get('tui-textfield').should('have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'true');
    });

    it('disabled() reaches the native input', () => {
        cy.get('@input').should('not.be.disabled');

        cy.get('#disable').click();

        cy.get('@input').should('be.disabled');
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
