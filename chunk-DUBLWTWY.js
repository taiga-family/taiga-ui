import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Axes"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <p>Just axes for charts</p>

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
                [axisXLabels]="axisXLabels || []"
                [axisYInset]="axisYInset"
                [axisYLabels]="axisYLabels || []"
                [axisYName]="axisYName"
                [axisYSecondaryInset]="axisYSecondaryInset"
                [axisYSecondaryLabels]="axisYSecondaryLabels"
                [axisYSecondaryName]="axisYSecondaryName"
                [centeredXLabels]="centeredXLabels"
                [horizontalLines]="horizontalLines"
                [horizontalLinesHandler]="horizontalLinesHandler"
                [verticalLines]="verticalLines"
                [verticalLinesHandler]="verticalLinesHandler"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[centeredXLabels]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="centeredXLabels"
            >
                Center X labels
            </tr>

            <tr
                name="[axisXLabels]"
                tuiDocAPIItem
                type="ReadonlyArray<string | null>"
                [items]="labelsXVariants"
                [(value)]="axisXLabels"
            >
                Labels for X. Empty string is empty stroke,
                <code>null</code>
                \u2014 no stroke
            </tr>

            <tr
                name="[axisYInset]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="axisYInset"
            >
                Inset of labels on axis Y
            </tr>

            <tr
                name="[axisYLabels]"
                tuiDocAPIItem
                type="readonly string[]"
                [items]="labelsYVariants"
                [(value)]="axisYLabels"
            >
                Labels for Y
            </tr>

            <tr
                name="[axisYName]"
                tuiDocAPIItem
                type="string"
                [(value)]="axisYName"
            >
                Name of Y axis
            </tr>

            <tr
                name="[axisYSecondaryInset]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="axisYSecondaryInset"
            >
                Inset labels for Y
            </tr>

            <tr
                name="[axisYSecondaryLabels]"
                tuiDocAPIItem
                type="readonly string[]"
                [items]="labelsYVariants"
                [(value)]="axisYSecondaryLabels"
            >
                Secondary Y axis labels
            </tr>

            <tr
                name="[axisYSecondaryName]"
                tuiDocAPIItem
                type="string"
                [(value)]="axisYSecondaryName"
            >
                Secondary Y axis name
            </tr>

            <tr
                name="[horizontalLines]"
                tuiDocAPIItem
                type="number"
                [(value)]="horizontalLines"
            >
                Horizontal lines number
            </tr>

            <tr
                name="[horizontalLinesHandler]"
                tuiDocAPIItem
                type="TuiLineHandler"
                [items]="handlerVariants"
                [(value)]="horizontalLinesHandler"
            >
                Horizontal lines type handler
            </tr>

            <tr
                name="[verticalLines]"
                tuiDocAPIItem
                type="number"
                [(value)]="verticalLines"
            >
                Number of vertical lines
            </tr>

            <tr
                name="[verticalLinesHandle]"
                tuiDocAPIItem
                type="TuiLineHandler"
                [items]="handlerVariants"
                [(value)]="verticalLinesHandler"
            >
                Vertical lines type handler
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
