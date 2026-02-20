import"./chunk-HU6DUUP4.js";var o=`<input
    tuiSlider
    type="range"
    [formControl]="formControl"
    [keySteps]="keySteps"
    [segments]="segments"
    [step]="100 / steps"
/>

<div class="ticks-labels">
    @for (label of labels; track label) {
        <span>{{ label }}</span>
    }
</div>

<p automation-id="key-steps-example-control-value">
    Control value:
    <code>{{ formControl.value | number }}</code>
</p>
`;export{o as default};
