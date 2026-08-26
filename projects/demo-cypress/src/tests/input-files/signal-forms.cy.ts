/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, requiredError, validate} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

const FILE: TuiFileLike = {name: 'report.pdf', size: 1024, type: 'application/pdf'};

@Component({
    imports: [FormField, TuiFiles, TuiRoot],
    template: `
        <tui-root>
            <label
                style="inline-size: 15rem"
                tuiInputFiles
            >
                <input
                    multiple
                    tuiInputFiles
                    [formField]="$any(f.files)"
                />
            </label>

            <div style="margin-block-start: 1rem">
                <output id="touched">{{ f.files().touched() }}</output>
                <output id="invalid">{{ f.files().invalid() }}</output>

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
                    (click)="f.files().value.set([file])"
                >
                    Set valid value
                </button>
            </div>

        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly file = FILE;
    public readonly model = signal<{files: readonly TuiFileLike[]}>({files: []});

    public readonly f = form(this.model, (path) => {
        validate(path.files, ({value}) => (value().length ? null : requiredError()));
    });
}

function snapshot(name: string): void {
    cy.get('label[tuiInputFiles]').compareSnapshot({
        name: `tuiInputFiles-${name}`,
        cypressScreenshotOptions: {padding: 8},
    });
}

describe('tuiInputFiles + signal forms', () => {
    beforeEach(() => {
        cy.viewport(400, 200);
        cy.mount(Sandbox);
        cy.get('input[tuiInputFiles]').as('input');
    });

    it('invalid but untouched => no invalid decoration', () => {
        cy.get('#invalid').should('have.text', 'true');
        cy.get('#touched').should('have.text', 'false');

        cy.get('@input').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('untouched-invalid');
    });

    it('external markAsTouched() => invalid decoration appears', () => {
        cy.get('#mark-touched').click();

        cy.get('#touched').should('have.text', 'true');
        cy.get('@input').should('have.attr', 'data-mode', 'invalid');

        snapshot('touched-invalid');
    });

    it('valid value => decoration is dropped again', () => {
        cy.get('#mark-touched').click();
        cy.get('@input').should('have.attr', 'data-mode', 'invalid');

        cy.get('#set-valid').click();

        cy.get('#invalid').should('have.text', 'false');
        cy.get('@input').should('not.have.attr', 'data-mode', 'invalid');

        snapshot('valid-again');
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
