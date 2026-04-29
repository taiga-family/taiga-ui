import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiFilterByInputPipe, TuiRoot} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

const ITEMS = [
    ['Caesar', 'Greek', 'Apple and Chicken', 'Chicken'],
    ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
] as const;

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield tuiChevron>
                <input
                    placeholder="Enter"
                    tuiComboBox
                    [formControl]="control"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="items | tuiFilterByInput"
                    [labels]="labels"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly control = new FormControl<string | null>(null);
    protected labels = ['Salad', 'Soup'] as const;
    protected readonly items = ITEMS;
    public readonly valueChanges = output<string | null>();

    constructor() {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));
    }
}

describe('ComboBox + DataListWrapper with groups (2d array items)', () => {
    beforeEach(() => {
        cy.mount(Sandbox, {
            componentProperties: {valueChanges: createOutputSpy('valueChanges')},
        });
    });

    it('all items are visible if dropdown open for empty textfield', () => {
        cy.get('[tuiComboBox]').click().should('have.value', '');
        cy.get('tui-dropdown').should('be.visible');
        cy.get('[tuiOption]').should('have.length', ITEMS.flat().length);

        ITEMS.flat().forEach((item) => {
            cy.get('tui-data-list').contains(item);
        });
    });

    it('filter works for both groups', () => {
        cy.get('[tuiComboBox]').type('cHiCkE');
        cy.get('tui-dropdown').should('be.visible');
        cy.get('[tuiOption]').should('have.length', 4);

        cy.get('tui-data-list').should('contain', 'Apple and Chicken');
        cy.get('tui-data-list').should('contain', 'Chicken');
        cy.get('tui-data-list').should('contain', 'Chicken and Rice');
        cy.get('tui-data-list').should('contain', 'Chicken Noodle');

        // Filtered
        cy.get('tui-data-list').should('not.contain', 'Caesar');
        cy.get('tui-data-list').should('not.contain', 'Greek');
        cy.get('tui-data-list').should('not.contain', 'Broccoli Cheddar');
    });

    it('reset filter for both groups on exact match', () => {
        cy.get('[tuiComboBox]').type('cHiCkE');
        cy.get('[tuiOption]').should('have.length', 4);

        cy.get('[tuiComboBox]').type('n').should('have.value', 'Chicken');
        cy.get('[tuiOption]').should('have.length', ITEMS.flat().length);

        cy.get('@valueChanges').should('have.been.calledOnceWith', 'Chicken');

        ITEMS.flat().forEach((item) => {
            cy.get('tui-data-list').contains(item);
        });
    });
});
