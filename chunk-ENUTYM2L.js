import"./chunk-HU6DUUP4.js";var a=`'{{ formattedNumber }}' = tuiFormatNumber(value, precision, decimalSeparator, thousandSeparator);

<form [formGroup]="parametersForm">
    <div class="parameters">
        <tui-textfield class="tui-space_top-2">
            <input
                formControlName="value"
                tuiInput
            />
            <label tuiLabel>value</label>
        </tui-textfield>

        <tui-textfield class="tui-space_top-2">
            <input
                formControlName="precision"
                tuiInput
            />
            <label tuiLabel>precision</label>
        </tui-textfield>

        <tui-textfield class="tui-space_top-2">
            <input
                formControlName="decimalSeparator"
                tuiInput
            />
            <label tuiLabel>decimalSeparator</label>
        </tui-textfield>

        <tui-textfield class="tui-space_top-2">
            <input
                formControlName="thousandSeparator"
                tuiInput
            />
            <label tuiLabel>thousandSeparator</label>
        </tui-textfield>
    </div>
</form>
`;export{a as default};
