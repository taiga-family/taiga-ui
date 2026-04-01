import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputCardGroup"
    package="ADDON-COMMERCE"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>InputCardGroup</code>
            is used to input a card as a separated control
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="formControl">
            <ng-template>
                <tui-input-card-group
                    [codeLength]="codeLength"
                    [compact]="compact"
                    [formControl]="formControl"
                    [icon]="icon"
                    [id]="id"
                    [inputs]="inputs"
                    [invalid]="control.invalid"
                    [placeholder]="placeholder"
                    [readOnly]="control.readonly"
                    [tuiDisabled]="control.disabled"
                />
            </ng-template>
        </tui-doc-demo>
        <div class="tui-space_bottom-6">
            <p>
                Add
                <code>tuiCreateLuhnValidator(customMessage?)</code>
                to control validators to validate it with Luhn algorithm
            </p>
        </div>

        <ng-template #template>
            <tui-thumbnail-card
                paymentSystem="maestro"
                size="s"
                class="card"
            >
                1234
            </tui-thumbnail-card>
        </ng-template>

        <table tuiDocAPI>
            <tr
                name="[cardValidator]"
                tuiDocAPIItem
                type="TuiBooleanHandler<string>"
            >
                Custom card validator for moving focus to the next field
            </tr>
            <tr
                name="[codeLength]"
                tuiDocAPIItem
                type="3 | 4"
                [items]="codeLengthVariants"
                [(value)]="codeLength"
            >
                Code length
            </tr>
            <tr
                name="[compact]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="compact"
            >
                Manually set compact mode (forced on mobile resolution)
            </tr>
            <tr
                name="[icon]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="getContentVariants(template)"
                [(value)]="iconSelected"
            >
                Custom card icon
            </tr>
            <tr
                name="[id]"
                tuiDocAPIItem
                type="string"
                [id]="id"
            >
                <code>id</code>
                attribute for input tags (adds
                <code>_card</code>
                ,
                <code>_expire</code>
                and
                <code>_cvc</code>
                accordingly). Auto-generated when not provided.
            </tr>
            <tr
                name="[inputs]"
                tuiDocAPIItem
                type="TuiCardInputs"
                [items]="inputsVariants"
                [(value)]="inputs"
            >
                Toggle availability of inputs
            </tr>
            <tr
                name="[placeholder]"
                tuiDocAPIItem
                type="string"
                [(value)]="placeholder"
            >
                Placeholder
            </tr>
            <tr
                name="(binChange)"
                tuiDocAPIItem
                type="string | null"
            >
                BIN value (card first 6 symbols)
            </tr>
            <tbody
                #control
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
