import"./chunk-HU6DUUP4.js";var t=`<div class="wrapper">
    <tui-calendar
        [maxViewedMonth]="firstMonth"
        [month]="firstMonth"
        [showAdjacent]="false"
        [value]="value"
        [(hoveredItem)]="hoveredItem"
        (dayClick)="onDayClick($event)"
        (monthChange)="onMonthChangeFirst($event)"
    />
    <tui-calendar
        [maxViewedMonth]="middleMonth"
        [minViewedMonth]="middleMonth"
        [month]="middleMonth"
        [showAdjacent]="false"
        [value]="value"
        [(hoveredItem)]="hoveredItem"
        (dayClick)="onDayClick($event)"
        (monthChange)="onMonthChangeMiddle($event)"
    />
    <tui-calendar
        [minViewedMonth]="lastMonth"
        [month]="lastMonth"
        [showAdjacent]="false"
        [value]="value"
        [(hoveredItem)]="hoveredItem"
        (dayClick)="onDayClick($event)"
        (monthChange)="onMonthChangeLast($event)"
    />
</div>
@if (value) {
    <div>Chosen dates: {{ value }}</div>
}
`;export{t as default};
