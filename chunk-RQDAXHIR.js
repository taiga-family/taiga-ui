import"./chunk-42JZD6NG.js";var l=`<tui-textfield>
    <input
        placeholder="Type in long value"
        tuiTextfield
        [tuiFluidTypography]="scale()"
        [(ngModel)]="value"
    />
</tui-textfield>

<tui-input-range
    [max]="30"
    [min]="1"
    [ngModel]="range()"
    [style.inset-block-start.rem]="0.5"
    (ngModelChange)="range.set($event)"
>
    <label tuiLabel>Min/Max (converted to pixels)</label>
</tui-input-range>
`;export{l as default};
