import"./chunk-42JZD6NG.js";var i=`<tui-textfield>
    <input
        #input
        tuiTextfield
        [formControl]="control"
    />
    <label tuiLabel>Menu</label>
    @if (input.value) {
        <tui-data-list-wrapper
            *tuiDropdown
            [items]="items"
            [labels]="labels"
        />
    }
</tui-textfield>
`;export{i as default};
