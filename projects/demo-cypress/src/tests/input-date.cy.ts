import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiInputDate, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Choose a date</label>
                <input
                    tuiInputDate
                    [formControl]="control"
                />
                <tui-calendar *tuiDropdown />
            </tui-textfield>

            <button
                id="reset"
                type="button"
                (click)="control.reset()"
            >
                reset
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputDate {
    protected readonly control = new FormControl(new TuiDay(2017, 0, 15));
}

describe('InputDate', () => {
    beforeEach(() => cy.mount(TestInputDate));

    it('clear textfield value on resetting form control', () => {
        cy.get('#reset').click();

        cy.get('[tuiInputDate]').should('have.value', '');
    });

    it('click on cleaner', () => {
        cy.get('[tuiButtonX]').click();

        cy.get('[tuiInputDate]').should('have.value', '');
    });

    it('backspace should remove last character', () => {
        cy.get('[tuiInputDate]').type('15.01.2017').type('{backspace}');

        cy.get('[tuiInputDate]').should('have.value', '15.01.201');
    });

    it('allows to enter year < 1900 for unset `[min]` limit', () => {
        cy.get('[tuiInputDate]')
            .clear()
            .type('2751703')
            .should('have.value', '27.05.1703');
    });
});
