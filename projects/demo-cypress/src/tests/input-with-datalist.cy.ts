import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList, TuiRoot, TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiDataList, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Enter 3 characters</label>
                <input
                    tuiTextfield
                    [formControl]="control"
                />

                @if ((control.valueChanges | async)?.length > 2) {
                    <tui-data-list *tuiDropdown>Taiga UI</tui-data-list>
                }
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputWithDatalist {
    protected readonly control = new FormControl('');
}

describe('Input + Datalist', () => {
    describe('Shows dropdown only if textfield contains >2 characters', () => {
        beforeEach(() => {
            cy.mount(TestInputWithDatalist, {
                componentProperties: {
                    filler: 'HH:MM',
                },
            });

            cy.get('tui-textfield input').as('textfield');
        });

        it('Type 12 => no dropdown', () => {
            cy.get('@textfield').type('12');

            cy.get('tui-dropdown').should('not.exist');
        });

        it('Type 123 => dropdown appears', () => {
            cy.get('@textfield').type('123');

            cy.get('tui-dropdown').should('be.visible');
        });

        it('Type 123 => Press Backspace => dropdown disappears', () => {
            cy.get('@textfield').type('123');
            cy.get('tui-dropdown').should('be.visible');
            cy.get('@textfield').type('{backspace}');
            cy.get('tui-dropdown').should('not.exist');
        });
    });
});
