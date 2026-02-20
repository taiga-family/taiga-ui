import"./chunk-HU6DUUP4.js";var t=`<div tuiItemGroup>
    <tui-items-with-more [linesLimit]="linesLimit">
        @for (chip of chips; track chip) {
            <label
                *tuiItem
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

        <ng-template
            let-index
            tuiMore
        >
            <button
                appearance="neutral"
                iconEnd="@tui.chevron-down"
                size="s"
                tuiChip
                type="button"
                class="more"
                (click)="linesLimit = 100"
            >
                More {{ chips.length - index - 1 }}
            </button>
        </ng-template>
    </tui-items-with-more>
</div>
`;export{t as default};
