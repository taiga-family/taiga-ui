import"./chunk-HU6DUUP4.js";var e=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <tui-textfield>
        <label tuiLabel>Required date</label>
        <input
            formControlName="required"
            tuiInputDate
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="required" />
    <tui-textfield>
        <label tuiLabel>Optional date</label>
        <input
            formControlName="optional"
            tuiInputDate
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
`;export{e as default};
