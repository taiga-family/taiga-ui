import"./chunk-HU6DUUP4.js";var e=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show dialog
</button>
<ng-template
    [tuiDialogOptions]="{size: 's'}"
    [(tuiDialog)]="open"
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h2>Hello!</h2>
            <p>Welcome to the website</p>
        </hgroup>
    </header>
    <footer>
        <button
            tuiButton
            type="button"
            (click)="auth.logout()"
        >
            Logout
        </button>
    </footer>
</ng-template>
`;export{e as default};
