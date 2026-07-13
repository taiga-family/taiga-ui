import"./chunk-HU6DUUP4.js";var n=`<button
    size="m"
    tuiButton
    type="button"
    (click)="open = true"
>
    Show ActionBar
</button>

<tui-action-bar
    *tuiPopup="open"
    size="s"
>
    <span [style.width.%]="isMobile() ? 100 : null">Action bar opened</span>

    <button
        appearance="secondary-grayscale"
        iconStart="@tui.trash"
        tuiButton
        type="button"
        (click)="open = false"
    >
        Remove
    </button>
    <button
        iconStart="@tui.x"
        tuiIconButton
        type="button"
        [appearance]="isMobile() ? 'secondary-grayscale' : 'icon'"
        (click)="open = false"
    >
        Close
    </button>
</tui-action-bar>
`;export{n as default};
