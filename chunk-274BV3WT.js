import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputColor"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputColor</code>
        =
        <code>Textfield</code>
        +
        <code>type="color"</code>
        +
        <code>
            <a
                href="https://maskito.dev"
                rel="noopener noreferrer"
                target="_blank"
                tuiLink
            >
                Maskito
            </a>
        </code>
        + \u2764\uFE0F

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    @if (textfieldDoc.size !== 's') {
                        <label tuiLabel>Choose color</label>
                    }

                    <input
                        list="colors"
                        tuiInputColor
                        [align]="align"
                        [focused]="input.focused"
                        [format]="format"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [placeholder]="textfieldDoc.size === 's' ? 'Choose color' : ''"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />
                    <datalist id="colors">
                        <option value="#800000"></option>
                        <option value="#8B0000"></option>
                        <option value="#A52A2A"></option>
                        <option value="#DC143C"></option>
                    </datalist>
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[align]"
                tuiDocAPIItem
                type="TuiHorizontalDirection"
                [items]="aligns"
                [(value)]="align"
            >
                Alignment of the color picker
            </tr>
            <tr
                name="[format]"
                tuiDocAPIItem
                type="'hex' | 'hexa'"
                [items]="formats"
                [(value)]="format"
            >
                Color format
            </tr>
            <tbody
                #textfieldDoc
                tuiDocTextfield
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
