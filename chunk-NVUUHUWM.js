import"./chunk-HU6DUUP4.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="British monarchs"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items | tuiFilterByInput: matcher"
    />
</tui-textfield>
`;export{e as default};
