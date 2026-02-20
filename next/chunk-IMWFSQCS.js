import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Skeleton"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <tui-doc-example
            heading="Components"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Text"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="description"
        >
            <ng-template #description>
                You can pass
                <code>boolean</code>
                to toggle skeleton for elements. For multi line text you can use
                <code>string</code>
                to serve as a placeholder underneath the text skeleton or a
                <code>number</code>
                to generate this many random sized words, while your actual text is loading
            </ng-template>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{o as default};
