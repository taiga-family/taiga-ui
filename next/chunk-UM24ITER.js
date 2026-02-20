import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="CardLarge"
    package="LAYOUT"
    path="layout/components/card"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="$index === 5 || $index === 8 || $index === 10 || $index === 12"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{n as default};
