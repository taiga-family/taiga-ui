import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputDate"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputDate</code>
        =
        <code>Textfield</code>
        +
        <code>Calendar</code>
        + \u2764\uFE0F

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Calendar customization"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="calendarCustomizationDescription"
        >
            <ng-template #calendarCustomizationDescription>
                Feel free to configure
                <code>Calendar</code>
                specific properties: disable adjacent months days, adds circled colored markers to some days, control
                initial opened month and etc. Explore
                <a
                    target="_blank"
                    tuiLink
                    [routerLink]="routes.Calendar"
                >
                    <strong>Calendar</strong>
                </a>
                documentation page for more customization options.

                <div
                    tuiNotification
                    class="tui-space_top-2"
                >
                    <strong>
                        Don't set
                        <code>[min]</code>
                        /
                        <code>[max]</code>
                        and
                        <code>[disabledItemHandler]</code>
                        properties for
                        <code>&lt;tui-calendar\xA0/&gt;</code>
                        !
                    </strong>

                    <div>
                        <code>Calendar</code>
                        automatically inherits these properties from
                        <code>&lt;input tuiInputDate\xA0/&gt;</code>
                        and
                        <code>&lt;tui-textfield\xA0/&gt;</code>
                        .
                    </div>
                </div>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            description="You can customize dropdown content and change how particular dates display"
            heading="Custom dropdown"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Validation"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="validation"
        >
            <ng-template #validation>
                If a field is optional, but unfinished field should be marked as invalid, use
                <code>tuiUnfinishedValidator</code>
                directive
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Value transformer"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
            [description]="transformer"
        >
            <ng-template #transformer>
                By default component works with our internal type called
                <code>TuiDay</code>
                . If you prefer to use anything else, like a string or native
                <code>Date</code>
                you can provide custom transformer in options to store value in different format in form control
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Format"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="format"
        >
            <ng-template #format>
                Formatting relies on
                <code>TUI_DATE_FORMAT</code>
                which you can override using
                <code>tuiDateFormatProvider</code>
                helper
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Mobile"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="mobile"
        >
            <ng-template #mobile>
                You can use several different approaches to optimize UX on mobile devices when tapping the icon.
                <strong>Open this on a mobile device or enable emulation in DevTools and refresh the page</strong>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Limits"
            [component]="8 | tuiComponent"
            [content]="8 | tuiExample"
            [description]="limits"
        >
            <ng-template #limits>
                Individual disabled dates still can be typed in manually or picked on mobile in native picker but
                control will be automatically marked as invalid
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            description="Native mobile pickers have limited browser support for native datalist"
            heading="Datalist"
            [component]="9 | tuiComponent"
            [content]="9 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [disabledItemHandler]="itemsHandlers.disabledItemHandler()"
                    [iconStart]="icons.iconStart"
                    [tuiDropdownAlign]="dropdown.align"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                    [(open)]="dropdown.open"
                >
                    @if (textfieldDoc.size !== 's') {
                        <label tuiLabel>Choose date</label>
                    }

                    <input
                        tuiInputDate
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [placeholder]="textfieldDoc.size === 's' ? 'Choose date' : ''"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />

                    <tui-calendar *tuiDropdown />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiDay"
                [items]="dates"
                [(value)]="min"
            >
                Min date
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="TuiDay"
                [items]="dates"
                [(value)]="max"
            >
                Max date
            </tr>
            <tbody
                #itemsHandlers
                tuiDocItemsHandlers
                [disabledItemHandler]="handler"
                [hiddenOptions]="['stringify', 'identityMatcher']"
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
                [hiddenOptions]="['iconEnd']"
            ></tbody>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="[
                    'tuiDropdownEnabled',
                    'limitWidth',
                    'appearance',
                    'maxHeight',
                    'minHeight',
                    'offset',
                    'direction',
                    'dropdownSided',
                    'dropdownSidedOffset',
                ]"
            ></tbody>
            <tbody
                #controlDoc
                tuiDocControl
                [hiddenOptions]="[]"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
