import"./chunk-HU6DUUP4.js";var e=`<button
    tuiButton
    type="button"
    class="tui-space_bottom-5"
    (click)="onClick()"
>
    Show input
</button>
@if (showInput) {
    <tui-textfield [tuiTextfieldCleaner]="false">
        <input
            tuiAutoFocus
            tuiInput
            [(ngModel)]="model"
        />
        <label tuiLabel>Focusable input</label>
    </tui-textfield>
}
`;export{e as default};
