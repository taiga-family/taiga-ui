import"./chunk-42JZD6NG.js";var t=`<tui-items-with-more [required]="required">
    @for (item of items; track item) {
        <tui-chip
            *tuiItem
            appearance="neutral"
            size="s"
            class="tui-space_right-1"
        >
            {{ item }}
        </tui-chip>
    }
    <ng-template
        let-index
        tuiMore
    >
        and {{ getRemaining(index) }} more
    </ng-template>
</tui-items-with-more>
`;export{t as default};
