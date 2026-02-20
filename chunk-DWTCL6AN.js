import"./chunk-HU6DUUP4.js";var i=`<tui-textfield>
    <label tuiLabel>Percentage</label>

    <input
        postfix="%"
        tuiInputNumber
        [max]="100"
        [min]="0"
        [step]="0.001"
        [tuiNumberFormat]="{precision: 3, rounding: 'round'}"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{i as default};
