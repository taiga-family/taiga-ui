import"./chunk-B4AJQJMI.js";var a=`<tui-doc-page
    header="Like"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            A like component based on native checkbox with icons and custom color for icon when
            <code>:checked</code>
            state.
        </p>

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
