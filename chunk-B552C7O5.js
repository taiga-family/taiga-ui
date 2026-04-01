import"./chunk-HU6DUUP4.js";var l=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <label tuiLabel>
        Enter an email
        <tui-textfield>
            <input
                formControlName="email"
                placeholder="Required"
                tuiInput
            />
        </tui-textfield>
    </label>
    <tui-error formControlName="email" />

    <label tuiLabel>
        Minimum and maximum length
        <tui-textfield>
            <input
                formControlName="value"
                placeholder="4 letters word..."
                tuiInput
            />
        </tui-textfield>
    </label>
    <tui-error formControlName="value" />

    <label tuiLabel>
        Minimum number
        <tui-textfield>
            <input
                formControlName="number"
                placeholder="Value"
                tuiInputNumber
                [step]="1"
            />
        </tui-textfield>
    </label>
    <tui-error formControlName="number" />
</form>
`;export{l as default};
