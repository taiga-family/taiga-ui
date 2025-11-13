import"./chunk-42JZD6NG.js";var a=`<tui-doc-page
    header="Label"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        Label is used to show text related to textfields, checkboxes, toggles and radio buttons

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <tui-setup *pageTab="'Setup'" />
</tui-doc-page>
`;export{a as default};
