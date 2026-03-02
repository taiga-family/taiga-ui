import"./chunk-HU6DUUP4.js";var n=`<button
    tuiButton
    type="button"
    (click)="primitive()"
>
    String
</button>
<button
    tuiButton
    type="button"
    (click)="template.set(true)"
>
    Template
</button>
<button
    tuiButton
    type="button"
    (click)="component()"
>
    Component
</button>
<ng-template
    [tuiToast]="template()"
    [tuiToastOptions]="{closable: false}"
    (tuiToastChange)="template.set($event)"
>
    <a
        href="https://github.com/taiga-family/taiga-ui"
        iconEnd="@tui.external-link"
        iconStart="@tui.github"
        rel="noreferrer noopener"
        target="_blank"
        tuiToast
    >
        Check out source code
    </a>
</ng-template>
`;export{n as default};
