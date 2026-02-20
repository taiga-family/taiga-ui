import"./chunk-HU6DUUP4.js";var n=`<p>Right-click any table row.</p>

<table tuiTable>
    <thead>
        <tr>
            @for (column of tableColumns; track column) {
                <th tuiTh>
                    {{ column }}
                </th>
            }
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (rowInfo of tableData; track rowInfo) {
            <tr
                #dropdown="tuiDropdown"
                tuiDropdownContext
                [tuiDropdown]="contextMenu"
            >
                @for (value of getObjectValues(rowInfo); track value) {
                    <td tuiTd>
                        {{ value }}
                    </td>
                }
                <ng-template #contextMenu>
                    <tui-data-list
                        role="menu"
                        tuiDataListDropdownManager
                        class="context-menu"
                    >
                        @for (item of menuItems; track item) {
                            <button
                                tuiOption
                                type="button"
                                [iconEnd]="item.iconName"
                                (click)="printToConsole(item.title, rowInfo); dropdown.toggle(false)"
                            >
                                {{ item.title }}
                            </button>
                        }
                        <button
                            iconEnd="@tui.chevron-right"
                            tuiDropdownAlign="end"
                            tuiDropdownSided
                            tuiOption
                            type="button"
                            [tuiDropdown]="nestedMenu"
                        >
                            More
                        </button>
                    </tui-data-list>
                    <ng-template #nestedMenu>
                        <tui-data-list>
                            @for (option of moreOptions; track option) {
                                <button
                                    tuiOption
                                    type="button"
                                >
                                    {{ option }}
                                </button>
                            }
                        </tui-data-list>
                    </ng-template>
                </ng-template>
            </tr>
        }
    </tbody>
</table>
`;export{n as default};
