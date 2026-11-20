import"./chunk-LQ6M4NCU.js";var r=`<p>Formatted number by default: {{ 10500.33 | tuiFormatNumber }}</p>

<p>
    Formatted number with custom params:
    {{ 10500.33 | tuiFormatNumber: {maximumFractionDigits: 4, decimalSeparator: '.'} }}
</p>

<p>
    Formatted number with rounding:
    {{ 10500.334 | tuiFormatNumber: {maximumFractionDigits: 2, decimalSeparator: '.', rounding: 'ceil'} }}
</p>
`;export{r as default};
