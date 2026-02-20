import"./chunk-HU6DUUP4.js";var i=`<tui-tabs-with-more
    size="m"
    [itemsLimit]="3"
    [(activeItemIndex)]="activeItemIndex"
>
    @for (item of items; track item) {
        <button
            *tuiItem
            tuiTab
            type="button"
            (keydown.delete)="remove(item)"
        >
            {{ item }}
            <tui-icon
                icon="@tui.x"
                class="tui-space_left-2"
                [style.font-size.rem]="1"
                (click.stop)="remove(item)"
            />
        </button>
    }
</tui-tabs-with-more>
<p>{{ items[activeItemIndex] }}</p>
<button
    tuiButton
    type="button"
    (click)="add()"
>
    Add one more
</button>

<tui-textfield class="tui-space_top-4">
    <label tuiLabel>activeItemIndex</label>

    <input
        tuiInputNumber
        [max]="4"
        [min]="0"
        [step]="1"
        [tuiNumberFormat]="{precision: 0}"
        [(ngModel)]="activeItemIndex"
    />
</tui-textfield>
`;export{i as default};
