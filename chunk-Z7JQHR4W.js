import"./chunk-HU6DUUP4.js";var e=`<input
    tuiSlider
    type="range"
    [formControl]="formControl"
    [max]="1000"
    [segments]="4"
    [step]="250"
/>

<div class="ticks-labels">
    @for (label of labels; track label) {
        <button
            type="button"
            class="tick-label"
            (click)="patchValue(label)"
        >
            \${{ label }}
        </button>
    }
</div>

<p>
    Control value:
    <code>{{ formControl.value }}</code>
</p>
`;export{e as default};
