import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Pager"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="true"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-pager
                [count]="count"
                [index]="index"
                [max]="max"
                [size]="size"
                [valueContent]="valueContent"
            />

            <ng-template #templateRef>
                <tui-icon icon="@tui.heart-filled" />
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS"
                [items]="sizes"
                [(value)]="size"
            >
                Layout size
            </tr>
            <tr
                name="[index]"
                tuiDocAPIItem
                type="number"
                [max]="count - 1"
                [min]="0"
                [(value)]="index"
            >
                Current active dot
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [max]="count - 1"
                [min]="1"
                [(value)]="max"
            >
                Max visible dots
            </tr>
            <tr
                name="[count]"
                tuiDocAPIItem
                type="number"
                [items]="countVariants"
                [(value)]="count"
            >
                Count of dots
            </tr>
            <tr
                name="[valueContent]"
                tuiDocAPIItem
                type="TemplateRef"
                [items]="templateVariants"
                [(value)]="selectedTemplate"
            >
                A template for custom view
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
