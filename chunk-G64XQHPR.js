import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Segmented"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p class="tui-space_vertial-4">
            Segmented is used for links and buttons to navigate within the application. It can also work as a radio
            button to toggle between different states.
        </p>

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
