import"./chunk-42JZD6NG.js";var a=`<tui-doc-page
    header="Form"
    package="LAYOUT"
    type="components"
>
    <tui-notification appearance="warning">
        Size sets DI options, therefore it only works for static values like
        <code>tuiForm="m"</code>
        . If you need dynamic binding for the size, you would have to set it for buttons, segmented control and header
        manually as well.
    </tui-notification>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="true"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <tui-setup *pageTab="'Setup'" />
</tui-doc-page>
`;export{a as default};
