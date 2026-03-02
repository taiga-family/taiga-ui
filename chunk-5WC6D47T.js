import"./chunk-HU6DUUP4.js";var u=`<h3>Multi select control</h3>
<button
    appearance="flat"
    tuiButtonSelect
    tuiChevron
    tuiIconButton
    type="button"
    [tuiAppearanceState]="open ? 'hover' : null"
    [(ngModel)]="value"
    [(open)]="open"
>
    Open
    <tui-data-list
        *tuiDropdown
        size="l"
        [style.width.rem]="12"
    >
        <tui-opt-group tuiMultiSelectGroup>
            <tui-opt-group label="Main dishes menu with long label">
                @for (burger of burgers; track burger) {
                    <button
                        tuiOption
                        type="button"
                        [value]="burger"
                    >
                        {{ burger }}
                    </button>
                }
            </tui-opt-group>
            <tui-opt-group label="Drinks">
                @for (drink of drinks; track drink) {
                    <button
                        tuiOption
                        type="button"
                        [value]="drink"
                    >
                        {{ drink }}
                    </button>
                }
            </tui-opt-group>
        </tui-opt-group>
    </tui-data-list>
</button>

<p>{{ value }}</p>
<h3>Separate toggles</h3>
<button
    appearance="flat"
    tuiChevron
    tuiIconButton
    type="button"
    [tuiAppearanceState]="label ? 'hover' : null"
    [tuiDropdown]="separate"
    [tuiDropdownMaxHeight]="500"
    [(tuiDropdownOpen)]="label"
>
    Open
</button>
<ng-template #separate>
    <tui-data-list [style.width.rem]="10">
        <label tuiOption>
            First
            <input
                tuiCheckbox
                type="checkbox"
                [(ngModel)]="first"
            />
        </label>
        <label tuiOption>
            Second
            <input
                tuiSwitch
                type="checkbox"
                [(ngModel)]="second"
            />
        </label>
    </tui-data-list>
</ng-template>
`;export{u as default};
