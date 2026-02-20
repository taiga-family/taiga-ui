import"./chunk-HU6DUUP4.js";var e=`<ng-template
    [tuiNotificationMiddle]="open()"
    (tuiNotificationMiddleChange)="open.set($event)"
>
    @if (loading()) {
        <tui-loader tuiAnimated />
        <div tuiAnimated>Please wait...</div>
    } @else {
        <div
            appearance="positive"
            tuiAnimated
            tuiAvatar="@tui.check"
        ></div>
        <div tuiAnimated>Operation successful!</div>
    }
</ng-template>
<button
    tuiButton
    type="button"
    (click)="onClick()"
>
    Show
</button>
`;export{e as default};
