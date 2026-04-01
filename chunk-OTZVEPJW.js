import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="AutoFocus"
    package="CDK"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>tuiAutoFocus</code>
            allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="iOS"
            [fullsize]="true"
        >
            <ul class="tui-list tui-list_small tui-space_top-4">
                <li class="tui-list__item">
                    <a
                        href="https://bugs.webkit.org/show_bug.cgi?id=195884"
                        tuiLink
                    >
                        [Webkit bugzilla]: Autofocus on text input does not show keyboard
                    </a>
                </li>
                <li class="tui-list__item">
                    <a
                        href="https://github.com/WebKit/WebKit/pull/2907"
                        tuiLink
                    >
                        Fixed only iOS 16.3+
                    </a>
                </li>
            </ul>

            <img
                alt="ios-keyboard"
                src="assets/images/ios-keyboard.png"
                title="ios-keyboard"
                class="t-image tui-space_top-4"
            />
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{i as default};
