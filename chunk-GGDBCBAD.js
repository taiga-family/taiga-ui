import"./chunk-HU6DUUP4.js";var e=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <tui-textfield>
        <label tuiLabel>Required field</label>
        <input
            formControlName="required"
            tuiInputTime
        />
    </tui-textfield>
    <tui-error formControlName="required" />

    <tui-textfield>
        <label tuiLabel>Optional field</label>
        <input
            formControlName="optional"
            tuiInputTime
            tuiUnfinishedValidator
        />
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
