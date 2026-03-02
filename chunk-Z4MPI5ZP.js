import"./chunk-HU6DUUP4.js";var a=`<tui-textfield [disabledItemHandler]="handler">
    <label tuiLabel>Choose a date</label>
    <input
        tuiInputDateTime
        type="datetime-local"
        [max]="max"
        [min]="min"
        [(ngModel)]="value"
    />
    <tui-calendar
        *tuiDropdown
        [showAdjacent]="false"
    />
</tui-textfield>
`;export{a as default};
