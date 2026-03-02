import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="InputPin"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Default configuration with digits only
                    }
                    @case (1) {
                        Changing mask to allow letters
                    }
                    @case (2) {
                        Minimal gap is 0.25rem, additional spacing can be added using
                        <code>gap</code>
                        on
                        <code>tui-textfield</code>
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{a as default};
