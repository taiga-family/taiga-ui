import"./chunk-HU6DUUP4.js";var t=`<tui-textfield>
    <label tuiLabel>Not linear growing slider</label>

    <input
        tuiInputSlider
        [max]="max"
        [min]="min"
        [(ngModel)]="value"
    />

    <input
        tuiSlider
        type="range"
        [keySteps]="keySteps"
        [segments]="ticksLabels.length - 1"
        [step]="step"
    />
</tui-textfield>

<div class="slider-ticks-labels">
    @for (label of ticksLabels; track label) {
        <span>{{ label }}</span>
    }
</div>

<p>
    Control value:
    <code>{{ value }}</code>
</p>
`;export{t as default};
