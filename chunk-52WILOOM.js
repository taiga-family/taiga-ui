import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="MobileCalendar"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <p>
            A calendar for mobile devices. It is used in date picker controls on mobile devices if
            <code>tuiMobileCalendar</code>
            directive is applied.
        </p>
        <p>
            You can use
            <code>TUI_CALENDAR_DATE_STREAM</code>
            token to set value from outside (see samples)
        </p>

        <tui-doc-example
            heading="Custom dropdown"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Range"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Localization"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="localizationDescription"
        >
            <ng-template #localizationDescription>
                Use
                <code>tuiCalendarOptionsProvider</code>
                to change start day of the week (Monday by default)
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Custom dropdown (range)"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Custom dropdown (multi)"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />

        <tui-doc-example
            heading="Without header"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-mobile-calendar
                class="calendar"
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [min]="min"
                [multi]="multi"
                [single]="single"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[(value)]"
                tuiDocAPIItem
                type="TuiDay | TuiDayRange | readonly TuiDay[] | null"
            >
                Value
            </tr>
            <tr
                name="[disabledItemHandler]"
                tuiDocAPIItem
                type="TuiBooleanHandler<TuiDay>"
                [items]="disabledItemHandlerVariants"
                [(value)]="disabledItemHandler"
            >
                <div>A handler that gets a date and returns true if it is disabled.</div>
                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="TuiDay"
                [items]="maxVariants"
                [(value)]="max"
            >
                Max date
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiDay"
                [items]="minVariants"
                [(value)]="min"
            >
                Min date
            </tr>
            <tr
                name="[multi]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="multi"
            >
                Array of single dates
            </tr>
            <tr
                name="(cancel)"
                tuiDocAPIItem
                type="void"
            >
                Output when user clicks Cancel
            </tr>
            <tr
                name="(confirm)"
                tuiDocAPIItem
                type="TuiDayRange | TuiDay"
            >
                Output when user clicks Confirm (range or single day)
            </tr>
            <tr
                deprecated
                name="[single]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="single"
            >
                Single date or a range
                <p>
                    Use
                    <code>tuiCalendarSheetOptionsProvider(&#123;rangeMode: boolean&#125;)</code>
                    instead
                </p>
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
