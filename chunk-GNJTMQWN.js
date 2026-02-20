import"./chunk-HU6DUUP4.js";var e=`<form [formGroup]="form">
    <tui-textfield>
        <input
            #input
            formControlName="user"
            tuiInput
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
`;export{e as default};
