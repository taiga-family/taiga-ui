import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page header="Variables">
    <p>
        Taiga UI uses CSS custom properties for many of its visual aspects. You can see
        <a
            tuiLink
            [routerLink]="routes.Colors"
        >
            colors
        </a>
        for the full list of color variables.
    </p>
    <p>Besides colors there are also following variables that can be adjusted at any level of DOM structure:</p>
    <ul>
        @for (item of vars | keyvalue; track item) {
            <li>
                <tui-doc-copy
                    class="var"
                    [cdkCopyToClipboard]="item.key"
                >
                    <code>{{ item.key }}</code>
                </tui-doc-copy>
                \u2014 {{ item.value }}
            </li>
        }
    </ul>

    <tui-doc-example
        heading="Override example"
        [content]="example1"
    >
        <tui-variables-example-1 />
    </tui-doc-example>
</tui-doc-page>
`;export{o as default};
