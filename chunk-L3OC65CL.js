import"./chunk-HU6DUUP4.js";var l=`<form
    [formGroup]="form"
    (tuiValueChanges)="onChanges($event)"
>
    <tui-textfield>
        <label tuiLabel>Value changes on blur</label>
        <input
            formControlName="name"
            tuiInput
        />
    </tui-textfield>

    <tui-textfield class="tui-space_top-4">
        <label tuiLabel>Value changes on edit</label>
        <input
            formControlName="age"
            tuiInputNumber
            [step]="1"
        />
    </tui-textfield>
</form>
`;export{l as default};
