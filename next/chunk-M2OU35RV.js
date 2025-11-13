import"./chunk-42JZD6NG.js";var i=`<tui-textfield
    tuiChevron
    tuiDropdownMobile
>
    <input
        placeholder="Select destination"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        new
        [items]="countries() | tuiFilterByInput"
    />
</tui-textfield>
`;export{i as default};
