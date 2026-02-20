import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="toggle(true)"
>
    Show push
</button>

<tui-push
    *tuiPush="open"
    heading="Indiana Jones"
    type="Dr. Henry Walton Jones, Jr."
    (close)="toggle(false)"
>
    <tui-icon icon="@tui.message-square" />
    I have a bad feeling about this...
    <button
        tuiButton
        type="button"
        (click)="toggle(false)"
    >
        Fortune
    </button>
    <button
        tuiLink
        type="button"
        (click)="toggle(false)"
    >
        Glory
    </button>
</tui-push>
`;export{o as default};
