import"./chunk-HU6DUUP4.js";var i=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Open
</button>

<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="{appearance: 'fullscreen', bar: false}"
    [(tuiResponsiveDialog)]="open"
>
    <tui-pdf-viewer>
        <h2 tuiTitle>file.pdf</h2>

        <button
            iconStart="@tui.pen"
            tuiButton
            type="button"
            [title]="isMobile ? 'Sign' : ''"
            (click)="observer.complete(); alerts.open('Document signed').subscribe()"
        >
            {{ isMobile ? '' : 'Sign' }}
        </button>

        <button
            iconStart="@tui.download"
            tuiButton
            type="button"
            [title]="isMobile ? 'Download' : ''"
            (click)="observer.complete()"
        >
            {{ isMobile ? '' : 'Download' }}
        </button>

        <iframe [src]="url"></iframe>
    </tui-pdf-viewer>
</ng-template>
`;export{i as default};
