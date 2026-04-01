import"./chunk-HU6DUUP4.js";var i=`<button
    size="m"
    tuiButton
    type="button"
    (click)="show.set(true)"
>
    Show
</button>
<ng-template
    [tuiNotificationOptions]="{label: 'Directive', autoClose: 0, closable: false}"
    [(tuiNotification)]="show"
>
    <span tuiSubtitle>This is a declarative directive alert</span>
    <button
        tuiButton
        type="button"
        (click)="show.set(false)"
    >
        Close
    </button>
</ng-template>
`;export{i as default};
