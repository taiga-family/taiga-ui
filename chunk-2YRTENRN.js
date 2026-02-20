import"./chunk-HU6DUUP4.js";var t=`<div tuiNotification>
    In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it
    for more details
</div>

<div class="wrapper">
    <tui-ring-chart
        size="s"
        class="chart"
        [value]="value"
    />

    <div class="legend">
        @for (label of labels; track label) {
            <tui-legend-item
                #item
                class="item"
                [color]="\`var(--tui-chart-categorical-\${$index.toString().padStart(2, '0')})\`"
                [disabled]="!isEnabled($index)"
                [text]="label"
                (click)="onClick($index)"
                (keydown.delete)="toggle($index)"
            >
                <input
                    size="s"
                    tuiCheckbox
                    type="checkbox"
                    [checked]="!item.disabled()"
                />
                <span>{{ data[$index] || 0 | tuiAmount: 'RUB' }}</span>
                <tui-icon
                    icon="@tui.x"
                    class="disable"
                    [class.disable_rotated]="item.disabled()"
                    (click.stop)="toggle($index)"
                />
            </tui-legend-item>
        }
    </div>
</div>
`;export{t as default};
