import"./chunk-HU6DUUP4.js";var i=`<button
    appearance="flat"
    iconStart="@tui.ellipsis-vertical"
    tuiIconButton
    type="button"
    [tuiAppearanceState]="open ? 'hover' : null"
    [tuiDropdown]="content"
    [(tuiDropdownOpen)]="open"
>
    Open
</button>
<ng-template #content>
    <tui-data-list
        tuiDataListDropdownManager
        [size]="size"
    >
        @let frenchFries = 'French Fries';
        <button
            tuiOption
            type="button"
            (click)="selectOption(frenchFries)"
        >
            {{ frenchFries }}
        </button>
        <button
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownManual
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="burgersTmp"
        >
            Burgers
        </button>
        <button
            iconEnd="@tui.chevron-right"
            tuiDropdownAlign="end"
            tuiDropdownManual
            tuiDropdownSided
            tuiOption
            type="button"
            [tuiDropdown]="drinksTmp"
        >
            Drinks
        </button>
        @let item = 'Ice Cream';
        <button
            tuiOption
            type="button"
            (click)="selectOption(item)"
        >
            {{ item }}
        </button>
    </tui-data-list>
    <ng-template #burgersTmp>
        <tui-data-list tuiDataListDropdownManager>
            @for (burger of burgers; track burger) {
                <button
                    tuiOption
                    type="button"
                    (click)="selectOption(burger)"
                >
                    {{ burger }}
                </button>
            }
            <button
                iconEnd="@tui.chevron-right"
                iconStart="@tui.menu"
                tuiDropdownAlign="end"
                tuiDropdownManual
                tuiDropdownSided
                tuiOption
                type="button"
                [tuiDropdown]="drinksTmp"
            >
                Nested menu
            </button>
        </tui-data-list>
    </ng-template>
    <ng-template #drinksTmp>
        <tui-data-list [size]="size">
            @for (drink of drinks; track drink) {
                <button
                    tuiOption
                    type="button"
                    (click)="selectOption(drink)"
                >
                    {{ drink }}
                </button>
            }
        </tui-data-list>
    </ng-template>
</ng-template>
`;export{i as default};
