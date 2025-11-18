import"./chunk-42JZD6NG.js";var i=`<form [formGroup]="userDetailsForm">
    <p>
        <tui-textfield>
            <input
                formControlName="name"
                tuiTextfield
            />
            <label tuiLabel>Name</label>
        </tui-textfield>
        <tui-error formControlName="name" />
    </p>

    <div formGroupName="address">
        <p>
            <tui-textfield>
                <input
                    formControlName="street"
                    tuiTextfield
                />
                <label tuiLabel>Street</label>
            </tui-textfield>
            <tui-error formControlName="street" />
        </p>

        <p>
            <tui-textfield>
                <input
                    formControlName="zipCode"
                    tuiTextfield
                />
                <label tuiLabel>Zip code</label>
            </tui-textfield>
            <tui-error formControlName="zipCode" />
        </p>

        <p>
            <tui-textfield>
                <input
                    formControlName="city"
                    tuiTextfield
                />
                <label tuiLabel>City</label>
            </tui-textfield>
            <tui-error formControlName="city" />
        </p>
    </div>
</form>
`;export{i as default};
