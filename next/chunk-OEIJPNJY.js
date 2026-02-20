import"./chunk-HU6DUUP4.js";var e=`<p>Formatted number by default: {{ 10500.33 | tuiFormatNumber }}</p>

<p>
    Formatted number with custom params:
    {{ 10500.33 | tuiFormatNumber: {precision: 4, decimalSeparator: '.'} }}
</p>

<p>
    Formatted number with rounding:
    {{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} }}
</p>
`;export{e as default};
