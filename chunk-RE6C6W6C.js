import"./chunk-HU6DUUP4.js";var o=`<ng-template
    [tuiNotificationMiddleOptions]="{closable: true}"
    [(tuiNotificationMiddle)]="text"
>
    Loader with text
</ng-template>
<ng-template
    [tuiNotificationMiddleOptions]="{closable: true}"
    [(tuiNotificationMiddle)]="icon"
>
    <img
        alt=""
        [src]="'@tui.user' | tuiIcon"
    />
    Custom icon
</ng-template>
<button
    tuiButton
    type="button"
    (click)="text = true"
>
    Text
</button>
&nbsp;
<button
    tuiButton
    type="button"
    (click)="icon = true"
>
    Icon
</button>
`;export{o as default};
