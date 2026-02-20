import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    tuiChevron
    [content]="content"
    [tuiTextfieldCleaner]="false"
>
    <input
        tuiSelect
        [(ngModel)]="value"
    />
    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="content"
        [items]="items"
    />
    <ng-template
        #content
        let-item
    >
        <span tuiAvatar="@tui.star"></span>
        <span tuiTitle>
            <tui-items-with-more tuiSubtitle>
                <span *tuiItem>{{ item.name }}</span>
                <span *tuiItem>&nbsp;\u2022 {{ item.number }}</span>
                <div *tuiMore="let index">
                    @if (index < 0) {
                        <span>{{ item.name }}</span>
                    }
                    <span>&nbsp;*{{ item.number.slice(-4) }}</span>
                </div>
            </tui-items-with-more>
            \${{ item.value | tuiFormatNumber }}
        </span>
    </ng-template>
</tui-textfield>
`;export{i as default};
