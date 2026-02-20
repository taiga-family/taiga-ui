import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputTime"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputTime</code>
        allows users to enter and edit time values using a keyboard, dropdown or even browser native picker.

        <tui-doc-example
            heading="Mode"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="modeDescription"
        >
            <ng-template #modeDescription>
                <code>InputTime</code>
                supports all possible time segments: hours, minutes, seconds, and even milliseconds. Property
                <code>mode</code>
                allows to choose specific combination of the segments. Explore
                <a
                    href="https://github.com/taiga-family/maskito/blob/main/projects/kit/src/lib/types/time-mode.ts"
                    target="_blank"
                    tuiLink
                >
                    <strong>MaskitoTimeMode</strong>
                </a>
                type to see all available modes.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="12-hour format with AM/PM"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="amPmDescription"
        >
            <ng-template #amPmDescription>
                Any
                <code>mode</code>
                ending with
                <code>AA</code>
                is 12-hour time format with meridiem part.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Form control validation"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="formControlDescription"
        >
            <ng-template #formControlDescription>
                <div>
                    Form control value is
                    <a
                        href="https://github.com/search?q=%2Fexport+class+TuiTime%28%3C%7C%5Cs%29%2F+language%3ATypeScript+repo%3Ataiga-family%2Ftaiga-ui+&type=code"
                        rel="noreferrer"
                        target="_blank"
                        tuiLink
                    >
                        TuiTime
                    </a>
                    or
                    <code>null</code>
                    when empty
                </div>

                <p>
                    If a field is optional, but unfinished field should be marked as invalid, use
                    <code>tuiUnfinishedValidator</code>
                    directive
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Options"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Textfield customization"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
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
            heading="Strict mode"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="strictDescription"
        >
            <ng-template #strictDescription>
                Property
                <code>accept</code>
                allows to limit the set of allowed values. It is useful when you want to restrict user input to a
                specific set of time periods, for example, to allow only working hours with equally distant time
                intervals.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Dropdown with DataList"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="itemsHandlersDescription"
        >
            <ng-template #itemsHandlersDescription>
                Use
                <code>tuiItemsHandlersProvider</code>
                to override the default behavior of all
                <code>InputTime</code>
                -s below the current DI scope.

                <p>
                    To customize a specific
                    <code>InputTime</code>
                    , use the input properties
                    <code>[identityMatcher]</code>
                    /
                    <code>[stringify]</code>
                    /
                    <code>disabledItemHandler</code>
                    (inherited from
                    <code>Textfield</code>
                    ).
                </p>

                Explore
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Dropdown"
                >
                    <strong>Dropdown</strong>
                </a>
                and
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.DataList"
                >
                    <strong>DataList</strong>
                </a>
                documentation pages for more customization options.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Transformer"
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
                    <code>string</code>
                    -type instead of default
                    <code>TuiTime</code>
                    .
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Native picker"
            [component]="9 | tuiComponent"
            [content]="9 | tuiExample"
            [description]="nativePickerDescription"
        >
            <ng-template #nativePickerDescription>
                <p class="tui-space_top-0">
                    Add
                    <code>type="time"</code>
                    for
                    <code>&lt;input\xA0/&gt;</code>
                    to enable built-in browser picker
                    <strong>for\xA0mobile\xA0devices</strong>
                    .
                </p>

                <p>
                    Touch clock icon to show the picker. Touch other parts of the textfield to show mobile device
                    keyboard.
                </p>

                <div
                    appearance="warning"
                    tuiNotification
                >
                    <strong>Browser support limitations!</strong>

                    <p class="tui-space_bottom-0">
                        IOS devices supports only
                        <code>HH:MM</code>
                        mode.
                    </p>

                    <p class="tui-space_top-0 tui-space_bottom-0">Native picker supports only 24-hour format.</p>
                </div>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Native picker with suggestions"
            [component]="10 | tuiComponent"
            [content]="10 | tuiExample"
            [description]="nativePickerDatalistDescription"
        >
            <ng-template #nativePickerDatalistDescription>
                <p class="tui-space_top-0">
                    Link your
                    <code>&lt;input\xA0type="time"\xA0/&gt;</code>
                    to a
                    <code>&lt;datalist\xA0/&gt;</code>
                    by
                    <code>list</code>
                    attribute to show a list of suggestions inside native picker.
                </p>

                <p>
                    The values provided are suggestions, not requirements: users can select from this predefined list or
                    provide a different value.
                </p>

                <div
                    appearance="warning"
                    tuiNotification
                >
                    <strong>Browser support limitations!</strong>

                    <p class="tui-space_bottom-0">
                        IOS devices does not support
                        <code>&lt;datalist\xA0/&gt;</code>
                        for time picker.
                    </p>
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
                        placeholder="Pick a time"
                        tuiInputTime
                        [accept]="accept"
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [mode]="mode"
                        [postfix]="postfix"
                        [prefix]="prefix"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[mode]"
                tuiDocAPIItem
                type="MaskitoTimeMode"
                [items]="modeVariants"
                [(value)]="mode"
            >
                Time format mode
            </tr>

            <tr
                name="[prefix]"
                tuiDocAPIItem
                type="string"
                [(value)]="prefix"
            >
                Uneditable text
                <strong>before</strong>
                time
            </tr>

            <tr
                name="[postfix]"
                tuiDocAPIItem
                type="string"
                [(value)]="postfix"
            >
                Uneditable text
                <strong>after</strong>
                time
            </tr>

            <tr
                name="[accept]"
                tuiDocAPIItem
                type="ReadonlyArray<TuiTime>"
                [items]="acceptVariants"
                [(value)]="accept"
            >
                Limited array of allowed
                <code>TuiTime</code>
                values to choose
            </tr>

            <tbody
                #textfieldDoc
                tuiDocTextfield
                [hiddenOptions]="['content', 'rows']"
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
