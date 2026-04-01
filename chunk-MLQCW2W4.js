import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Highlight"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive is used to highlight text in element.</p>

        <p>
            You can configure the directive with
            <code>TUI_HIGHLIGHT_OPTIONS</code>
            token.
            <br />
            Allowed options:
        </p>
        <dl>
            <dt>
                <strong>highlightColor:</strong>
            </dt>
            <dd>The default color for the highlight.</dd>
        </dl>

        <p>
            Use function
            <code>tuiHighlightOptionsProvider</code>
            to provide new value of this token.
        </p>

        <div
            appearance="warning"
            tuiNotification
        >
            Does not work with inline elements
        </div>

        <tui-doc-example
            heading="Usage"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>
</tui-doc-page>
`;export{i as default};
