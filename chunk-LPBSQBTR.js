import"./chunk-LQ6M4NCU.js";var i=`<tui-textfield>
    <label tuiLabel>Custom time format</label>
    <input
        timeMode="HH:MM"
        tuiInputDateTime
        [tuiTimeFormat]="{dayPeriod: ['AM', 'PM'], separators: ['h']}"
        [(ngModel)]="value"
    />
    <tui-calendar *tuiDropdown />
</tui-textfield>
`;export{i as default};
