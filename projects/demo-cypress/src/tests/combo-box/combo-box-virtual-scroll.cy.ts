import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiLet} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TuiDataList,
    TuiRoot,
    TuiScrollable,
    TuiTextfield,
} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';
import {map, type Observable} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiLet,
        TuiRoot,
        TuiScrollable,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <tui-textfield tuiChevron>
                <input
                    tuiComboBox
                    [formControl]="control"
                />

                <ng-container *tuiDropdown>
                    <cdk-virtual-scroll-viewport
                        *tuiLet="countries$ | async | tuiFilterByInput as items"
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
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class Sandbox {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected readonly control = new FormControl<string | null>(null);

    @Output()
    public readonly valueChanges = new EventEmitter();

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
