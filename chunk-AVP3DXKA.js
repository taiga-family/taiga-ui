import"./chunk-HU6DUUP4.js";var p=`<tui-doc-page
    header="Search"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <p>A wrapping component for search or filtering the table</p>

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
`;export{p as default};
