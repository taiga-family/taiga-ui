import"./chunk-B4AJQJMI.js";var e=`<tui-textfield
    tuiChevron
    [stringify]="'name' | tuiStringify"
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>Pick your guy</label>

    <input
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="'name' | tuiStringify | tuiStringifyContent"
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{e as default};
