import"./chunk-HU6DUUP4.js";var i=`<button
    tuiButton
    type="button"
    (click)="openPdf()"
>
    Open
</button>

<ng-template
    [tuiDialogOptions]="{appearance: 'fullscreen'}"
    [(tuiDialog)]="open"
>
    <tui-pdf-viewer>
        <h2 tuiTitle>file.pdf</h2>

        @if (loading()) {
            <tui-loader
                size="xl"
                [loading]="true"
            />
        } @else if (!error()) {
            <iframe [src]="url"></iframe>
        } @else {
            <tui-block-status>
                <img
                    alt="not found"
                    src="./assets/images/not-found.svg"
                    tuiSlot="top"
                    class="image"
                />

                <h4>Something went wrong</h4>

                <span>Try again later</span>

                <button
                    appearance="secondary"
                    size="s"
                    tuiButton
                    type="button"
                    (click)="load()"
                >
                    Retry
                </button>
            </tui-block-status>
        }
    </tui-pdf-viewer>
</ng-template>
`;export{i as default};
