import"./chunk-HU6DUUP4.js";var e=`<tui-tabs [(activeItemIndex)]="activeItemIndex">
    <button
        iconStart="@tui.credit-card"
        tuiTab
        type="button"
        (click)="onClick('Maps')"
    >
        Maps
    </button>
    <button
        disabled
        iconStart="@tui.phone"
        tuiTab
        type="button"
        (click)="onClick('Calls')"
    >
        Calls
    </button>
    <button
        iconStart="@tui.settings"
        tuiTab
        type="button"
        (click)="onClick('Settings')"
    >
        Settings
    </button>
</tui-tabs>

<tui-textfield class="tui-space_top-4">
    <label tuiLabel>activeItemIndex</label>

    <input
        tuiInputNumber
        [max]="2"
        [min]="0"
        [step]="1"
        [(ngModel)]="activeItemIndex"
    />
</tui-textfield>
`;export{e as default};
