import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    tuiChevron
    [stringify]="stringify"
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>Pick your guy</label>

    <input
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="stringify | tuiStringifyContent"
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{e as default};
