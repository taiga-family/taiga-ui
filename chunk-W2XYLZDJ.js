import"./chunk-42JZD6NG.js";var u=`<button
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
            tuiTextfield
            [(ngModel)]="model"
        />
        <label tuiLabel>Focusable input</label>
    </tui-textfield>
}
`;export{u as default};
