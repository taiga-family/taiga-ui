import"./chunk-42JZD6NG.js";var i=`<tui-textfield
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
        new
        tuiMultiSelectGroup
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{i as default};
