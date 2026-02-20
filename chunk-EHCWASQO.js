import"./chunk-HU6DUUP4.js";var a=`<button
    tuiButton
    type="button"
    (click)="augmented = true"
>
    Show augmented
</button>
<br />
<br />
<button
    tuiButton
    type="button"
    (click)="custom = true"
>
    Show custom
</button>
<ng-template
    [tuiDialogOptions]="{size: 's', appearance: 'taiga compact'}"
    [(tuiDialog)]="augmented"
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h2>Augmented design</h2>
            <p>Using both built-in "taiga" appearance and custom "compact" appearance to alter built-in styles</p>
        </hgroup>
    </header>
</ng-template>

<ng-template
    [tuiDialogOptions]="{appearance: 'sheet'}"
    [(tuiDialog)]="custom"
>
    <header>Custom design</header>
    <p>
        Overriding default appearance completely and taking the styles of dialog fully upon oneself, leaving only
        behavior like focus trap and closable/dismissible interactions to Taiga UI
    </p>
</ng-template>
`;export{a as default};
