import"./chunk-HU6DUUP4.js";var e=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Open Sheet Dialog
</button>

<ng-template
    let-observer
    [tuiSheetDialogOptions]="options"
    [(tuiSheetDialog)]="open"
>
    <nav>
        <button
            tuiCell="l"
            tuiCellStretch
            type="button"
        >
            <div
                appearance="primary"
                tuiAvatar="@tui.home"
            ></div>
            <div tuiTitle>
                Home
                <div tuiSubtitle>Main page</div>
            </div>
        </button>

        <button
            tuiCell="l"
            tuiCellStretch
            type="button"
        >
            <div
                appearance="accent"
                tuiAvatar="@tui.user"
            ></div>
            <div tuiTitle>
                Profile
                <div tuiSubtitle>Account settings</div>
            </div>
        </button>

        <button
            tuiCell="l"
            tuiCellStretch
            type="button"
        >
            <div
                appearance="positive"
                tuiAvatar="@tui.heart"
            ></div>
            <div tuiTitle>
                Favorites
                <div tuiSubtitle>Saved items</div>
            </div>
            <tui-badge-notification>3</tui-badge-notification>
        </button>

        <button
            tuiCell="l"
            tuiCellStretch
            type="button"
        >
            <div
                appearance="warning"
                tuiAvatar="@tui.star"
            ></div>
            <div tuiTitle>
                Premium
                <div tuiSubtitle>Upgrade your plan</div>
            </div>
        </button>
    </nav>

    <footer>
        <button
            size="m"
            tuiButton
            type="button"
            (click)="observer.complete()"
        >
            Close
        </button>
    </footer>
</ng-template>
`;export{e as default};
