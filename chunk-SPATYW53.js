import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Viewport"
    package="CORE"
    path="core/tokens/viewport.ts"
    type="customization"
>
    <ng-template pageTab>
        <p>
            <code>TUI_VIEWPORT</code>
            - define the area relative to which the position constraints will be calculated. Also you can use
            <code>tuiAsViewport</code>
            helper instead of token.
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="true"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab="Setup">
        <tui-doc-code [code]="providers" />
    </ng-template>
</tui-doc-page>
`;export{o as default};
