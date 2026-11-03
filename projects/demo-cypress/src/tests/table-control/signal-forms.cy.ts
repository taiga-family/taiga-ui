/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox, TuiRoot} from '@taiga-ui/core';

@Component({
    imports: [FormField, TuiCheckbox, TuiRoot, TuiTable, TuiTableControl],
    template: `
        <tui-root>
            <table
                tuiTable
                [formField]="f.selected"
            >
                <thead>
                    <tr>
                        <th tuiTh>
                            <input
                                id="all"
                                tuiCheckbox
                                tuiCheckboxTable
                                type="checkbox"
                            />
                        </th>
                        <th tuiTh>Item</th>
                    </tr>
                </thead>
                <tbody tuiTbody>
                    @for (item of items; track item) {
                        <tr>
                            <td tuiTd>
                                <input
                                    tuiCheckbox
                                    type="checkbox"
                                    [attr.data-item]="item"
                                    [tuiCheckboxRow]="item"
                                />
                            </td>
                            <td tuiTd>{{ item }}</td>
                        </tr>
                    }
                </tbody>
            </table>

            <output id="value">{{ f.selected().value().join(',') }}</output>

            <button
                id="set-value"
                type="button"
                (click)="f.selected().value.set(['three'])"
            >
                Select third
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    public readonly items = ['one', 'two', 'three'];
    public readonly model = signal<{selected: readonly string[]}>({
        selected: ['one'],
    });

    public readonly f = form(this.model);
}

describe('TuiTableControl + signal forms', () => {
    beforeEach(() => {
        cy.mount(Sandbox);
        cy.get('#all').as('all');
        cy.get('[data-item]').as('rows');
    });

    it('reflects the initial model value in row and table checkboxes', () => {
        cy.get('@rows').eq(0).should('be.checked');
        cy.get('@rows').eq(1).should('not.be.checked');
        cy.get('@rows').eq(2).should('not.be.checked');

        cy.get('@all')
            .should('not.be.checked')
            .and('have.prop', 'indeterminate', true);

        cy.get('#value').should('have.text', 'one');
    });

    it('toggling a row updates the Signal Forms model', () => {
        cy.get('@rows').eq(1).click();

        cy.get('@rows').eq(1).should('be.checked');
        cy.get('#value').should('have.text', 'one,two');
        cy.get('@all').should('have.prop', 'indeterminate', true);
    });

    it('programmatic value.set() updates row and table checkboxes', () => {
        cy.get('#set-value').click();

        cy.get('@rows').eq(0).should('not.be.checked');
        cy.get('@rows').eq(1).should('not.be.checked');
        cy.get('@rows').eq(2).should('be.checked');

        cy.get('@all')
            .should('not.be.checked')
            .and('have.prop', 'indeterminate', true);

        cy.get('#value').should('have.text', 'three');
    });

    it('toggle-all keeps the model, checked and indeterminate state in sync', () => {
        cy.get('@all').click();

        cy.get('@rows').each(($row) => {
            cy.wrap($row).should('be.checked');
        });
        cy.get('@all')
            .should('be.checked')
            .and('have.prop', 'indeterminate', false);
        cy.get('#value').should('have.text', 'one,two,three');

        cy.get('@all').click();

        cy.get('@rows').each(($row) => {
            cy.wrap($row).should('not.be.checked');
        });
        cy.get('@all')
            .should('not.be.checked')
            .and('have.prop', 'indeterminate', false);
        cy.get('#value').should('have.text', '');
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
