import"./chunk-B4AJQJMI.js";var l=`<tui-textfield [tuiTextfieldCleaner]="false">
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
