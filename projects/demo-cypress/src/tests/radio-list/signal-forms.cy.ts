/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField, required} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {TuiRadioList} from '@taiga-ui/kit';

@Component({
    imports: [FormField, TuiRadioList, TuiRoot],
    template: `
        <tui-root>
            <tui-radio-list
                [formField]="f.pick"
                [items]="items"
            />

            <output id="touched">{{ f.pick().touched() }}</output>
            <output id="invalid">{{ f.pick().invalid() }}</output>

            <button
                id="mark-touched"
                type="button"
                (click)="f().markAsTouched()"
            >
                Mark as touched
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly items = ['one', 'two'];
    public readonly model = signal<{pick: string}>({pick: ''});

    public readonly f = form(this.model, (path) => {
        required(path.pick);
    });
}

describe('tuiRadioList + signal forms', () => {
    beforeEach(() => {
        cy.mount(Sandbox);
        cy.get('tui-radio-list input[tuiRadio]').as('radios');
    });

    it('invalid but untouched => inner controls stay valid', () => {
        cy.get('#invalid').should('have.text', 'true');
        cy.get('#touched').should('have.text', 'false');

        cy.get('@radios').each(($radio) => {
            cy.wrap($radio).should('have.class', 'ng-valid');
        });
    });

    it('external markAsTouched() => inner controls become invalid', () => {
        cy.get('#mark-touched').click();

        cy.get('#touched').should('have.text', 'true');

        cy.get('@radios').each(($radio) => {
            cy.wrap($radio).should('have.class', 'ng-invalid');
        });
    });

    it('picking an item makes everything valid again', () => {
        cy.get('#mark-touched').click();
        cy.get('@radios').first().click();

        cy.get('#invalid').should('have.text', 'false');

        cy.get('@radios').each(($radio) => {
            cy.wrap($radio).should('have.class', 'ng-valid');
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
