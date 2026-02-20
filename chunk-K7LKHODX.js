import"./chunk-HU6DUUP4.js";var t=`<tui-range
    id="range-with-key-steps"
    size="m"
    class="range"
    [keySteps]="keySteps"
    [segments]="segments"
    [step]="stepPercentage"
    [(ngModel)]="value"
/>

<div class="ticks-labels">
    @for (label of ticksLabels; track label) {
        <span>{{ label }}</span>
    }
</div>

<p class="tui-space_top-12 tui-space_bottom-0">
    Control value:
    <output for="range-with-key-steps">
        <code>{{ value | json }}</code>
    </output>
</p>
`;export{t as default};
