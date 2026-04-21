import"./chunk-HU6DUUP4.js";var a=`<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    Run migration schematics
</label>

<tui-doc-example
    [content]="runMigration"
    [preview]="false"
    [style.padding-block-start.rem]="1"
/>

<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    <span>
        Review all changed code lines. Some of them contain new code comments (something like
        <code>// TODO: (Taiga UI migration)</code>
        ). In most cases these comments contain instructions how to manually migrate some deleted entities by new
        alternative.
    </span>
</label>

<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    <span>
        You can find out that your codebase now contains some imports from
        <code>
            <a
                href="https://github.com/taiga-family/taiga-ui/tree/main/projects/legacy"
                rel="noreferrer noopener"
                target="_blank"
                tuiLink
            >
                &#64;taiga-ui/legacy
            </a>
        </code>
        . This package is a transitional state for many outdated entities before their full removal. Everything you find
        inside this package in the {{ tuiMajor }}th major release will be removed in the {{ tuiMajor + 1 }}th one. So,
        you can just continue to use them for a while. However, some of those components already have modern
        alternatives \u2013 they will be marked by comment with
        <code>&#64;deprecated</code>
        tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace them by new
        alternatives as soon as possible!
    </span>
</label>

<ng-content />
`;export{a as default};
