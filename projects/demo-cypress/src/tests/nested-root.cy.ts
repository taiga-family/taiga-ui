import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDialog, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataListWrapper,
        TuiDialog,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <form>
                <tui-textfield>
                    <label tuiLabel>Character</label>
                    <input
                        tuiSelect
                        [formControl]="value"
                    />
                    <tui-data-list-wrapper
                        *tuiDropdown
                        [items]="items"
                    />
                </tui-textfield>
                <br />
                <button
                    tuiButton
                    type="button"
                    (click)="dialog = true"
                >
                    Root dialog
                </button>
                <ng-template [(tuiDialog)]="dialog">Dialogs work</ng-template>
                <br />
                <br />
                <tui-root>
                    <tui-textfield>
                        <label tuiLabel>Nested character</label>
                        <input
                            tuiSelect
                            [formControl]="value"
                        />
                        <tui-data-list-wrapper
                            *tuiDropdown
                            [items]="items"
                        />
                    </tui-textfield>
                    <br />
                    <button
                        tuiButton
                        type="button"
                        (click)="nested = true"
                    >
                        Nested dialog
                    </button>

                    <ng-template [(tuiDialog)]="nested">Nested dialogs work</ng-template>
                </tui-root>
            </form>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test {
    public items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    public value = new FormControl();
    public visible = true;
    public dialog = false;
    public nested = false;
}

describe('Nested root', () => {
    it('check nested root', () => {
        cy.mount(Test);

        cy.get('button').contains('Root dialog').click();
        cy.get('body').compareSnapshot('tui-nested-root__1');
        cy.get('body').click(0, 0);

        cy.get('button').contains('Nested dialog').click();
        cy.get('body').compareSnapshot('tui-nested-root__2');
        cy.get('body').click(0, 0);

        cy.get('[tuiSelect]').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__3');

        cy.get('tui-data-list button').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__4');
    });
});
