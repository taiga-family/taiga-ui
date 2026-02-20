import"./chunk-HU6DUUP4.js";var u=`<tui-textfield [tuiTextfieldCleaner]="false">
    <input
        #input
        placeholder="Input value"
        tuiInput
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
`;export{u as default};
