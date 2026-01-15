import"./chunk-B4AJQJMI.js";var a=`<tui-doc-page
    header="Button"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                [appearance]="appearance.appearance"
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [loading]="loading"
                [size]="size"
                [tuiAppearanceFocus]="appearance.focus"
                [tuiAppearanceMode]="appearance.mode"
                [tuiAppearanceState]="appearance.state"
            >
                Button
            </button>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size of the button
            </tr>
            <tr
                name="[loading]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="loading"
            >
                Loading indicator (import
                <code>TuiButtonLoading</code>
                )
            </tr>
            <tbody
                #appearance
                tuiDocAppearance
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
