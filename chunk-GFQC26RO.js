import"./chunk-HU6DUUP4.js";var o=`<button
    size="m"
    tuiButton
    type="button"
    (click)="open.set(true)"
>
    Show TableBar
</button>

<tui-action-bar
    *tuiPopup="open()"
    size="s"
>
    <span [style.width.%]="isMobile() ? 100 : null">Table bar opened</span>

    <button
        appearance="glass"
        iconStart="@tui.trash"
        tuiButton
        type="button"
        (click)="open.set(false)"
    >
        Remove
    </button>
    <button
        iconStart="@tui.x"
        tuiIconButton
        type="button"
        [appearance]="isMobile() ? 'glass' : 'icon'"
        (click)="open.set(false)"
    >
        Close
    </button>
</tui-action-bar>
`;export{o as default};
