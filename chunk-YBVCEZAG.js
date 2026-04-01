import"./chunk-HU6DUUP4.js";var a=`<table
    size="l"
    tuiTable
    class="table"
    [columns]="columns"
>
    <thead>
        <tr tuiThGroup>
            <th
                *tuiHead="'action'"
                tuiTh
                [sorter]="null"
            ></th>
            <th
                *tuiHead="'firstName'"
                tuiTh
                [sorter]="null"
            >
                First name
            </th>
            <th
                *tuiHead="'lastName'"
                tuiTh
                class="last-name-col"
                [sorter]="null"
            >
                Last name
            </th>
            <th
                *tuiHead="'role'"
                tuiTh
                [sorter]="null"
            >
                Role
            </th>
            <th
                *tuiHead="'balance'"
                tuiTh
                [sorter]="null"
            >
                Balance
            </th>
        </tr>
    </thead>

    <tbody tuiTbody>
        <tr
            tuiTr
            class="expand-heading-row"
            (click)="expand.toggle()"
        >
            <td
                *tuiCell="'action'"
                tuiTd
            >
                <button
                    appearance="icon"
                    size="xs"
                    tuiIconButton
                    type="button"
                    [tuiChevron]="expand.expanded()"
                >
                    Toggle
                </button>
            </td>
            <td
                *tuiCell="'firstName'"
                tuiTd
                [colSpan]="2"
            >
                {{ basicData.length }}
                Developers (basic usage)
            </td>
            <ng-container *tuiCell="'lastName'" />
            <td
                *tuiCell="'role'"
                tuiTd
            >
                dev
            </td>
            <td
                *tuiCell="'balance'"
                tuiTd
            >
                {{ basicData | tuiMapper: getSumBalance | tuiFormatNumber }}
            </td>
        </tr>

        <tui-table-expand
            #expand
            [expanded]="true"
        >
            @for (item of basicData; track item) {
                <tr tuiTr>
                    <td
                        *tuiCell="'action'"
                        tuiTd
                    ></td>
                    <td
                        *tuiCell="'firstName'"
                        tuiTd
                    >
                        <div>
                            <span
                                size="s"
                                tuiChip
                                [appearance]="item.role === 'dev' ? 'primary' : 'secondary'"
                            >
                                {{ item.firstName }}
                            </span>
                        </div>
                    </td>
                    <td
                        *tuiCell="'lastName'"
                        tuiTd
                    >
                        {{ item.lastName }}
                    </td>
                    <td
                        *tuiCell="'role'"
                        tuiTd
                    >
                        {{ item.role }}
                    </td>
                    <td
                        *tuiCell="'balance'"
                        tuiTd
                    >
                        {{ item.balance | tuiFormatNumber }}
                    </td>
                </tr>
            }
        </tui-table-expand>
    </tbody>

    <tbody tuiTbody>
        <tr
            tuiTr
            class="expand-heading-row"
            (click)="manualToggle()"
        >
            <td
                *tuiCell="'action'"
                tuiTd
            >
                <button
                    appearance="icon"
                    size="xs"
                    tuiIconButton
                    type="button"
                    [tuiChevron]="manualOpen"
                >
                    Toggle
                </button>
            </td>
            <td
                *tuiCell="'firstName'"
                tuiTd
                [colSpan]="2"
            >
                {{ manualOpenData.length }}
                Designers (manual handling)
            </td>
            <ng-container *tuiCell="'lastName'" />
            <td
                *tuiCell="'role'"
                tuiTd
            >
                design
            </td>
            <td
                *tuiCell="'balance'"
                tuiTd
            >
                {{ manualOpenData | tuiMapper: getSumBalance | tuiFormatNumber }}
            </td>
        </tr>

        <tui-table-expand [expanded]="manualOpen">
            @for (item of manualOpenData; track item) {
                <tr tuiTr>
                    <td
                        *tuiCell="'action'"
                        tuiTd
                    ></td>
                    <td
                        *tuiCell="'firstName'"
                        tuiTd
                    >
                        {{ item.firstName }}
                    </td>
                    <td
                        *tuiCell="'lastName'"
                        tuiTd
                    >
                        {{ item.lastName }}
                    </td>
                    <td
                        *tuiCell="'role'"
                        tuiTd
                    >
                        {{ item.role }}
                    </td>
                    <td
                        *tuiCell="'balance'"
                        tuiTd
                    >
                        {{ item.balance | tuiFormatNumber }}
                    </td>
                </tr>
            }
        </tui-table-expand>
    </tbody>

    <tbody tuiTbody>
        <tr tuiTr>
            <td
                *tuiCell="'action'"
                tuiTd
            >
                <button
                    appearance="flat-grayscale"
                    size="xs"
                    tuiIconButton
                    type="button"
                    [style.border-radius.%]="100"
                    [tuiChevron]="customOpen"
                    (click)="customToggle()"
                >
                    Toggle
                </button>
            </td>
            <td
                *tuiCell="'firstName'"
                tuiTd
                [colSpan]="2"
            >
                Custom content (click on chevron)
            </td>
            <ng-container *tuiCell="'lastName'" />
            <td
                *tuiCell="'role'"
                tuiTd
            >
                all
            </td>
            <td
                *tuiCell="'balance'"
                tuiTd
            >
                {{ customContentData | tuiMapper: getSumBalance | tuiFormatNumber }}
            </td>
        </tr>

        <tr>
            <td [colSpan]="columns.length">
                <tui-expand [expanded]="customOpen">
                    <div class="chips">
                        @for (item of customContentData; track item) {
                            <span
                                size="s"
                                tuiChip
                                [appearance]="item.role === 'dev' ? 'primary' : 'secondary'"
                                [tuiHint]="\`Balance: \${item.balance}. Role: \${item.role}\`"
                            >
                                {{ item.firstName }}
                                {{ item.lastName }}
                            </span>
                        }
                    </div>
                </tui-expand>
            </td>
        </tr>
    </tbody>
</table>
`;export{a as default};
