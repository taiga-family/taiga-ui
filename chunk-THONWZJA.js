import"./chunk-B4AJQJMI.js";var a=`<tui-doc-page
    header="ButtonGroup"
    package="KIT"
    path="kit/directives/button-group"
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
</tui-doc-page>
`;export{a as default};
