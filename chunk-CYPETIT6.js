import"./chunk-LQ6M4NCU.js";var l=`<tui-textfield [tuiTextfieldCleaner]="false">
    <label tuiLabel>fr-CA locale</label>

    <input
        mode="HH:MM:SS.MSS"
        tuiInputTime
        [tuiTimeFormat]="{separators: [' h ', ' min ', ',']}"
        [(ngModel)]="value"
    />

    <img
        alt="Flag of Canada"
        width="28"
        [src]="'CA' | tuiFlag"
        [style.border-radius.%]="50"
    />
</tui-textfield>
`;export{l as default};
