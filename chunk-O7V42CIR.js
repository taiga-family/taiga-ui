import"./chunk-HU6DUUP4.js";var r=`{{ clamped }} = clamp(value, min, max);

<form [formGroup]="parametersForm">
    <div class="parameters">
        @for (parameter of ['value', 'min', 'max']; track parameter) {
            <tui-textfield class="tui-space_top-2">
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
