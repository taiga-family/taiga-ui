import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

interface Country {
    id: string;
    name: string;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiRoot,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [stringify]="stringify"
            >
                <input
                    tuiComboBox
                    [formControl]="control"
                    [strict]="false"
                />

                <tui-data-list-wrapper
                    *tuiTextfieldDropdown
                    new
                    [items]="countries$ | async"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class TestComboBox {
    protected readonly countries$: Observable<Country[]> = inject(TUI_COUNTRIES).pipe(
        map((x) => Object.entries(x).map(([id, name]) => ({id, name}))),
    );

    protected readonly control = new FormControl<Country | string | null>(null);

    @Output()
    public readonly valueChanges = new EventEmitter();

    constructor() {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));
    }

    protected readonly stringify: TuiStringHandler<Country> = (x) => x.name;
}

describe('ComboBox[strict=false]', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('form control value', () => {
        beforeEach(() => {
            cy.mount(TestComboBox, {
                componentProperties: {valueChanges: createOutputSpy('valueChanges')},
            });
        });

        it('emits object on click on item from datalist', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });

        it('does not emit new false positive value changes on focus/blur', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('[tuiComboBox]').blur().focus().blur().focus().blur().focus();

            cy.get('@valueChanges').should('have.been.calledOnceWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });

        it('emits string for unmatched value', () => {
            cy.get('[tuiComboBox]').type('Andorr');

            cy.get('@valueChanges').should('have.callCount', 'Andorr'.length);
            cy.get('@valueChanges').should('have.been.calledWith', 'Andorr');
        });

        it('emits object match value with datalist item (after unmatched string value)', () => {
            cy.get('[tuiComboBox]').type('Andorra');

            cy.get('@valueChanges').should('have.callCount', 'Andorra'.length);
            cy.get('@valueChanges').should('have.been.calledWith', {
                id: 'AD',
                name: 'Andorra',
            });
        });
    });
});
