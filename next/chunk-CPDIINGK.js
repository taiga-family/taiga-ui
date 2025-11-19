import"./chunk-42JZD6NG.js";var t=`<tui-axes
    axisY="none"
    class="axes"
    [axisXLabels]="axisXLabels"
    [axisYSecondaryLabels]="axisYSecondaryLabels"
    [horizontalLines]="2"
    [horizontalLinesHandler]="horizontalLinesHandler"
    [verticalLines]="4"
    [verticalLinesHandler]="verticalLinesHandler"
>
    <tui-bar-chart
        class="chart"
        [max]="maxValue"
        [tuiHintContent]="hint"
        [value]="value"
    />
</tui-axes>

<ng-template
    #hint
    let-setIndex
>
    @for (item of value; track item) {
        <p class="hint">
            <span
                class="dot"
                [style.background]="\`var(--tui-chart-categorical-\${$index.toString().padStart(2, '0')})\`"
            ></span>
            <span class="name">{{ getSetName($index) }}</span>
            <span>{{ (item[setIndex] || 0) * 1000 | tuiAmount: 'RUB' }}</span>
        </p>
    }
</ng-template>
`;export{t as default};
