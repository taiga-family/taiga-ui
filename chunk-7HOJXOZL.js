import"./chunk-HU6DUUP4.js";var n=`<button
    tuiButton
    type="button"
    (click)="open.set(true)"
>
    Show ActionBar on top
</button>

<tui-action-bar *tuiPopup="open()">
    <span>Action bar on top opened</span>
    <button
        iconStart="@tui.trash"
        tuiIconButton
        type="button"
        (click)="open.set(false)"
    >
        Close
    </button>
</tui-action-bar>
`;export{n as default};
