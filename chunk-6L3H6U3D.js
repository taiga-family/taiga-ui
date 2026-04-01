import"./chunk-HU6DUUP4.js";var i=`<section class="zoom-controller">
    <button
        appearance="icon"
        iconStart="@tui.minus"
        size="xs"
        tuiIconButton
        type="button"
        class="minus"
        (click)="change(-0.25)"
    >
        Minus
    </button>

    <label
        tuiSliderThumbLabel
        class="slider-wrapper"
    >
        <div
            [tuiHint]="value | percent"
            [tuiHintManual]="!!(showHint$ | async)"
        ></div>

        <input
            step="any"
            tuiSlider
            type="range"
            [max]="max"
            [min]="min"
            [(ngModel)]="value"
        />
    </label>

    <button
        appearance="icon"
        iconStart="@tui.plus"
        size="xs"
        tuiIconButton
        type="button"
        class="plus"
        (click)="change(+0.25)"
    >
        Plus
    </button>
</section>
`;export{i as default};
