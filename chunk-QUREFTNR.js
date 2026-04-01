import"./chunk-HU6DUUP4.js";var a=`<tui-textfield>
    <label tuiLabel>Choose a date</label>
    <input
        tuiInputDateTime
        [(ngModel)]="value"
    />
    <tui-calendar
        *tuiDropdown
        [markerHandler]="markerHandler"
        [month]="value?.[0] ?? defaultActiveMonth()"
        [showAdjacent]="false"
        (monthChange)="defaultActiveMonth.set($event)"
    />
</tui-textfield>
`;export{a as default};
