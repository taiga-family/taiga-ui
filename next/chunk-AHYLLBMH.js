import"./chunk-HU6DUUP4.js";var n=`<tui-textfield>
    <label tuiLabel>Rate your mind</label>

    <input
        tuiInputSlider
        [max]="max"
        [min]="min"
        [(ngModel)]="value"
    />

    <input
        tuiSlider
        type="range"
        [segments]="5"
        [step]="step"
    />
</tui-textfield>

<div class="slider-ticks-labels">
    <button
        appearance="icon"
        iconStart="@tui.thumbs-down"
        size="xs"
        tuiIconButton
        type="button"
        (click)="decrease()"
    >
        Decrease
    </button>

    <span>20%</span>
    <span>40%</span>
    <span>60%</span>
    <span>80%</span>

    <button
        appearance="icon"
        iconStart="@tui.thumbs-up"
        size="xs"
        tuiIconButton
        type="button"
        (click)="increase()"
    >
        Increase
    </button>
</div>
`;export{n as default};
