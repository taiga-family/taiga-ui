import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="ArcChart"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-arc-chart
                class="chart"
                [max]="max"
                [maxLabel]="maxLabel"
                [minLabel]="minLabel"
                [size]="size"
                [value]="value"
                [(activeItemIndex)]="activeItemIndex"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [items]="maxVariants"
                [(value)]="max"
            >
                maximum value
            </tr>
            <tr
                name="[maxLabel]"
                tuiDocAPIItem
                type="string"
                [(value)]="maxLabel"
            >
                label for maximum value
            </tr>
            <tr
                name="[minLabel]"
                tuiDocAPIItem
                type="string"
                [(value)]="minLabel"
            >
                label for minimum value
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXL"
                [items]="sizeVariants"
                [(value)]="size"
            ></tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="readonly number[]"
                [items]="valueVariants"
                [(value)]="value"
            >
                value array
            </tr>
            <tr
                name="[(activeItemIndex)]"
                tuiDocAPIItem
                type="number"
                [(value)]="activeItemIndex"
            >
                index of selected arc
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
