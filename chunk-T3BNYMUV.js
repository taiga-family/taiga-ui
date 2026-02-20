import"./chunk-HU6DUUP4.js";var n=`<tui-textfield [tuiTextfieldCleaner]="false">
    <input
        tuiInputNumber
        [min]="0"
        [(ngModel)]="value"
        (keydown.arrowDown)="onStep(-1)"
        (keydown.arrowUp)="onStep(+1)"
    />

    <button
        appearance="floating"
        size="s"
        tuiButton
        type="button"
        (click.prevent)="onStep(+100)"
    >
        + 100
    </button>

    <button
        appearance="floating"
        size="s"
        tuiButton
        type="button"
        (click.prevent)="onStep(+1000)"
    >
        + 1000
    </button>
</tui-textfield>
`;export{n as default};
