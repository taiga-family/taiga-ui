import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDataList, TuiDropdown, TuiOption, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiDropdown,
        TuiOption,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <div
                tuiDropdownContext
                [tuiDropdown]="contextMenu"
            >
                <tui-textfield>
                    <input
                        placeholder="Choose framework"
                        tuiSelect
                        [(ngModel)]="value"
                    />

                    <tui-data-list-wrapper
                        *tuiDropdown
                        [items]="items"
                    />
                </tui-textfield>
            </div>

            <ng-template #contextMenu>
                <tui-data-list>
                    <button
                        tuiOption
                        type="button"
                    >
                        Context action
                    </button>

                    <button
                        tuiOption
                        type="button"
                    >
                        Another action
                    </button>
                </tui-data-list>
            </ng-template>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test {
    protected value: string | null = null;
    protected readonly items = ['Angular', 'React', 'Vue', 'Svelte'];
}

describe('DropdownContext', () => {
    beforeEach(() => cy.viewport(500, 300));

    it('keeps nested select dropdown width after context menu is opened', () => {
        cy.mount(Test);

        cy.get('[tuiSelect]').click();
        cy.get('[tuiSelect]').rightclick(40, 40);

        cy.compareSnapshot('dropdown-context-nested-select');
    });
});
