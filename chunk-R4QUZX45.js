import"./chunk-LQ6M4NCU.js";var u=`<tui-textfield [tuiTextfieldCleaner]="false">
    <input
        #input
        placeholder="Input value"
        tuiInput
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
`;export{u as default};
