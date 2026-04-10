import"./chunk-HU6DUUP4.js";var i=`<tui-textfield>
    <label tuiLabel>Balance</label>

    <input
        tuiInputNumber
        [prefix]="'USD' | tuiCurrency"
        [tuiNumberFormat]="{negativePattern: 'minusFirst'}"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{i as default};
