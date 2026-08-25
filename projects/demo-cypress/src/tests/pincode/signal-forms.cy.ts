/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, patternError, validate} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';

const PIN = /^4321$/;

@Component({
    imports: [FormField, TuiPincode, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield
                style="inline-size: 10rem"
                [invalid]="override()"
            >
                <input
                    tuiPincode
                    [formField]="$any(f.pin)"
                />
            </tui-textfield>

            <div style="margin-block-start: 1rem">
                <output id="touched">{{ f.pin().touched() }}</output>
                <output id="invalid">{{ f.pin().invalid() }}</output>

                <button
                    id="mark-touched"
                    type="button"
                    (click)="f().markAsTouched()"
                >
                    Mark as touched
                </button>

                <button
                    id="override-true"
                    type="button"
                    (click)="override.set(true)"
                >
                    Wrong pin
                </button>

                <button
                    id="override-false"
                    type="button"
                    (click)="override.set(false)"
                >
                    Correct pin
                </button>

                <button
                    id="override-null"
                    type="button"
                    (click)="override.set(null)"
                >
                    Drop override
                </button>
            </div>

        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly override = signal<boolean | null>(null);
    public readonly model = signal<{pin: string}>({pin: ''});

    public readonly f = form(this.model, (path) => {
        validate(path.pin, ({value}) => (PIN.test(value()) ? null : patternError(PIN)));
    });
}

function snapshot(name: string): void {
    cy.get('tui-textfield').compareSnapshot({
        name: `tuiPincode-${name}`,
        cypressScreenshotOptions: {padding: 8},
    });
}

describe('tuiPincode + signal forms', () => {
    beforeEach(() => {
        cy.viewport(250, 150);
        cy.mount(Sandbox);
        cy.get('input[tuiPincode]').as('input');
    });

    describe('Field state never reaches the animation', () => {
        it('invalid but untouched => no state', () => {
            cy.get('#invalid').should('have.text', 'true');

            cy.get('@input').should('not.have.attr', 'data-state');

            snapshot('untouched-invalid');
        });

        it('invalid and touched => still no state', () => {
            cy.get('#mark-touched').click();

            cy.get('#touched').should('have.text', 'true');
            cy.get('@input').should('not.have.attr', 'data-state');

            snapshot('touched-invalid');
        });

        it('complete but invalid value => pending, not invalid', () => {
            cy.get('@input').type('1234');

            cy.get('#invalid').should('have.text', 'true');
            cy.get('@input').should('have.attr', 'data-state', 'pending');

            snapshot('pending');
        });
    });

    describe('`tui-textfield[invalid]` is the override channel', () => {
        it('[invalid]=true => invalid state', () => {
            cy.get('#override-true').click();

            cy.get('@input').should('have.attr', 'data-state', 'invalid');
        });

        it('[invalid]=false => success state', () => {
            cy.get('#override-false').click();

            cy.get('@input').should('have.attr', 'data-state', 'success');
        });

        it('[invalid]=null => the animation is dropped', () => {
            cy.get('#override-true').click();
            cy.get('@input').should('have.attr', 'data-state', 'invalid');

            cy.get('#override-null').click();
            cy.get('@input').should('not.have.attr', 'data-state');
        });

        it('override survives field state changes', () => {
            cy.get('#override-false').click();
            cy.get('@input').should('have.attr', 'data-state', 'success');

            cy.get('#mark-touched').click();
            cy.get('@input').type('1234');

            cy.get('#invalid').should('have.text', 'true');
            cy.get('@input').should('have.attr', 'data-state', 'success');
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
