import"./chunk-HU6DUUP4.js";var i=`<tui-textfield [style.width.rem]="24">
    <input
        placeholder="Choose a range of months"
        tuiInputMonthRange
        [(ngModel)]="value"
    />

    <tui-calendar-month
        *tuiDropdown
        [maxLength]="6"
        [minLength]="3"
    />

    <tui-icon tuiTooltip="Click the same month twice to set a single-day range" />
</tui-textfield>
`;export{i as default};
