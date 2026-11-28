import"./chunk-LQ6M4NCU.js";var i=`<tui-items-with-more [required]="required">
    @for (item of items; track item) {
        <span
            *tuiItem
            appearance="neutral"
            size="s"
            tuiChip
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
