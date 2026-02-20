import"./chunk-HU6DUUP4.js";var n=`<button
    automation-id="open-table-bar-on-top"
    tuiButton
    type="button"
    (click)="open.set(true)"
>
    Show TableBar on top
</button>

<tui-action-bar *tuiPopup="open()">
    <span>Table bar on top opened</span>
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
