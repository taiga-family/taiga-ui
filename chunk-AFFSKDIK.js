import"./chunk-HU6DUUP4.js";var a=`<tui-carousel>
    <ng-template
        let-index
        tuiItem
    >
        @for (_ of '-'.repeat(4); track $index) {
            @let item = items.at((index * 4 + $index) % this.items.length);
            <tui-avatar-labeled [label]="item?.label || ''">
                <span tuiAvatar>
                    <img
                        alt=""
                        [src]="item?.avatar"
                    />
                </span>
            </tui-avatar-labeled>
        }
    </ng-template>
</tui-carousel>
`;export{a as default};
