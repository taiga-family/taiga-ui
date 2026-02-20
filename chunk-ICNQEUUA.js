import"./chunk-HU6DUUP4.js";var i=`<tui-textfield iconEnd="@tui.search">
    <label tuiLabel>Start typing</label>
    <input
        #input
        placeholder="I am placeholder"
        tuiInput
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Autocomplete suggestions" />
    @if (items | tuiFilterByInput; as filtered) {
        @if (input.value && filtered.length) {
            <tui-data-list-wrapper
                *tuiDropdown
                [items]="filtered"
            />
        }
    }
</tui-textfield>

<tui-textfield>
    <label tuiLabel>Select option</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        tuiSelectLike
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Fixed choice select" />
    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items"
    />
</tui-textfield>

<tui-textfield
    tuiChevron
    tuiDropdownDirection="top"
    tuiDropdownLimitWidth="auto"
>
    <label tuiLabel>Dropdown settings</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        tuiSelectLike
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Fixed choice select" />
    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items"
    />
</tui-textfield>
`;export{i as default};
