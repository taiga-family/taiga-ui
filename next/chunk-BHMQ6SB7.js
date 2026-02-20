import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="StringifyContent"
    package="KIT"
    type="pipes"
>
    <ng-template pageTab>
        <div>
            Pipe that turns
            <code>TuiStringHandler</code>
            into content that works with
            <code>$implicit</code>
            .
        </div>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        >
            <div
                tuiNotification
                class="tui-space_bottom-4"
            >
                With
                <a
                    tuiLink
                    [routerLink]="routes.FilterByInput"
                >
                    <code>FilterByInput</code>
                </a>
                pipe.
            </div>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{i as default};
