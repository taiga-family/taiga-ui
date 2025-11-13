import"./chunk-42JZD6NG.js";var a=`<div class="wrapper">
    <tui-ring-chart
        [value]="value"
        [(activeItemIndex)]="activeItemIndex"
    >
        <span>{{ sum | tuiAmount: 'RUB' | async }}</span>
        <div>Total</div>
    </tui-ring-chart>

    <div class="legend">
        @for (label of labels; track label) {
            <tui-legend-item
                size="s"
                class="item"
                [active]="isItemActive($index)"
                [color]="\`var(--tui-chart-categorical-\${$index.toString().padStart(2, '0')})\`"
                [text]="label"
                (tuiHoveredChange)="onHover($index, $event)"
            >
                <span>{{ value[$index] || 0 | tuiAmount: 'RUB' | async }}</span>
            </tui-legend-item>
        }
    </div>
</div>
`;export{a as default};
