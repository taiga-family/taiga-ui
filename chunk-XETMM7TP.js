import"./chunk-HU6DUUP4.js";var p=`<button
    size="m"
    tuiButton
    type="button"
    (click)="open(template)"
>
    Show
</button>

<ng-template
    #template
    let-observer
>
    <tui-app-bar tuiAppBarSize>
        <button
            tuiAppBarBack
            tuiSlot="start"
            type="button"
            [disabled]="!step"
            (click)="step = step - 1"
        >
            Back
        </button>
        <progress
            max="5"
            size="s"
            tuiProgressBar
            [style.width.rem]="8"
            [value]="step"
        ></progress>
        <button
            tuiButton
            tuiSlot="end"
            type="button"
            (click)="observer.complete()"
        >
            Close
        </button>
    </tui-app-bar>
    <h2 tuiHeader="h3">
        <span tuiTitle>I'm a stepper</span>
    </h2>
    <p
        appearance="floating"
        tuiCardLarge
    >
        Step {{ step }}
    </p>
    <button
        tuiButton
        type="button"
        [disabled]="step === 5"
        (click)="step = step + 1"
    >
        Next
    </button>
</ng-template>
`;export{p as default};
