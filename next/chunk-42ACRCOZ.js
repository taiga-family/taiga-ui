import"./chunk-HU6DUUP4.js";var i=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <tui-textfield tuiDropdownSheet="Pick a range">
        <label tuiLabel>Mobile dropdown</label>
        <input
            formControlName="mobile"
            tuiInputDateRange
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>

    <tui-textfield tuiMobileCalendar>
        <label tuiLabel>Mobile calendar</label>
        <input
            formControlName="fullscreen"
            tuiInputDateRange
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>
</form>
`;export{i as default};
