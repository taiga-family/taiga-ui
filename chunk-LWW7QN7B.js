import"./chunk-HU6DUUP4.js";var o=`<tui-textfield tuiChevron>
    <input
        placeholder="Install library"
        tuiSelect
        [(ngModel)]="value"
    />

    <tui-data-list
        *tuiDropdown
        tuiDataListDropdownManager
    >
        @for (group of taigaFamilyLibs; track group) {
            <button
                iconEnd="@tui.chevron-right"
                tuiDropdownAlign="end"
                tuiDropdownLimitWidth="auto"
                tuiDropdownManual
                tuiDropdownSided
                tuiOption
                type="button"
                [tuiDropdown]="options"
            >
                {{ group.name }}
                <ng-template #options>
                    <tui-data-list>
                        @for (lib of group.libraries; track lib) {
                            <button
                                tuiOption
                                type="button"
                                [value]="lib"
                            >
                                {{ lib }}
                            </button>
                        }
                    </tui-data-list>
                </ng-template>
            </button>
        }
    </tui-data-list>
</tui-textfield>
`;export{o as default};
