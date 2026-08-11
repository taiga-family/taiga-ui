/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {
    ChangeDetectionStrategy,
    Component,
    input,
    linkedSignal,
    signal,
} from '@angular/core';
import {
    disabled,
    form,
    FormField,
    minLength,
    readonly,
    required,
} from '@angular/forms/signals';
import {TuiInput, TuiRoot} from '@taiga-ui/core';

@Component({
    imports: [FormField, TuiInput, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                style="margin-block-end: 1rem"
                [invalid]="manualInvalid()"
            >
                <label tuiLabel>Name</label>
                <input
                    tuiInput
                    [formField]="f.name"
                />
            </tui-textfield>

            <output id="value">{{ f.name().value() }}</output>
            <output id="touched">{{ f.name().touched() }}</output>
            <output id="dirty">{{ f.name().dirty() }}</output>
            <output id="invalid">{{ f.name().invalid() }}</output>

            <button
                id="set-value"
                type="button"
                (click)="f.name().value.set('Neo')"
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
                id="reset"
                type="button"
                (click)="f().reset({name: initial()})"
            >
                Reset
            </button>

            <button
                id="disable"
                type="button"
                (click)="off.set(!off())"
            >
                Toggle disabled
            </button>

            <button
                id="readonly"
                type="button"
                (click)="ro.set(!ro())"
            >
                Toggle readonly
            </button>

            <button
                id="force-invalid"
                type="button"
                (click)="manualInvalid.set(true)"
            >
                Force invalid
            </button>

            <button
                id="force-valid"
                type="button"
                (click)="manualInvalid.set(false)"
            >
                Force valid
            </button>

            <button
                id="follow-state"
                type="button"
                (click)="manualInvalid.set(null)"
            >
                Follow the field state
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    private readonly model = linkedSignal(() => ({name: this.initial()}));

    public readonly initial = input('');
    public readonly off = signal(false);
    public readonly ro = signal(false);
    public readonly manualInvalid = signal<boolean | null>(null);

    public readonly f = form(this.model, (path) => {
        required(path.name);
        minLength(path.name, 3);
        disabled(path.name, {when: () => this.off()});
        readonly(path.name, {when: () => this.ro()});
    });
}

function snapshot(name: string): void {
    cy.get('tui-textfield').compareSnapshot({
        name: `tuiInput-${name}`,
        cypressScreenshotOptions: {padding: 8},
    });
}

describe('tuiInput + signal forms', () => {
    beforeEach(() => {
        cy.viewport(250, 150);
        cy.mount(Sandbox);
        cy.get('tui-textfield input[tuiInput]').as('input');
    });

    describe('Value synchronization', () => {
        it('initial model value is rendered inside the input', () => {
            cy.mount(Sandbox, {componentProperties: {initial: 'John'}});

            cy.get('tui-textfield input[tuiInput]').should('have.value', 'John');
        });

        it('typing updates the model', () => {
            cy.get('@input').type('Morpheus');

            cy.get('#value').should('have.text', 'Morpheus');
        });

        it('programmatic value.set() updates the input and keeps the field pristine', () => {
            cy.get('#set-value').click();

            cy.get('@input').should('have.value', 'Neo');
            cy.get('#dirty').should('have.text', 'false');
            cy.get('#touched').should('have.text', 'false');
        });

        it('clearing the input empties the model', () => {
            cy.get('@input').type('Neo').clear();

            cy.get('#value').should('have.text', '');
            cy.get('#invalid').should('have.text', 'true');
        });

        it('reset() returns the initial value back to the input', () => {
            cy.get('@input').type('Trinity');
            cy.get('#reset').click();

            cy.get('@input').should('have.value', '');
            cy.get('#value').should('have.text', '');
            cy.get('#dirty').should('have.text', 'false');
        });
    });

    describe('Native validation attributes', () => {
        it('required and minlength are mirrored onto the native input', () => {
            cy.get('@input').should('have.attr', 'required');
            cy.get('@input').should('have.attr', 'minlength', '3');
        });
    });

    describe('Touched / dirty', () => {
        it('field is untouched and pristine initially', () => {
            cy.get('#touched').should('have.text', 'false');
            cy.get('#dirty').should('have.text', 'false');
            snapshot('initial-untouched-pristine');
        });

        it('blur without typing marks the field as touched, but not dirty', () => {
            cy.get('@input').focus().blur();

            cy.get('#touched').should('have.text', 'true');
            cy.get('#dirty').should('have.text', 'false');
            snapshot('touched-pristine');
        });

        it('typing marks the field as dirty', () => {
            cy.get('@input').type('a');

            cy.get('#dirty').should('have.text', 'true');
            cy.get('#touched').should('have.text', 'false');

            snapshot('dirty-untouched');

            cy.get('@input').blur();

            cy.get('#touched').should('have.text', 'true');

            snapshot('dirty-touched');
        });
    });

    describe('Invalid state is shown only after touch', () => {
        it('invalid but untouched => no invalid decoration', () => {
            cy.get('#invalid').should('have.text', 'true');

            cy.get('@input')
                .should('match', ':invalid')
                .should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield')
                .should('not.have.class', 'tui-invalid')
                .should('not.have.attr', 'data-mode');
            snapshot('untouched-invalid');
        });

        it('invalid and blurred => invalid decoration appears', () => {
            cy.get('@input').focus().blur();

            cy.get('@input')
                .should('match', ':invalid')
                .should('have.attr', 'aria-invalid', 'true');
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
            snapshot('touched-invalid');
        });

        it('external markAsTouched() => field is invalid', () => {
            cy.get('#mark-touched').click();

            cy.get('@input').should('have.attr', 'aria-invalid', 'true');
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
            snapshot('mark-as-touched-invalid');
        });

        it('valid value entered => invalid decoration disappears', () => {
            cy.get('@input').type('Morpheus').blur();

            cy.get('@input')
                .should('not.match', ':invalid')
                .should('have.attr', 'aria-invalid', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            snapshot('touched-valid');
        });

        it('touched field switches invalid => valid => invalid states', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid'); // `required` error

            cy.get('@input').type('Morpheus');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');

            cy.get('@input').clear().type('ab');
            cy.get('tui-textfield').should('have.class', 'tui-invalid'); // `minLength` error

            cy.get('@input').type('c');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            snapshot('valid-again');
        });

        it('reset() of a touched invalid field => invalid decoration disappears', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid');

            cy.get('#reset').click();

            cy.get('#touched').should('have.text', 'false');
            cy.get('tui-textfield').should('not.have.class', 'tui-invalid');
            snapshot('after-reset');
        });
    });

    describe('Disabled', () => {
        it('disabled(path) disables the native input', () => {
            cy.get('#disable').click();

            cy.get('@input').should('be.disabled');
        });

        it('re-enabled field becomes editable again', () => {
            cy.get('#disable').click();
            cy.get('@input').should('be.disabled');
            snapshot('disabled');

            cy.get('#disable').click();

            cy.get('@input').should('be.enabled').type('Neo');
            cy.get('#value').should('have.text', 'Neo');
            snapshot('enabled-again');
        });
    });

    describe('Readonly', () => {
        it('readonly(path) makes the native input readonly', () => {
            cy.get('#readonly').click();

            cy.get('@input').should('have.attr', 'readonly');
        });

        it('readonly switched back => input is editable again', () => {
            cy.get('#readonly').click();
            cy.get('@input').should('have.attr', 'readonly');
            snapshot('readonly-toggled-on');

            cy.get('#readonly').click();

            cy.get('@input').should('not.have.attr', 'readonly');
            cy.get('@input').type('Neo');
            cy.get('#value').should('have.text', 'Neo');
            snapshot('not-readonly-again');
        });

        it('textfield is painted as readonly', () => {
            cy.get('#readonly').click();

            cy.get('tui-textfield').should('match', "[data-mode~='readonly']");
            snapshot('readonly');
        });
    });

    describe('Manual [invalid] override on tui-textfield', () => {
        it('[invalid]=true => invalid decoration even though the field is valid and untouched', () => {
            cy.get('@input').type('Morpheus');
            cy.get('tui-textfield').should('not.have.attr', 'data-mode');

            cy.get('#force-invalid').click();

            cy.get('tui-textfield').should('have.attr', 'data-mode', 'invalid');
            // the override is appearance-only — native validity is not affected
            cy.get('@input').should('not.match', ':invalid');
            snapshot('[invalid]-true-over-valid-field');
        });

        it('[invalid]=false => no invalid decoration even though the field is touched and invalid', () => {
            cy.get('@input').focus().blur();
            cy.get('tui-textfield').should('have.class', 'tui-invalid');

            cy.get('#force-valid').click();

            cy.get('tui-textfield').should('have.attr', 'data-mode', 'valid');
            snapshot('[invalid]-false-over-invalid-field');
        });

        it('[invalid]=null => decoration follows the field state again', () => {
            cy.get('@input').type('Morpheus').blur();
            cy.get('#force-invalid').click();
            cy.get('tui-textfield').should('have.attr', 'data-mode', 'invalid');

            cy.get('#follow-state').click();
            cy.get('tui-textfield')
                .should('not.have.class', 'tui-invalid')
                .should('not.have.attr', 'data-mode');

            cy.get('@input').clear().blur();
            // `required` error, the field is touched
            cy.get('tui-textfield').should('have.class', 'tui-invalid');
        });

        it('[invalid]=true override survives field state changes', () => {
            cy.get('@input').type('Morpheus').blur();
            cy.get('#force-invalid').click();
            cy.get('tui-textfield').should('have.attr', 'data-mode', 'invalid');

            cy.get('@input').clear(); // the field itself becomes invalid...
            cy.get('@input').type('Trinity'); // ...and valid again

            cy.get('tui-textfield').should('have.attr', 'data-mode', 'invalid');
            snapshot('[invalid]-true-survives-state-changes');
        });

        it('[invalid]=false override survives field state changes', () => {
            cy.get('@input').focus().blur();
            cy.get('#force-valid').click();
            cy.get('tui-textfield').should('have.attr', 'data-mode', 'valid');

            cy.get('@input').type('Morpheus'); // the field itself becomes valid...
            cy.get('@input').clear(); // ...and invalid again

            cy.get('tui-textfield')
                .should('have.class', 'tui-invalid')
                .should('have.attr', 'data-mode', 'valid');
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
