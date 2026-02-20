import"./chunk-HU6DUUP4.js";var i=`<tui-textfield multi>
    <input
        tuiInputDateMulti
        [(ngModel)]="value"
    />

    <tui-calendar
        *tuiDropdown
        [markerHandler]="markerHandler"
    />

    <tui-input-chip
        *tuiItem="let context"
        [appearance]="context.item.dayOfWeek() > 4 ? 'negative' : 'positive'"
        [iconStart]="context.item.dayOfWeek() > 4 ? '@tui.heart' : ''"
    />
</tui-textfield>
`;export{i as default};
