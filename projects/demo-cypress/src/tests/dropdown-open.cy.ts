import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiGroup,
    TuiRoot,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDataListWrapper,
        TuiDropdown,
        TuiGroup,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <div
                style="display: flex; align-items: flex-end; height: 80vh; padding: 1rem"
            >
                <div
                    tuiDropdownAlign="center"
                    tuiDropdownDirection="top"
                    tuiDropdownLimitWidth="auto"
                    tuiGroup
                    [tuiDropdown]="dropdown"
                    [tuiDropdownMinHeight]="200"
                    [(tuiDropdownOpen)]="open"
                >
                    <button
                        size="l"
                        tuiButton
                        type="button"
                    >
                        Open
                    </button>
                    <button
                        #tuiDropdownHost
                        size="l"
                        tuiChevron
                        tuiIconButton
                        type="button"
                        [style.flex]="'0 0 auto'"
                    >
                        Menu
                    </button>
                </div>
            </div>

            <ng-template #dropdown>
                <div style="width: 300px">
                    <tui-textfield
                        style="margin: 1rem"
                        tuiChevron
                    >
                        <input
                            tuiSelect
                            [(ngModel)]="selected"
                        />
                        <tui-data-list-wrapper
                            *tuiTextfieldDropdown
                            new
                            [items]="selectItems"
                        />
                    </tui-textfield>
                    <tui-data-list>
                        <button
                            *ngFor="let item of items"
                            tuiOption
                            type="button"
                            (click)="open = false"
                        >
                            {{ item }}
                        </button>
                    </tui-data-list>
                </div>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestDropdownOpenWithNestedSelect {
    protected open = false;
    protected selected: string | null = null;
    protected readonly items = ['Edit', 'Download', 'Rename'];
    protected readonly selectItems = ['Item 1', 'Item 2', 'Item 3'];
}

describe('DropdownOpen / nested select (direction=top, align=center)', () => {
    beforeEach(() => {
        cy.mount(TestDropdownOpenWithNestedSelect);
    });

    it('opens the parent dropdown', () => {
        cy.get('button[tuiChevron]').click();

        cy.get('tui-dropdown').should('have.length', 1).should('be.visible');
        cy.compareSnapshot('dropdown-open-hosted');
    });

    it('keeps parent dropdown open after selecting a nested select option', () => {
        cy.get('button[tuiChevron]').click();
        cy.get('tui-dropdown').should('have.length', 1);

        cy.get('tui-dropdown input[tuiSelect]').click();
        cy.get('tui-dropdown').should('have.length', 2);
        cy.compareSnapshot('dropdown-open-with-nested-select');

        cy.get('[tuiOption][new]').contains('Item 1').click();
        cy.wait(300);

        cy.get('tui-dropdown').should('have.length', 1).should('be.visible');
        cy.compareSnapshot('dropdown-open-after-nested-select-option-click');
    });

    it('keeps parent dropdown open after closing nested select by clicking the input', () => {
        cy.get('button[tuiChevron]').click();

        cy.get('tui-dropdown input[tuiSelect]').click();
        cy.get('tui-dropdown').should('have.length', 2);

        cy.get('tui-dropdown input[tuiSelect]').click();
        cy.wait(300);

        cy.get('tui-dropdown').should('have.length', 1).should('be.visible');
        cy.compareSnapshot('dropdown-open-after-nested-select-closed-by-input-click');
    });
});
