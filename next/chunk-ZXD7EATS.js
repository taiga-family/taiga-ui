import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputSlider"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputSlider</code>
        =
        <code>Textfield</code>
        +
        <code>InputNumber</code>
        +
        <code>Slider</code>
        + \u2764\uFE0F

        <tui-doc-example
            heading="Textfield customization"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
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
                inside (and control their order and color), modify the size of the textbox and etc. Explore
                <code>Textfield</code>
                's documentation page for more customization options.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="InputNumber customization"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="inputNumberBasedDescription"
        >
            <ng-template #inputNumberBasedDescription>
                <code>InputSlider</code>
                is just a slight extension of
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.InputNumber"
                >
                    <strong>InputNumber</strong>
                </a>
                \u2013 it has completely the same customization: add
                <code>[prefix]</code>
                /
                <code>[postfix]</code>
                , configure separators specific for your locale via
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.NumberFormat"
                >
                    <strong>NumberFormat</strong>
                </a>
                directive or etc.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Slider customization"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="sliderBasedDescription"
        >
            <ng-template #sliderBasedDescription>
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Slider"
                >
                    <strong>Slider</strong>
                </a>
                automatically inherits
                <code>[min]</code>
                /
                <code>[max]</code>
                properties from
                <code>[tuiInputSlider]</code>
                (don't set them for
                <code>Slider</code>
                to avoid any possible conflicts!). However, feel free to configure
                <code>Slider</code>
                's-specific properties:
                <code>[step]</code>
                ,
                <code>[keySteps]</code>
                and
                <code>[segments]</code>
                .

                <p class="tui-space_bottom-0">
                    Also, you can use mixin-helper
                    <code>tui-slider-ticks-labels</code>
                    to arrange ticks' labels (it places them strictly below ticks).
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="KeySteps"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
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
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
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
                    #textfield
                    [content]="textfield.focused() ? '' : textfieldDoc.content"
                    [iconEnd]="icons.iconEnd"
                    [iconStart]="icons.iconStart"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    <input
                        tuiInputSlider
                        [attr.placeholder]="\`Form control value is still \${control.value}\`"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max()"
                        [min]="min()"
                        [postfix]="postfix"
                        [prefix]="prefix"
                        [quantum]="quantum"
                        [readOnly]="controlDoc.readonly"
                        [tuiDisabled]="controlDoc.disabled"
                        [tuiNumberFormat]="{
                            thousandSeparator: numberFormatDoc.thousandSeparator(),
                            decimalSeparator: numberFormatDoc.decimalSeparator(),
                            precision: numberFormatDoc.precision(),
                            decimalMode: numberFormatDoc.decimalMode(),
                            rounding: numberFormatDoc.rounding(),
                        }"
                    />
                    <input
                        tuiSlider
                        type="range"
                        [keySteps]="keySteps || undefined"
                        [segments]="segments"
                        [step]="step"
                        [style.--tui-thumb-size.px]="thumbSize"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <a
                                target="_blank"
                                tuiLink
                                [routerLink]="routes.InputNumber"
                            >
                                <strong>InputNumber</strong>
                            </a>
                        </span>
                    </td>
                </tr>

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

            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <a
                                target="_blank"
                                tuiLink
                                [routerLink]="routes.Slider"
                            >
                                <strong>TuiSlider</strong>
                            </a>
                        </span>
                    </td>
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
                    name="[segments]"
                    tuiDocAPIItem
                    type="number[] | number"
                    [items]="segmentsVariants"
                    [(value)]="segments"
                >
                    <p>
                        A number of visual segments or an array, in which every number - is ratio of slider's track
                        length in range (0; 1) where to put tick
                    </p>
                    (use
                    <code>1</code>
                    for no ticks)
                </tr>

                <tr
                    name="[keySteps]"
                    tuiDocAPIItem
                    type="TuiKeySteps | null"
                    [items]="keyStepsVariants()"
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
                [contentVariants]="textfieldContentVariants()"
                [hiddenOptions]="['cleaner', 'rows']"
            ></tbody>

            <tbody
                #icons
                tuiDocIcons
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
