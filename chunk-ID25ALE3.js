import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page header="Internationalization (i18n)">
    <p>
        Some components in Taiga UI embedded texts and they use English translate by default. If you want to change it,
        you need to provide
        <code>TUI_LANGUAGE</code>
        token in your configuration. Full list of supported language
        <a
            href="https://github.com/taiga-family/taiga-ui/tree/main/projects/i18n/languages"
            target="_blank"
            tuiLink
        >
            here.
        </a>
    </p>

    <tui-doc-code
        class="tui-space_top-5"
        [code]="example.base"
    />

    <tui-doc-example
        description="Making custom toggling between different languages"
        heading="Language Switcher"
        [content]="example1"
        [fullsize]="true"
    >
        <tui-doc-language-switcher />

        <tui-table-pagination
            class="tui-space_top-5"
            [page]="0"
            [size]="10"
            [total]="237"
        />
    </tui-doc-example>

    <tui-accordion class="tui-space_top-5">
        <button tuiAccordion>CLI's webpack-based build system</button>
        <tui-expand>
            <tui-doc-code [code]="example.dynamic" />
        </tui-expand>
        <button tuiAccordion>CLI's esbuild-based build system</button>
        <tui-expand>
            <tui-doc-code [code]="example.esbuild" />
        </tui-expand>
    </tui-accordion>

    <tui-doc-example
        heading="How to add a language"
        [fullsize]="true"
    >
        <p>
            1. Go to
            <a
                href="https://github.com/taiga-family/taiga-ui/tree/main/projects/i18n/languages"
                target="_blank"
                tuiLink
            >
                languages
            </a>
            folder
        </p>

        <p>
            2. Copy
            <code>english</code>
            folder and rename new folder with the name of language you speak
        </p>

        <p>3. Translate entities in files. If you need some clarification, take a look at interfaces of entities</p>

        <tui-doc-code
            class="tui-space_top-5"
            [code]="example.custom"
        />
    </tui-doc-example>
</tui-doc-page>
`;export{a as default};
