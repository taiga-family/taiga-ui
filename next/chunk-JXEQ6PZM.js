import"./chunk-HU6DUUP4.js";var e=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show
</button>
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="options"
    [(tuiResponsiveDialog)]="open"
>
    <div>
        This dialog would show up as regular
        <a
            tuiLink
            [routerLink]="routes.Dialog"
        >
            Dialog
        </a>
        on desktop and as a
        <code>SheetDialog</code>
        on a mobile device.
    </div>
    <footer>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
            (click)="observer.complete()"
        >
            Glad to know that
        </button>
        <button
            size="m"
            tuiButton
            type="button"
            (click)="observer.complete()"
        >
            Sure
        </button>
    </footer>
</ng-template>
`;export{e as default};
