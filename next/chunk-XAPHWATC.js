import"./chunk-HU6DUUP4.js";var p=`<tui-doc-page
    header="InputInline"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>Inline input field</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{p as default};
