import"./chunk-42JZD6NG.js";var l=`<tui-textfield [tuiTextfieldCleaner]="false">
    <label tuiLabel>Flat angle</label>

    <input
        #input
        placeholder="3,14"
        tuiInput
        [maskito]="options"
        [(ngModel)]="value"
    />

    @if (value) {
        <button
            tuiButtonX
            (click)="clear()"
        >
            Clear
        </button>
    }
</tui-textfield>
`;export{l as default};
