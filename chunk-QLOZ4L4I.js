import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page header="Disable animations">
    <p>
        During integration testing you can face a problem of flaky tests caused by animations. It is especially crucial
        if you are writing screenshot tests. For example, you want to make screenshot of a dialog content: you click
        button which opens dialog and take a screenshot. Sometimes screenshots can be made too early (before dialog
        fully opens) and test fails.
    </p>

    <p>
        To avoid this
        <strong>we recommend to toggle all animation off for integration tests.</strong>
    </p>

    <p>
        <code>&#64;taiga-ui/cdk</code>
        used
        <code>TUI_REDUCED_MOTION</code>
        token which disables all animations for taiga-ui components. This token is based on
        <code>prefers-reduced-motion</code>
        . The prefers-reduced-motion CSS media feature is used to detect if the user has enabled a setting on their
        device to minimize the amount of non-essential motion. The setting is used to convey to the browser on the
        device that the user prefers an interface that removes, reduces, or replaces motion-based animations.
    </p>

    <tui-doc-example
        [content]="content"
        [preview]="false"
    />
</tui-doc-page>
`;export{o as default};
