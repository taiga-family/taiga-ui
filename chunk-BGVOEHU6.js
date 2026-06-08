import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="CalendarMonth"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            Month picker component. If you want a textfield, see
            <a
                tuiLink
                [routerLink]="routes.InputMonth"
            >
                InputMonth
            </a>
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-calendar-month
                [disabledItemHandler]="disabledItemHandler"
                [max]="max"
                [maxLength]="maxLength"
                [min]="min"
                [minLength]="minLength"
                [value]="value"
                [year]="year"
                (monthClick)="documentationPropertyMonthClick.emitEvent($event)"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[disabledItemHandler]"
                tuiDocAPIItem
                type="TuiBooleanHandler<TuiMonth>"
                [items]="disabledItemHandlerVariants"
                [(value)]="disabledItemHandler"
            >
                a handler that gets a month and returns true if it is disabled.
                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="maxVariants"
                [(value)]="max"
            >
                maximal month
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="minVariants"
                [(value)]="min"
            >
                minimal month
            </tr>
            <tr
                name="[maxLength]"
                tuiDocAPIItem
                type="number"
                [(value)]="maxLength"
            >
                maximum length
            </tr>
            <tr
                name="[minLength]"
                tuiDocAPIItem
                type="number"
                [(value)]="minLength"
            >
                minimum length
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="TuiMonth | TuiMonthRange | null"
                [items]="valueVariants"
                [(value)]="value"
            >
                a single month or a range of months
            </tr>
            <tr
                name="[(year)]"
                tuiDocAPIItem
                type="TuiYear"
                [items]="yearVariants"
                [(value)]="year"
            >
                current year
            </tr>
            <tr
                #documentationPropertyMonthClick
                name="(monthClick)"
                tuiDocAPIItem
                type="TuiMonth"
            >
                selected month
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
