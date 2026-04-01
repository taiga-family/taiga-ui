import"./chunk-HU6DUUP4.js";var o=`<div
    tuiDropdownLimitWidth="fixed"
    tuiGroup
    [tuiDropdown]="dropdown"
    [(tuiDropdownOpen)]="open"
>
    <button
        size="l"
        tuiButton
        type="button"
    >
        Button that does not open dropdown
    </button>
    <button
        #tuiDropdownHost
        size="l"
        tuiChevron
        tuiIconButton
        type="button"
        [style.flex]="'0 0 auto'"
    >
        Menu
    </button>
</div>
<ng-template #dropdown>
    <tui-textfield
        tuiChevron
        class="margin"
    >
        <label tuiLabel>Nested Select</label>

        <input
            tuiSelect
            [(ngModel)]="selected"
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [items]="selectItems"
        />
    </tui-textfield>
    <tui-data-list>
        @for (item of items; track item) {
            <button
                tuiOption
                type="button"
                (click)="onClick()"
            >
                {{ item }}
            </button>
        }
    </tui-data-list>
</ng-template>
`;export{o as default};
