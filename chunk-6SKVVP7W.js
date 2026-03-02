import"./chunk-HU6DUUP4.js";var e=`<tui-tabs-with-more
    [itemsLimit]="3"
    [(activeItemIndex)]="activeItemIndex"
>
    <button
        *tuiItem
        iconStart="@tui.credit-card"
        tuiTab
        type="button"
        (click)="onClick('Maps')"
    >
        Maps
    </button>
    <button
        *tuiItem
        disabled
        iconStart="@tui.phone"
        tuiTab
        type="button"
        (click)="onClick('Calls')"
    >
        Calls
    </button>
    <button
        *tuiItem
        iconStart="@tui.settings"
        tuiTab
        type="button"
        (click)="onClick('Settings')"
    >
        Settings
    </button>
    <button
        *tuiItem
        iconStart="@tui.heart"
        tuiTab
        type="button"
        (click)="onClick('Favorite')"
    >
        Favorite
    </button>
    <button
        *tuiItem
        iconStart="@tui.trash"
        tuiTab
        type="button"
        (click)="onClick('Trash')"
    >
        Trash
    </button>
</tui-tabs-with-more>

<tui-textfield class="tui-space_top-4">
    <label tuiLabel>activeItemIndex</label>

    <input
        tuiInputNumber
        [max]="4"
        [min]="0"
        [step]="1"
        [(ngModel)]="activeItemIndex"
    />
</tui-textfield>
`;export{e as default};
