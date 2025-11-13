import"./chunk-42JZD6NG.js";var t=`<tui-doc-page
    header="Obfuscate"
    package="CDK"
    type="pipes"
>
    <ng-template pageTab>
        Pipe for obfuscating sensitive data

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
`;export{t as default};
