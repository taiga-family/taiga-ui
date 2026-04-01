import"./chunk-HU6DUUP4.js";var l=`<tui-textfield>
    <input
        #input
        tuiInput
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
`;export{l as default};
