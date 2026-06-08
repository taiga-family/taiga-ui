import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Scrollbar"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>
            <code>Scrollbar</code>
            implements a custom scrollbar in Taiga UI style.
        </div>

        <p>Native scrollbar is hidden to keep native platform scroll experience</p>

        <div tuiNotification>
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
`;export{a as default};
