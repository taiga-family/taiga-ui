import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    multi
    tuiChevron
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>Star Wars persons</label>

    <input
        placeholder="Ignored text"
        tuiInputChip
        [formControl]="control"
    />

    <tui-input-chip *tuiItem />

    <tui-data-list-wrapper
        *tuiDropdown
        tuiMultiSelectGroup
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{i as default};
