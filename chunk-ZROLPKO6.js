import"./chunk-HU6DUUP4.js";var i=`<tui-textfield [disabledItemHandler]="disabledItemHandler">
    <input
        #input
        tuiInput
        [formControl]="control"
    />
    <label tuiLabel>Account</label>

    @if (items | tuiFilterByInput; as filtered) {
        @if (input.value) {
            <tui-data-list-wrapper
                *tuiDropdown
                emptyContent="No results found"
                size="s"
                [items]="filtered"
            />
        }
    }
</tui-textfield>
`;export{i as default};
