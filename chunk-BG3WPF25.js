import"./chunk-HU6DUUP4.js";var i=`<form [formGroup]="userDetailsForm">
    <p>
        <tui-textfield>
            <input
                formControlName="name"
                tuiInput
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
                    tuiInput
                />
                <label tuiLabel>Street</label>
            </tui-textfield>
            <tui-error formControlName="street" />
        </p>

        <p>
            <tui-textfield>
                <input
                    formControlName="zipCode"
                    tuiInput
                />
                <label tuiLabel>Zip code</label>
            </tui-textfield>
            <tui-error formControlName="zipCode" />
        </p>

        <p>
            <tui-textfield>
                <input
                    formControlName="city"
                    tuiInput
                />
                <label tuiLabel>City</label>
            </tui-textfield>
            <tui-error formControlName="city" />
        </p>
    </div>
</form>
`;export{i as default};
