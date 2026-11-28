import"./chunk-LQ6M4NCU.js";var i=`<tui-textfield>
    <label tuiLabel>Balance</label>

    <input
        tuiInputNumber
        [prefix]="'USD' | tuiCurrency"
        [tuiNumberFormat]="{negativePattern: 'minusFirst'}"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{i as default};
