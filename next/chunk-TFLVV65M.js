import"./chunk-B4AJQJMI.js";var t=`<tui-doc-page
    header="List"
    package="LAYOUT"
    type="directives"
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
</tui-doc-page>
`;export{t as default};
