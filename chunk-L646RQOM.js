import"./chunk-B4AJQJMI.js";var o=`<tui-doc-page
    header="Flag"
    package="KIT"
    type="pipes"
>
    <ng-template pageTab>
        Pipe for getting source path to image with flag

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <img
                alt=""
                [src]="countryIsoCode | tuiFlag"
            />
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="Country code"
                tuiDocAPIItem
                type="TuiCountryIsoCode"
                [items]="countryIsoCodeVariants"
                [(value)]="countryIsoCode"
            >
                <tui-doc-code [code]="apiCodeDemo" />
            </tr>
        </table>
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{o as default};
