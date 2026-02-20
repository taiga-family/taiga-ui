import"./chunk-HU6DUUP4.js";var a=`{{ ranged }} = inRange(value, fromInclude, toExclude);

<form [formGroup]="parametersForm">
    <div class="parameters">
        @for (parameter of ['value', 'fromInclude', 'toExclude']; track parameter) {
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
`;export{a as default};
