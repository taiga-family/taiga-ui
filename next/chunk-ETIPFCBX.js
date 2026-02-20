import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="ActionBar"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>
            It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom
            content.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{o as default};
