import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputCard"
    package="ADDON-COMMERCE"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>InputCard</code>
            can be used with
            <code>InputExpire</code>
            and
            <code>InputCVC</code>
            to input a card. Use
            <code>tuiCreateLuhnValidator(message)</code>
            to create a
            <code>Validator</code>
            that uses Luhn algorithm
        </p>

        <tui-doc-example
            heading="Form"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        >
            <p>
                <code>form</code>
                tag is used for better autocomplete support
            </p>
        </tui-doc-example>

        <tui-doc-example
            heading="Card"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-textfield
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [tuiTextfieldCleaner]="textfield.cleaner"
                [tuiTextfieldSize]="textfield.size"
            >
                @if (textfield.size !== 's') {
                    <label tuiLabel>Card number</label>
                }

                <input
                    tuiInputCard
                    [disabled]="control.disabled"
                    [focused]="input.focused"
                    [invalid]="control.invalid"
                    [placeholder]="textfield.size === 's' ? 'Card number' : ''"
                    [readOnly]="control.readonly"
                    [state]="input.state"
                    [(ngModel)]="card"
                    (binChange)="binChange.emitEvent($event)"
                />
            </tui-textfield>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[(ngModel)]"
                tuiDocAPIItem
                type="string"
                [(value)]="card"
            >
                Card number (also works with a reactive control)
            </tr>
            <tr
                #binChange
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
            <tbody
                #textfield
                tuiDocTextfield
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
