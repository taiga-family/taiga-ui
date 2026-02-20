import"./chunk-HU6DUUP4.js";var e=`<tui-textfield>
    <label tuiLabel>Click icon to copy</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        [(ngModel)]="value"
    />
    <tui-icon tuiCopy />
</tui-textfield>

<tui-textfield
    multi
    [rows]="1"
    [style.margin-block-start.rem]="1"
    [style.max-inline-size.rem]="17"
>
    <input
        tuiInputChip
        [(ngModel)]="multiValue"
    />
    <tui-input-chip *tuiItem />
    <tui-icon tuiCopy />
</tui-textfield>
`;export{e as default};
