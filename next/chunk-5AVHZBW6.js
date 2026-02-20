import"./chunk-HU6DUUP4.js";var t=`<p>
    <tui-textfield [tuiTextfieldCleaner]="false">
        <label tuiLabel>Range</label>
        <input
            tuiInputDateRange
            [maxLength]="maxLength"
            [(ngModel)]="range"
        />
        <tui-calendar-range *tuiDropdown />
    </tui-textfield>
</p>
<tui-axes
    class="axes"
    [axisXLabels]="labels()"
    [horizontalLines]="5"
    [verticalLines]="labels().length"
>
    <tui-line-days-chart
        class="chart"
        [height]="200"
        [value]="value()"
        [xStringify]="xStringify()"
        [yStringify]="yStringify"
    />
</tui-axes>
`;export{t as default};
