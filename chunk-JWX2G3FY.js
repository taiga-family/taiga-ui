import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="CardCollapsed"
    package="LAYOUT"
    path="layout/components/card"
    type="components"
>
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
`;export{t as default};
