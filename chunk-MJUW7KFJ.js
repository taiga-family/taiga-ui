import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="BlockStatus"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <p>Component for status screens, result screens and zero screens</p>

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
            <tui-block-status
                [card]="card"
                [size]="size"
            >
                <img
                    alt="hidden content"
                    src="./assets/images/camping.svg"
                    tuiSlot="top"
                />
                <h4>Title</h4>
                Description
                <button
                    appearance="secondary"
                    tuiButton
                    type="button"
                >
                    Action
                </button>
            </tui-block-status>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[card]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="card"
            >
                Enable border radius and padding for card view
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size (for desktop only)
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
