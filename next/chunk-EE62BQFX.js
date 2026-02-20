import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Copy"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>
            This component provides an easy way to copy text content to the clipboard. It displays the content normally
            and shows a copy button on hover, with visual feedback when content is copied.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Using component in various scenarios.
                        }
                        @case (1) {
                            Using size option for various font size cases.
                        }
                        @case (2) {
                            Using
                            <code>tui-icon[tuiCopy]</code>
                            inside a textfield
                        }
                        @case (3) {
                            Dedicated component for copying values inside tooltips
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
