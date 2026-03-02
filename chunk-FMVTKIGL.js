import"./chunk-HU6DUUP4.js";var o=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <tui-textfield>
        <label tuiLabel>Required range</label>
        <input
            formControlName="required"
            tuiInputDateRange
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="required" />
    <tui-textfield>
        <label tuiLabel>Optional range</label>
        <input
            formControlName="optional"
            tuiInputDateRange
            tuiUnfinishedValidator
        />
        <tui-calendar-range *tuiDropdown />
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
`;export{o as default};
