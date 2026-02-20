import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Open
</button>

<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="{appearance: 'fullscreen'}"
    [(tuiResponsiveDialog)]="open"
>
    <tui-pdf-viewer>
        <h2 tuiTitle>file.pdf</h2>

        @if (!isMobile) {
            <button
                iconStart="@tui.pen"
                title="download"
                tuiButton
                type="button"
                [style.border-radius.rem]="5"
                (click)="observer.complete(); alerts.open('Document signed').subscribe()"
            >
                Sign
            </button>
        }

        <button
            iconStart="@tui.download"
            title="download"
            tuiButton
            type="button"
            [style.border-radius.rem]="5"
            (click)="observer.complete()"
        >
            {{ isMobile ? '' : 'Download' }}
        </button>

        <iframe [src]="url"></iframe>
    </tui-pdf-viewer>
</ng-template>
`;export{o as default};
