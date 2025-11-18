import"./chunk-42JZD6NG.js";var i=`<tui-textfield>
    <input
        #input
        tuiTextfield
        [formControl]="control"
    />
    <label tuiLabel>Account</label>

    @if (items | tuiFilterByInput; as filtered) {
        @if (input.value) {
            <tui-data-list-wrapper
                *tuiDropdown
                emptyContent="No results found"
                size="s"
                [disabledItemHandler]="disabledItemHandler"
                [items]="filtered"
            />
        }
    }
</tui-textfield>
`;export{i as default};
