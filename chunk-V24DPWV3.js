import"./chunk-HU6DUUP4.js";var l=`<tui-textfield [tuiTextfieldCleaner]="false">
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
            tabindex="-1"
            tuiButtonX
            (click)="clear()"
        >
            Clear
        </button>
    }
</tui-textfield>
`;export{l as default};
