import"./chunk-HU6DUUP4.js";var o=`@if (!supported) {
    <p
        appearance="warning"
        tuiNotification
    >
        Document Picture-in-Picture is not supported in your browser, fallback to regular popout window will be used
    </p>
}
<button
    tuiButton
    type="button"
    [disabled]="!!subscription()"
    (click)="open()"
>
    Open Picture-in-Picture
</button>
`;export{o as default};
