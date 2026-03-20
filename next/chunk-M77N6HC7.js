import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="Truncate"
    package="CDK"
    type="directives"
>
    <ng-template pageTab>
        <p>
            Truncates text with an ellipsis in the middle. Useful when both start and end of the string are relevant,
            such as long file names with extension.
        </p>

        <tui-doc-example
            id="basic"
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                class="demo"
                [style.font-size.px]="fontSize"
                [style.padding.px]="padding"
                [style.word-break]="wordBreak"
                [tuiTruncate]="lines"
            >
                {{ content }}
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="<ng-content />"
                tuiDocAPIItem
                type="string"
                [(value)]="content"
            >
                Content
            </tr>
            <tr
                name="[tuiTruncate]"
                tuiDocAPIItem
                type="number"
                [(value)]="lines"
            >
                Visible lines
            </tr>
        </table>
        <h3>CSS customization</h3>
        <table tuiDocAPI>
            <tr
                name="[style.padding.px]"
                tuiDocAPIItem
                type="number"
                [(value)]="padding"
            >
                Padding
            </tr>
            <tr
                name="[style.font-size.px]"
                tuiDocAPIItem
                type="number"
                [(value)]="fontSize"
            >
                Font size
            </tr>
            <tr
                name="[style.word-break]"
                tuiDocAPIItem
                type="string"
                [items]="wordBreakStyles"
                [(value)]="wordBreak"
            >
                Word break style
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
