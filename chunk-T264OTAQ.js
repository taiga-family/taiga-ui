import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Title"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>A directive for title with optional subtitle</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{a as default};
