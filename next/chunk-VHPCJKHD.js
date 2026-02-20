import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="ThumbnailCard"
    package="ADDON-COMMERCE"
    type="components"
>
    <ng-template pageTab>
        <p>Customizable credit card thumbnail</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-thumbnail-card
                [iconEnd]="controlIcons.iconEnd"
                [iconStart]="controlIcons.iconStart"
                [paymentSystem]="paymentSystem"
                [size]="size"
                [style.background]="background"
            >
                {{ contentProjection }}
            </tui-thumbnail-card>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody
                #controlIcons
                tuiDocIcons
            ></tbody>
            <tr
                name="[paymentSystem]"
                tuiDocAPIItem
                type="TuiPaymentSystem | null"
                [items]="paymentSystemVariants"
                [(value)]="paymentSystem"
            >
                Payment system
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
        </table>

        <h3>CSS customization</h3>
        <table tuiDocAPI>
            <tr
                name="[style.background]"
                tuiDocAPIItem
                type="string"
                [(value)]="background"
            >
                Background style
            </tr>
        </table>

        <h3>Content projection</h3>
        <table tuiDocAPI>
            <tr
                name="[ng-content]"
                tuiDocAPIItem
                type="string"
                [(value)]="contentProjection"
            >
                Content projection
            </tr>
        </table>
        <tui-doc-code [code]="'<tui-thumbnail-card>{{ contentProjection }}</tui-thumbnail-card>'" />
    </ng-template>
</tui-doc-page>
`;export{n as default};
