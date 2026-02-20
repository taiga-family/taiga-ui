import"./chunk-HU6DUUP4.js";var u=`<div [tuiNumberFormat]="{rounding: 'round', thousandSeparator: ',', decimalSeparator: '.'}">
    {{ -10000000.536 | tuiAmount: 'USD' : 'start' }}
</div>

<div>{{ 200.536 | tuiAmount: 'EUR' }}</div>

<div [tuiNumberFormat]="{rounding: 'ceil', precision: 1}">
    {{ 54000.643 | tuiAmount: 'USD' : 'start' }}
</div>

<div [tuiNumberFormat]="{decimalMode: 'always'}">
    {{ 800 | tuiAmount: 'USD' : 'start' }}
</div>

<div [tuiNumberFormat]="{precision: 0}">
    {{ -0.83 | tuiAmount: 'RUB' : 'end' }}
</div>
`;export{u as default};
