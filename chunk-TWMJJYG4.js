import"./chunk-HU6DUUP4.js";var i=`<div
    class="container tui-text_body-l"
    (tuiSwipe)="onSwipe($event)"
>
    Swipe left to open

    <tui-drawer
        *tuiPopup="open()"
        direction="end"
        class="drawer tui-text_body-l"
        [overlay]="true"
        (click.self)="open.set(false)"
        (tuiSwipe)="onSwipe($event)"
    >
        Swipe right to close
    </tui-drawer>
</div>
`;export{i as default};
