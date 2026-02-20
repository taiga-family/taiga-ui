import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="List"
    package="LAYOUT"
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
`;export{t as default};
