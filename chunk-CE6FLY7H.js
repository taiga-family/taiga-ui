import"./chunk-42JZD6NG.js";var i=`<tui-textfield tuiChevron>
    <input
        placeholder="Select something"
        tuiComboBox
        [formControl]="control"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        new
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{i as default};
