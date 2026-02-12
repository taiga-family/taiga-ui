import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiDataList, TuiRadio, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiFilterByInputPipe,
    TuiInputChip,
    TuiMultiSelect,
    TuiSwitch,
} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiRadio,
        TuiRoot,
        TuiSwitch,
        TuiTextfield,
    ],
    template: `
        <!-- @note: the host application on Taiga v3 sets global styles first -->
        <!-- https://github.com/taiga-family/taiga-ui/issues/11927 -->
        <style>
            [tuiAppearance]:disabled:not([data-state]),
            [tuiAppearance][data-state='disabled'] {
                pointer-events: none;
                opacity: var(--tui-disabled-opacity);
            }
        </style>

        <tui-root>
            <label tuiLabel>
                <!-- insert checkbox styles before open dropdown -->
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="checkbox"
                />

                Initially checked
            </label>

            <br />

            <label tuiLabel>
                Working with objects
                <tui-textfield
                    multi
                    tuiChevron
                    [disabledItemHandler]="strings"
                    [stringify]="stringify"
                >
                    <input
                        tuiInputChip
                        [placeholder]="objects.length ? '' : 'Picking objects'"
                        [(ngModel)]="objects"
                        (input)="inputEvent.emit($any($event.target).value)"
                    />
                    <tui-input-chip *tuiItem />
                    <tui-data-list *tuiDropdown>
                        <tui-opt-group
                            label="Pythons"
                            tuiMultiSelectGroup
                        >
                            @for (user of users | tuiFilterByInput; track user) {
                                <button
                                    new
                                    tuiOption
                                    [value]="user"
                                >
                                    {{ user.name }}
                                </button>
                            }
                        </tui-opt-group>
                    </tui-data-list>
                </tui-textfield>
            </label>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputDate {
    protected checkbox = true;

    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly users = this.items.map((name, index) => ({name, index}));

    protected objects: User[] = this.users;

    protected readonly strings = tuiIsString;
    protected readonly stringify = ({name}: User): string => name;
    protected readonly disabled = (item: string): boolean => !this.items.includes(item);

    public readonly inputEvent = output<string>();
}

describe('InputChip', () => {
    beforeEach(() => {
        cy.mount(TestInputDate, {
            componentProperties: {inputEvent: createOutputSpy('inputEvent')},
        });
    });

    it('verify dropdown functionality with interactive checkbox', () => {
        cy.get('tui-textfield').click();

        cy.compareSnapshot('input-chip-multi-select');
    });

    it('emits (input) event on datalist item click', () => {
        cy.get('[tuiInputChip]').click().clear();
        cy.get('[tuiOption]').first().click();

        cy.get('@inputEvent').should('have.been.called');
    });
});
