import"./chunk-LQ6M4NCU.js";var r=`{{ quantized }} = quantize(value, quantum);

<form [formGroup]="parametersForm">
    <div class="parameters">
        @for (parameter of ['value', 'quantum']; track parameter) {
            <tui-textfield>
                <label tuiLabel>{{ parameter }}</label>
                <input
                    tuiInputNumber
                    [formControlName]="parameter"
                />
            </tui-textfield>
        }
    </div>
</form>
`;export{r as default};
