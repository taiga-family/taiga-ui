import"./chunk-HU6DUUP4.js";var a=`<div tuiPlatform="ios">
    <div
        tuiItemGroup
        [autoscroll]="true"
        [horizontal]="true"
    >
        @for (chip of chips; track chip) {
            <label
                tuiChip
                [appearance]="chip === selected ? 'accent' : 'neutral'"
            >
                {{ chip }}
                <input
                    appearance=""
                    name="radio"
                    tuiChip
                    type="radio"
                    [value]="chip"
                    [(ngModel)]="selected"
                />
            </label>
        }
    </div>
</div>
`;export{a as default};
