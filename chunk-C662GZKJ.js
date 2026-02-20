import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputDateRange"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputDateRange</code>
        =
        <code>Textfield</code>
        +
        <code>CalendarRange</code>
        + \u2764\uFE0F

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            description="Currently not implemented on mobile devices"
            heading="DataList"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Validation"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
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
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="transformer"
        >
            <ng-template #transformer>
                By default component works with our internal type called
                <code>TuiDayRange</code>
                . If you prefer to use anything else, like a string you can provide custom transformer in options to
                store value in different format in form control
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Format"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
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
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="mobile"
        >
            <ng-template #mobile>
                You can enable a different picker to improve UX on mobile devices when tapping the icon.
                <strong>Open this on a mobile device or enable emulation in DevTools and refresh the page</strong>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Limits"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
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
                        <label tuiLabel>Choose range</label>
                    }

                    <input
                        tuiInputDateRange
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [maxLength]="maxLength"
                        [min]="min"
                        [minLength]="minLength"
                        [placeholder]="textfieldDoc.size === 's' ? 'Choose range' : ''"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />

                    <tui-calendar-range *tuiDropdown />
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
            <tr
                name="[minLength]"
                tuiDocAPIItem
                type="TuiDayLike | null"
                [items]="limits"
                [(value)]="minLength"
            >
                Min length of the range
            </tr>
            <tr
                name="[maxLength]"
                tuiDocAPIItem
                type="TuiDayLike | null"
                [items]="limits"
                [(value)]="maxLength"
            >
                Max length of the range
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
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
