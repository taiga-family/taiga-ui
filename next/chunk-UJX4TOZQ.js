import"./chunk-HU6DUUP4.js";var i=`<form
    tuiForm
    [formGroup]="form"
>
    <tui-textfield [disabledItemHandler]="disabledItemHandler">
        <label tuiLabel>Single date</label>
        <input
            formControlName="single"
            tuiInputDate
            [max]="max"
            [min]="min"
        />
        <tui-date-picker *tuiDropdown />
    </tui-textfield>

    <tui-textfield
        multi
        [disabledItemHandler]="disabledItemHandler"
    >
        <label tuiLabel>Multiple dates</label>
        <input
            formControlName="multi"
            tuiInputDateMulti
            [max]="max"
            [min]="min"
        />
        <tui-date-picker *tuiDropdown />
    </tui-textfield>

    <tui-textfield [disabledItemHandler]="disabledItemHandler">
        <label tuiLabel>Date range</label>
        <input
            formControlName="range"
            tuiInputDateRange
            [max]="max"
            [min]="min"
        />
        <tui-date-picker
            *tuiDropdown
            mode="range"
        />
    </tui-textfield>

    <button
        formControlName="button"
        iconEnd="@tui.calendar"
        tuiButton
        tuiButtonSelect
    >
        {{ form.controls.button.value || 'Select date' }}
        <div *tuiDropdown="let close">
            <tui-date-picker
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
            />
            <button
                appearance="action"
                size="m"
                tuiButton
                type="button"
                [style.inline-size.%]="100"
                (click)="form.controls.button.setValue(null); close()"
            >
                Clear
            </button>
        </div>
    </button>
</form>
`;export{i as default};
