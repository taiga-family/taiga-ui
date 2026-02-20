import"./chunk-HU6DUUP4.js";var i=`<tui-items-with-more
    size="m"
    tuiGroup
    [collapsed]="true"
>
    @for (item of items; track item) {
        <label
            *tuiItem
            appearance=""
            tuiBlock="m"
            [style.border-radius]="'inherit'"
        >
            {{ item }}
            <input
                tuiBlock
                type="checkbox"
                [(ngModel)]="value[$index]"
            />
        </label>
    }
    <ng-template
        let-lastIndex
        tuiMore
    >
        <button
            appearance="outline-grayscale"
            size="m"
            tuiButton
            tuiDropdownAlign="end"
            tuiDropdownAuto
            type="button"
            class="item"
            [tuiDropdown]="dropdown"
        >
            More
            <div tuiBadge>{{ items.length - lastIndex - 1 }}</div>
        </button>
        <ng-template #dropdown>
            <tui-data-list size="l">
                @for (item of items; track item) {
                    @if ($index > lastIndex) {
                        <button
                            tuiOption
                            type="button"
                            (click)="value[$index] = !value[$index]"
                        >
                            {{ item }}
                            <tui-icon
                                icon="@tui.check"
                                class="tui-space_left-2"
                                [class._hidden]="!value[$index]"
                            />
                        </button>
                    }
                }
            </tui-data-list>
        </ng-template>
    </ng-template>
</tui-items-with-more>
`;export{i as default};
