import"./chunk-LQ6M4NCU.js";var t=`<tui-doc-page
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
                    [invalid]="controlDoc.invalid"
                    [tuiAppearanceFocus]="appearance.focus"
                    [tuiAppearanceState]="appearance.state"
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
                        [format]="format"
                        [formControl]="control"
                        [placeholder]="textfieldDoc.size === 's' ? 'Choose color' : ''"
                        [readonly]="controlDoc.readonly"
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
                alignment of the color picker
            </tr>
            <tr
                name="[format]"
                tuiDocAPIItem
                type="'hex' | 'hexa'"
                [items]="formats"
                [(value)]="format"
            >
                color format
            </tr>
            <tbody
                #textfieldDoc
                tuiDocTextfield
            ></tbody>
            <tbody
                #appearance
                tuiDocAppearance
                [hiddenOptions]="['appearance', 'mode']"
            ></tbody>
            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
