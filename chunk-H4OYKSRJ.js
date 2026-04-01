import"./chunk-HU6DUUP4.js";var i=`<tui-axes
    class="axes"
    [axisXLabels]="axisXLabels"
    [verticalLines]="5"
>
    <div class="t-horizontal-bars">
        @for (bar of value; track bar) {
            <tui-bar
                size="m"
                [style.background-color]="\`var(--tui-chart-categorical-\${$index.toString().padStart(2, '0')})\`"
                [style.height.%]="getHeight(bar)"
            />
        }
    </div>
</tui-axes>
`;export{i as default};
