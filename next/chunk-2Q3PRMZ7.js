import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputMonth"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputMonth</code>
        =
        <code>Textfield</code>
        +
        <code>CalendarMonth</code>
        + \u2764\uFE0F

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Form control value"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="formControlDescription"
        >
            <ng-template #formControlDescription>
                Form control value is
                <a
                    href="https://github.com/search?q=%2Fexport+class+TuiMonth%28%3C%7C%5Cs%29%2F+language%3ATypeScript+repo%3Ataiga-family%2Ftaiga-ui+&type=code"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    TuiMonth
                </a>
                or
                <code>null</code>
                when empty
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Textfield customization"
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
                inside (and control their order and color), modify the size of the textbox and etc. Explore
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Input"
                >
                    <strong>Input</strong>
                </a>
                documentation page for more customization options.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Dropdown customization"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Selected value customization"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
            [description]="monthFormatterDescription"
        >
            <ng-template #monthFormatterDescription>
                Use
                <code>[content]</code>
                of
                <code>Textfield</code>
                to customize view of selected value
                <strong>inside textfield</strong>
                .

                <p>
                    To switch language inside calendar \u2013 read documentation page
                    <a
                        tuiLink
                        [routerLink]="routes.I18N"
                    >
                        "Internationalization"
                    </a>
                    .
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Native picker"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="nativePickerDescription"
        >
            <ng-template #nativePickerDescription>
                <p class="tui-space_top-0">
                    Add
                    <code>type="month"</code>
                    for
                    <code>&lt;input\xA0/&gt;</code>
                    to enable built-in browser picker for mobile devices.
                </p>

                <div
                    appearance="warning"
                    tuiNotification
                    [style.margin-block-start.rem]="1"
                >
                    <strong>Browser support limitations!</strong>

                    <div>
                        Native picker does not have
                        <code>[disabledItemHandler]</code>
                        feature.
                    </div>
                    <div>
                        Also, we discourage to use
                        <code>[min]</code>
                        /
                        <code>[max]</code>
                        properties with enabled native picker \u2013 it has rather limited browser support.
                    </div>
                </div>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Range mode"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="rangeModeDescription"
        >
            <ng-template #rangeModeDescription>
                Use
                <code>tuiInputMonthRange</code>
                to enable possibility to select range of months.

                <p>
                    All features described above are applicable for it too. Moreover, it provides two additional
                    features:
                    <code>minLength</code>
                    /
                    <code>maxLength</code>
                    \u2013 minimal / maximal length of the selected range.
                </p>
                <div
                    tuiNotification
                    [style.margin-block-start.rem]="1"
                >
                    Form control value is
                    <a
                        href="https://github.com/search?q=%2Fexport+class+TuiMonthRange%28%3C%7C%5Cs%29%2F+language%3ATypeScript+repo%3Ataiga-family%2Ftaiga-ui+&type=code"
                        rel="noreferrer"
                        target="_blank"
                        tuiLink
                    >
                        TuiMonthRange
                    </a>
                    or
                    <code>null</code>
                    (for uncompleted range or empty textfield) types.
                </div>
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    <input
                        placeholder="Month"
                        tuiInputMonth
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />

                    <tui-calendar-month
                        *tuiDropdown
                        [disabledItemHandler]="disabledItemHandler"
                        [max]="max"
                        [min]="min"
                        [(year)]="year"
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
                                [routerLink]="routes.CalendarMonth"
                            >
                                <strong>CalendarMonth</strong>
                            </a>
                        </span>
                    </td>
                </tr>

                <tr
                    name="[min]"
                    tuiDocAPIItem
                    type="TuiMonth | null"
                    [items]="monthVariants"
                    [(value)]="min"
                >
                    The lowest value in the range of permitted dates
                </tr>

                <tr
                    name="[max]"
                    tuiDocAPIItem
                    type="TuiMonth | null"
                    [items]="monthVariants"
                    [(value)]="max"
                >
                    The greatest value in the range of permitted dates
                </tr>

                <tr
                    name="[disabledItemHandler]"
                    tuiDocAPIItem
                    type="TuiBooleanHandler<TuiMonth>"
                    [items]="disabledItemHandlerVariants"
                    [(value)]="disabledItemHandler"
                >
                    <div>A handler that gets a date and returns true if it is disabled.</div>

                    <strong>Must be a pure function!</strong>
                </tr>

                <tr
                    name="[(year)]"
                    tuiDocAPIItem
                    type="TuiYear"
                    [items]="yearVariants"
                    [(value)]="year"
                >
                    Current year
                </tr>
            </tbody>

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
