import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="LineChart"
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
            <tui-axes
                class="axes"
                [horizontalLines]="3"
                [verticalLines]="5"
            >
                <tui-line-chart
                    [dots]="dots"
                    [filled]="filled"
                    [height]="height"
                    [smoothingFactor]="smoothingFactor"
                    [value]="value"
                    [width]="width"
                    [x]="x"
                    [xStringify]="xStringify"
                    [y]="y"
                    [yStringify]="yStringify"
                />
            </tui-axes>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[dots]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="dots"
            >
                show dots on chart
            </tr>
            <tr
                name="[filled]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="filled"
            >
                filled with gradient
            </tr>
            <tr
                name="[height]"
                tuiDocAPIItem
                type="number"
                [(value)]="height"
            >
                axis Y range, pixel scale is 1:1
            </tr>
            <tr
                name="[y]"
                tuiDocAPIItem
                type="number"
                [(value)]="y"
            >
                start of Y axis
            </tr>
            <tr
                name="[width]"
                tuiDocAPIItem
                type="number"
                [(value)]="width"
            >
                axis X range, pixel scale is 1:1
            </tr>
            <tr
                name="[x]"
                tuiDocAPIItem
                type="number"
                [(value)]="x"
            >
                start of X axis
            </tr>
            <tr
                name="[smoothingFactor]"
                tuiDocAPIItem
                type="number"
                [(value)]="smoothingFactor"
            >
                smoothing factor from 0 to 99
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="TuiPoint[]"
            >
                array of data
            </tr>
            <tr
                name="[xStringify]"
                tuiDocAPIItem
                type="TuiStringHandler<number> | null"
                [items]="xStringifyVariants"
                [(value)]="xStringify"
            >
                function to stringify a value number to a string in axis X hint
            </tr>
            <tr
                name="[yStringify]"
                tuiDocAPIItem
                type="TuiStringHandler<number> | null"
                [items]="yStringifyVariants"
                [(value)]="yStringify"
            >
                function to stringify a value number to a string in axis Y hint
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
