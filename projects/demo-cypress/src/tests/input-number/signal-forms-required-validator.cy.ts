/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal, type Type} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {form, FormField, required} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

describe('tuiInputNumber[step] + required validator', () => {
    @Component({
        imports: [FormField, TuiInputNumber, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputNumber
                        [formField]="f.amount"
                        [step]="1"
                    />
                </tui-textfield>

                <div style="margin-block-start: 1rem">
                    <output id="touched">{{ f.amount().touched() }}</output>
                </div>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SignalFormsSandbox {
        public readonly model = signal<{amount: number | null}>({amount: null});

        public readonly f = form(this.model, (path) => {
            required(path.amount);
        });
    }

    @Component({
        imports: [ReactiveFormsModule, TuiInputNumber, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputNumber
                        [formControl]="control"
                        [step]="1"
                    />
                </tui-textfield>

                <div style="margin-block-start: 1rem">
                    <output id="touched">{{ control.touched }}</output>
                </div>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class ReactiveFormsSandbox {
        public readonly control = new FormControl<number | null>(
            null,
            Validators.required,
        );
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
            name: `InputNumberStep-required-${description}`,
            cypressScreenshotOptions: {padding: 8},
        });
    }

    SANDBOXES.forEach(({component, title}) => {
        describe(title, () => {
            beforeEach(() => {
                cy.viewport(300, 300);
                cy.mount(component);
                cy.get('input[tuiInputNumber]').as('input');
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
