import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Form"
    package="LAYOUT"
    type="components"
>
    <div
        appearance="warning"
        tuiNotification
    >
        Size sets DI options, therefore it only works for static values like
        <code>tuiForm="m"</code>
        . If you need dynamic binding for the size, you would have to set it for buttons, segmented control and header
        manually as well.
    </div>
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
</tui-doc-page>
`;export{o as default};
