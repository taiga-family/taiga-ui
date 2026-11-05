import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiCard, TuiInputChip, TuiTextfield],
    template: `
        <tui-textfield
            multi
            tuiTextfieldSize="l"
        >
            <label tuiLabel>Growing height L</label>

            <input
                placeholder="Enter"
                tuiInputChip
                [unique]="false"
                [(ngModel)]="value"
            />

            <tui-input-chip *tuiItem />
        </tui-textfield>

        <tui-textfield
            multi
            tuiTextfieldSize="m"
        >
            <label tuiLabel>Growing height M</label>

            <input
                placeholder="Enter"
                tuiInputChip
                [unique]="false"
                [(ngModel)]="value"
            />

            <tui-input-chip *tuiItem />
        </tui-textfield>

        <div
            id="empty-textfield"
            tuiCardLarge
        >
            <tui-textfield multi>
                <label tuiLabel>Plain strings</label>
                <input
                    placeholder="Placeholder"
                    tuiInputChip
                    [(ngModel)]="emptyValue"
                />
                <tui-input-chip *tuiItem />
            </tui-textfield>
        </div>

        <div
            id="empty-textfield-nested"
            tuiCardLarge
        >
            <div>
                <tui-textfield multi>
                    <label tuiLabel>Plain strings</label>
                    <input
                        placeholder="Placeholder"
                        tuiInputChip
                        [(ngModel)]="emptyValue"
                    />
                    <tui-input-chip *tuiItem />
                </tui-textfield>
            </div>
        </div>

        <tui-textfield
            id="empty-item-template"
            multi
        >
            <label tuiLabel>Hidden chips</label>
            <input
                placeholder="Enter"
                tuiInputChip
                [(ngModel)]="hiddenValue"
            />
            <ng-template tuiItem />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected value = ['I', 'love', 'Angular'];
    protected emptyValue = [];
    protected hiddenValue: string[] = [];
}

describe('Textfield Multi', () => {
    beforeEach(() => cy.mount(Sandbox));

    it('should render correctly with sizes M and L with label and chip', () => {
        cy.get('tui-textfield[multi][tuiTextfieldSize="l"]').compareSnapshot(
            'textfield-multi-size-l',
        );

        cy.get('tui-textfield[multi][tuiTextfieldSize="m"]').compareSnapshot(
            'textfield-multi-size-m',
        );
    });

    it('should render correctly in card-large', () => {
        cy.get('#empty-textfield').compareSnapshot('textfield-multi-card-large');
    });

    it('should render correctly in nested elements in card-large', () => {
        cy.get('#empty-textfield-nested').compareSnapshot(
            'textfield-multi-card-large-nested',
        );
    });

    it('should keep the input visible after adding an item with an empty item template', () => {
        cy.get('#empty-item-template input[tuiInputChip]')
            .type('foo{enter}')
            .should('be.visible');
    });
});
