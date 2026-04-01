import"./chunk-HU6DUUP4.js";var n=`<tui-textfield>
    <input
        placeholder="Type in long value"
        tuiInput
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
    Min/Max (converted to pixels)
</tui-input-range>
`;export{n as default};
