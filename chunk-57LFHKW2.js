import"./chunk-HU6DUUP4.js";var a=`<div class="wrapper">
    <tui-calendar
        [markerHandler]="markerHandler"
        [maxViewedMonth]="firstMonth"
        [month]="firstMonth"
        [showAdjacent]="false"
        [value]="value"
        [(hoveredItem)]="hoveredItem"
        (dayClick)="onDayClick($event)"
        (monthChange)="onMonthChangeFirst($event)"
    />
    <tui-calendar
        [markerHandler]="markerHandler"
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
        [markerHandler]="markerHandler"
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
`;export{a as default};
