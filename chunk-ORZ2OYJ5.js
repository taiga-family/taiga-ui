import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Sensitive"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <p>
            A directive that allows you to hide sensitive data under a pixel mask. This can be account balances,
            write-off amounts and any other content
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Components"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        >
            <div
                tuiNotification
                class="tui-space_bottom-4"
            >
                Buttons have
                <code>gap</code>
                style configured for icons, avatars and other similar content. Wrap your text in
                <code>span</code>
                so it does not affect you.
            </div>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <span [tuiSensitive]="sensitive">Confidential information</span>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiSensitive]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="sensitive"
            >
                Sensitive mode
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
