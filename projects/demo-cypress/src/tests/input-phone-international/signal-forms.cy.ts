/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, minLengthError, validate} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';

@Component({
    imports: [FormField, TuiInputPhoneInternational, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputPhoneInternational
                    [countries]="countries"
                    [formField]="f.phone"
                    [(countryIsoCode)]="countryIsoCode"
                />
            </tui-textfield>

            <div style="margin-block-start: 1rem">
                <output id="touched">{{ f.phone().touched() }}</output>
                <output id="invalid">{{ f.phone().invalid() }}</output>

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
            </div>

        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: import('libphonenumber-js/min/metadata').then((m) => m.default),
        }),
    ],
})
export class Sandbox {
    public readonly countries: readonly TuiCountryIsoCode[] = ['RU', 'US'];
    public readonly countryIsoCode = signal<TuiCountryIsoCode>('RU');
    public readonly strict = signal(true);
    public readonly model = signal<{phone: string}>({phone: ''});

    public readonly f = form(this.model, (path) => {
        validate(path.phone, ({value}) =>
            this.strict() && value().length < 12 ? minLengthError(12) : null,
        );
    });
}

function snapshot(name: string): void {
    cy.get('tui-textfield').compareSnapshot({
        name: `tuiInputPhoneInternational-${name}`,
        cypressScreenshotOptions: {padding: 8},
    });
}

describe('tuiInputPhoneInternational + signal forms', () => {
    beforeEach(() => {
        cy.viewport(400, 300);
        cy.mount(Sandbox);
        cy.get('input[tuiInputPhoneInternational]').as('input');
        cy.get('tui-textfield button[tuiChevron]').as('select');
    });

    it('invalid but untouched => nothing is painted', () => {
        cy.get('#invalid').should('have.text', 'true');
        cy.get('#touched').should('have.text', 'false');

        cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'false');
        cy.get('@select').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('untouched-invalid');
    });

    it('blur => invalid decoration appears', () => {
        cy.get('@input').focus().blur();

        cy.get('#touched').should('have.text', 'true');

        cy.get('tui-textfield').should('have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'true');
        cy.get('@select').should('have.attr', 'data-mode', 'invalid');

        snapshot('blurred-invalid');
    });

    it('external markAsTouched() => invalid decoration appears', () => {
        cy.get('#mark-touched').click();

        cy.get('tui-textfield').should('have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'true');
        cy.get('@select').should('have.attr', 'data-mode', 'invalid');
    });

    it('field state flip leaves the untouched field unpainted', () => {
        cy.get('#strict').click();
        cy.get('#invalid').should('have.text', 'false');

        cy.get('#strict').click();

        cy.get('#invalid').should('have.text', 'true');
        cy.get('#touched').should('have.text', 'false');

        cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'false');
        cy.get('@select').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('flip-untouched');
    });

    it('valid value of a touched field => decoration disappears', () => {
        cy.get('#mark-touched').click();
        cy.get('@input').type('9123456789');

        cy.get('#invalid').should('have.text', 'false');

        cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
        cy.get('@input').should('have.attr', 'aria-invalid', 'false');
        cy.get('@select').should('not.have.attr', 'data-mode', 'invalid');
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
