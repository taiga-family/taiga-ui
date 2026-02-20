import"./chunk-HU6DUUP4.js";var e=`<button
    appearance="outline"
    iconStart="@tui.ellipsis-vertical"
    size="m"
    tuiButton
    tuiDropdownLimitWidth="fixed"
    type="button"
    class="example"
    [tuiDropdown]="content"
    [(tuiDropdownOpen)]="dropdownOpen"
>
    List of components
</button>

<ng-template #content>
    <tui-data-list tuiDataListDropdownManager>
        <button
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownDirection="top"
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="money"
            [tuiDropdownManual]="true"
        >
            \u{1F4B0} Money:
        </button>
        <button
            automation-id="tui-data-list-calendar-option"
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownLimitWidth="auto"
            tuiDropdownManual
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="calendar"
        >
            \u{1F4C5} Calendar: {{ dateValue }}
        </button>
        <button
            automation-id="tui-data-list-email-option"
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownManual
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="input"
        >
            \u{1F4E7} Email: {{ emailValue }}
        </button>
        <button
            automation-id="tui-data-list-range-option"
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownDirection="top"
            tuiDropdownLimitWidth="auto"
            tuiDropdownManual
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="range"
        >
            \u231B Range: {{ rangeValue }}
        </button>
    </tui-data-list>

    <ng-template #money>
        <tui-textfield automation-id="tui-data-money-input">
            <input
                name="moneyValue"
                tuiInput
                [(ngModel)]="moneyValue"
            />
            <label tuiLabel>RUB</label>
        </tui-textfield>

        <tui-data-list tuiDataListDropdownManager>
            <button
                iconEnd="@tui.chevron-right"
                tuiDropdownAlign="end"
                tuiDropdownDirection="bottom"
                tuiDropdownLimitWidth="auto"
                tuiDropdownSided
                tuiOption
                type="button"
                [tuiDropdown]="currency"
                [tuiDropdownManual]="true"
            >
                Exchange Rates:
            </button>
        </tui-data-list>
    </ng-template>

    <ng-template #calendar>
        <tui-calendar
            [value]="dateValue"
            (dayClick)="onDayClick($event)"
            (mousedown.zoneless.prevent)="(0)"
        />
    </ng-template>

    <ng-template #input>
        <tui-textfield automation-id="tui-data-list-email-field">
            <input
                name="emailValue"
                tuiInput
                [(ngModel)]="emailValue"
            />
            <label tuiLabel>Email</label>
        </tui-textfield>
    </ng-template>

    <ng-template #currency>
        <div class="example">
            <div
                tuiGroup
                class="group"
            >
                <tui-textfield>
                    <input
                        tuiInput
                        [(ngModel)]="dollar"
                    />
                    <label tuiLabel>1 Rub = (X) Dollars</label>
                </tui-textfield>

                <tui-textfield>
                    <input
                        tuiInput
                        [(ngModel)]="euro"
                    />
                    <label tuiLabel>1 Rub = (Y) Euros</label>
                </tui-textfield>
            </div>

            <ul class="exchange tui-list tui-list_large">
                <li class="tui-list__item">
                    <span>{{ moneyValue / dollar | tuiAmount: 'USD' }}</span>
                </li>
                <li class="tui-list__item">
                    <span>{{ moneyValue / euro | tuiAmount: 'EUR' }}</span>
                </li>
            </ul>
        </div>
    </ng-template>

    <ng-template #range>
        <tui-textfield
            class="form"
            [tuiTextfieldCleaner]="false"
        >
            <label tuiLabel>Range</label>
            <input
                tuiInputDateRange
                [(ngModel)]="rangeValue"
            />
            <tui-calendar-range *tuiDropdown />
        </tui-textfield>
    </ng-template>
</ng-template>

<div class="example">
    <p>Email: {{ emailValue }}</p>
    <p>Chosen date: {{ dateValue }}</p>
    <p>Range date: {{ rangeValue }}</p>
    <p>Dol - {{ dollar }}, Eur - {{ euro }}</p>
</div>
`;export{e as default};
