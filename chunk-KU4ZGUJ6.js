import"./chunk-HU6DUUP4.js";var i=`<tui-items-with-more [required]="required">
    @for (item of items; track item) {
        <span
            *tuiItem
            appearance="neutral"
            size="s"
            tuiChip
            class="tui-space_right-1"
        >
            {{ item }}
        </span>
    }
    <ng-template
        let-index
        tuiMore
    >
        and {{ getRemaining(index) }} more
    </ng-template>
</tui-items-with-more>
`;export{i as default};
