import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputPhone"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>InputPhone</code>
            allows to input a phone number
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="description"
        />

        <ng-template #description>
            If you support Safari < 18, we recommend to set
            <code>pattern</code>
            for correct work of browser autofill
        </ng-template>

        <tui-doc-example
            description="By number and by name"
            heading="With autocomplete"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            description="You can provide custom transformer in options to store value in different format in form control"
            heading="Value transformer"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="With flag"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [filler]="filler"
                    [iconEnd]="icons.iconEnd"
                    [iconStart]="icons.iconStart"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    <label tuiLabel>Type a phone number</label>

                    <input
                        tuiInputPhone
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [mask]="phoneMask"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[mask]"
                tuiDocAPIItem
                type="string"
                [items]="phoneMasks"
                [(value)]="phoneMask"
            >
                Text mask. You can use # , - , brackets and spaces as a template symbol
            </tr>

            <tbody
                #textfieldDoc
                tuiDocTextfield
            >
                <tr
                    name="[filler]"
                    tuiDocAPIItem
                    type="string"
                    [(value)]="filler"
                >
                    Filler
                </tr>
                >
            </tbody>

            <tbody
                #input
                tuiDocInput
            ></tbody>

            <tbody
                #icons
                tuiDocIcons
            ></tbody>

            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
