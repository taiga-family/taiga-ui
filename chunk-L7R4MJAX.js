import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Dark mode"
    path="customization/dark-mode"
    type="customization"
>
    <p>
        Taiga UI provides
        <code>TUI_DARK_MODE</code>
        \u2014 an injectable
        <code>WritableSignal&lt;boolean&gt;</code>
        with an extra
        <code>reset()</code>
        method. It automatically initialises from
        <code>localStorage</code>
        or the system
        <code>prefers-color-scheme</code>
        media query, and persists manual changes back to
        <code>localStorage</code>
        .
    </p>

    <tui-doc-code
        class="tui-space_top-3"
        [code]="usage"
    />

    @for (example of examples; track example) {
        <tui-doc-example
            [component]="$index + 1 | tuiComponent"
            [content]="$index + 1 | tuiExample"
            [fullsize]="true"
            [heading]="example"
        />
    }

    <h2 class="tui-text_h4 tui-space_top-8">Custom localStorage key</h2>
    <p>
        By default the preference is stored under the
        <code>tuiDark</code>
        key (
        <code>TUI_DARK_MODE_DEFAULT_KEY</code>
        ). Provide
        <code>TUI_DARK_MODE_KEY</code>
        token to use a different key:
    </p>

    <tui-doc-code [code]="setup" />
</tui-doc-page>
`;export{t as default};
