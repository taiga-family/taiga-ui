import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Bar"
    package="ADDON-CHARTS"
    type="components"
>
    <ng-template pageTab>
        <p>A bar for bar chart</p>

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
            <tui-bar
                class="bar"
                [size]="size"
                [value]="value"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
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
                An array of segments
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
