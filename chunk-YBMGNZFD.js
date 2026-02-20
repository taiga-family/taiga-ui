import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputRange"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputRange</code>
        =
        <code>Textfield</code>
        +
        <code>InputNumber</code>
        \xD7 2 +
        <code>Range</code>
        + \u2764\uFE0F
        <sup style="font-size: xx-small">2</sup>

        <tui-doc-example
            heading="Override number format"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
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
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
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
            heading="Visual segments + labels for ticks"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="segmentsDescription"
        >
            <ng-template #segmentsDescription>
                Use mixin
                <code>tui-slider-ticks-labels</code>
                to arrange ticks' labels (it places them strictly below ticks).
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Custom value content"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="KeySteps"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
            [description]="keyStepsDescription"
        >
            <ng-template #keyStepsDescription>
                <strong>Key steps</strong>
                \u2013 anchor points of non-uniform format between control's value and slider's position.

                <p class="tui-space_bottom-0">
                    When
                    <code>[keySteps]</code>
                    property is enabled,
                    <code>[step]</code>
                    means percentage of total track length.
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Quantum"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
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
            heading="Using negative values with hidden minus sign"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-input-range
                    [content]="content"
                    [formControl]="control"
                    [invalid]="controlDoc.invalid"
                    [keySteps]="keySteps || undefined"
                    [max]="max"
                    [min]="min"
                    [postfix]="postfix"
                    [prefix]="prefix"
                    [quantum]="quantum"
                    [readOnly]="controlDoc.readonly"
                    [segments]="segments"
                    [step]="step"
                    [style.--tui-thumb-size.px]="thumbSize"
                    [tuiDisabled]="controlDoc.disabled"
                    [tuiNumberFormat]="{
                        decimalMode: numberFormatDoc.decimalMode(),
                        rounding: numberFormatDoc.rounding(),
                        thousandSeparator: numberFormatDoc.thousandSeparator(),
                        decimalSeparator: numberFormatDoc.decimalSeparator(),
                        precision: numberFormatDoc.precision(),
                    }"
                    [tuiTextfieldSize]="textfieldDoc.size"
                />
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tbody>
                <tr
                    name="[min]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="min"
                >
                    The
                    <strong>lowest</strong>
                    value in the range of permitted values
                </tr>

                <tr
                    name="[max]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="max"
                >
                    The
                    <strong>greatest</strong>
                    value in the range of permitted values
                </tr>

                <tr
                    name="[prefix]"
                    tuiDocAPIItem
                    type="readonly [string, string] | null"
                    [items]="suffixVariants"
                    [(value)]="prefix"
                >
                    Uneditable text
                    <strong>before</strong>
                    number
                </tr>

                <tr
                    name="[postfix]"
                    tuiDocAPIItem
                    type="readonly [string, string] | null"
                    [items]="suffixVariants"
                    [(value)]="postfix"
                >
                    Uneditable text
                    <strong>after</strong>
                    number
                </tr>

                <tr
                    name="[content]"
                    tuiDocAPIItem
                    type="[PolymorpheusContent, PolymorpheusContent]"
                    [items]="contentVariants"
                    [(value)]="content"
                >
                    A template for custom view of the selected value.
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

            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <a
                                target="_blank"
                                tuiLink
                                [routerLink]="routes.Range"
                            >
                                <strong>TuiRange</strong>
                            </a>
                        </span>
                    </td>
                </tr>

                <tr
                    name="[segments]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="segments"
                >
                    A number of visual segments (use
                    <code>1</code>
                    for no ticks)
                </tr>

                <tr
                    name="[step]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="step"
                >
                    Granularity of each discrete slider step and value of increase/decrease on keyboard arrows

                    <p>
                        For non-linear slider (
                        <code>[keySteps]</code>
                        property is enabled)
                        <code>[step]</code>
                        means percentage of total track length.
                    </p>
                </tr>

                <tr
                    name="[keySteps]"
                    tuiDocAPIItem
                    type="TuiKeySteps"
                    [items]="keyStepsVariants"
                    [(value)]="keySteps"
                >
                    Anchor points of non-uniform format between value and position
                </tr>
            </tbody>

            <tbody
                #numberFormatDoc
                tuiDocNumberFormat
            ></tbody>

            <tbody
                #textfieldDoc
                tuiDocTextfield
                [hiddenOptions]="['cleaner', 'rows', 'content']"
            ></tbody>

            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>

            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>CSS customization</strong>
                        </span>
                    </td>
                </tr>

                <tr
                    name="[style.--tui-thumb-size.px]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="thumbSize"
                >
                    Size of thumb
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
