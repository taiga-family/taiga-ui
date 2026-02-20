import"./chunk-HU6DUUP4.js";var t=`<p>{{ rounded }} = round(value, precision);</p>
<p>{{ floored }} = floor(value, precision);</p>
<p>{{ ceiled }} = ceil(value, precision);</p>

<form [formGroup]="parametersForm">
    <div class="parameters">
        <tui-textfield class="tui-space_top-2">
            <label tuiLabel>value</label>

            <input
                formControlName="value"
                tuiInputNumber
                [tuiNumberFormat]="{precision: 3}"
            />
        </tui-textfield>

        <tui-textfield class="tui-space_top-2">
            <label tuiLabel>precision</label>

            <input
                formControlName="precision"
                tuiInputNumber
            />
        </tui-textfield>
    </div>
</form>
`;export{t as default};
