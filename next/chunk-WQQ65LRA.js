import"./chunk-42JZD6NG.js";var i=`<tui-doc-page
    header="Stringify"
    package="KIT"
    type="pipes"
>
    <ng-template pageTab>
        Pipe that creates
        <code>TuiStringHandler</code>
        by given key.

        <tui-doc-example
            id="base"
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
                and
                <a
                    tuiLink
                    [routerLink]="routes.StringifyContent"
                >
                    <code>StringifyContent</code>
                </a>
                pipes.
            </div>
        </tui-doc-example>
    </ng-template>

    <tui-setup *pageTab="'Setup'" />
</tui-doc-page>
`;export{i as default};
