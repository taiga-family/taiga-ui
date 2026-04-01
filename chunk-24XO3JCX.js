import"./chunk-HU6DUUP4.js";var u=`<!-- Works in several levels-->
<tui-textfield [tuiNumberFormat]="{precision: 1, thousandSeparator: '_'}">
    <label tuiLabel>Label: {{ value | tuiFormatNumber }}</label>

    <!-- You can also put directive directly on [tuiInputNumber] -->
    <input
        tuiInputNumber
        [tuiNumberFormat]="{precision: 2}"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{u as default};
