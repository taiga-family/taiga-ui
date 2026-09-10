/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal, type Type} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {form, FormField} from '@angular/forms/signals';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiError, TuiRoot, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDate, TuiUnfinishedValidator} from '@taiga-ui/kit';

describe('tuiUnfinishedValidator + signal forms', () => {
    const UNFINISHED_MESSAGE = 'Fill in the date or leave the field empty';
    const DATE = '12.12.2024';
    const HALF_TYPED = '12.1';

    @Component({
        imports: [FormField, TuiError, TuiInputDate, TuiRoot, TuiUnfinishedValidator],
        template: `
            <tui-root>
                <tui-textfield>
                    <label tuiLabel>Optional date</label>
                    <input
                        tuiInputDate
                        tuiUnfinishedValidator
                        [formField]="f"
                    />
                </tui-textfield>

                <tui-error [formField]="f" />

                <output id="value">{{ f().value() ?? 'null' }}</output>
                <output id="invalid">{{ f().invalid() }}</output>

                <button
                    id="submit"
                    type="button"
                    [disabled]="f().invalid()"
                >
                    Submit
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [tuiValidationErrorsProvider({tuiUnfinished: UNFINISHED_MESSAGE})],
    })
    class SignalFormsSandbox {
        private readonly date = signal<TuiDay | null>(null);

        public readonly f = form(this.date);
    }

    @Component({
        imports: [
            ReactiveFormsModule,
            TuiError,
            TuiInputDate,
            TuiRoot,
            TuiUnfinishedValidator,
        ],
        template: `
            <tui-root>
                <tui-textfield>
                    <label tuiLabel>Optional date</label>
                    <input
                        tuiInputDate
                        tuiUnfinishedValidator
                        [formControl]="control"
                    />
                </tui-textfield>

                <tui-error [formControl]="control" />

                <output id="value">{{ control.value ?? 'null' }}</output>
                <output id="invalid">{{ control.invalid }}</output>

                <button
                    id="submit"
                    type="button"
                    [disabled]="control.invalid"
                >
                    Submit
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [tuiValidationErrorsProvider({tuiUnfinished: UNFINISHED_MESSAGE})],
    })
    class ReactiveFormsSandbox {
        public readonly control = new FormControl<TuiDay | null>(null);
    }

    const SANDBOXES: ReadonlyArray<{
        readonly component: Type<unknown>;
        readonly title: string;
    }> = [
        {component: SignalFormsSandbox, title: '[formField] (signal forms)'},
        {component: ReactiveFormsSandbox, title: '[formControl] (reactive forms)'},
    ];

    SANDBOXES.forEach(({component, title}) => {
        describe(title, () => {
            beforeEach(() => {
                cy.window().then((win) => cy.spy(win.console, 'error').as('console'));
                cy.mount(component);
                cy.get('input[tuiInputDate]').as('input');
            });

            describe('A half-typed date is flagged', () => {
                beforeEach(() => {
                    cy.get('@input').type(HALF_TYPED);
                });

                it('before the field is even blurred', () => {
                    cy.get('#invalid').should('have.text', 'true');
                    cy.get('#submit').should('be.disabled');
                    cy.get('tui-error').should('not.be.visible');
                });

                it('marks the field invalid', () => {
                    cy.get('@input').blur();

                    cy.get('#invalid').should('have.text', 'true');
                    cy.get('@input').should('have.attr', 'aria-invalid', 'true');
                    cy.get('tui-textfield').should('have.class', 'tui-invalid');
                });

                it('shows the message of the validator', () => {
                    cy.get('@input').blur();

                    cy.get('tui-error')
                        .should('be.visible')
                        .and('contain.text', UNFINISHED_MESSAGE);
                });

                it('blocks a submit button bound to the invalid state', () => {
                    cy.get('@input').blur();

                    cy.get('#value').should('have.text', 'null');
                    cy.get('@input').should('have.value', HALF_TYPED);

                    cy.get('#submit').should('be.disabled');
                });
            });

            describe('A complete date is accepted', () => {
                it('is valid and submittable', () => {
                    cy.get('@input').type(DATE).blur();

                    cy.get('#value').should('have.text', DATE);
                    cy.get('#invalid').should('have.text', 'false');
                    cy.get('#submit').should('be.enabled');
                    cy.get('tui-error').should('not.be.visible');
                });

                it('deleting one character flags it again', () => {
                    cy.get('@input').type(DATE).type('{backspace}').blur();

                    cy.get('#invalid').should('have.text', 'true');
                    cy.get('tui-error')
                        .should('be.visible')
                        .and('contain.text', UNFINISHED_MESSAGE);
                });
            });

            describe('The error is cleared again', () => {
                beforeEach(() => {
                    cy.get('@input').type(DATE).type('{backspace}').blur();
                    cy.get('#invalid').should('have.text', 'true');
                });

                it('emptying the optional field makes it valid', () => {
                    cy.get('@input').clear().blur();

                    cy.get('@input').should('have.value', '');
                    cy.get('#value').should('have.text', 'null');
                    cy.get('#invalid').should('have.text', 'false');
                    cy.get('tui-error').should('not.be.visible');
                });

                it('emptying the optional field re-enables submit', () => {
                    cy.get('@input').clear().blur();

                    cy.get('#submit').should('be.enabled');
                });

                it('a complete date makes it valid', () => {
                    cy.get('@input').clear().type(DATE).blur();

                    cy.get('#value').should('have.text', DATE);
                    cy.get('#invalid').should('have.text', 'false');
                    cy.get('#submit').should('be.enabled');
                });
            });
        });
    });

    describe('valueChanges count (reactive forms)', () => {
        @Component({
            imports: [ReactiveFormsModule, TuiInputDate, TuiRoot, TuiUnfinishedValidator],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>Optional date</label>
                        <input
                            tuiInputDate
                            tuiUnfinishedValidator
                            [formControl]="control"
                        />
                    </tui-textfield>

                    <output id="value-changes">{{ valueChanges() }}</output>
                    <output id="status-changes">{{ statusChanges() }}</output>

                    <button
                        id="reset-count"
                        type="button"
                        (click)="resetCount()"
                    >
                        Reset count
                    </button>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class CountingSandbox {
            public readonly control = new FormControl<TuiDay | null>(null);

            protected readonly valueChanges = signal(0);
            protected readonly statusChanges = signal(0);

            constructor() {
                this.control.valueChanges
                    .pipe(takeUntilDestroyed())
                    .subscribe(() => this.valueChanges.update((count) => count + 1));

                this.control.statusChanges
                    .pipe(takeUntilDestroyed())
                    .subscribe(() => this.statusChanges.update((count) => count + 1));
            }

            protected resetCount(): void {
                this.valueChanges.set(0);
                this.statusChanges.set(0);
            }
        }

        @Component({
            imports: [ReactiveFormsModule, TuiInputDate, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>Optional date</label>
                        <input
                            tuiInputDate
                            [formControl]="control"
                        />
                    </tui-textfield>

                    <output id="value-changes">{{ valueChanges() }}</output>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class BaselineSandbox {
            public readonly control = new FormControl<TuiDay | null>(null);

            protected readonly valueChanges = signal(0);

            constructor() {
                this.control.valueChanges
                    .pipe(takeUntilDestroyed())
                    .subscribe(() => this.valueChanges.update((count) => count + 1));
            }
        }

        beforeEach(() => {
            cy.mount(CountingSandbox);
            cy.get('input[tuiInputDate]').as('input');
        });

        it('an untouched field is silent', () => {
            cy.get('#value-changes').should('have.text', '0');
            cy.get('#status-changes').should('have.text', '0');
        });

        // only the one carrying the parsed `TuiDay` — the ten keystrokes themselves are silent
        it('typing a complete date fires once', () => {
            cy.get('@input').type(DATE);

            cy.get('#value-changes').should('have.text', '1');
            cy.get('#status-changes').should('have.text', '1');
        });

        it('typing a half-typed date is silent', () => {
            cy.get('@input').type(HALF_TYPED);

            cy.get('#value-changes').should('have.text', '0');
        });

        it('blurring a half-typed date fires once', () => {
            cy.get('@input').type(HALF_TYPED);
            cy.get('#value-changes').should('have.text', '0');

            cy.get('@input').blur();

            cy.get('#value-changes').should('have.text', '1');
        });

        it('deleting one character from a complete date fires twice', () => {
            cy.get('@input').type(DATE);
            cy.get('#reset-count').click();

            cy.get('@input').type('{backspace}');

            cy.get('#value-changes').should('have.text', '2');
        });

        it('clearing a complete date fires twice', () => {
            cy.get('@input').type(DATE);
            cy.get('#reset-count').click();

            cy.get('@input').clear();

            cy.get('#value-changes').should('have.text', '2');
        });

        // the same count as with the directive: typing costs nothing extra any more
        it('typing a complete date without the validator fires once', () => {
            cy.mount(BaselineSandbox);
            cy.get('input[tuiInputDate]').type(DATE);

            cy.get('#value-changes').should('have.text', '1');
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
