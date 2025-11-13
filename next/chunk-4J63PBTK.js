import"./chunk-42JZD6NG.js";var p=`<tui-doc-page
    header="AppBar"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        Component for the main app header

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <tui-setup *pageTab="'Setup'" />
</tui-doc-page>
`;export{p as default};
