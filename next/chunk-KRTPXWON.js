import"./chunk-HU6DUUP4.js";var i=`<div
    tuiItemGroup
    [horizontal]="true"
>
    @for (chip of chips; track chip) {
        <label
            tuiChip
            [appearance]="checked[$index] ? 'accent' : 'neutral'"
        >
            {{ chip }}
            <input
                appearance=""
                tuiChip
                type="checkbox"
                [(ngModel)]="checked[$index]"
            />
        </label>
    }
</div>
`;export{i as default};
