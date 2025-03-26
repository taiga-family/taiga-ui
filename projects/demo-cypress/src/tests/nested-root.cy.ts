import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDialog, TuiHint, TuiRoot} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDialog,
        TuiHint,
        TuiRoot,
        TuiSelectModule,
    ],
    template: `
        <tui-root>
            <form class="b-form">
                <tui-select
                    tuiHintContent="test"
                    [formControl]="testValue"
                >
                    Character
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-select>
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
                    <tui-select
                        tuiHintContent="test"
                        [formControl]="testValue"
                    >
                        Nested character

                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        />
                    </tui-select>
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

        cy.get('tui-select').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__3');

        cy.get('tui-data-list button').eq(1).click();
        cy.get('body').compareSnapshot('tui-nested-root__4');
    });
});
