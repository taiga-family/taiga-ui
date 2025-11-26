import"./chunk-42JZD6NG.js";var o=`<tui-doc-page
    header="InputNumber"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <strong>InputNumber</strong>
        is a form field to provide numerical input.

        <tui-doc-example
            id="form-control-value"
            heading="Form control value"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="formControlDescription"
        >
            <ng-template #formControlDescription>
                Form control value is
                <code>number</code>
                or
                <code>null</code>
                when empty
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="texfield-based"
            heading="Textfield-based"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="textfieldBasedDescription"
        >
            <ng-template #textfieldBasedDescription>
                Use all powers of
                <code>Textfield</code>
                : put any number of
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Icon"
                >
                    <strong>Icons</strong>
                </a>
                and
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Tooltip"
                >
                    <strong>Tooltips</strong>
                </a>
                inside (and control their order and color), modify the size of the textbox and etc. Explore its
                documentation page for more customization options.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="localization"
            heading="Localization"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="numberFormatDescription"
        >
            <ng-template #numberFormatDescription>
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.NumberFormat"
                >
                    <strong>TuiNumberFormat</strong>
                </a>
                allows to customize separators specific for your locale.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="affixes"
            heading="Affixes"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="affixesDescription"
        >
            <ng-template #affixesDescription>
                Use
                <code>prefix</code>
                /
                <code>postfix</code>
                parameters to set non-removable text before\xA0/\xA0after the number.
                <br />
                To get currency symbol use
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Currency"
                >
                    <strong>Currency</strong>
                </a>
                pipe.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="step"
            heading="Step"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
            [description]="stepDescription"
        >
            <ng-template #stepDescription>
                Positive value of
                <code>step</code>
                property enables sided button to increase\xA0/\xA0decrease the number by the specified step's value. Moreover,
                keyboard\xA0keys
                <code>ArrowUp</code>
                /
                <code>ArrowDown</code>
                will also work in the same way.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="custom-step-buttons"
            heading="Custom step buttons"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />

        <tui-doc-example
            id="fluid-typography"
            heading="Fluid typography"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="fluidTypographyDescription"
        >
            <ng-template #fluidTypographyDescription>
                Use
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.FluidTypography"
                >
                    <strong>FluidTypography</strong>
                </a>
                directive to adjusts font size for the textfield value to fit in the textfield\xA0box.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="value-transformer"
            heading="Value transformer"
            [component]="8 | tuiComponent"
            [content]="8 | tuiExample"
            [description]="transformerDescription"
        >
            <ng-template #transformerDescription>
                <code>TuiValueTransformer</code>
                is a great opportunity to override default form control's value format without breaking component's
                internal logic.

                <p>
                    This example demonstrates how to use
                    <code>NaN</code>
                    -value for empty textfield instead of default
                    <code>null</code>
                    -value to keep type strictly "number" .
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            id="quantum"
            heading="Quantum"
            [component]="9 | tuiComponent"
            [content]="9 | tuiExample"
            [description]="quantumDescription"
        >
            <ng-template #quantumDescription>
                Property
                <code>[quantum]</code>
                allows to set minimum indivisible value. Form control value never contains a number that is not
                divisible by value of this property. Even if user enters any invalid number, it will be rounded to the
                nearest valid one on
                <code>blur</code>
                event.

                <p class="tui-space_bottom-0">
                    In this example, form control value can only contain
                    <code>0</code>
                    ,
                    <code>0.05</code>
                    ,
                    <code>0.1</code>
                    ,
                    <code>0.15</code>
                    ...
                    <code>0.9</code>
                    ,
                    <code>0.95</code>
                    ,
                    <code>1</code>
                    .
                </p>
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [iconEnd]="icons.iconEnd"
                    [iconStart]="icons.iconStart"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    @if (textfieldDoc.size !== 's') {
                        <label tuiLabel>Enter a number</label>
                    }

                    <input
                        tuiInputNumber
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [placeholder]="textfieldDoc.size === 's' ? 'Enter a number' : ''"
                        [postfix]="postfix"
                        [prefix]="prefix"
                        [quantum]="quantum"
                        [readOnly]="controlDoc.readonly"
                        [step]="step"
                        [tuiDisabled]="controlDoc.disabled"
                        [tuiNumberFormat]="{
                            thousandSeparator: numberFormatDoc.thousandSeparator(),
                            decimalSeparator: numberFormatDoc.decimalSeparator(),
                            precision: numberFormatDoc.precision(),
                            decimalMode: numberFormatDoc.decimalMode(),
                            rounding: numberFormatDoc.rounding(),
                        }"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody>
                <tr
                    name="[min]"
                    tuiDocAPIItem
                    type="number | null"
                    [items]="minVariants"
                    [(value)]="min"
                >
                    The
                    <strong>lowest</strong>
                    value in the range of permitted values
                </tr>

                <tr
                    name="[max]"
                    tuiDocAPIItem
                    type="number | null"
                    [items]="maxVariants"
                    [(value)]="max"
                >
                    The
                    <strong>greatest</strong>
                    value in the range of permitted values
                </tr>

                <tr
                    name="[step]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="step"
                >
                    Step to increase/decrease value with keyboard and buttons on the side
                </tr>

                <tr
                    name="[prefix]"
                    tuiDocAPIItem
                    type="string"
                    [(value)]="prefix"
                >
                    Uneditable text
                    <strong>before</strong>
                    number
                </tr>

                <tr
                    name="[postfix]"
                    tuiDocAPIItem
                    type="string"
                    [(value)]="postfix"
                >
                    Uneditable text
                    <strong>after</strong>
                    number
                </tr>

                <tr
                    name="[quantum]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="quantum"
                >
                    Minimum indivisible value

                    <p>
                        Use
                        <code>0</code>
                        (default value) to disable this feature and allow any value (that satisfies
                        <code>min</code>
                        /
                        <code>max</code>
                        /
                        <code>precision</code>
                        constraints)
                    </p>
                </tr>
            </tbody>

            <tbody
                #numberFormatDoc
                tuiDocNumberFormat
            ></tbody>

            <tbody
                #textfieldDoc
                tuiDocTextfield
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

    <tui-setup *pageTab />
</tui-doc-page>
`;export{o as default};
