import"./chunk-42JZD6NG.js";var i=`<tui-doc-page
    header="StringifyContent"
    package="KIT"
    type="pipes"
>
    <ng-template pageTab>
        Pipe that turns
        <code>TuiStringHandler</code>
        into content that works with
        <code>$implicit</code>
        .

        <tui-doc-example
            id="base"
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        >
            <tui-notification class="tui-space_bottom-4">
                With
                <a
                    tuiLink
                    [routerLink]="routes.FilterByInput"
                >
                    <code>FilterByInput</code>
                </a>
                pipe.
            </tui-notification>
        </tui-doc-example>
    </ng-template>

    <tui-setup *pageTab="'Setup'" />
</tui-doc-page>
`;export{i as default};
