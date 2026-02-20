import"./chunk-HU6DUUP4.js";var a=`<tui-textfield>
    <input
        placeholder="Select vacation month"
        tuiInputMonth
        [(ngModel)]="value"
    />

    <tui-calendar-month
        *tuiDropdown
        [disabledItemHandler]="isSummerHandler"
        [max]="max"
        [min]="min"
        [(year)]="activeYear"
    />
</tui-textfield>
`;export{a as default};
