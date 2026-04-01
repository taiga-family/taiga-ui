import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Label"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>Label is used to show text related to textfields, checkboxes, toggles and radio buttons</div>

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
