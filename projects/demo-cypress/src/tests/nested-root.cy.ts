import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TuiButton,
    TuiDataList,
    TuiDialog,
    TuiHint,
    TuiRoot,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDialog,
        TuiHint,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
        TuiChevron,
        TuiDataListWrapper,
        TuiDataList,
    ],
    template: `
        <tui-root>
            <form class="b-form">
                <tui-textfield tuiChevron>
                    <label tuiLabel>Character</label>
                    <input
                        tuiHintContent="test"
                        tuiSelect
                        [formControl]="testValue"
                    />
                    <tui-data-list-wrapper
                        *tuiTextfieldDropdown
                        new
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
                    <tui-textfield tuiChevron>
                        <label tuiLabel>Nested character</label>
                        <input
                            tuiHintContent="test"
                            tuiSelect
                            [formControl]="testValue"
                        />
                        <tui-data-list-wrapper
                            *tuiTextfieldDropdown
                            new
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

    public testValue = new FormControl();

    public visible = true;
    public dialog = false;
    public nested = false;
}

describe('Nested root', () => {
    it('check nested root', () => {
        cy.mount(Test);

        cy.get('button').contains('Root dialog').click();
        cy.get('body').compareSnapshot('tui-nested-root__1');
        cy.get('body').click();

        cy.get('button').contains('Nested dialog').click();
        cy.get('body').compareSnapshot('tui-nested-root__2');
        cy.get('body').click();

        cy.get('input[tuiSelect]').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__3');

        cy.get('tui-data-list button').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__4');
    });
});
