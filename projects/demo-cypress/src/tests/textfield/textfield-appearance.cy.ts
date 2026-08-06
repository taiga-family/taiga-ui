import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    model,
    type Type,
} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiInput, type TuiInteractiveState, TuiRoot} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Directive()
abstract class Sandbox {
    public readonly readOnly = model<boolean>(false);
    public readonly invalid = model<boolean | null>(null);
    public readonly focused = model<boolean | null>(null);
    public readonly state = model<TuiInteractiveState | null>(null);

    public reset(): void {
        this.readOnly.set(false);
        this.invalid.set(null);
        this.focused.set(null);
        this.state.set(null);
    }
}

@Component({
    imports: [ReactiveFormsModule, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                [invalid]="invalid()"
                [readOnly]="readOnly()"
                [tuiAppearanceFocus]="focused()"
                [tuiAppearanceState]="state()"
            >
                <label tuiLabel>Name</label>
                <input
                    tuiInput
                    [formControl]="control"
                />
            </tui-textfield>

            <button
                id="reset"
                style="margin-block-start: 1rem"
                type="button"
                (click)="reset()"
            >
                Reset manual overrides
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSandbox extends Sandbox {
    protected readonly control = new FormControl('', Validators.required);
}

@Component({
    imports: [ReactiveFormsModule, TuiInputDate, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                [invalid]="invalid()"
                [readOnly]="readOnly()"
                [tuiAppearanceFocus]="focused()"
                [tuiAppearanceState]="state()"
            >
                <label tuiLabel>Date</label>
                <input
                    tuiInputDate
                    [formControl]="control"
                />
            </tui-textfield>

            <button
                id="reset"
                style="margin-block-start: 1rem"
                type="button"
                (click)="reset()"
            >
                Reset manual overrides
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateSandbox extends Sandbox {
    protected readonly control = new FormControl<TuiDay | null>(
        null,
        Validators.required,
    );
}

@Component({
    imports: [ReactiveFormsModule, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Name</label>
                <input
                    tuiInput
                    [focused]="focused()"
                    [formControl]="control"
                    [invalid]="invalid()"
                    [readOnly]="readOnly()"
                    [state]="state()"
                />
            </tui-textfield>

            <button
                id="reset"
                style="margin-block-start: 1rem"
                type="button"
                (click)="reset()"
            >
                Reset manual overrides
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLegacySandbox extends Sandbox {
    protected readonly control = new FormControl('', Validators.required);
}

@Component({
    imports: [ReactiveFormsModule, TuiInputDate, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Date</label>
                <input
                    tuiInputDate
                    [focused]="focused()"
                    [formControl]="control"
                    [invalid]="invalid()"
                    [readOnly]="readOnly()"
                    [state]="state()"
                />
            </tui-textfield>

            <button
                id="reset"
                style="margin-block-start: 1rem"
                type="button"
                (click)="reset()"
            >
                Reset manual overrides
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateLegacySandbox extends Sandbox {
    protected readonly control = new FormControl<TuiDay | null>(
        null,
        Validators.required,
    );
}

const SANDBOXES: ReadonlyArray<{
    readonly component: Type<Sandbox>;
    readonly title: string;
    readonly snapshotPrefix: string;
}> = [
    {
        component: InputSandbox,
        title: '<tui-textfield [invalid]="..." [tuiAppearanceFocus]="..." [tuiAppearanceState]="..." [readOnly]="..."  />',
        snapshotPrefix: 'tuiInput',
    },
    {
        component: InputLegacySandbox,
        title: '<input [invalid]="..." [focused]="..." [state]="..." [readOnly]="..."  />',
        snapshotPrefix: 'tuiInput-legacy-api',
    },
    {
        component: InputDateLegacySandbox,
        title: '<input [invalid]="..." [focused]="..." [state]="..." [readOnly]="..."  />',
        snapshotPrefix: 'tuiInputDate-legacy-api',
    },
    {
        component: InputDateSandbox,
        title: '<tui-textfield [invalid]="..." [tuiAppearanceFocus]="..." [tuiAppearanceState]="..." [readOnly]="..."  />',
        snapshotPrefix: 'tuiInputDate',
    },
];

function expectNativeValidity(invalid: boolean): void {
    cy.get('[tuiInput]').should('have.attr', 'aria-invalid', String(invalid));
    cy.get('tui-textfield').should(
        invalid ? 'have.class' : 'not.have.class',
        'tui-invalid',
    );
    cy.get<HTMLInputElement>('[tuiInput]').should(($input) =>
        expect($input[0]!.validationMessage).to.equal(invalid ? 'Invalid' : ''),
    );
}

describe('Textfield appearance', () => {
    beforeEach(() => cy.viewport(250, 150));

    SANDBOXES.forEach(({component, title, snapshotPrefix}) => {
        describe(`[${snapshotPrefix}]: ${title}`, () => {
            function snapshot(name: string): void {
                cy.get('tui-textfield').compareSnapshot({
                    name: `${snapshotPrefix}-${name}`,
                    cypressScreenshotOptions: {padding: 8},
                });
            }

            describe('[invalid]', () => {
                describe('null (default) => appearance follows the form control', () => {
                    it('untouched invalid control looks valid', () => {
                        cy.mount(component);

                        cy.get('tui-textfield').should('not.have.attr', 'data-mode');
                        expectNativeValidity(false);
                        snapshot('[invalid]-null-untouched');
                    });

                    it('touched invalid control looks invalid', () => {
                        cy.mount(component);

                        cy.get('[tuiInput]').focus().blur();

                        cy.get('tui-textfield').should('not.have.attr', 'data-mode');
                        expectNativeValidity(true);
                        snapshot('[invalid]-null-touched-invalid');
                    });

                    it('fixed value rolls the appearance back', () => {
                        cy.mount(component);

                        cy.get('[tuiInput]').focus().blur();
                        cy.get('tui-textfield').should('have.class', 'tui-invalid');

                        cy.get('[tuiInput]').type('01012000').blur();

                        expectNativeValidity(false);
                        snapshot('[invalid]-null-touched-valid');
                    });
                });

                describe('true => forced invalid appearance', () => {
                    beforeEach(() => {
                        cy.mount(component, {componentProperties: {invalid: true}});
                        cy.get('[tuiInput]').type('01012000').blur();
                    });

                    it('valid control still looks invalid', () => {
                        cy.get('tui-textfield').should(
                            'have.attr',
                            'data-mode',
                            'invalid',
                        );
                        snapshot('[invalid]-true-over-valid-control');
                    });

                    it('native validity of the valid control stays intact', () => {
                        expectNativeValidity(false);
                    });
                });

                describe('false => forced valid appearance', () => {
                    beforeEach(() => {
                        cy.mount(component, {componentProperties: {invalid: false}});
                        cy.get('[tuiInput]').focus().blur();
                    });

                    it('touched invalid control still looks valid', () => {
                        cy.get('tui-textfield').should('have.attr', 'data-mode', 'valid');
                        snapshot('[invalid]-false-over-invalid-control');
                    });

                    it('native validity of the invalid control stays intact', () => {
                        expectNativeValidity(true);
                    });
                });

                it('back to null => the form control regains the appearance', () => {
                    cy.mount(component, {componentProperties: {invalid: true}});
                    cy.get('[tuiInput]').type('01012000').blur();
                    cy.get('tui-textfield').should('have.attr', 'data-mode', 'invalid');

                    cy.get('#reset').click();

                    cy.get('tui-textfield').should('not.have.attr', 'data-mode');
                    snapshot('[invalid]-null-after-reset');
                });
            });

            describe('[focused]', () => {
                it('null (default) => appearance follows the real focus', () => {
                    cy.mount(component);

                    cy.get('tui-textfield').should('have.attr', 'data-focus', 'false');

                    cy.get('[tuiInput]').focus();
                    cy.get('tui-textfield').should('have.attr', 'data-focus', 'true');
                    snapshot('[focused]-null-really-focused');

                    cy.get('[tuiInput]').blur();
                    cy.get('tui-textfield').should('have.attr', 'data-focus', 'false');
                });

                describe('true => forced focused appearance', () => {
                    beforeEach(() =>
                        cy.mount(component, {componentProperties: {focused: true}}),
                    );

                    it('unfocused input looks focused', () => {
                        cy.get('tui-textfield').should('have.attr', 'data-focus', 'true');
                        snapshot('[focused]-true-over-unfocused-input');
                    });

                    it('the real focus is not stolen', () => {
                        cy.get('[tuiInput]').should('not.have.focus');
                    });
                });

                describe('false => forced unfocused appearance', () => {
                    beforeEach(() => {
                        cy.mount(component, {componentProperties: {focused: false}});
                        cy.get('[tuiInput]').focus();
                    });

                    it('focused input looks unfocused', () => {
                        cy.get('tui-textfield').should(
                            'have.attr',
                            'data-focus',
                            'false',
                        );
                        snapshot('[focused]-false-over-focused-input');
                    });

                    it('the real focus is kept', () => {
                        cy.get('[tuiInput]').should('have.focus');
                    });
                });

                it('back to null => the real focus regains the appearance', () => {
                    cy.mount(component, {componentProperties: {focused: true}});
                    cy.get('tui-textfield').should('have.attr', 'data-focus', 'true');

                    cy.get('#reset').click();

                    cy.get('tui-textfield').should('have.attr', 'data-focus', 'false');
                    snapshot('[focused]-null-after-reset');
                });
            });

            describe('[state]', () => {
                it('null (default) => no manual state', () => {
                    cy.mount(component);

                    cy.get('tui-textfield').should('not.have.attr', 'data-state');
                });

                (['active', 'disabled', 'hover'] as const).forEach((state) => {
                    it(`${state} => forced ${state} appearance`, () => {
                        cy.mount(component, {componentProperties: {state}});

                        cy.get('tui-textfield').should('have.attr', 'data-state', state);
                        snapshot(`[state]-${state}`);
                    });
                });

                it('disabled state is visual only => the input is not really disabled', () => {
                    cy.mount(component, {componentProperties: {state: 'disabled'}});

                    cy.get('[tuiInput]').should('not.be.disabled');
                });

                it('back to null => the manual state is dropped', () => {
                    cy.mount(component, {componentProperties: {state: 'hover'}});
                    cy.get('tui-textfield').should('have.attr', 'data-state', 'hover');

                    cy.get('#reset').click();

                    cy.get('tui-textfield').should('not.have.attr', 'data-state');
                    snapshot('[state]-null-after-reset');
                });
            });

            describe('[readOnly]', () => {
                it('true => readonly appearance on top of the native readonly state', () => {
                    cy.mount(component, {componentProperties: {readOnly: true}});

                    cy.get('tui-textfield').should('have.attr', 'data-mode', 'readonly');
                    cy.get('[tuiInput]').should('have.attr', 'readonly');

                    snapshot('[readOnly]-true');
                });

                it('back to false => the manual override is dropped', () => {
                    cy.mount(component, {componentProperties: {readOnly: true}});
                    cy.get('tui-textfield').should('have.attr', 'data-mode', 'readonly');

                    cy.get('#reset').click();

                    cy.get('tui-textfield').should('not.have.attr', 'data-mode');
                    cy.get('[tuiInput]').should('not.have.attr', 'readonly');

                    snapshot('[readOnly]-false');
                });
            });
        });
    });
});
