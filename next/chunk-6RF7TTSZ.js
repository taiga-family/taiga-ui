import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="RingChart"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <tui-doc-example
            heading="sizes"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With labels"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-ring-chart
                class="chart"
                [size]="size"
                [value]="value"
                [(activeItemIndex)]="activeItemIndex"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[(activeItemIndex)]"
                tuiDocAPIItem
                type="number"
                [items]="activeItemIndexVariants"
                [(value)]="activeItemIndex"
            >
                Active fragment
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeXL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="readonly number[]"
                [items]="valueVariants"
                [(value)]="value"
            >
                Value
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
