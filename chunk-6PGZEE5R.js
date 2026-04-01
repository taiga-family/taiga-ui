import"./chunk-HU6DUUP4.js";var e=`<div tuiNotification>
    <code>TuiLineDaysChart</code>
    is used to show data of several months to simplify working with different number of days in months
</div>
<p class="controls">
    <tui-textfield [tuiTextfieldCleaner]="false">
        <label tuiLabel>Data</label>
        <input
            tuiInputDateRange
            [maxLength]="maxLength"
            [(ngModel)]="data"
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>
    <tui-textfield
        class="tui-space_left-4"
        [tuiTextfieldCleaner]="false"
    >
        <label tuiLabel>Visible range</label>
        <input
            tuiInputDateRange
            [maxLength]="maxLength"
            [(ngModel)]="show"
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>
</p>
<p class="legend">
    @for (chart of days(); track chart) {
        <span class="item">
            <small class="name">Chart {{ $index + 1 }}</small>
        </span>
    }
</p>
<tui-axes
    class="axes"
    [axisXLabels]="labels()"
    [horizontalLines]="5"
    [tuiLineChartHint]="hint"
    [verticalLines]="labels().length"
>
    @if (getWidth(show()) > 90) {
        @for (chart of days(); track chart) {
            <tui-line-days-chart
                class="chart"
                [height]="200"
                [value]="chart | tuiFilter: filter : range()"
            />
        }
    } @else {
        @for (chart of days(); track chart) {
            <tui-line-chart
                class="chart"
                [height]="200"
                [value]="chart | tuiFilter: filter : range() | tuiMapper: toNumbers : range()"
                [width]="getWidth(range())"
            />
        }
    }
</tui-axes>

<ng-template
    #hint
    let-data
>
    <div class="tui-space_bottom-2">
        <strong>{{ getDate(data[0][0], range().from) }}</strong>
    </div>
    <div>
        @for (point of data; track point) {
            <div class="item">
                <span class="value">\${{ point[1].toFixed(0) }}</span>
            </div>
        }
    </div>
</ng-template>
`;export{e as default};
