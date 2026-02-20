import"./chunk-HU6DUUP4.js";var i=`<form
    tuiForm="l"
    [formGroup]="form"
>
    <tui-textfield>
        <label tuiLabel>Native picker</label>
        <input
            formControlName="native"
            timeMode="HH:MM:SS.MSS"
            tuiInputDateTime
            type="datetime-local"
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>

    <tui-textfield tuiDropdownSheet="Pick a date">
        <label tuiLabel>Mobile dropdown</label>
        <input
            formControlName="mobile"
            tuiInputDateTime
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>

    <tui-textfield tuiMobileCalendar>
        <label tuiLabel>Mobile calendar</label>
        <input
            formControlName="fullscreen"
            tuiInputDateTime
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
</form>
`;export{i as default};
