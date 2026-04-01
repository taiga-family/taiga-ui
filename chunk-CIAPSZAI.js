import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Calendar"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>
            A simple calendar. If you want a textfield with date, see
            <a
                tuiLink
                [routerLink]="['/components/input-date']"
            >
                InputDate
            </a>
            and
            <a
                tuiLink
                [routerLink]="['/components/input-date-range']"
            >
                InputDateRange
            </a>
        </p>

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
                        @case (5) {
                            Use
                            <code>tuiCalendarOptionsProvider</code>
                            to change cell's data-type attribute and customize its color. (The default color for
                            Saturday and Sunday is var(--tui-text-negative))
                        }
                        @default {}
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-calendar
                [disabledItemHandler]="disabledItemHandler"
                [markerHandler]="markerHandler"
                [max]="max"
                [maxViewedMonth]="maxViewedMonth"
                [min]="min"
                [minViewedMonth]="minViewedMonth"
                [showAdjacent]="showAdjacent"
                [value]="value"
                [(hoveredItem)]="hoveredItem"
                [(month)]="month"
                (dayClick)="documentationPropertyDayClick.emitEvent($event)"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
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
                name="[showAdjacent]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="showAdjacent"
            >
                Show adjacent months days
            </tr>
            <tr
                name="[(hoveredItem)]"
                tuiDocAPIItem
                type="TuiDay | null"
                [(value)]="hoveredItem"
            >
                Hovered date
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
                name="[max]"
                tuiDocAPIItem
                type="TuiDay | null"
                [items]="maxVariants"
                [(value)]="max"
            >
                Maximal date to choose
            </tr>
            <tr
                name="[maxViewedMonth]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="maxVariants"
                [(value)]="max"
            >
                Maximal month to access
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiDay | null"
                [items]="minVariants"
                [(value)]="min"
            >
                Minimum date to choose
            </tr>
            <tr
                name="[minViewedMonth]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="minVariants"
                [(value)]="min"
            >
                Minimum month to access
            </tr>
            <tr
                name="[(month)]"
                tuiDocAPIItem
                type="TuiMonth"
                [(value)]="month"
            >
                Current month
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="TuiDay | TuiDayRange | null"
                [items]="valueVariants"
                [(value)]="value"
            >
                Selected day or range
            </tr>
            <tr
                #documentationPropertyDayClick
                name="(dayClick)"
                tuiDocAPIItem
                type="TuiDay"
            >
                Date click
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
