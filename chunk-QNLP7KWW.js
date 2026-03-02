import"./chunk-HU6DUUP4.js";var t=`<tui-input-range
    [keySteps]="keySteps"
    [max]="max"
    [min]="min"
    [segments]="segments"
    [step]="step"
    [(ngModel)]="value"
>
    Not linear growing sliders
</tui-input-range>

<div class="ticks-labels">
    @for (label of ticksLabels; track label) {
        <span>{{ label }}</span>
    }
</div>

<p>
    <strong>Control value:</strong>
    <output>
        <code>{{ value | json }}</code>
    </output>
</p>
`;export{t as default};
