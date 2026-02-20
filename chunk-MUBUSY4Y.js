import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Scrollbar"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div class="tui-space_bottom-3">
            <code>Scrollbar</code>
            implements a custom scrollbar in Taiga UI style.
        </div>

        <p>Native scrollbar is hidden to keep native platform scroll experience</p>

        <div
            tuiNotification
            class="tui-space_vertical-3"
        >
            Use
            <code>TUI_SCROLL_REF</code>
            token to get a scrollable container. For example, when working with virtual scroll.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            >
                @if ($index + 1 === 6) {
                    <p>
                        Use
                        <code>tuiScrollable</code>
                        directive as an element for scroll. In this sample, we use virtual scroll from
                        <code>&#64;angular/cdk</code>
                        .
                    </p>
                }
            </tui-doc-example>
        }
    </ng-template>
</tui-doc-page>
`;export{o as default};
