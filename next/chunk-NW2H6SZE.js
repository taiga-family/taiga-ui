import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
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
        [items]="countries() | tuiFilterByInput"
    />
</tui-textfield>
`;export{e as default};
