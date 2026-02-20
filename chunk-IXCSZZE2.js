import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Amount"
    package="ADDON-COMMERCE"
    type="pipes"
>
    <ng-template pageTab>
        <p>Pipe to format number values to show money sums</p>

        <p>
            Number formatting can be customized by using
            <a
                fragment="number-format"
                tuiLink
                [routerLink]="routes.Tokens"
            >
                TUI_NUMBER_FORMAT
            </a>
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{a as default};
