import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="PieChart"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <tui-doc-example
            heading="Sizes"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With labels"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        >
            <div
                tuiNotification
                class="tui-space_bottom-6"
            >
                Use

                <code>ChartHint</code>

                directive to enable hints with
                <code>tuiHintContent</code>
            </div>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-pie-chart
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
                type="TuiSizeS | TuiSizeXL"
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
`;export{i as default};
