import"./chunk-B4AJQJMI.js";var n=`<h3 class="header">
    Dropdown&nbsp;&mdash;

    <button
        tuiChevron
        tuiDropdownAlign="start"
        tuiDropdownLimitWidth="auto"
        tuiLink
        type="button"
        [tuiDropdown]="template"
        [(tuiDropdownOpen)]="open"
    >
        Open
    </button>
</h3>

<ng-template #template>
    <tui-data-list tuiDataListDropdownManager>
        <tui-opt-group>
            @for (text of texts; track text) {
                <button
                    tuiOption
                    type="button"
                    class="dropdown-button"
                >
                    <tui-line-clamp
                        [content]="text"
                        [linesLimit]="2"
                    />
                </button>
            }
        </tui-opt-group>
    </tui-data-list>
</ng-template>
`;export{n as default};
