import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    tuiDropdownHover
    type="button"
    [tuiDropdown]="dropdown"
    [(tuiDropdownOpen)]="open"
>
    Dropdown hover
    <ng-template #dropdown>
        <div [style.padding]="'0 1rem'">
            <tui-textfield
                tuiChevron
                class="margin"
                [tuiTextfieldCleaner]="false"
            >
                <label tuiLabel>Nested select</label>

                <input
                    tuiSelect
                    [formControl]="selected"
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="selectItems"
                />
            </tui-textfield>

            <p>
                <button
                    size="s"
                    tuiButton
                    tuiDropdownAuto
                    tuiDropdownHover
                    type="button"
                    [tuiDropdown]="content"
                >
                    Nested dropdown hover
                </button>
                <ng-template #content>
                    <p class="tui-space_horizontal-2">Nested content!</p>
                </ng-template>
            </p>
        </div>

        <tui-data-list>
            @for (item of items; track item) {
                <button
                    tuiOption
                    type="button"
                >
                    {{ item }}
                </button>
            }
        </tui-data-list>
    </ng-template>
</button>
`;export{o as default};
