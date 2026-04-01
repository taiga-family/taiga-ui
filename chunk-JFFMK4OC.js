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
                <div>A handler that gets a month and returns true if it is disabled.</div>

                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="maxVariants"
                [(value)]="max"
            >
                Maximal month
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="TuiMonth | null"
                [items]="minVariants"
                [(value)]="min"
            >
                Minimal month
            </tr>
            <tr
                name="[maxLength]"
                tuiDocAPIItem
                type="number"
                [(value)]="maxLength"
            >
                Maximum length
            </tr>
            <tr
                name="[minLength]"
                tuiDocAPIItem
                type="number"
                [(value)]="minLength"
            >
                Minimum length
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="TuiMonth | TuiMonthRange | null"
                [items]="valueVariants"
                [(value)]="value"
            >
                A single month or a range of months
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
            <tr
                #documentationPropertyMonthClick
                name="(monthClick)"
                tuiDocAPIItem
                type="TuiMonth"
            >
                Selected month
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
