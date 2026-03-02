import"./chunk-HU6DUUP4.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Select something"
        tuiComboBox
        [formControl]="control"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{e as default};
