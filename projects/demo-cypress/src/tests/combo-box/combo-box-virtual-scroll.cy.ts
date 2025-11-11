import {ScrollingModule} from '@angular/cdk/scrolling';
import {ChangeDetectionStrategy, Component, inject, output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList, TuiRoot, TuiScrollable} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiRoot,
        TuiScrollable,
    ],
    template: `
        <tui-root>
            <tui-textfield tuiChevron>
                <input
                    tuiComboBox
                    [formControl]="control"
                />

                <ng-container *tuiDropdown>
                    @let items = countries | tuiFilterByInput;
                    <cdk-virtual-scroll-viewport
                        tuiScrollable
                        class="scroll"
                        [itemSize]="44"
                        [maxBufferPx]="44 * 10"
                        [minBufferPx]="44 * 5"
                        [style.height.px]="(items?.length || 1) * (44 + 4) + 8"
                    >
                        <tui-data-list>
                            <button
                                *cdkVirtualFor="let item of items"
                                new
                                tuiOption
                                type="button"
                                [value]="item"
                            >
                                {{ item }}
                            </button>
                        </tui-data-list>
                    </cdk-virtual-scroll-viewport>
                </ng-container>
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected readonly control = new FormControl<string | null>(null);

    public readonly valueChanges = output<string | null>();

    constructor() {
        this.control.valueChanges.subscribe((x) => this.valueChanges.emit(x));
    }
}

describe('ComboBox + Virtual scroll', () => {
    beforeEach(() => cy.viewport(300, 350));

    describe('form control value', () => {
        beforeEach(() => {
            cy.mount(Sandbox, {
                componentProperties: {valueChanges: createOutputSpy('valueChanges')},
            });
        });

        it('emits value on click on item from datalist', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('@valueChanges').should('have.been.calledOnceWith', 'Andorra');
        });

        it('does not emit new false positive value changes on focus/blur', () => {
            cy.get('[tuiComboBox]').click();
            cy.get('[tuiOption]').first().click();

            cy.get('[tuiComboBox]').blur().focus().blur().focus().blur().focus();

            cy.get('@valueChanges').should('have.been.calledOnceWith', 'Andorra');
        });

        it('emits nothing for unmatched textfield value', () => {
            cy.get('[tuiComboBox]').type('Andorr');

            cy.get('@valueChanges').should('not.have.been.called');
        });

        it('emits object match value with datalist item (after unmatched string value)', () => {
            cy.get('[tuiComboBox]').type('aNdOrRa');

            cy.get('@valueChanges').should('have.been.calledOnceWith', 'Andorra');
        });
    });
});
