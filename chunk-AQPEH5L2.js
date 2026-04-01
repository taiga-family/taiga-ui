import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="PullToRefresh"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <p>Component to refresh content after pull top. It emulates appearance of native iOS and Android components</p>

        <p>
            It emits
            <code>(pulled)</code>
            event when the pull threshold is reached.
        </p>
        <p>
            You can set that threshold in pixels by
            <code>TUI_PULL_TO_REFRESH_THRESHOLD</code>
            DI token.
        </p>
        <p>
            You can finish loading with
            <code>TUI_PULL_TO_REFRESH_LOADED</code>
            stream token that can be provided in DI.
        </p>

        <div tuiNotification>
            Use
            <code>overscroll-behavior: none;</code>
            CSS on your scrolling container to stop elastic scrolling on iOS
        </div>

        <tui-doc-example
            heading="Android"
            [content]="1 | tuiExample"
        >
            <tui-scrollbar class="scrollbar">
                <ng-container *polymorpheusOutlet="example1 | async as text">{{ text }}</ng-container>
            </tui-scrollbar>
        </tui-doc-example>

        <tui-doc-example
            heading="iOS"
            [content]="2 | tuiExample"
        >
            <tui-scrollbar class="scrollbar">
                <ng-container *polymorpheusOutlet="example2 | async as text">{{ text }}</ng-container>
            </tui-scrollbar>
        </tui-doc-example>

        <tui-doc-example
            heading="Virtual scroll"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />
    </ng-template>
</tui-doc-page>
`;export{o as default};
