import"./chunk-HU6DUUP4.js";var t=`<tui-items-with-more
    class="container"
    [class.container_expanded]="linesLimit === 100"
    [linesLimit]="linesLimit"
    (lastIndexChange)="lastIndex = $event"
>
    @for (item of items; track item) {
        <span
            *tuiItem
            appearance="neutral"
            size="s"
            tuiChip
            class="item"
            [class.item_visible]="$index <= lastIndex"
        >
            {{ item }} item
        </span>
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
            More {{ getRemaining(index) }}
        </button>
    </ng-template>
</tui-items-with-more>
`;export{t as default};
