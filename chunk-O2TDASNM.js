import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputDateMulti"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputDateMulti</code>
        uses specifically modified
        <a
            tuiLink
            [routerLink]="routes.InputChip"
        >
            InputChip
        </a>
        to represent array of dates.

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Chip"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="chip"
        />
        <ng-template #chip>
            <span>
                Use
                <code>*tuiItem</code>
                directive to provide custom representation. You can use
                <code>tui-input-chip</code>
                out of the box or implement your own. The context is
                <code>TuiContext&lt;&#123; item: T, index: number &#125;&gt;</code>
            </span>
        </ng-template>

        <tui-doc-example
            heading="Disabled items"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Format"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="format"
        />
        <ng-template #format>
            Formatting relies on
            <code>TUI_DATE_FORMAT</code>
            which you can override using
            <code>tuiDateFormatProvider</code>
            helper
        </ng-template>

        <tui-doc-example
            heading="customization"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    multi
                    [disabledItemHandler]="itemsHandlers.disabledItemHandler()"
                    [iconStart]="icons.iconStart"
                    [tuiDropdownAlign]="dropdown.align"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                    [(open)]="dropdown.open"
                >
                    <input
                        placeholder="Choose date"
                        tuiInputDateMulti
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />

                    <tui-input-chip *tuiItem />
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
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
