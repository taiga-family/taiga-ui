import"./chunk-LQ6M4NCU.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="British monarchs"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items | tuiFilterByInput: filter"
    />
</tui-textfield>
`;export{e as default};
