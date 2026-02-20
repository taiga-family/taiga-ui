import"./chunk-HU6DUUP4.js";var d=`<tui-doc-page
    header="Swipe"
    package="CDK"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>tuiSwipe</code>
            directive allows detecting swipes on mobile devices.
        </p>

        <p>
            You can configure the directive with
            <code>TUI_SWIPE_OPTIONS</code>
            token.
            <br />
            Allowed options:
        </p>
        <dl>
            <dt>
                <strong>timeout:</strong>
            </dt>
            <dd>max time between touchstart and touchend</dd>
            <dt>
                <strong>threshold</strong>
                :
            </dt>
            <dd>min distance between touchstart and touchend.</dd>
        </dl>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{d as default};
