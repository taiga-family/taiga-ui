import"./chunk-HU6DUUP4.js";var i=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <tui-textfield>
        <label tuiLabel>Required</label>
        <input
            formControlName="timeRequired"
            tuiInputDateTime
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="timeRequired" />

    <tui-textfield>
        <label tuiLabel>At least day</label>
        <input
            formControlName="dayRequired"
            tuiInputDateTime
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="dayRequired" />

    <tui-textfield>
        <label tuiLabel>Optional + UnfinishedValidator</label>
        <input
            formControlName="optional"
            tuiInputDateTime
            tuiUnfinishedValidator
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="optional" />

    <footer>
        <button
            tuiButton
            type="submit"
            [disabled]="form.invalid"
        >
            Submit
        </button>
    </footer>
</form>
`;export{i as default};
