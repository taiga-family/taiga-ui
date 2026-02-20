import"./chunk-HU6DUUP4.js";var l=`<tui-textfield [style.margin-block-end.rem]="1">
    <label tuiLabel>Limit</label>
    <textarea
        placeholder="Placeholder"
        tuiTextarea
        [formControl]="control"
        [limit]="100"
        [max]="6"
        [min]="3"
    ></textarea>
</tui-textfield>
<button
    tuiButton
    type="button"
    (click)="control.setValue('Short text')"
>
    Programmatically update
</button>
`;export{l as default};
