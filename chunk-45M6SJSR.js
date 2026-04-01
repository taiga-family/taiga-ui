import"./chunk-HU6DUUP4.js";var e=`<div [style.margin-block-end.rem]="2">
    <tui-radio-list
        [itemContent]="content"
        [items]="sizes"
        [style.flex-direction]="'row'"
        [style.width]="'max-content'"
        [(ngModel)]="size"
    />
    <ng-template
        #content
        let-value
    >
        {{ value === 's' ? 'Small' : value === 'm' ? 'Medium' : 'Large' }}
    </ng-template>
</div>

<table
    tuiTable
    [size]="size"
    [style.width.rem]="58"
    [(ngModel)]="selected"
>
    <thead>
        <tr>
            <th tuiTh>
                <div [tuiCell]="size">
                    <input
                        tuiCheckbox
                        tuiCheckboxTable
                        type="checkbox"
                        [size]="size === 'l' ? 'm' : 's'"
                    />
                    <span tuiTitle>Checkbox</span>
                </div>
            </th>
            <th tuiTh>Title</th>
            <th tuiTh>Cell</th>
            <th tuiTh>Status</th>
            <th
                tuiTh
                [style.width.rem]="10"
            >
                Items
            </th>
            <th tuiTh>Progress</th>
            <th tuiTh>Actions</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track item) {
            <tr>
                <td tuiTd>
                    <div [tuiCell]="size">
                        <input
                            tuiCheckbox
                            type="checkbox"
                            [size]="size === 'l' ? 'm' : 's'"
                            [tuiCheckboxRow]="item"
                        />
                        <span tuiTitle>
                            {{ item.checkbox.title }}
                            <span tuiSubtitle>{{ item.checkbox.subtitle }}</span>
                        </span>
                    </div>
                </td>
                <td tuiTd>
                    <div [tuiCell]="size">
                        <span tuiTitle>
                            <span tuiStatus>
                                <tui-icon [icon]="item.title.icon" />
                                {{ item.title.title }}
                                @if (item.title.chip && item.title.subtitle) {
                                    <span tuiChip>{{ item.title.chip }}</span>
                                }
                            </span>
                            @if (!item.title.subtitle && item.title.chip) {
                                <span tuiChip>
                                    {{ item.title.chip }}
                                </span>
                            } @else {
                                <span tuiSubtitle>
                                    {{ item.title.subtitle }}
                                </span>
                            }
                        </span>
                    </div>
                </td>
                <td tuiTd>
                    <div [tuiCell]="size">
                        <div
                            [style.background]="item.cell.name | tuiAutoColor"
                            [tuiAvatar]="item.cell.name | tuiInitials"
                        ></div>
                        <span tuiTitle>
                            {{ item.cell.name }}
                            <span tuiSubtitle>{{ item.cell.email }}</span>
                        </span>
                    </div>
                </td>
                <td tuiTd>
                    <span [tuiStatus]="item.status.color">{{ item.status.value }}</span>
                </td>
                <td tuiTd>
                    <tui-items-with-more>
                        @for (chip of item.items; track chip) {
                            <div
                                *tuiItem
                                tuiBadge
                                [style.margin-inline-end.rem]="0.25"
                            >
                                {{ chip }}
                            </div>
                        }
                        <ng-template
                            let-number
                            tuiMore
                        >
                            <button
                                appearance="action-grayscale"
                                tuiDropdownAlign="end"
                                tuiDropdownAuto
                                tuiLink
                                type="button"
                                [style.text-decoration-style]="'dashed'"
                                [tuiDropdown]="dropdown"
                            >
                                + {{ item.items.length - number - 1 }}
                            </button>
                            <ng-template #dropdown>
                                <div
                                    tuiItemGroup
                                    [style.padding]="'1rem 0.75rem 0.75rem 1rem'"
                                >
                                    @for (chip of item.items; track chip) {
                                        @if ($index > number) {
                                            <div tuiBadge>{{ chip }}</div>
                                        }
                                    }
                                </div>
                            </ng-template>
                        </ng-template>
                    </tui-items-with-more>
                </td>
                <td tuiTd>
                    <span tuiStatus>
                        <progress
                            tuiProgressBar
                            [style.width.rem]="6"
                            [value]="item.progress / 100"
                        ></progress>
                        {{ item.progress }}ms
                    </span>
                </td>
                <td tuiTd>
                    <span tuiStatus>
                        <button
                            appearance="action"
                            iconStart="@tui.pencil"
                            size="xs"
                            tuiIconButton
                            type="button"
                        >
                            Edit
                        </button>
                        <button
                            appearance="action"
                            iconStart="@tui.ellipsis"
                            size="xs"
                            tuiIconButton
                            type="button"
                        >
                            More
                        </button>
                    </span>
                </td>
            </tr>
        }
    </tbody>
</table>
`;export{e as default};
