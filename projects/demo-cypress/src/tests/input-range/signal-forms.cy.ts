/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, minError, validate} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormField, TuiInputRange, TuiRoot],
    template: `
        <tui-root>
            <tui-input-range
                [formField]="$any(f.range)"
                [max]="100"
                [min]="0"
            >
                Range
            </tui-input-range>

            <div style="margin-block-start: 1rem">
                <output id="touched">{{ f.range().touched() }}</output>
                <output id="invalid">{{ f.range().invalid() }}</output>

                <button
                    id="mark-touched"
                    type="button"
                    (click)="f().markAsTouched()"
                >
                    Mark as touched
                </button>

                <button
                    id="set-valid"
                    type="button"
                    (click)="f.range().value.set([0, 60])"
                >
                    Set valid value
                </button>
            </div>

        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly model = signal<{range: readonly [number, number]}>({range: [0, 0]});

    public readonly f = form(this.model, (path) => {
        validate(path.range, ({value}) => (value()[1] < 50 ? minError(50) : null));
    });
}

function snapshot(name: string): void {
    cy.get('tui-input-range').compareSnapshot({
        name: `tuiInputRange-${name}`,
        cypressScreenshotOptions: {padding: 8},
    });
}

describe('tuiInputRange + signal forms', () => {
    beforeEach(() => {
        cy.viewport(400, 200);
        cy.mount(Sandbox);
        cy.get('tui-input-range tui-textfield').as('textfield');
    });

    it('invalid but untouched => no invalid decoration', () => {
        cy.get('#invalid').should('have.text', 'true');
        cy.get('#touched').should('have.text', 'false');

        cy.get('@textfield').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('untouched-invalid');
    });

    it('external markAsTouched() => invalid decoration appears', () => {
        cy.get('#mark-touched').click();

        cy.get('#touched').should('have.text', 'true');
        cy.get('@textfield').should('have.attr', 'data-mode', 'invalid');

        snapshot('touched-invalid');
    });

    it('valid value => decoration is dropped again', () => {
        cy.get('#mark-touched').click();
        cy.get('@textfield').should('have.attr', 'data-mode', 'invalid');

        cy.get('#set-valid').click();

        cy.get('#invalid').should('have.text', 'false');
        cy.get('@textfield').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('valid-again');
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
