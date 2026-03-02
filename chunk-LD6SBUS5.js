import"./chunk-HU6DUUP4.js";var u=`<tui-textfield>
    <input
        tuiInputSlider
        [max]="1"
        [min]="0"
        [quantum]="quantum"
        [(ngModel)]="value"
    />

    <input
        tuiSlider
        type="range"
        [step]="step"
    />
</tui-textfield>

<p><strong>Control value:</strong></p>
<code>{{ value | json }}</code>
`;export{u as default};
