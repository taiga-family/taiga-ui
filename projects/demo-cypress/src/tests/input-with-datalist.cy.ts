import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiDataList, TuiInputModule, TuiRoot],
    template: `
        <tui-root>
            <tui-input [formControl]="control">
                Enter 3 characters

                <ng-container *ngIf="(control.valueChanges | async)?.length > 2">
                    <tui-data-list *tuiDataList>Taiga UI</tui-data-list>
                </ng-container>
            </tui-input>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputWithDatalist {
    protected readonly control = new FormControl('');
}

describe('Input + Datalist', () => {
    describe('Shows dropdown only textfield contains >2 characters', () => {
        beforeEach(() => {
            cy.mount(TestInputWithDatalist, {
                componentProperties: {
                    filler: 'HH:MM',
                },
            });

            cy.get('tui-input input').as('textfield');
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
