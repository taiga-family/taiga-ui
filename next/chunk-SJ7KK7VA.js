import"./chunk-42JZD6NG.js";var u=`<div [tuiNumberFormat]="{rounding: 'round', thousandSeparator: ',', decimalSeparator: '.'}">
    {{ -10000000.536 | tuiAmount: 'USD' : 'left' }}
</div>

<div>{{ 200.536 | tuiAmount: 'EUR' }}</div>

<div [tuiNumberFormat]="{rounding: 'ceil', precision: 1}">
    {{ 54000.643 | tuiAmount: 'USD' : 'left' }}
</div>

<div [tuiNumberFormat]="{decimalMode: 'always'}">
    {{ 800 | tuiAmount: 'USD' : 'left' }}
</div>

<div [tuiNumberFormat]="{precision: 0}">
    {{ -0.83 | tuiAmount: 'RUB' : 'right' }}
</div>
`;export{u as default};
