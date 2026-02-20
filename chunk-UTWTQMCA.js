import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="Currency"
    package="ADDON-COMMERCE"
    path="addon-commerce/pipes/currency.pipe.ts"
    type="pipes"
>
    <ng-template pageTab>
        <div>
            Pipe for transforming number into money. It is usually used with
            <a
                tuiLink
                [routerLink]="routes.InputNumber"
            >
                <code>InputNumber</code>
            </a>
        </div>
        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
        <tui-doc-example
            heading="With Textfield"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield>
                    <label tuiLabel>Type a sum</label>

                    <input
                        tuiInputNumber
                        [formControl]="control"
                        [postfix]="\` \${(currency || '' | tuiCurrency)}\`"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="currency"
                tuiDocAPIItem
                type="TuiCurrencyVariants"
                [items]="currencyVariants"
                [(value)]="currency"
            >
                Currency symbol
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
