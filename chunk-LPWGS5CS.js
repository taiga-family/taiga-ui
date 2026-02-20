import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="CalendarRange"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component for choosing date range in calendar</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index + 1) {
                        @case (4) {
                            Use
                            <code>tuiCalendarOptionsProvider</code>
                            to change start day of the week (Monday by default)
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-calendar-range
                [defaultViewedMonth]="defaultViewedMonth"
                [disabledItemHandler]="disabledItemHandler"
                [items]="items"
                [markerHandler]="markerHandler"
                [max]="max"
                [maxLength]="maxLength"
                [min]="min"
                [minLength]="minLength"
                (valueChange)="documentationPropertyRangeChange.emitEvent($event)"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[defaultViewedMonth]"
                tuiDocAPIItem
                type="TuiMonth"
                [items]="defaultViewedMonthVariants"
                [(value)]="defaultViewedMonth"
            >
                Default month to show
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
                name="[items]"
                tuiDocAPIItem
                type="TuiDayRangePeriod[]"
                [items]="itemsVariants"
                [(value)]="items"
            >
                Fixed intervals (shows 2 calendars with empty array)
            </tr>
            <tr
                name="[markerHandler]"
                tuiDocAPIItem
                type="TuiMarkerHandler | null"
                [items]="markerHandlerVariants"
                [(value)]="markerHandler"
            >
                A handler that gets date and returns null or a tuple with circled marker colors
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiDay | null"
                [items]="minVariants"
                [(value)]="min"
            >
                Min date
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="TuiDay | null"
                [items]="maxVariants"
                [(value)]="max"
            >
                Max date
            </tr>
            <tr
                name="[minLength]"
                tuiDocAPIItem
                type="TuiDayLike | null"
                [items]="minLengthVariants"
                [(value)]="minLength"
            >
                Minimal length of range
            </tr>
            <tr
                name="[maxLength]"
                tuiDocAPIItem
                type="TuiDayLike | null"
                [items]="maxLengthVariants"
                [(value)]="maxLength"
            >
                Maximal length of range
            </tr>
            <tr
                #documentationPropertyRangeChange
                name="(rangeChange)"
                tuiDocAPIItem
                type="TuiDayRange"
            >
                Selected date range
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
