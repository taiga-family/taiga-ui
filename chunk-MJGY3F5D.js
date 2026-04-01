import"./chunk-HU6DUUP4.js";var t=`<tui-textfield [disabledItemHandler]="handler">
    <label tuiLabel>Take days off</label>
    <input
        placeholder="Min: 3, Max: 5"
        tuiInputDateRange
        [max]="max"
        [maxLength]="{day: 5}"
        [min]="min"
        [minLength]="{day: 3}"
        [(ngModel)]="value"
    />
    <tui-calendar-range *tuiDropdown />
</tui-textfield>
`;export{t as default};
