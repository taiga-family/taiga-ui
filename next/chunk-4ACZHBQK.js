import"./chunk-42JZD6NG.js";var i=`<form [formGroup]="form">
    <tui-textfield>
        <input
            #input
            formControlName="user"
            tuiTextfield
        />

        <label tuiLabel>User</label>

        @if (items$ | async | tuiFilterByInput; as filtered) {
            @if (input.value) {
                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="filtered"
                />
            }
        }
    </tui-textfield>
</form>
`;export{i as default};
