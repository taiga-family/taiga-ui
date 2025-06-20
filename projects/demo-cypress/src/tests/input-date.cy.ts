import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiInputDate, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Choose a date</label>
                <input
                    tuiInputDate
                    [formControl]="control"
                />
                <tui-calendar *tuiTextfieldDropdown />
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
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
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
        cy.get('.t-clear').click();

        cy.get('[tuiInputDate]').should('have.value', '');
    });

    it('backspace should remove last character', () => {
        cy.get('[tuiInputDate]').type('15.01.2017').type('{backspace}');

        cy.get('[tuiInputDate]').should('have.value', '15.01.201');
    });
});
