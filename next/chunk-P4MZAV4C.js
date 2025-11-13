import"./chunk-42JZD6NG.js";var p=`<tui-doc-page
    header="Message"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Message component is used to display message block.</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <span
                tuiMessage
                [appearance]="appearance.appearance"
            >
                Message
            </span>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody
                #appearance
                tuiDocAppearance
                [hiddenOptions]="['state', 'focus', 'mode']"
            ></tbody>
        </table>
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{p as default};
