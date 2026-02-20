import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputNumber"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <strong>InputNumber</strong>
        is a form field to provide numerical input.

        <tui-doc-example
            heading="Number as form control value"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="numberFormControlDescription"
        >
            <ng-template #numberFormControlDescription>
                By default, form control value is
                <code>number</code>
                or
                <code>null</code>
                when empty
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="BigInt as form control value"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="bigintFormControlDescription"
        >
            <ng-template #bigintFormControlDescription>
                Form control value type can be changed to
                <code>bigint</code>
                .

                <p>
                    Just put
                    <code>bigint</code>
                    attribute and set new values for
                    <code>min</code>
                    ,
                    <code>max</code>
                    and
                    <code>precision</code>
                    properties.
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Textfield-based"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
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
            heading="Localization"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
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
            heading="Affixes"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
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
            heading="Step"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="stepDescription"
        >
            <ng-template #stepDescription>
                A positive value of the
                <code>step</code>
                property enables side buttons to increase\xA0/\xA0decrease the number by the specified step value.
                Additionally, the
                <code>ArrowUp</code>
                /
                <code>ArrowDown</code>
                keyboard keys provide the same functionality.

                <div
                    appearance="warning"
                    tuiNotification
                    class="tui-space_top-4"
                >
                    Keep in mind that in JavaScript, the standard
                    <code>number</code>
                    type is based on
                    <strong>double-precision floating-point numbers!</strong>

                    <p class="tui-space_bottom-0">
                        For extremely small
                        <code>step</code>
                        value with
                        <strong>possible loss of precision on step</strong>
                        (e.g.
                        <code>0.009 + 0.001</code>
                        returns
                        <code>0.009999999999999998</code>
                        ), you can also use
                        <code>[tuiNumberFormat]="&#123; rounding: 'round' &#125;"</code>
                        or another appropriate rounding strategy.
                    </p>
                </div>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Custom step buttons"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
        />

        <tui-doc-example
            heading="Fluid typography"
            [component]="8 | tuiComponent"
            [content]="8 | tuiExample"
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
            heading="Value transformer"
            [component]="9 | tuiComponent"
            [content]="9 | tuiExample"
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
            heading="Quantum"
            [component]="10 | tuiComponent"
            [content]="10 | tuiExample"
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

        <tui-doc-example
            heading="Large integer and large decimal parts"
            [component]="11 | tuiComponent"
            [content]="11 | tuiExample: 'html,ts' : {'transformer.ts': bigIntWithDecimalTransformer}"
            [description]="largeIntDecimalPartsDescription"
        >
            <ng-template #largeIntDecimalPartsDescription>
                JavaScript\u2019s built\u2011in
                <code>number</code>
                type loses precision when a value contains too many digits in either the integer part, the decimal part,
                or both.

                <p>
                    The built\u2011in
                    <code>bigint</code>
                    type avoids this issue but supports only integers.
                </p>

                <p>
                    If you need to preserve all extremely large digits of both parts, you can override the built\u2011in
                    <code>TuiValueTransformer</code>
                    and store the number as an
                    <code>&#123;significand: bigint; exp: number&#125;</code>
                    instead.
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
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [placeholder]="textfieldDoc.size === 's' ? 'Enter a number' : ''"
                        [postfix]="postfix"
                        [prefix]="prefix"
                        [quantum]="quantum"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
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
                    type="number | bigint | null"
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
                    type="number | bigint | null"
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
                    type="number | bigint"
                    [tuiNumberFormat]="{precision: 3}"
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
                    type="number | bigint"
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
