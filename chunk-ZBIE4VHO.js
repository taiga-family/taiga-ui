import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    multi
    [disabledItemHandler]="handler"
    [style.width.rem]="19"
    [tuiTextfieldCleaner]="false"
>
    <input
        tuiInputChip
        [formControl]="control"
    />
    @if (control.value.length > 2) {
        <button
            tuiButtonX
            (click)="control.setValue(this.required)"
        >
            Clear
        </button>
    }
    <tui-input-chip *tuiItem />
</tui-textfield>
`;export{i as default};
