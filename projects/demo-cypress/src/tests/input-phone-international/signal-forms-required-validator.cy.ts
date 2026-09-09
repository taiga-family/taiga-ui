/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal, type Type} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {form, FormField, required} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import metadata from 'libphonenumber-js/min/metadata';
import {of} from 'rxjs';

describe('tuiInputPhoneInternational + signal forms: required() paints it before touch', () => {
    const COUNTRIES: readonly TuiCountryIsoCode[] = ['CN', 'US'];

    @Component({
        imports: [FormField, TuiInputPhoneInternational, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputPhoneInternational
                        [countries]="countries"
                        [formField]="f.phone"
                        [(countryIsoCode)]="iso"
                    />
                </tui-textfield>

                <div style="margin-block-start: 1rem">
                    <output id="touched">{{ f.phone().touched() }}</output>
                </div>
            </tui-root>
        `,
        providers: [
            tuiInputPhoneInternationalOptionsProvider({metadata: of(metadata)}),
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SignalFormsSandbox {
        public readonly countries = COUNTRIES;
        public readonly iso = signal<TuiCountryIsoCode>('CN');
        public readonly model = signal<{phone: string}>({phone: ''});

        public readonly f = form(this.model, (path) => {
            required(path.phone);
        });
    }

    @Component({
        imports: [ReactiveFormsModule, TuiInputPhoneInternational, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputPhoneInternational
                        [countries]="countries"
                        [formControl]="control"
                        [(countryIsoCode)]="iso"
                    />
                </tui-textfield>

                <div style="margin-block-start: 1rem">
                    <output id="touched">{{ control.touched }}</output>
                </div>
            </tui-root>
        `,
        providers: [
            tuiInputPhoneInternationalOptionsProvider({metadata: of(metadata)}),
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class ReactiveFormsSandbox {
        public readonly countries = COUNTRIES;
        public readonly iso = signal<TuiCountryIsoCode>('CN');
        public readonly control = new FormControl<string>('', {
            nonNullable: true,
            validators: Validators.required,
        });
    }

    const SANDBOXES: ReadonlyArray<{
        readonly component: Type<unknown>;
        readonly title: string;
    }> = [
        {component: SignalFormsSandbox, title: '[formField] (signal forms)'},
        {component: ReactiveFormsSandbox, title: '[formControl] (reactive forms)'},
    ];

    function snapshot(description: string): void {
        cy.get('tui-textfield').compareSnapshot({
            name: `InputPhonei18n-${description}`,
            cypressScreenshotOptions: {padding: 8},
        });
    }

    SANDBOXES.forEach(({component, title}) => {
        describe(title, () => {
            beforeEach(() => {
                cy.viewport(300, 300);
                cy.mount(component);
                cy.get('input[tuiInputPhoneInternational]').as('input');
            });

            it('invalid but untouched => nothing is marked as invalid', () => {
                cy.get('#touched').should('have.text', 'false');

                cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
                cy.get('@input').should('have.attr', 'aria-invalid', 'false');
                cy.get('@input').should('not.have.attr', 'data-mode', 'invalid');

                snapshot(`untouched-invalid-${component.name}`);
            });

            it('blur => invalid decoration appears', () => {
                cy.get('@input').focus().blur();

                cy.get('#touched').should('have.text', 'true');
                cy.get('tui-textfield').should('have.class', 'tui-invalid');
                cy.get('@input').should('have.attr', 'aria-invalid', 'true');

                snapshot(`touched-invalid-${component.name}`);
            });
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
