import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="LineDaysChart"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <p>Line chart but for days</p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Complex"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [fullsize]="true"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-axes
                class="axes"
                [axisXLabels]="labels()"
                [horizontalLines]="5"
                [verticalLines]="4"
            >
                <tui-line-days-chart
                    [dots]="dots"
                    [height]="height"
                    [hintContent]="hintContent"
                    [smoothingFactor]="smoothingFactor"
                    [value]="value"
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
                Show dots on chart
            </tr>
            <tr
                name="[hintContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="hintContentVariants()"
                [(value)]="hintContent"
            >
                Content of hint for hover. It has
                <code>$implicit</code>
                in context with a tuple
                <code>[TuiDay, number]</code>
            </tr>
            <tr
                name="[height]"
                tuiDocAPIItem
                type="number"
                [(value)]="height"
            >
                Axis Y range, pixel scale is 1:1
            </tr>
            <tr
                name="[y]"
                tuiDocAPIItem
                type="number"
                [(value)]="y"
            >
                Start of Y axis
            </tr>
            <tr
                name="[smoothingFactor]"
                tuiDocAPIItem
                type="number"
                [(value)]="smoothingFactor"
            >
                Smoothing factor from 0 to 99
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="[TuiDay, number][]"
                [items]="valueVariants"
                [(value)]="value"
            >
                Array of data
            </tr>
            <tr
                name="[xStringify]"
                tuiDocAPIItem
                type="TuiStringHandler<TuiDay> | null"
                [items]="xStringifyVariants()"
                [(value)]="xStringify"
            >
                Function to stringify a value number to a string in axis X hint
            </tr>
            <tr
                name="[yStringify]"
                tuiDocAPIItem
                type="TuiStringHandler<number> | null"
                [items]="yStringifyVariants"
                [(value)]="yStringify"
            >
                Function to stringify a value number to a string in axis Y hint
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
