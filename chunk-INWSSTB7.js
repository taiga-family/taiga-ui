import"./chunk-HU6DUUP4.js";var e=`<label tuiLabel>
    Type a name:

    <tui-textfield
        tuiChevron
        [stringify]="stringify"
        [tuiTextfieldCleaner]="false"
    >
        <input
            placeholder="Account"
            tuiComboBox
            [formControl]="control"
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [itemContent]="stringify | tuiStringifyContent"
            [items]="items | tuiFilterByInput"
        />
    </tui-textfield>
</label>
`;export{e as default};
