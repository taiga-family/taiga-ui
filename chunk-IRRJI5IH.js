import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Breadcrumbs"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Navigation element that shows a path from root page to the current</p>

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
            <tui-breadcrumbs
                [itemsLimit]="itemsLimit"
                [size]="size"
            >
                @for (item of items; track item) {
                    <button
                        *tuiItem
                        tuiLink
                        type="button"
                    >
                        {{ item }}
                    </button>
                }
            </tui-breadcrumbs>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[itemsLimit]"
                tuiDocAPIItem
                type="number"
                [(value)]="itemsLimit"
            >
                Limit on visible items
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Text size
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
