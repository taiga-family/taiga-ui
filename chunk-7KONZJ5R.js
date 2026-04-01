import"./chunk-HU6DUUP4.js";var e=`<tui-items-with-more
    side="start"
    [itemsLimit]="3"
>
    @for (item of items; track item) {
        <ng-container *tuiItem>
            @if (!$first) {
                <tui-icon
                    icon="@tui.chevron-right"
                    [style.font-size.rem]="1"
                    [style.opacity]="0.25"
                    [style.width.rem]="1.5"
                />
            }
            <button
                appearance="flat"
                size="xs"
                tuiButton
                type="button"
            >
                {{ item }}
            </button>
        </ng-container>
    }
    <ng-template
        let-index
        tuiMore
    >
        <button
            appearance="flat"
            iconStart="@tui.ellipsis"
            size="xs"
            tuiDropdownAuto
            tuiIconButton
            type="button"
            [tuiDropdown]="dropdown"
        >
            More
        </button>
        <ng-template #dropdown>
            <tui-data-list size="s">
                @for (item of items; track item) {
                    @if ($index < index) {
                        <button
                            tuiOption
                            type="button"
                        >
                            {{ item }}
                        </button>
                    }
                }
            </tui-data-list>
        </ng-template>
    </ng-template>
</tui-items-with-more>
`;export{e as default};
