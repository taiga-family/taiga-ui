import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="ElasticContainer"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <p>A wrapper component that changes its height with transition, depending on the content</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{n as default};
