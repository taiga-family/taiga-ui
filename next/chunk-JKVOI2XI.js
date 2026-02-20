import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="BarSet"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <p>A group of bars for bar chart</p>

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
            <tui-bar-set
                class="bars"
                [collapsed]="collapsed"
                [size]="size"
                [value]="value"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[collapsed]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="collapsed"
            >
                Shows data set in a single bar
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL | null"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size (use
                <code>null</code>
                for autosize)
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="readonly number[]"
                [items]="valueVariants"
                [(value)]="value"
            >
                Array of segments
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
