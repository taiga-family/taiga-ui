import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {type TuiCard, TuiInputCardGroup} from '@taiga-ui/addon-commerce';
import {TuiDialog, TuiRoot} from '@taiga-ui/core';
import {
    TuiFilter,
    TuiInputChip,
    TuiInputColor,
    TuiInputRange,
    TuiRadioList,
    TuiRange,
    TuiRating,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDialog,
        TuiFilter,
        TuiInputCardGroup,
        TuiInputChip,
        TuiInputColor,
        TuiInputRange,
        TuiRadioList,
        TuiRange,
        TuiRating,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <button
                type="button"
                (click)="open = true"
            >
                Open
            </button>

            <ng-template [(tuiDialog)]="open">
                <form [formGroup]="form">
                    <tui-range formControlName="range" />

                    <tui-input-range
                        [min]="0"
                        [max]="100"
                        formControlName="inputRange"
                    />

                    <tui-input-card-group formControlName="card" />

                    <tui-rating formControlName="rating" />

                    <tui-filter
                        formControlName="filter"
                        [items]="filterItems"
                    />

                    <tui-radio-list
                        formControlName="radio"
                        [items]="radioItems"
                    />

                    <tui-textfield multi>
                        <input
                            formControlName="chip"
                            tuiInputChip
                        />
                    </tui-textfield>

                    <tui-textfield>
                        <input
                            format="hexa"
                            formControlName="color"
                            tuiInputColor
                        />
                    </tui-textfield>
                </form>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Sandbox {
    protected open = false;
    protected readonly filterItems = ['News', 'Food'];
    protected readonly radioItems = ['A', 'B', 'C'];

    protected readonly form = new FormGroup({
        range: new FormControl([67, 69]),
        inputRange: new FormControl([0, 42]),
        card: new FormControl<TuiCard | null>({card: '00', expire: '12/34', cvc: '56'}),
        rating: new FormControl(3),
        filter: new FormControl(['Food']),
        radio: new FormControl('B'),
        chip: new FormControl(['hello', 'world']),
        color: new FormControl('#ff0000ff'),
    });
}

describe('Textfields with internal [ngModel]', () => {
    beforeEach(() => {
        cy.mount(Sandbox);
        cy.get('button').click();
    });

    it('Range', () => {
        cy.get('form > tui-range input').first().should('have.value', '67');
        cy.get('form > tui-range input').last().should('have.value', '69');
    });

    it('InputRange', () => {
        cy.get('tui-input-range input:not([type="range"])')
            .first()
            .should('have.value', '0');

        cy.get('tui-input-range input:not([type="range"])')
            .last()
            .should('have.value', '42');
    });

    it('InputCardGroup', () => {
        cy.get('tui-input-card-group input[autocomplete="cc-number"]').should(
            'have.value',
            '00',
        );

        cy.get('tui-input-card-group input[autocomplete="cc-exp"]').should(
            'have.value',
            '12/34',
        );

        cy.get('tui-input-card-group input[autocomplete="cc-csc"]').should(
            'have.value',
            '56',
        );
    });

    it('Rating', () => {
        cy.get('tui-rating input').should('have.value', '3');
    });

    it('Filter', () => {
        cy.contains('tui-filter label', 'Food')
            .find('input[type="checkbox"]')
            .should('be.checked');

        cy.contains('tui-filter label', 'News')
            .find('input[type="checkbox"]')
            .should('not.be.checked');
    });

    it('RadioList', () => {
        cy.contains('tui-radio-list label', 'B')
            .find('input[type="radio"]')
            .should('be.checked');

        cy.contains('tui-radio-list label', 'A')
            .find('input[type="radio"]')
            .should('not.be.checked');
    });

    it('InputChip', () => {
        cy.get('form tui-textfield-item').should('have.length', 2);
        cy.contains('form tui-textfield-item', 'hello').should('exist');
        cy.contains('form tui-textfield-item', 'world').should('exist');
    });

    it('InputColor', () => {
        cy.get('input[tuiInputColor]').should('have.value', '#ff0000ff');
        cy.get('tui-textfield:has([tuiInputColor]) input[tuiSlider]').should(
            'have.value',
            '255',
        );
    });
});
