import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputChip,
        TuiMultiSelect,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield
                multi
                tuiChevron
            >
                <input
                    tuiInputChip
                    [formControl]="control"
                />
                <tui-data-list-wrapper
                    *tuiDropdown
                    tuiMultiSelectGroup
                    [items]="[items]"
                    [labels]="[]"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly items = ['Apple', 'Banana', 'Orange'];

    public readonly control = new FormControl<string[]>([], {nonNullable: true});
}

describe('InputChip | Select all', () => {
    beforeEach(() => {
        cy.mount(Sandbox).then(({component}) => cy.wrap(component.control).as('control'));
        cy.get('input[tuiInputChip]').click();
        cy.contains('button[tuiOption]', 'Select all').as('selectAll');
    });

    it('writes only the real options to the form control and clears them on a second click', () => {
        cy.get('@selectAll').click();
        cy.get('@control')
            .its('value')
            .should('deep.equal', ['Apple', 'Banana', 'Orange']);

        cy.get('@selectAll').click();
        cy.get('@control').its('value').should('deep.equal', []);
    });

    it('selects the rest of the group and preserves values outside it', () => {
        cy.get<FormControl<string[]>>('@control').invoke('setValue', ['Pear', 'Banana']);

        cy.get('@selectAll').click();
        cy.get('@control')
            .its('value')
            .should('deep.equal', ['Pear', 'Apple', 'Banana', 'Orange']);

        cy.get('@selectAll').click();
        cy.get('@control').its('value').should('deep.equal', ['Pear']);
    });
});
