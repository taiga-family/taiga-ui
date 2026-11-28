import"./chunk-LQ6M4NCU.js";var a=`{{ ranged }} = inRange(value, fromInclude, toExclude);

<form [formGroup]="parametersForm">
    <div class="parameters">
        @for (parameter of ['value', 'fromInclude', 'toExclude']; track parameter) {
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
`;export{a as default};
