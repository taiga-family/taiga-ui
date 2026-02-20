import"./chunk-HU6DUUP4.js";var i=`<tui-axes
    class="axes"
    [horizontalLines]="3"
    [tuiLineChartHint]="hint"
    [verticalLines]="5"
>
    @for (value of values; track value) {
        <tui-line-chart
            class="chart"
            [height]="200"
            [value]="value"
            [width]="400"
            [x]="0"
            [y]="0"
        />
    }
</tui-axes>
`;export{i as default};
