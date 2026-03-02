import"./chunk-HU6DUUP4.js";var n=`<form [formGroup]="form">
    <tui-input-inline class="input1">
        <input formControlName="testValue1" />
    </tui-input-inline>
    <tui-input-inline class="input2">
        <input formControlName="testValue2" />
    </tui-input-inline>
    <tui-input-inline class="input3">
        <input formControlName="testValue3" />
    </tui-input-inline>
    <tui-input-inline
        class="input4"
        [class.input4_empty]="input4Empty"
    >
        (Show placeholder if control is empty)
        <input formControlName="testValue4" />
    </tui-input-inline>
</form>

<button
    size="m"
    tuiButton
    type="button"
    (click)="onToggleClick()"
>
    {{ toggleContent }}
</button>
`;export{n as default};
