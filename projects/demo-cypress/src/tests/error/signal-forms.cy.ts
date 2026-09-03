/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    signal,
    type Type,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    disabled,
    form,
    FormField,
    maxLength,
    minLength,
    pattern,
    required,
    validate,
} from '@angular/forms/signals';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiError, TuiInput, TuiRoot, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDate, TuiUnfinishedValidator} from '@taiga-ui/kit';

@Component({
    imports: [FormField, TuiError, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Digits</label>
                <input
                    tuiInput
                    [formField]="f"
                />
            </tui-textfield>

            <tui-error
                [formField]="f"
                [order]="order()"
            />

            <button
                id="disable"
                type="button"
                (click)="off.set(true)"
            >
                Disable
            </button>

            <button
                id="reset"
                type="button"
                (click)="f().reset()"
            >
                Reset
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Value is required',
            minLength: (error: {minLength: number}) =>
                `At least ${error.minLength} characters`,
            'custom-error': 'Error message from DI tuiValidationErrorsProvider',
        }),
    ],
})
export class Sandbox {
    private readonly value = signal('');

    public readonly off = signal(false);
    public readonly order = input<readonly string[]>([]);
    public readonly customErrorMessage = input('');

    public readonly f = form(this.value, (path) => {
        required(path);
        minLength(path, 3);
        maxLength(path, 5);
        // message from the schema has priority over `TUI_VALIDATION_ERRORS`
        pattern(path, /^\d+$/, {message: 'Digits only'});
        validate(path, ({value}) => (value() === '000' ? {kind: 'forbidden'} : null));
        validate(path, ({value}) =>
            value() === '999'
                ? {
                      kind: 'custom-error',
                      // empty input means "no message in the schema"
                      message: this.customErrorMessage() || undefined,
                  }
                : null,
        );
        disabled(path, () => this.off());
    });
}

const DEFAULT_MESSAGE = 'Value is invalid';

describe('tui-error + signal forms', () => {
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

        it('Too short value => message is built by a function with the error as context', () => {
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

        it('Error without a message anywhere => falls back to the default one', () => {
            cy.get('@input').type('000').blur();

            cy.get('tui-error').should('be.visible').and('contain.text', DEFAULT_MESSAGE);
        });

        it('Disabled field => message hides even though the value is still invalid', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-error').should('be.visible');

            cy.get('#disable').click();

            cy.get('tui-error').should('not.be.visible');
        });

        it('Reset makes the field untouched => message hides', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-error').should('be.visible');

            cy.get('#reset').click();

            cy.get('tui-error').should('not.be.visible');
        });
    });

    describe('Message priority', () => {
        it('Message both in the schema and in `TUI_VALIDATION_ERRORS` => the schema wins', () => {
            cy.mount(Sandbox, {
                componentProperties: {customErrorMessage: 'Error message from schema'},
            });

            cy.get('tui-textfield input').type('999').blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'Error message from schema')
                .and(
                    'not.contain.text',
                    'Error message from DI tuiValidationErrorsProvider',
                );
        });

        it('No message in the schema => `TUI_VALIDATION_ERRORS` is used', () => {
            cy.mount(Sandbox);

            cy.get('tui-textfield input').type('999').blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'Error message from DI tuiValidationErrorsProvider');
        });
    });

    describe('Error priority', () => {
        it('Without `order` the first error of the field wins', () => {
            cy.mount(Sandbox);

            cy.get('tui-textfield input').type('ab').blur();

            cy.get('tui-error')
                .should('be.visible')
                .and('contain.text', 'At least 3 characters');
        });

        it('`order` moves `pattern` above `minLength`', () => {
            cy.mount(Sandbox, {componentProperties: {order: ['pattern']}});

            cy.get('tui-textfield input').type('ab').blur();

            cy.get('tui-error').should('be.visible').and('contain.text', 'Digits only');
        });
    });

    // Everything above validates through the signal forms schema. A validator can also come from
    // a DIRECTIVE providing `NG_VALIDATORS` — here it is `TuiItemsHandlersValidator`, a host
    // directive of `tuiInputDate` that rejects a date banned by `[disabledItemHandler]`;
    describe('Errors from a validator directive', () => {
        const BANNED_DAY = 13;
        const BANNED_DATE = '13.12.2024';
        const ALLOWED_DATE = '14.12.2024';
        const BANNED_MESSAGE = 'This date is not available';
        const UNFINISHED_MESSAGE = 'Finish the date';

        @Directive()
        abstract class DisabledItemSandbox {
            public readonly unfinishedMessage = UNFINISHED_MESSAGE;

            public readonly disabledItemHandler = (day: TuiDay): boolean =>
                day.day === BANNED_DAY;
        }

        @Component({
            imports: [
                FormField,
                TuiError,
                TuiInputDate,
                TuiRoot,
                TuiUnfinishedValidator,
            ],
            template: `
                <tui-root>
                    <tui-textfield [disabledItemHandler]="disabledItemHandler">
                        <label tuiLabel>Date</label>
                        <input
                            tuiInputDate
                            [formField]="$any(f)"
                            [tuiUnfinishedValidator]="unfinishedMessage"
                        />
                    </tui-textfield>

                    <tui-error [formField]="$any(f)" />
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [tuiValidationErrorsProvider({tuiDisabledItem: BANNED_MESSAGE})],
        })
        class DisabledItemSignalFormsSandbox extends DisabledItemSandbox {
            private readonly value = signal<TuiDay | null>(null);

            public readonly f = form(this.value);
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
                    <tui-textfield [disabledItemHandler]="disabledItemHandler">
                        <label tuiLabel>Date</label>
                        <input
                            tuiInputDate
                            [formControl]="control"
                            [tuiUnfinishedValidator]="unfinishedMessage"
                        />
                    </tui-textfield>

                    <tui-error [formControl]="control" />
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [tuiValidationErrorsProvider({tuiDisabledItem: BANNED_MESSAGE})],
        })
        class DisabledItemReactiveFormsSandbox extends DisabledItemSandbox {
            public readonly control = new FormControl<TuiDay | null>(null);
        }

        const SANDBOXES: ReadonlyArray<{
            readonly component: Type<DisabledItemSandbox>;
            readonly title: string;
        }> = [
            {
                component: DisabledItemSignalFormsSandbox,
                title: '[formField] (signal forms)',
            },
            {
                component: DisabledItemReactiveFormsSandbox,
                title: '[formControl] (reactive forms)',
            },
        ];

        SANDBOXES.forEach(({component, title}) => {
            describe(title, () => {
                beforeEach(() => {
                    cy.mount(component);
                    cy.get('[tuiInputDate]').as('input');
                });

                it('a banned date marks the field invalid', () => {
                    cy.get('@input').type(BANNED_DATE).blur();

                    cy.get('@input').should('have.attr', 'aria-invalid', 'true');
                    cy.get('tui-textfield').should('have.class', 'tui-invalid');
                });

                it('a banned date shows the message of the validator', () => {
                    cy.get('@input').type(BANNED_DATE).blur();

                    cy.get('tui-error')
                        .should('be.visible')
                        .and('contain.text', BANNED_MESSAGE);
                });

                it('an allowed date hides the message again', () => {
                    cy.get('@input').type(BANNED_DATE).blur();
                    cy.get('tui-error').should('be.visible');

                    cy.get('@input').clear().type(ALLOWED_DATE).blur();

                    cy.get('tui-error').should('not.be.visible');
                });

                it('a message carried by the validator itself is shown', () => {
                    cy.get('@input').type(ALLOWED_DATE).type('{backspace}').blur();

                    cy.get('tui-error')
                        .should('be.visible')
                        .and('contain.text', UNFINISHED_MESSAGE);
                });
            });
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
