import"./chunk-HU6DUUP4.js";var l=`<tui-textfield
    tuiChevron
    tuiDropdownSheet="Select platform"
    [disabledItemHandler]="disabledItemHandler"
>
    <label tuiLabel>Platform</label>

    <input
        tuiSelect
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="platforms"
        [tuiPlatform]="value ?? 'ios'"
    />
</tui-textfield>
`;export{l as default};
