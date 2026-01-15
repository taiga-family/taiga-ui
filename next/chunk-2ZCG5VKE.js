import"./chunk-B4AJQJMI.js";var a=`<tui-doc-page
    header="Title"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        A directive for title with optional subtitle

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{a as default};
