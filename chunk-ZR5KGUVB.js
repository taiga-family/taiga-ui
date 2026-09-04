import"./chunk-LQ6M4NCU.js";var a=`<tui-textfield>
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
